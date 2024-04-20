import { type Metadata } from 'next';
import React from 'react';
import CloakedContent from './_components/cloaked-content';
import Content from './_components/content';

import { checkUserAgentForGooglebot } from '@/lib/next';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `#1 House Cleaning Service in Canberra - Cleaner Near Me in Canberra`,
    description:
        'Best Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking',
};

export default function Page() {
    const isGooglebot = checkUserAgentForGooglebot();

    if (isGooglebot) return <div>This is googlebot</div>;

    return <Content location="Canberra" />;
}
