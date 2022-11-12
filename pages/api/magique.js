// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as deepl from 'deepl-node';

const authKey = "a70878d3-c80f-1294-3900-8eb1b390656c:fx"; // Replace with your key
const translator = new deepl.Translator(authKey);

export default function handler(req, res) {

  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    // Process a POST request
    console.log(body.text)

    translator.translateText(body.text, null, 'en-US').then((result) => {
      console.log(result.text); // Bonjour, le monde !
    })
      .catch((error) => {
        console.error(error);
      });

  } else {
    // Handle any other HTTP method
    res.status(200).json({ error: 'Does not exits' })

  }

  res.status(200).json({ error: 'Does not exits' })


}
