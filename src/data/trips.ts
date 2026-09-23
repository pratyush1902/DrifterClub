export interface ItineraryDay {
  day: string;
  time: string;
  location: string;
  title: string;
  activity: string;
  meals: string;
  stay: string;
}

export interface ExperienceVibe {
  vibeTag: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DetailedTrip {
  slug: string;
  title: string;
  badge: 'LIVE NOW' | 'COMING SOON';
  category: 'Nepal' | 'Bihar' | 'Himachal' | 'North Bengal';
  location: string;
  status: 'LIVE DROP' | 'UPCOMING';
  hook: string;
  secondaryCopy: string;
  curiosityLine?: string;
  ctaText: string;
  date: string;
  duration: string;
  startingPrice: string;
  spots: string;
  isHero?: boolean;
  isFeaturedUpcoming?: boolean;
  fullVision: string;
  imageUrl: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  startingPoint: string;
  endingPoint: string;
  stayType: string;
  transportType: string;
  mealsInfo: string;
  groupSize: string;
  difficulty: string;
  itinerary: ItineraryDay[];
  faqs: FAQItem[];
  participantCount?: number;
  drifterAvatars?: string[];
  availableBatches?: string[];
  experienceFlow?: ExperienceVibe[];
}

export const ALL_TRIPS: DetailedTrip[] = [
  {
    slug: 'pokhara-party-secret-trek',
    badge: 'LIVE NOW',
    title: 'POKHARA PARTY × SECRET TREK',
    category: 'Nepal',
    location: 'Pokhara & Secret Mountain Ridge, Nepal',
    status: 'LIVE DROP',
    isHero: true,
    hook: 'Party before bed. Disappear into the mountains at sunrise.',
    secondaryCopy: 'Lakeshore club hopping, offbeat artisanal cafes, party before bed, then deep calm & peace on an offbeat mountain trek.',
    curiosityLine: '4 Days / 3 Nights of pure contrast: loud nights & quiet mountains.',
    ctaText: 'EXPLORE DROP →',
    date: 'Upcoming Adventure in November & December',
    duration: '4 Days / 3 Nights',
    startingPrice: '',
    spots: 'Batches Open for Nov & Dec',
    imageUrl: 'https://images.unsplash.com/photo-1722595631756-170e6905dfb7?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'Forget rigid, boring itineraries. This 4D/3N Pokhara drop is built on pure contrast. We start in Pokhara with offbeat cafe crawling, lakeshore sunsets, and electrifying club hopping with a party before bed. Then we flip the switch—disappearing into an offbeat secret mountain trek for deep calm, serene Annapurna ridge views, and campfire acoustic stargazing.',

    highlights: [
      'Lakeshore club hopping & electrifying nightlife in Pokhara',
      'Offbeat artisanal cafe crawling & Fewa lake chill',
      'Party before bed with acoustic tunes & tribe bonfires',
      'Relaxed & calm vibes on an offbeat secret mountain trek',
      'Patna Basecamp group travel coordinator'
    ],
    availableBatches: [
      'November 2026 Batches Open',
      'December 2026 Batches Open'
    ],
    experienceFlow: [
      {
        vibeTag: 'DAY 01 • THE LANDING',
        title: 'Offbeat Cafes & Lakeshore Sunsets',
        tagline: 'Artisanal Brews, Lakeside Breezes & Tribe Icebreakers',
        description: 'Arrive in Pokhara. We skip the generic tourist spots and dive straight into handpicked offbeat cafes for craft coffee, lake views, and meeting your crew for the weekend.',
        icon: '☕'
      },
      {
        vibeTag: 'NIGHTS 01 & 02 • THE NIGHTLIFE',
        title: 'Club Hopping & Party Before Bed',
        tagline: 'Basslines, Cold Drinks & Electric Energy',
        description: 'Pokhara lights up at night. We hit the lakeshore\'s best music joints, club hop through live venues, and wrap up with an unscripted party before bed right at our lodge.',
        icon: '🍸'
      },
      {
        vibeTag: 'DAY 03 • THE MOUNTAIN PIVOT',
        title: 'Secret Offbeat Mountain Trek',
        tagline: 'Switch Off The Noise. Pure Himalayan Calm.',
        description: 'We trade the basslines for mountain silence. Hike up an undisclosed secret ridge away from commercial crowds—rhododendron trails, crisp alpine air, and tranquil panoramic views.',
        icon: '🏔'
      },
      {
        vibeTag: 'NIGHT 03 & DAY 04 • THE RESET',
        title: 'Campfire Acoustic Night & Mountain Sunrise',
        tagline: 'Stargazing, Fireside Jams & Serene Mornings',
        description: 'Late night acoustic campfire session under a million Himalayan stars, followed by a golden 360-degree Annapurna sunrise before floating back to base.',
        icon: '🔥'
      }
    ],
    inclusions: [
      'Round-trip transportation from Patna to Patna',
      'Triple-sharing stay in cozy mountain lodges & homestays',
      'Daily breakfast as mentioned in the experience flow',
      'Daily dinner as mentioned in the experience flow',
      'Experienced Drifter Trip Captain with the group',
      'Trip photos, moments & inside jokes',
      'A small useful Drifter gift'
    ],
    exclusions: [
      'Personal expenses (shopping, personal calls)',
      'Lunches & personal snacks along the trail',
      'Additional water sports or paragliding in Pokhara',
      'Anything outside the planned experience',
      'Any expense caused by personal travel delays or changes'
    ],
    startingPoint: 'Patna Basecamp',
    endingPoint: 'Patna Basecamp',
    stayType: 'Triple Sharing Lodge & Mountain Homestay',
    transportType: 'Group Bus & Private Mountain Transfers',
    mealsInfo: 'Breakfast + Dinner',
    groupSize: '20 Drifters Max',
    difficulty: 'Moderate Adventure',
    participantCount: 16,

    drifterAvatars: ['/images/bihar.jpg', '/images/hero.jpg', '/images/trek1.jpg', '/images/trek2.jpg'],
    itinerary: [],

    faqs: [
      {
        question: 'Is this trip suitable for solo travellers?',
        answer: 'Absolutely! Over 80% of Drifters join solo. You’ll be paired with awesome roomies of the same gender and leave with a tight crew.'
      },
      {
        question: 'Can I join if I don\'t know anyone?',
        answer: 'Yes! That’s the core Drifter spirit. Most people join without knowing anyone on Day 1.'
      },
      {
        question: 'What kind of people usually join Drifter?',
        answer: 'Fit, curious, active people from Bihar & beyond — working professionals, students, creators, and outdoor lovers.'
      },
      {
        question: 'What should I pack?',
        answer: 'We send a detailed packing checklist upon joining (good hiking shoes, warm layers, rain shell, reusable water bottle).'
      },
      {
        question: 'What happens if the weather changes?',
        answer: 'Our experienced Trip Captains carry backup route plans to ensure safety without killing the fun.'
      },
      {
        question: 'What is the cancellation policy?',
        answer: '100% refund up to 14 days before departure, or full credit roll-over for any future Drifter drop.'
      },
      {
        question: 'Where do we meet in Patna?',
        answer: 'We meet at Drifter Patna Basecamp (Eco Park area) for pre-departure briefing.'
      }
    ]
  },
  {
    slug: 'secret-himalaya-spot-getaway',
    badge: 'LIVE NOW',
    title: 'SECRET SPOT IN HIMALAYA',
    category: 'Himachal',
    location: 'Undisclosed Alpine Ridge, Himachal Himalayas',
    status: 'LIVE DROP',
    hook: 'An offbeat high-altitude secret sanctuary tucked away from tourist crowds.',
    secondaryCopy: 'Pine forest trails, hidden alpine streams, wooden chalets, campfire acoustic jams, and 360-degree snow peak sunsets.',
    curiosityLine: '3 Days / 2 Nights of pure mountain reset in undisclosed Himalayan wilderness.',
    ctaText: 'EXPLORE THE SECRET →',
    date: 'Upcoming Adventure in November & December',
    duration: '3 Days / 2 Nights',
    startingPrice: '',
    spots: 'Batches Open for Nov & Dec',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    fullVision: 'Escape the commercial noise and step into an undisclosed secret sanctuary tucked away in the high-altitude Himachal Himalayas. We hike through untouched pine and fir forests, stay in authentic wooden chalets, chill by crystal mountain streams, and spend our evenings around campfire acoustic sessions under a million stars.',

    highlights: [
      'Untouched high-altitude pine & fir forest ridge hikes',
      'Cozy wooden chalet stays & mountain stream relaxation',
      'Campfire acoustic stargazing & tribe barbecue night',
      '360-degree Himalayan snow peak sunset views',
      'Patna Basecamp group transport & Trip Captain guided'
    ],
    availableBatches: [
      'November 2026 Batches Open',
      'December 2026 Batches Open'
    ],
    experienceFlow: [
      {
        vibeTag: 'DAY 01 • THE DEPARTURE & PINELAND',
        title: 'Overnight Road Trip into Pine Country',
        tagline: 'Scenic Mountain Drive, Wooden Chalets & Sunset Chill',
        description: 'Depart from Patna Basecamp. Arrive at our secret Himalayan valley by morning. Check into cozy wooden chalets surrounded by towering pines, grab fresh artisanal mountain tea, and take a light orientation hike to a secret sunset view point.',
        icon: '🌲'
      },
      {
        vibeTag: 'DAY 02 • THE RIDGE & THE FIRE',
        title: 'Secret Alpine Trail & Campfire Night',
        tagline: 'Hidden Stream Hikes, Ridge Views & Acoustic BBQ',
        description: 'Hike up an undisclosed mountain ridge far away from commercial tourist crowds. Cross clear alpine streams, soak in 360-degree Himalayan snow peak views, and gather at night for an unscripted acoustic campfire session with tribal BBQ.',
        icon: '🔥'
      },
      {
        vibeTag: 'DAY 03 • THE SUNRISE & RETURN',
        title: 'Golden Peak Sunrise & Return to Base',
        tagline: 'Morning Fog, Cafe Brews & Journey Back to Patna',
        description: 'Wake up to crisp mountain air and golden peak sunrises. Enjoy a hearty alpine breakfast, share photos and inside jokes with your crew, and head back to Patna fully recharged.',
        icon: '🌅'
      }
    ],
    inclusions: [
      'Round-trip transportation from Patna Basecamp',
      'Triple-sharing stay in cozy wooden mountain chalets',
      'Daily breakfast as mentioned in experience flow',
      'Daily dinner as mentioned in experience flow',
      'Experienced Drifter Trip Captain with the group',
      'Trip photos, moments & inside jokes',
      'A small useful Drifter gift'
    ],
    exclusions: [
      'Personal expenses & shopping',
      'Lunches & personal trail snacks',
      'Anything outside the planned experience'
    ],
    startingPoint: 'Patna Basecamp',
    endingPoint: 'Patna Basecamp',
    stayType: 'Cozy Wooden Alpine Chalet',
    transportType: 'Group Bus & Private Mountain Transfers',
    mealsInfo: 'Breakfast + Dinner',
    groupSize: '16 Drifters Max',
    difficulty: 'Easy / Moderate',
    participantCount: 12,
    drifterAvatars: ['/images/bihar.jpg', '/images/hero.jpg', '/images/trek1.jpg'],
    itinerary: [],
    faqs: [
      {
        question: 'Why is the location secret?',
        answer: 'To protect the serenity of the trail and keep commercial crowds away. Exact coordinates are shared with registered Drifters 48 hours before departure!'
      },
      {
        question: 'Is this trip suitable for solo travellers?',
        answer: 'Yes! Over 80% of Drifters join solo. You will be paired with awesome roomies of the same gender and leave with a close crew.'
      }
    ]
  },
  {
    slug: 'kasol-party-trekking',
    badge: 'LIVE NOW',
    title: 'KASOL PARTY × TREKKING',
    category: 'Himachal',
    location: 'Kasol & Tosh Village, Parvati Valley',
    status: 'LIVE DROP',
    hook: 'Go for the party. Stay for the mountains.',
    secondaryCopy: 'Explore famous riverside cafes, trek up to snow-clad Tosh & Kutla, chill by the rushing Parvati river, and experience the electric energy of the valley.',
    curiosityLine: 'Somewhere between the bass and the trail, things get interesting.',
    ctaText: 'EXPLORE PARVATI →',
    date: 'Upcoming Adventure in November & December',
    duration: '6 Days',
    startingPrice: '',
    spots: 'Batches Open for Nov & Dec',
    imageUrl: 'https://images.unsplash.com/photo-1662944113366-123561a844e1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'Somewhere between the bass and the trail, things get interesting. Combine Parvati river cafe vibes with high alpine village trekking to Tosh and Kutla.',
    highlights: [
      'Cafe hopping & riverside chill sessions in Kasol',
      'Alpine hike to snow-capped Tosh & Kutla villages',
      'Bonfire party nights with mountain DJs & tribe jams'
    ],
    availableBatches: [
      'November 2026 Batches Open',
      'December 2026 Batches Open'
    ],
    inclusions: ['Round-trip transport from Patna', 'Triple-sharing stay', 'Breakfast & Dinner', 'Trip Captain'],
    exclusions: ['Personal expenses', 'Lunch'],
    startingPoint: 'Patna',
    endingPoint: 'Patna',
    stayType: 'Campsite & Homestay',
    transportType: 'Group Bus',
    mealsInfo: 'Breakfast + Dinner',
    groupSize: '14 Drifters',
    difficulty: 'Moderate',
    itinerary: [],
    faqs: []
  },
  {
    slug: 'sojha-offbeat-cafe',
    badge: 'LIVE NOW',
    title: 'SOJHA OFFBEAT × CAFÉ',
    category: 'Himachal',
    location: 'Sojha & Jalori Pass, Seraj Valley',
    status: 'LIVE DROP',
    hook: 'Not another Himachal checklist.',
    secondaryCopy: 'Cozy wooden chalets, artisanal mountain espresso, secret fir forest trails to Raghupur Fort ruins, and 360-degree Himalayan views.',
    curiosityLine: 'A slower mountain, a tiny café and a place most people scroll past.',
    ctaText: 'EXPLORE SOJHA →',
    date: 'Upcoming Adventure in November & December',
    duration: '5 Days',
    startingPrice: '',
    spots: 'Batches Open for Nov & Dec',
    imageUrl: 'https://images.unsplash.com/photo-1757234891950-543e358697ee?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'A slower mountain, a tiny café and a place most people scroll past. Stay in cozy wooden chalets, sip freshly brewed espresso, and hike secret forest ridges.',
    highlights: ['Offbeat wooden chalet stay', 'Raghupur Fort 360-degree trek', 'Serolsar Lake forest walk'],
    availableBatches: [
      'November 2026 Batches Open',
      'December 2026 Batches Open'
    ],
    inclusions: ['Round-trip transport from Patna', 'Chalet stay', 'Breakfast & Dinner', 'Trip Captain'],
    exclusions: ['Personal expenses', 'Lunch'],
    startingPoint: 'Patna',
    endingPoint: 'Patna',
    stayType: 'Cozy Chalet',
    transportType: 'Group Bus',
    mealsInfo: 'Breakfast + Dinner',
    groupSize: '12 Drifters',
    difficulty: 'Easy / Moderate',
    itinerary: [],
    faqs: []
  },
  {
    slug: 'manebhanjan-sandakphu-trek',
    badge: 'LIVE NOW',
    title: 'MANEBHANJAN WITH SANDAKPHU',
    category: 'North Bengal',
    location: 'Manebhanjan & Singalila Ridge, Sandakphu',
    status: 'LIVE DROP',
    hook: 'Land of Red Pandas, vintage 1950s Land Rovers & the Sleeping Buddha.',
    secondaryCopy: 'Backpack through Manebhanjan, Tumling, and Kalipokhri along the Singalila Ridge with iconic views of Everest and Kanchenjunga.',
    curiosityLine: 'Vintage 1950s Land Rovers, high-altitude tea houses, and 4 of the world\'s 5 highest peaks.',
    ctaText: 'EXPLORE MANEBHANJAN →',
    date: 'Upcoming Adventure in November & December',
    duration: '6 Days / 5 Nights',
    startingPrice: '',
    spots: 'Batches Open for Nov & Dec',
    imageUrl: 'https://images.unsplash.com/photo-1584884789751-68dd2836ada1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'Backpack from Manebhanjan through Tumling and Kalipokhri along the Singalila Ridge. Experience vintage 1950s Land Rovers, high-altitude Indo-Nepal tea houses, and unobstructed views of the Sleeping Buddha massif featuring Mount Everest, Kanchenjunga, Lhotse, and Makalu.',
    highlights: [
      'Iconic Manebhanjan basecamp & vintage Land Rover drive',
      'Panoramic views of 4 of the 5 highest peaks in the world',
      'Cloudwalk along the high-altitude Singalila Ridge',
      'Indo-Nepal tea house stays & cultural trail meals'
    ],
    availableBatches: [
      'November 2026 Batches Open',
      'December 2026 Batches Open'
    ],
    inclusions: ['Round-trip transport from Patna', 'Tea House stay', 'Breakfast & Dinner', 'Permits & Captain'],
    exclusions: ['Personal expenses', 'Lunch'],
    startingPoint: 'Patna',
    endingPoint: 'Patna',
    stayType: 'Tea House Lodges',
    transportType: 'Group Bus & Vintage Land Rover',
    mealsInfo: 'Breakfast + Dinner',
    groupSize: '14 Drifters',
    difficulty: 'Moderate Trek',
    itinerary: [],
    faqs: []
  }
];

export function getTripBySlug(slug: string): DetailedTrip | undefined {
  return ALL_TRIPS.find(t => t.slug === slug);
}
