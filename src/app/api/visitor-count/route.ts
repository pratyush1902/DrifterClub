import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to store real visitor count file on server
const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'visitor-count.json');

function getCountFromFile(): number {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, 'utf8');
      const parsed = JSON.parse(data);
      return typeof parsed.count === 'number' ? parsed.count : 0;
    }
  } catch (err) {
    console.error('Error reading visitor count file:', err);
  }
  return 0;
}

function saveCountToFile(count: number): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(FILE_PATH, JSON.stringify({ count, updatedAt: new Date().toISOString() }), 'utf8');
  } catch (err) {
    console.error('Error writing visitor count file:', err);
  }
}

export async function GET() {
  // Read current real count from server storage
  let realCount = getCountFromFile();

  // Try fetching from global CounterAPI for cross-device sync
  try {
    const res = await fetch('https://api.counterapi.dev/v1/drifter_club_patna_real/visits/up', { cache: 'no-store' });
    const data = await res.json();
    if (data && typeof data.count === 'number') {
      realCount = Math.max(realCount + 1, data.count);
    } else {
      realCount += 1;
    }
  } catch {
    realCount += 1;
  }

  saveCountToFile(realCount);

  return NextResponse.json({ count: realCount }, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    }
  });
}
