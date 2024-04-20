import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Shell } from '@/components/shell';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Cart - Shop Online',
    description:
        'Complete your online shopping experience by reviewing and securing your items in our easy-to-use cart',
};

export default function Page() {
    return (
        <Shell>
            <PageHeader className="mx-auto">
                <PageHeaderHeading>Shopping Cart</PageHeaderHeading>
            </PageHeader>
            <Link href="/" className="mx-auto">
                Continue Shopping
            </Link>
        </Shell>
    );
}
