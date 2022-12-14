// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as deepl from 'deepl-node';
import Replicate from 'replicate-js';

const NEXT_PUBLIC_DEEPL_TOKEN = process.env.NEXT_PUBLIC_DEEPL_TOKEN || ''
const NEXT_PUBLIC_REPICLATE_TOKEN = process.env.NEXT_PUBLIC_REPICLATE_TOKEN || ''
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://st-dream-city.azurewebsites.net'


const MODEL_NAME = 'stability-ai/stable-diffusion'
const VERSION = '8abccf52e7cba9f6e82317253f4a3549082e966db5584e92c808ece132037776'
const height = 512;
const width = 512;
const prmt_strgth = 0.6;
const num_interference_steps = 80;
const guidance_scale = 14;

const translator = new deepl.Translator(NEXT_PUBLIC_DEEPL_TOKEN);
const replicate = new Replicate({ token: NEXT_PUBLIC_REPICLATE_TOKEN });

export default function handler(req, res) {

  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    // Process a POST request
    console.log("body.text", body.text)

    translator.translateText(body.text, null, 'en-US').then(({ text }) => {
      replicate.models.get(MODEL_NAME, VERSION).then((myModel) =>
        myModel.predict({
          prompt: text,
          prompt_strength: prmt_strgth,
          num_interference_steps: num_interference_steps,
          guidance_scale: guidance_scale,
          width: width,
          height: height,
          init_image: `${NEXT_PUBLIC_BASE_URL}/city_images/${body.image}`,
        })).then((generatedImage) => {
          console.log("generatedImage", generatedImage)
          res.status(200).json({ image: generatedImage })
        }).catch((err) => {
          throw err;
        });
    }).catch((err) => {
      console.log(err);
    });

  } else {
    // Handle any other HTTP method
    res.status(200).json({ error: 'Does not exits' })
  }
}
