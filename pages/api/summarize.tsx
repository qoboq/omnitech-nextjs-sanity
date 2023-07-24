import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check method
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    return
  }

  // Extract text from request body
  const { text } = req.body;

  // You should replace this with the actual call to the OpenAI API
  const summary = `Summary of ${text}`;

  // Send summary as the response
  res.status(200).json({ summary })
}
