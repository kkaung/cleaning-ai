import React from 'react';
import { Mdx } from '@/components/mdx/mdx-components';
import { Shell } from '@/components/shell';
import { allPages, allServices } from 'contentlayer/generated';

export default function CloakedContent() {
    // const service = allServices.find(v => v.slugAsParams === 'house-cleaning')!;

    // console.log(service.slugAsParams);

    const page = allPages.find(p => p.slugAsParams === 'contact');

    if (!page) return <div>No</div>;

    return (
        <Shell as="article" variant="markdown">
            <Mdx code={page.body.code} />
        </Shell>
    );
}
