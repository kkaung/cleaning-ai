import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const userAgent = req.headers['user-agent'];

    const isGooglebot = /Googlebot/i.test(userAgent || '');

    console.log(userAgent);

    res.status(200).json({ isGooglebot });
}
