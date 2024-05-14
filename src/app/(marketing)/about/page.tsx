import { type Metadata } from 'next';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/configs/site';
import React from 'react';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `About Us - ${siteConfig.name}`,
    description: `Join us on our journey to revolutionize the cleaning industry! Get acquainted with our dedicated field and office staff members, and learn about the inception of ${siteConfig.name}.`,
    alternates: {
        canonical: '/about',
    },
};

export default function page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'About Us', href: '/about-us' },
                ]}
                dottable={false}
            />
            <PageHeader className="mx-auto">
                <PageHeaderHeading>{siteConfig.name} Story</PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    Turning houses into homes.
                </PageHeaderDescription>
            </PageHeader>
            <div className="mx-auto prose prose-quoteless prose-neutral dark:prose-invert">
                <p>
                    <Link href="/">Top Cleaner Canberra</Link> is a premier
                    cleaning service provider catering to residential and
                    commercial clients in the Canberra region. Established with
                    a commitment to excellence, we have built a reputation for
                    delivering superior cleaning solutions with a personalized
                    touch.
                </p>
                <p>
                    Our team of highly trained and experienced professionals
                    takes pride in their work, ensuring meticulous attention to
                    detail and a dedication to using eco-friendly cleaning
                    products. Whether it&apos;s a one-time deep clean, regular
                    maintenance, or specialized services like carpet cleaning or
                    window washing, we tailor our approach to meet the unique
                    needs of each client.
                </p>
                <p>
                    At Top Cleaner Canberra, we prioritize open communication,
                    transparency, and building long-lasting relationships with
                    our clients. Our services are backed by comprehensive
                    insurance coverage, and we strive to exceed expectations
                    with every job we undertake. With a focus on
                    professionalism, reliability, and quality workmanship, we
                    are committed to creating a cleaner, healthier, and more
                    inviting living or working environment for our valued
                    customers.
                </p>
            </div>
        </Shell>
    );
}
