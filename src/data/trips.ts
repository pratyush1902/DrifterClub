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
        vibeTag: 'OVERNIGHT • THE DEPARTURE',
        title: 'Night Travel to Secret Spot from Patna Basecamp',
        tagline: 'Overnight Journey, Tribe Icebreakers & Winding Mountain Roads',
        description: 'Meet your crew at Patna Basecamp in the evening. Depart on an overnight journey as we leave the city lights behind, head towards the Himalayas, break the ice with fellow travellers, and wake up surrounded by crisp pine air.',
        icon: '🚌'
      },
      {
        vibeTag: 'DAY 01 • THE LANDING & THE FIRE',
        title: 'Check-in, Explore Like a Local, Sunset & Bonfire Fun',
        tagline: 'Chalet Check-in, Secret Sunset Point, Acoustic Jams & Lots of Fun',
        description: 'Arrive at our secret Himalayan location and check into cozy wooden chalets. Grab fresh mountain tea and explore the village like a local—secret spots, hidden cafes, and pine-scented paths. Head to an undisclosed ridge to watch a stunning Himalayan sunset, followed by a bonfire night packed with music, games, barbecue, and lots of unscripted fun.',
        icon: '🔥'
      },
      {
        vibeTag: 'DAY 02 • THE RIDGE & THE VIBES',
        title: 'Golden Sunrise, Small Hike, Local Exploration & Fun Session',
        tagline: 'Morning Peak Sunrise, Alpine Hike, Local Secret Trails & Tribe Games',
        description: 'Wake up to a golden 360-degree peak sunrise with hot chai. Set out on a small scenic hike through pristine pine and fir forests along hidden mountain streams. Explore the surroundings like a local, sample authentic mountain delicacies, and dive into interactive Drifter fun sessions, tribe stories, and acoustic evening vibes.',
        icon: '⛰️'
      },
      {
        vibeTag: 'DAY 03 • CHECKOUT & RETURN',
        title: 'Checkout & Travel Back to Patna',
        tagline: 'Morning Reset, Farewells & Journey Back to Patna Basecamp',
        description: 'Enjoy a relaxed morning breakfast with panoramic peak views. Complete checkout, pack your bags with unforgettable mountain memories and inside jokes, and board our transport for the journey back to Patna Basecamp fully recharged.',
        icon: '🌄'
      }
    ],
    itinerary: [
      {
        day: 'Night Departure',
        time: '08:00 PM',
        location: 'Patna Basecamp to Secret Spot',
        title: 'Night Travel from Patna Basecamp',
        activity: 'Overnight journey towards the Himalayas with tribe icebreakers and road trip vibes.',
        meals: 'Trail Snacks',
        stay: 'Overnight Bus / Traveller'
      },
      {
        day: 'Day 01',
        time: '09:00 AM',
        location: 'Secret Himalayan Valley',
        title: 'Check-in, Explore Like a Local, Sunset & Bonfire Fun',
        activity: 'Chalet check-in, fresh mountain tea, local village exploration, secret ridge sunset, and late-night acoustic campfire BBQ fun.',
        meals: 'Welcome Tea + Dinner',
        stay: 'Cozy Wooden Alpine Chalet'
      },
      {
        day: 'Day 02',
        time: '06:30 AM',
        location: 'Secret Ridge & Pine Trails',
        title: 'Sunrise, Small Hike, Local Exploration & Tribe Fun Session',
        activity: 'Golden peak sunrise, scenic small hike along alpine streams, exploring local trails, local cafe chill, and Drifter evening fun session.',
        meals: 'Breakfast + Dinner',
        stay: 'Cozy Wooden Alpine Chalet'
      },
      {
        day: 'Day 03',
        time: '10:00 AM',
        location: 'Secret Spot to Patna',
        title: 'Checkout & Travel Back to Patna Basecamp',
        activity: 'Morning breakfast with peak views, chalet checkout, group photo, and travel back to Patna.',
        meals: 'Breakfast',
        stay: 'Return Journey'
      }
    ],
    inclusions: [
      'Round-trip transport from Patna Basecamp to Secret Spot',
      'Triple-sharing stay in cozy wooden chalets & homestays',
      'Daily breakfast & dinner as specified in itinerary',
      'Experienced Drifter Trip Captain with the group',
      'Campfire, acoustic night & barbecue session',
      'Trip photos, moments & inside jokes'
    ],
    exclusions: ['Personal expenses', 'Lunch & trail snacks', 'Anything not mentioned in inclusions'],
    startingPoint: 'Patna Basecamp',
    endingPoint: 'Patna Basecamp',
    stayType: 'Cozy Wooden Chalet & Mountain Homestay',
    transportType: 'Group Bus & Private Mountain Transfers',
    mealsInfo: 'Breakfast + Dinner',
    groupSize: '16 Drifters Max',
    difficulty: 'Easy / Moderate',
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
    location: 'Kasol, Tosh Village & Kutla Meadow, Parvati Valley',
    status: 'LIVE DROP',
    hook: 'Go for the party. Stay for the mountains.',
    secondaryCopy: 'Explore famous riverside cafes, trek up to snow-clad Tosh & Kutla, chill by the rushing Parvati river, and experience the electric energy of the valley.',
    curiosityLine: 'Somewhere between the bass and the trail, things get interesting.',
    ctaText: 'EXPLORE PARVATI →',
    date: 'Upcoming Adventure in November & December',
    duration: '5 Days / 4 Nights',
    startingPrice: '',
    spots: 'Batches Open for Nov & Dec',
    imageUrl: 'https://images.unsplash.com/photo-1662944113366-123561a844e1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'Somewhere between the bass and the trail, things get interesting. Combine Parvati river cafe vibes with high alpine village trekking to Tosh and Kutla hidden meadows.',
    highlights: [
      'Cafe hopping & riverside chill sessions in Kasol (Evergreen & Jim Morrison)',
      'Scenic hike to snow-capped Tosh village & Kutla secret meadow',
      'Bonfire party nights with mountain jams & tribe campfire BBQ',
      'Hot spring reset at Manikaran Sahib Gurudwara'
    ],
    availableBatches: [
      'November 2026 Batches Open',
      'December 2026 Batches Open'
    ],
    experienceFlow: [
      {
        vibeTag: 'DAY 00 • OVERNIGHT BUS',
        title: 'Patna to Kasol Departure',
        tagline: 'Overnight Road Trip to Parvati Valley',
        description: 'Gather at Patna Basecamp in the evening. Meet your Trip Captain and crew before boarding an overnight bus into the heart of Himachal Pradesh.',
        icon: '🚌'
      },
      {
        vibeTag: 'DAY 01 • RIVERSIDE LANDING & CAFES',
        title: 'Kasol Arrival, Parvati River Walk & Cafe Hopping',
        tagline: 'Riverside Campsite Check-in, Israeli Food & Bonfire Jams',
        description: 'Arrive in Kasol by morning. Check into cozy riverside stays, head out for a walk along the gushing Parvati River, hop through iconic cafes, and gather for an acoustic bonfire night.',
        icon: '☕'
      },
      {
        vibeTag: 'DAY 02 • TOSH VILLAGE HIKE & PARTY NIGHT',
        title: 'Manikaran Visit, Tosh Village Trek & Mountain Homestay',
        tagline: 'Hot Springs, Snow-clad Wooden Village & Fireplace Vibes',
        description: 'Visit the sacred Manikaran Sahib hot springs before driving to Barshaini. Hike up to the picturesque village of Tosh, check into a mountain homestay, explore waterfalls, and party under the stars.',
        icon: '🏔️'
      },
      {
        vibeTag: 'DAY 03 • KUTLA SECRET MEADOW TREK',
        title: 'Kutla Hidden Meadow Hike & Glacier Streams',
        tagline: 'High-Altitude Alpine Forest Walk & Unplugged Mountain Chill',
        description: 'Set out on a scenic trek beyond Tosh to the secluded Kutla meadow surrounded by pine forests and snow peaks. Sip hot chai at hidden tea stalls, relax by glacier streams, and return to Tosh for fireside jams.',
        icon: '🌲'
      },
      {
        vibeTag: 'DAY 04 • SHOPPING & RETURN TO PATNA',
        title: 'Kasol Flea Market & Overnight Journey Back',
        tagline: 'Souvenir Hunting, Farewell Coffee & Boarding Return Transport',
        description: 'Descend to Kasol town for last-minute flea market souvenir shopping, enjoy a relaxed lunch at local bakeries, and board our transport back to Patna Basecamp.',
        icon: '🌄'
      }
    ],
    itinerary: [],
    inclusions: [
      'Round-trip transport from Patna Basecamp to Kasol & back',
      'Triple-sharing stay in riverside camps & Tosh wooden homestays',
      'Daily breakfast & dinner as specified',
      'Guided treks to Tosh & Kutla hidden meadow',
      'Experienced Drifter Trip Captain',
      'Bonfire, acoustic sessions & tribe moments'
    ],
    exclusions: ['Personal expenses & lunches', 'Anything not mentioned in inclusions'],
    startingPoint: 'Patna Basecamp',
    endingPoint: 'Patna Basecamp',
    stayType: 'Cozy Riverside Camps & Wooden Homestays',
    transportType: 'Group Bus & Local Cab Transfers',
    mealsInfo: 'Breakfast + Dinner',
    groupSize: '14 Drifters Max',
    difficulty: 'Moderate',
    faqs: [
      {
        question: 'Is the trek to Tosh and Kutla difficult?',
        answer: 'The trek to Tosh is a short 1-hour gentle uphill walk, and Kutla is an optional scenic 2-hour forest hike suitable for beginners!'
      },
      {
        question: 'Can solo travellers join this trip?',
        answer: 'Yes! Over 80% of our travellers join solo and leave as a close tribe.'
      }
    ]
  },
  {
    slug: 'sojha-offbeat-cafe',
    badge: 'LIVE NOW',
    title: 'SOJHA & JIBHI OFFBEAT × CAFÉ',
    category: 'Himachal',
    location: 'Jibhi, Sojha & Jalori Pass, Seraj Valley',
    status: 'LIVE DROP',
    hook: 'Not another Himachal checklist.',
    secondaryCopy: 'Cozy wooden chalets, artisanal mountain espresso, secret fir forest trails to Raghupur Fort ruins, and 360-degree Himalayan views.',
    curiosityLine: 'A slower mountain, a tiny café and a place most people scroll past.',
    ctaText: 'EXPLORE JIBHI & SOJHA →',
    date: 'Upcoming Adventure in November & December',
    duration: '5 Days / 4 Nights',
    startingPrice: '',
    spots: 'Batches Open for Nov & Dec',
    imageUrl: 'https://images.unsplash.com/photo-1757234891950-543e358697ee?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'Escape crowded tourist loops and step into the tranquil wooden hamlets of Jibhi and Sojha in Tirthan Valley. Stay in handcrafted wooden chalets, sip freshly brewed mountain espresso, hike through dense fir forests to sacred Serolsar Lake, and catch 360-degree sunset views from Raghupur Fort ruins.',
    highlights: [
      'Handcrafted wooden chalet stay in Jibhi & Sojha',
      'Artisanal mountain cafe hopping & stream-side relaxation',
      'Guided forest trek to sacred Serolsar Lake via Jalori Pass (10,800 ft)',
      '360-degree Himalayan ridge hike to Raghupur Fort ruins',
      'Jibhi Waterfall & Choie Waterfall exploration'
    ],
    availableBatches: [
      'November 2026 Batches Open',
      'December 2026 Batches Open'
    ],
    experienceFlow: [
      {
        vibeTag: 'DAY 00 • OVERNIGHT BUS',
        title: 'Patna to Tirthan Valley Departure',
        tagline: 'Overnight Road Trip to Himachal Himalayas',
        description: 'Meet at Patna Basecamp in the evening, board our comfortable transport, and begin the overnight journey into the tranquil Tirthan & Seraj Valleys.',
        icon: '🚌'
      },
      {
        vibeTag: 'DAY 01 • JIBHI WATERFALL & CHALET LANDING',
        title: 'Jibhi Waterfall, Wooden Chalet Check-in & Cafe Chill',
        tagline: 'Wooden Bridge Walk, Mountain Espresso & Cozy Fireside Dinner',
        description: 'Arrive in Jibhi by morning. Check into wooden chalets surrounded by pine trees, explore the famous Jibhi Waterfall and wooden bridges, sip artisanal espresso at local cafes, and unwind around the evening fire.',
        icon: '🏡'
      },
      {
        vibeTag: 'DAY 02 • JALORI PASS & SEROLSAR LAKE',
        title: 'Jalori Pass Drive & Serolsar Lake Forest Walk',
        tagline: '10,800 ft Ridge Drive, Ancient Oak Trails & Sacred Mountain Lake',
        description: 'Drive up to high-altitude Jalori Pass (10,800 ft). Set out on a gentle 5 km forest walk through oak and fir trees to sacred Serolsar Lake & Budhi Nagin Temple. Enjoy peak views before returning to Sojha.',
        icon: '🌲'
      },
      {
        vibeTag: 'DAY 03 • RAGHUPUR FORT 360° RIDGE HIKE',
        title: 'Raghupur Fort Ruins Trek & Sunset Stargazing',
        tagline: '360-Degree Dhauladhar Peak Panorama, Grassland Meadow & Bonfire BBQ',
        description: 'Embark on a panoramic ridge hike to the ancient Raghupur Fort ruins. Experience 360-degree views of snow-capped Dhauladhar and Pir Panjal ranges. Enjoy an alpine meadow picnic and evening campfire stargazing.',
        icon: '⛰️'
      },
      {
        vibeTag: 'DAY 04 • CHOIE WATERFALL & RETURN JOURNEY',
        title: 'Choie Waterfall Hike & Return to Patna',
        tagline: 'Morning Stream Trail, Local Cafe Lunch & Return Transport',
        description: 'Enjoy a slow morning breakfast followed by a short hike to Choie Waterfall in Tirthan Valley. Grab local trout/cafe lunch and board our return transport back to Patna Basecamp.',
        icon: '🌄'
      }
    ],
    itinerary: [],
    inclusions: [
      'Round-trip transport from Patna Basecamp to Jibhi/Sojha & back',
      'Triple-sharing stay in handcrafted wooden chalets & homestays',
      'Daily breakfast & dinner as specified',
      'Guided forest walks to Serolsar Lake & Raghupur Fort ruins',
      'Experienced Drifter Trip Captain',
      'Bonfire, acoustic stargazing & tribe BBQ night'
    ],
    exclusions: ['Personal expenses & lunches', 'Anything not mentioned in inclusions'],
    startingPoint: 'Patna Basecamp',
    endingPoint: 'Patna Basecamp',
    stayType: 'Handcrafted Wooden Alpine Chalets',
    transportType: 'Group Bus & Local Mountain Transfers',
    mealsInfo: 'Breakfast + Dinner',
    groupSize: '12 Drifters Max',
    difficulty: 'Easy / Moderate',
    faqs: [
      {
        question: 'What makes Jibhi & Sojha special compared to main Kasol or Manali?',
        answer: 'Jibhi and Sojha are untouched, offbeat wooden hamlets with far fewer crowds, pristine pine forests, handcrafted chalets, and artisanal coffee culture.'
      },
      {
        question: 'Are the treks to Serolsar Lake and Raghupur Fort suitable for beginners?',
        answer: 'Yes! Both treks are gentle, scenic trails through beautiful forests and meadows suitable for anyone with basic fitness.'
      }
    ]
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
    duration: '3 Days / 2 Nights',
    startingPrice: '',
    spots: 'Batches Open for Nov & Dec',
    imageUrl: 'https://images.unsplash.com/photo-1584884789751-68dd2836ada1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fullVision: 'Travel from Patna Basecamp to Siliguri by bus, then take the scenic offbeat road less taken up to Manebhanjan. Experience cozy homestay hospitality where India and Nepal meet in one border town. Ride a legendary 100-year-old vintage Land Rover cab up to Sandakphu summit and witness top high Himalayan peaks (Everest & Kanchenjunga Sleeping Buddha) at the same place before returning back.',
    highlights: [
      'Overnight bus from Patna to Siliguri & scenic offbeat cab drive to Manebhanjan',
      'Cozy mountain homestay stay with Indo-Nepal border exploration at one spot',
      'Iconic 100-year-old vintage Land Rover 4x4 cab ride up to Sandakphu',
      'Panoramic view of Everest, Kanchenjunga Sleeping Buddha, Lhotse & Makalu (if weather permits)',
      'Return back down to Manebhanjan & seamless travel back to Patna'
    ],
    availableBatches: [
      'November 2026 Batches Open',
      'December 2026 Batches Open'
    ],
    experienceFlow: [
      {
        vibeTag: 'DAY 00 • OVERNIGHT BUS',
        title: 'Patna to Siliguri Night Journey',
        tagline: 'Overnight Bus from Patna Basecamp to Siliguri Hub',
        description: 'Meet the crew at Patna Basecamp in the evening and board an overnight comfortable bus to Siliguri, leaving the plains behind and heading towards the eastern Himalayas.',
        icon: '🚌'
      },
      {
        vibeTag: 'DAY 01 • THE ROAD LESS TAKEN',
        title: 'Siliguri to Manebhanjan Cab, Homestay & Indo-Nepal Border Explore',
        tagline: 'Scenic Offbeat Drive, Cozy Homestay & Dual-Country Border Vibes',
        description: 'Hop into private cabs from Siliguri and take the road less taken winding through lush tea gardens and pine forests to Manebhanjan. Check into a cozy mountain homestay and explore India and Nepal at the exact same place—cross-border culture, hot momos, and unique mountain life.',
        icon: '🏡'
      },
      {
        vibeTag: 'DAY 02 • VINTAGE LAND ROVER & TOP PEAKS',
        title: '100-Year-Old Vintage Land Rover to Sandakphu Summit',
        tagline: 'Iconic 4x4 Trail Ride, Everest & Sleeping Buddha Peak Views',
        description: 'Grab a legendary 100-year-old vintage Land Rover cab to navigate the rugged steep trail up to Sandakphu (11,930 ft). If weather is kind, witness top Himalayan peaks at the exact same spot—Mount Everest, Kanchenjunga (The Sleeping Buddha), Lhotse, and Makalu! Soak in the panoramic views before returning back down to Manebhanjan for the night.',
        icon: '🚙'
      },
      {
        vibeTag: 'DAY 03 • THE RETURN JOURNEY',
        title: 'Manebhanjan to Siliguri & Return Back to Patna',
        tagline: 'Morning Tea, Scenic Descent & Overnight Return to Patna',
        description: 'Enjoy morning homestay breakfast in Manebhanjan before heading down to Siliguri in private cabs, followed by the return bus back to Patna Basecamp with epic mountain memories.',
        icon: '🌄'
      }
    ],
    itinerary: [
      {
        day: 'Day 00',
        time: '07:30 PM',
        location: 'Patna to Siliguri',
        title: 'Night Travel from Patna Basecamp',
        activity: 'Overnight comfortable bus journey from Patna to Siliguri with tribe introduction.',
        meals: 'Trail Snacks',
        stay: 'Overnight Bus'
      },
      {
        day: 'Day 01',
        time: '08:00 AM',
        location: 'Siliguri to Manebhanjan',
        title: 'Scenic Cab Drive, Homestay Check-in & Indo-Nepal Border Explore',
        activity: 'Private cab from Siliguri via scenic road less taken to Manebhanjan. Check in to homestay, explore India and Nepal border at the same location, try local tea house food.',
        meals: 'Welcome Tea + Dinner',
        stay: 'Cozy Manebhanjan Homestay'
      },
      {
        day: 'Day 02',
        time: '06:00 AM',
        location: 'Manebhanjan to Sandakphu Peak & Back',
        title: '100-Year-Old Vintage Land Rover Ride to Sandakphu Summit',
        activity: 'Ride legendary 100-year-old vintage Land Rover to Sandakphu summit. Catch panoramic views of Everest, Kanchenjunga Sleeping Buddha, Lhotse & Makalu (if weather permits) before returning back down to Manebhanjan.',
        meals: 'Breakfast + Dinner',
        stay: 'Cozy Manebhanjan Homestay'
      },
      {
        day: 'Day 03',
        time: '09:00 AM',
        location: 'Manebhanjan to Siliguri & Patna',
        title: 'Checkout & Return Journey Back to Patna',
        activity: 'Morning breakfast, cab drive down to Siliguri, and board evening bus back to Patna Basecamp.',
        meals: 'Breakfast',
        stay: 'Return Journey'
      }
    ],
    inclusions: [
      'Round-trip bus transport between Patna and Siliguri',
      'Private cab transfers between Siliguri and Manebhanjan',
      'Vintage 100-year-old Land Rover cab ride from Manebhanjan to Sandakphu & return',
      'Cozy homestay accommodation in Manebhanjan',
      'Daily breakfast & dinner as specified',
      'Experienced Drifter Trip Captain',
      'Singalila National Park & entry permits'
    ],
    exclusions: ['Personal expenses & lunches', 'Anything not mentioned in inclusions'],
    startingPoint: 'Patna Basecamp',
    endingPoint: 'Patna Basecamp',
    stayType: 'Cozy Mountain Homestay',
    transportType: 'Group Bus, Private Cab & Vintage Land Rover 4x4',
    mealsInfo: 'Breakfast + Dinner',
    groupSize: '14 Drifters Max',
    difficulty: 'Easy / Moderate',
    faqs: [
      {
        question: 'What makes the Manebhanjan Land Rover ride famous?',
        answer: 'Manebhanjan is home to a fleet of historic 100-year-old vintage British Land Rovers—one of the few places on Earth where these legendary 4x4 machines still conquer steep Himalayan terrain!'
      },
      {
        question: 'Can we see Mount Everest and Kanchenjunga together?',
        answer: 'Yes! Sandakphu offers one of the rare vantage points where you can see 4 of the 5 highest peaks in the world (Everest, Kanchenjunga, Lhotse, Makalu) in one single panorama if weather is kind.'
      },
      {
        question: 'Do we need a passport or visa to explore the Nepal side in Manebhanjan?',
        answer: 'No passport or visa is required for Indian citizens along the open Indo-Nepal border region at Manebhanjan.'
      }
    ]
  }
];

export function getTripBySlug(slug: string): DetailedTrip | undefined {
  return ALL_TRIPS.find(t => t.slug === slug);
}
