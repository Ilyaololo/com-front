import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('submit');

  const body = req.body;
  res.send({
    canvas: {
      content: {
        components: [
          { type: "text", text: "Someone just clicked something AND you just created a new component!",
           style: "header", align: "center" },
        ],
      },
    },
  });
}
