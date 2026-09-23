import type { DetailedTrip, FAQItem } from '@/data/trips';

export const SITE_URL = 'https://www.drifter.buzz';
export const SITE_NAME = 'Drifter';
export const DEFAULT_OG_IMAGE =
    'https://images.unsplash.com/photo-1722595631756-170e6905dfb7?q=80&w=1200&auto=format&fit=crop';

export const PATNA_BIHAR_KEYWORDS = [
    'adventure trips from Patna',
    'weekend trips from Patna',
    'trekking club in Patna',
    'Bihar adventure travel community',
    'backpacking trips from Bihar',
    'group trips from Patna',
    'Nepal trip from Patna',
    'Himalayan treks from Patna',
];

export function absoluteUrl(path = '/') {
    return new URL(path, SITE_URL).toString();
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    };
}

export function buildFaqJsonLd(faqs: FAQItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function buildTripJsonLd(trip: DetailedTrip) {
    return {
        '@context': 'https://schema.org',
        '@type': ['Trip', 'TouristTrip'],
        name: `${trip.title} from Patna`,
        description: `${trip.hook} ${trip.secondaryCopy}`,
        url: absoluteUrl(`/expeditions/${trip.slug}`),
        image: trip.imageUrl,
        provider: {
            '@type': 'TravelAgency',
            name: 'Drifter',
            url: SITE_URL,
            telephone: '+91-7978578168',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Maurya Lok Complex',
                addressLocality: 'Patna',
                addressRegion: 'Bihar',
                addressCountry: 'IN',
            },
        },
        itinerary: trip.itinerary.map((day) => ({
            '@type': 'TouristAttraction',
            name: day.title,
            description: day.activity,
            address: day.location,
        })),
        touristType: ['Backpackers', 'Solo travellers', 'Adventure travellers from Bihar'],
        offers: {
            '@type': 'Offer',
            url: absoluteUrl(`/expeditions/${trip.slug}`),
            priceCurrency: 'INR',
            availability: trip.status === 'LIVE DROP' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
            category: trip.category,
        },
    };
}

export function buildArticleJsonLd({
    title,
    description,
    path,
    image = DEFAULT_OG_IMAGE,
    keywords = PATNA_BIHAR_KEYWORDS,
}: {
    title: string;
    description: string;
    path: string;
    image?: string;
    keywords?: string[];
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image,
        mainEntityOfPage: absoluteUrl(path),
        author: {
            '@type': 'Organization',
            name: 'Drifter Captain Crew',
            url: SITE_URL,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Drifter',
            logo: {
                '@type': 'ImageObject',
                url: absoluteUrl('/icon.png'),
            },
        },
        inLanguage: 'en-IN',
        about: keywords,
    };
}