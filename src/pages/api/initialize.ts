import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('initialize');

  const body = req.body;
  res.send({
    canvas: {
      content: {
        components: [
          {
            "type": "text",
            "text": "*Create a ticket*",
            "style": "header"
          },
          {
            "type": "input",
            "id": "title",
            "label": "Title",
            "placeholder": "Enter a title for your issue..."
          },
          {
            "type": "textarea",
            "id": "description",
            "label": "Description",
            "placeholder": "Enter a description of the issue..."
          },
          {
            "type": "dropdown",
            "id": "label",
            "label": "Label",
            "options": [
              {
                "type": "option",
                "id": "bug",
                "text": "Bug"
              },
              {
                "type": "option",
                "id": "feedback",
                "text": "Feedback"
              }
            ]
          },
          {
            "type": "single-select",
            "id": "priority",
            "label": "Priority",
            "options": [
              {
                "type": "option",
                "id": "low",
                "text": "Low"
              },
              {
                "type": "option",
                "id": "medium",
                "text": "Medium"
              },
              {
                "type": "option",
                "id": "high",
                "text": "High"
              }
            ]
          },
          {
            "type": "spacer",
            "size": "s"
          },
          {
            "type": "button",
            "id": "submit-issue-form",
            "label": "Create issue",
            "style": "primary",
            "action": {
              "type": "submit"
            }
          }
          ],
      },
    },
  });
}
