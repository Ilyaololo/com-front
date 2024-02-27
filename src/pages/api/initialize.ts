import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('initialize');

  const body = req.body;
  res.send({
    canvas: {
      content: {
        components: [
          { type: "button", label: "Click ME!!!!", style: "primary", id: "url_button", action: {type: "submit"} },
        ],
      },
    },
  });
}
