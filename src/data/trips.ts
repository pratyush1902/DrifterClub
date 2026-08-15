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
    ctaText: 'CHOOSE YOUR BATCH →',
    date: 'Sep 11-14 | Sep 18-21',
    duration: '4 Days / 3 Nights',
    startingPrice: '₹10,998',
    spots: '2 Batches Open',
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
      'Batch 1: 11 Sept - 14 Sept',
      'Batch 2: 18 Sept - 21 Sept'
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
        question: 'What is included in the price?',
        answer: 'Patna round-trip transport, triple-sharing stay, daily breakfast & dinner, permits, Trip Captain & surprise Drifter gift.'
      },
      {
        question: 'What isn\'t included?',
        answer: 'Personal shopping, lunches, extra snacks, and optional adventure sports like paragliding.'
      },
      {
        question: 'How difficult is the trek?',
        answer: 'Moderate difficulty. Basic physical fitness is required, but you don’t need to be an extreme athlete.'
      },
      {
        question: 'Where do we meet in Patna?',
        answer: 'We meet at Drifter Patna Basecamp (Eco Park area) for pre-departure briefing.'
      },
      {
        question: 'Can I get a private room?',
        answer: 'Trips default to triple-sharing for group bonding, but twin/private upgrades are available upon request.'
      },
      {
        question: 'Can I choose who I share a room with?',
        answer: 'Yes! If you join with friends, let us know and we’ll room you together.'
      }
    ]
  },
  {
    slug: 'netarhat-camping',
    badge: 'LIVE NOW',
    title: 'NETARHAT CAMPING',
    category: 'Bihar',
    location: 'Netarhat Pine Forests & Magnolia Point',
    status: 'LIVE DROP',
    hook: 'The ultimate 2D/1N weekend getaway into the pine forests.',
    secondaryCopy: 'Wilderness camping, pine forest air, campfire BBQ, and Magnolia Point sunrise.',
    ctaText: 'SEE THE WEEKEND →',
    date: 'Sep 12-13 | Sep 26-27',
    duration: '2 Days / 1 Night',
    startingPrice: '₹3,999',
    spots: '2 Batches Open',
    imageUrl: 'https://images.unsplash.com/photo-1662702641221-aa0149a2806f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'Escape the city for a quick, high-vibe weekend reset. 2 Days / 1 Night of pine forest camping in Netarhat—fireside BBQ, acoustic music under stargazing skies, Ghaghri waterfall hikes, and Magnolia Point sunrise with a tight 20-person crew.',

    highlights: [
      'Overnight pine forest wilderness camping & campfire BBQ',
      'Sunrise coffee & acoustic tunes at Magnolia Point',
      'Ghaghri waterfall hikes & pine needle forest walk',
      'Stargazing under clear unpolluted night skies',
      'Patna Basecamp round-trip transport & Captain guided'
    ],
    availableBatches: [
      'Batch 1: 12 Sept - 13 Sept',
      'Batch 2: 26 Sept - 27 Sept'
    ],

    experienceFlow: [
      {
        vibeTag: 'DAY 01 • THE GETAWAY (SATURDAY)',
        title: 'Pine Forest Camping & Campfire Night',
        tagline: 'Road Trip, Pine Needle Trails & Midnight Barbecue',
        description: 'Depart early from Patna. Reach the crisp pine forests of Netarhat by afternoon. Set up waterproof tents under the tall pines, catch a panoramic sunset at Magnolia Point, and gather around the campfire for BBQ & acoustic tunes.',
        icon: '⛺'
      },
      {
        vibeTag: 'DAY 02 • THE RESET (SUNDAY)',
        title: 'Sunrise Coffee & Waterfall Hike',
        tagline: 'Morning Fog, Ghaghri Waterfalls & Return to Patna',
        description: 'Wake up to crisp forest air and hot coffee. Take a scenic trail hike to Ghaghri Waterfalls, explore pine needle paths, enjoy a hearty group breakfast, and head back to Patna recharged for the week.',
        icon: '🌲'
      }
    ],
    inclusions: [
      'Round-trip transportation from Patna to Patna',
      'Triple-sharing camping tents & gear stay',
      'Daily breakfast as mentioned in the experience flow',
      'Daily dinner as mentioned in the experience flow',
      'Experienced Drifter Trip Captain with the group',
      'Trip photos, moments & inside jokes',
      'A small useful Drifter gift'
    ],
    exclusions: [
      'Personal expenses & shopping',
      'Lunch & personal snacks',
      'Anything outside planned itinerary'
    ],
    startingPoint: 'Patna Basecamp',
    endingPoint: 'Patna Basecamp',
    stayType: 'Alpine Tents & Pine Campsite',
    transportType: 'Group Bus / Tempo Traveller',
    mealsInfo: 'Breakfast + Dinner',
    groupSize: '20 Drifters Max',
    difficulty: 'Easy / Beginner',
    participantCount: 14,
    drifterAvatars: ['/images/bihar.jpg', '/images/hero.jpg'],
    itinerary: [],
    faqs: [
      {
        question: 'Is this trip suitable for solo travellers?',
        answer: 'Yes! Over 80% join solo. We pair up tentmates and keep the vibe welcoming.'
      },
      {
        question: 'What is included in the price?',
        answer: 'Patna transport, waterproof tents & sleeping gear, breakfast & dinner, and Captain guidance.'
      }
    ]
  },

  {
    slug: 'rohtasgarh-fortress-camping',
    badge: 'COMING SOON',
    title: 'ROHTASGARH FORT × CAMPING',
    category: 'Bihar',
    location: 'Kaimur Plateau & Rohtasgarh Fort, Bihar',
    status: 'UPCOMING',
    isFeaturedUpcoming: true,
    hook: 'An old fort. A bunch of strangers. One night under the stars.',
    secondaryCopy: 'Hike up ancient limestone cliffs to Rohtasgarh Fort, pitch your tent inside historic ruins, and watch the valley sunset over the Son river.',
    curiosityLine: 'You probably haven\'t camped here before.',
    ctaText: 'I\'M CURIOUS →',
    date: 'Nov 07 - Nov 09',
    duration: '3 Days',
    startingPrice: '₹3,999',
    spots: 'Community trip',
    imageUrl: 'https://images.unsplash.com/photo-1682517885754-04bb5fbaf2bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'An old fort, a bunch of strangers, and one night under the stars. Hike up ancient limestone cliffs to Rohtasgarh Fort, camp inside historic ruins, and watch the valley sunset over the Son river.',

    highlights: [
      'Cliffside tent camping inside historic fort ruins',
      'Spectacular sunset over Son river valley',
      'Limestone trail trek up Kaimur plateau',
      'Campfire storytelling & acoustic music'
    ],
    inclusions: [
      'Round-trip transportation from Patna to Patna',
      'Triple-sharing camping tents',
      'Daily breakfast',
      'Daily dinner',
      'Experienced Drifter Trip Captain',
      'Surprise Drifter gift'
    ],
    exclusions: ['Personal expenses', 'Lunch & snacks'],
    startingPoint: 'Patna',
    endingPoint: 'Patna',
    stayType: 'Cliffside Tents',
    transportType: 'Group Bus',
    mealsInfo: 'Breakfast + Dinner',
    groupSize: '15 Drifters',
    difficulty: 'Moderate Hill Trek',
    itinerary: [],
    faqs: []
  },
  {
    slug: 'kasol-party-trekking',
    badge: 'COMING SOON',
    title: 'KASOL PARTY × TREKKING',
    category: 'Himachal',
    location: 'Kasol & Tosh Village, Parvati Valley',
    status: 'UPCOMING',
    hook: 'Go for the party. Stay for the mountains.',
    secondaryCopy: 'Explore famous riverside cafes, trek up to snow-clad Tosh & Kutla, chill by the rushing Parvati river, and experience the electric energy of the valley.',
    curiosityLine: 'Somewhere between the bass and the trail, things get interesting.',
    ctaText: 'SHOW ME →',
    date: 'Nov 18 - Nov 23',
    duration: '6 Days',
    startingPrice: '₹8,999',
    spots: 'Next departure',
    imageUrl: 'https://images.unsplash.com/photo-1662944113366-123561a844e1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'Somewhere between the bass and the trail, things get interesting. Combine Parvati river cafe vibes with high alpine village trekking to Tosh and Kutla.',

    highlights: [
      'Cafe hopping & riverside chill sessions in Kasol',
      'Alpine hike to snow-capped Tosh & Kutla villages',
      'Bonfire party nights with mountain DJs & tribe jams'
    ],
    inclusions: ['Round-trip transport', 'Triple-sharing stay', 'Breakfast & Dinner', 'Trip Captain'],
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
    badge: 'COMING SOON',
    title: 'SOJHA OFFBEAT × CAFÉ',
    category: 'Himachal',
    location: 'Sojha & Jalori Pass, Seraj Valley',
    status: 'UPCOMING',
    hook: 'Not another Himachal checklist.',
    secondaryCopy: 'Cozy wooden chalets, artisanal mountain espresso, secret fir forest trails to Raghupur Fort ruins, and 360-degree Himalayan views.',
    curiosityLine: 'A slower mountain, a tiny café and a place most people scroll past.',
    ctaText: 'WHAT IS SOJHA? →',
    date: 'Dec 04 - Dec 08',
    duration: '5 Days',
    startingPrice: '₹9,499',
    spots: 'Reg closing soon',
    imageUrl: 'https://images.unsplash.com/photo-1757234891950-543e358697ee?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'A slower mountain, a tiny café and a place most people scroll past. Stay in cozy wooden chalets, sip freshly brewed espresso, and hike secret forest ridges.',

    highlights: ['Offbeat wooden chalet stay', 'Raghupur Fort 360-degree trek', 'Serolsar Lake forest walk'],
    inclusions: ['Round-trip transport', 'Chalet stay', 'Breakfast & Dinner', 'Trip Captain'],
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
    slug: 'sandakphu-trek',
    badge: 'COMING SOON',
    title: 'SANDAKPHU TREK',
    category: 'North Bengal',
    location: 'Singalila Ridge, Sandakphu',
    status: 'UPCOMING',
    hook: 'Four days. One ridiculous view.',
    secondaryCopy: 'Singalila Ridge offers front-row views of the Sleeping Buddha massif featuring Mount Everest, Kanchenjunga, Lhotse, and Makalu.',
    curiosityLine: 'Wake up above the clouds. Then question every decision that got you there.',
    ctaText: 'TAKE ME THERE →',
    date: 'Dec 22 - Dec 27',
    duration: '6 Days',
    startingPrice: '₹11,999',
    spots: 'Only 5 spots left',
    imageUrl: 'https://images.unsplash.com/photo-1584884789751-68dd2836ada1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'Four days. One ridiculous view. Walk above a sea of clouds along the Singalila ridge with unobstructed views of Mount Everest and Kanchenjunga.',

    highlights: ['Views of 4 world highest peaks', 'Cloudwalk on Singalila Ridge', 'Indo-Nepal tea house stay'],
    inclusions: ['Round-trip transport', 'Tea House stay', 'Breakfast & Dinner', 'Permits & Captain'],
    exclusions: ['Personal expenses', 'Lunch'],
    startingPoint: 'Patna',
    endingPoint: 'Patna',
    stayType: 'Tea House Lodges',
    transportType: 'Group Bus',
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
