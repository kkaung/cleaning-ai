import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/',
    pinterest: 'https://pinterest.com/',
    linkin: 'https://linkin.com',
};

export const siteConfig = {
    logo: 'CleaningIA',
    name: 'Cleaning IA Canberra',
    title: 'Cleaning IA Canberra',
    domain: 'cleaningia.com.au',
    description:
        'Expert cleaning services in Canberra. We provides top-rated house and office cleaning. Insured, reliable, and affordable. Book online today!',
    url: 'https://cleaningia.com.au',
    ogImage: 'https://cleaningia.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-canberra',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-canberra',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-canberra',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-canberra',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-canberra',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-geelong',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-canberra',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-canberra',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/pricing',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Regular Cleaning Canberra',
                    href: '/regular-cleaning-canberra',
                },
                {
                    title: 'Deep Cleaning Canberra',
                    href: '/deep-cleaning-canberra',
                },
                {
                    title: 'End Of Lease Cleaning Canberra',
                    href: '/end-of-lease-cleaning-canberra',
                },
                {
                    title: 'Office Cleaning Canberra',
                    href: '/office-cleaning-canberra',
                },
                {
                    title: 'Oven Cleaning Canberra',
                    href: '/oven-cleaning-canberra',
                },
                {
                    title: 'Carpet Cleaning Canberra',
                    href: '/carpet-cleaning-canberra',
                },
                {
                    title: 'Window Cleaning Canberra',
                    href: '/window-cleaning-canberra',
                },
                {
                    title: 'After Builder Cleaning Canberra',
                    href: '/after-builder-cleaning-canberra',
                },
                {
                    title: 'House Cleaning Service Canberra',
                    href: '/',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                { title: 'Pricing', href: '/pricing' },
                { title: 'Products', href: '/products' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
        {
            title: 'Company',
            items: [{ title: 'About Us', href: '/about' }],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@cleaningia.com.au',
        phone: '+61 414076980',
        address: '148 Bunda St, Canberra ACT 2608',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 727,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
