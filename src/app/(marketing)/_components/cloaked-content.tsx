import React from 'react';
import { Mdx } from '@/components/mdx/mdx-components';
import { Shell } from '@/components/shell';
import { allServices } from 'contentlayer/generated';

export default function CloakedContent() {
    const service = allServices.find(v => v.slugAsParams === 'house-cleaning');

    return (
        <Shell as="article" variant="markdown">
            <div>{JSON.stringify(service?.body.code)}</div>
        </Shell>
    );
}
