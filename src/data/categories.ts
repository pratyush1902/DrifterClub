export interface Trip {
  id: string;
  title: string;
  category: 'Bihar' | 'Nepal' | 'North Bengal' | 'Sikkim' | 'Himachal';
  location: string;
  status: 'LIVE DROP' | 'UPCOMING' | 'WEEKLY MEETUP';
  vision: string;
  imageUrl: string;
}

export interface CategoryData {
  id: 'Bihar' | 'Nepal' | 'North Bengal' | 'Sikkim' | 'Himachal';
  name: string;
  region: string;
  cx: number;
  cy: number;
  imageUrl: string;
  vision: string;
  trips: Trip[];
}

export const CATEGORIES_DATA: CategoryData[] = [
  {
    id: 'Bihar',
    name: 'Bihar & Local Wild',
    region: 'Patna & Netarhat/Kaimur Wild',
    cx: 460,
    cy: 360,
    imageUrl: '/images/manifesto.jpg',
    vision: 'Reclaiming the local wild. Pine camping, fort campfires, and high-energy tribe meetups.',
    trips: [
      {
        id: 'netarhat-pine',
        title: 'Queen of Chota Nagpur: Netarhat Secret Pine Camping',
        category: 'Bihar',
        location: 'Netarhat Pine Forests',
        status: 'LIVE DROP',
        vision: 'Chilly pine forest campfires, sunrise view points, and stargazing in the highlands.',
        imageUrl: '/images/manifesto.jpg'
      },
      {
        id: 'rohtasgarh-fort',
        title: 'Fortress Under The Stars: Rohtasgarh Cliffside Campfire',
        category: 'Bihar',
        location: 'Rohtasgarh Plateau',
        status: 'UPCOMING',
        vision: 'Cliffside tent camping on ancient fort ruins with epic valley sunsets.',
        imageUrl: 'https://images.unsplash.com/photo-1682517885754-04bb5fbaf2bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

      }
    ]
  },
  {
    id: 'Nepal',
    name: 'Nepal',
    region: 'Nepal Himalayas',
    cx: 380,
    cy: 220,
    imageUrl: 'https://images.unsplash.com/photo-1722595631756-170e6905dfb7?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    vision: 'High altitude party trails and offbeat mountain ridges in Nepal.',
    trips: [
      {
        id: 'nepal-rave',
        title: 'Nepal Wildfire: Secret Ridge X High Altitude Rave',
        category: 'Nepal',
        location: 'Secret Himalayan Ridge',
        status: 'LIVE DROP',
        vision: 'Offbeat mountain trail hiking by day, acoustic campfire jams & secret ridge party by night.',
        imageUrl: 'https://images.unsplash.com/photo-1722595631756-170e6905dfb7?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]

  },
  {
    id: 'North Bengal',
    name: 'North Bengal',
    region: 'Sandakphu & Tea Hills',
    cx: 600,
    cy: 280,
    imageUrl: 'https://images.unsplash.com/photo-1584884789751-68dd2836ada1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    vision: 'Walking above the clouds with front-row views of Mount Everest & Kanchenjunga.',
    trips: [
      {
        id: 'sandakphu-cloud',
        title: 'Sleeping Buddha Ridge: Sandakphu Cloudwalk',
        category: 'North Bengal',
        location: 'Singalila Ridge, Sandakphu',
        status: 'UPCOMING',
        vision: 'Walking above the clouds with front-row views of Everest & Kanchenjunga.',
        imageUrl: 'https://images.unsplash.com/photo-1584884789751-68dd2836ada1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]

  },
  {
    id: 'Himachal',
    name: 'Himachal',
    region: 'Parvati & Seraj Valleys',
    cx: 220,
    cy: 140,
    imageUrl: '/images/himachal_expedition.jpg',
    vision: 'Psytrance valley nights, alpine trails, wooden chalets, and artisanal coffee.',
    trips: [
      {
        id: 'kasol-party',
        title: 'Parvati Valley High: Kasol Party X Alpine Trail',
        category: 'Himachal',
        location: 'Kasol & Tosh Village',
        status: 'UPCOMING',
        vision: 'Psytrance valley nights, cafe hopping, and high mountain village trekking.',
        imageUrl: '/images/himachal_expedition.jpg'
      },
      {
        id: 'sojha-cafe',
        title: 'Pine & Espresso: Sojha Offbeat Cafe Crawl & Secret Hikes',
        category: 'Himachal',
        location: 'Sojha & Jalori Pass',
        status: 'UPCOMING',
        vision: 'Wooden mountain cafes, artisanal espresso, and secret forest ridge walks.',
        imageUrl: '/images/story_campfire_tribe.jpg'
      }
    ]
  }
];
