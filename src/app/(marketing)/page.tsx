import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import React from 'react';
import WhyUs from '@/components/why-us';
import Hero from './_components/hero';
import HowWork from './_components/how-work';
import FAQs from './_components/faqs';

import Features from '@/app/(marketing)/_components/features';
import { checkUserAgentForGooglebot } from '@/lib/next';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `#1 House Cleaning Service in Canberra - Cleaner Canberra`,
    description: 'Expert cleaning services in Canberra. We provides top-rated house and office cleaning. Insured, reliable, and affordable. Book online today!',
};

export default function Page() {
    const isGooglebot = checkUserAgentForGooglebot();

    return (
        <Shell>
            <Hero />
            <HowWork />
            <Features location="Canberra" />
            <WhyUs />
            <FAQs />
        </Shell>
    );
}
