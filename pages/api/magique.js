// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as deepl from 'deepl-node';
import Replicate from 'replicate-js';

const DEEPL_API_TOKEN = process.env.DEEPL_API_TOKEN || ''
const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN || ''
const CURRENT_BASE_URL = process.env.CURRENT_BASE_URL || ''

const MODEL_NAME = 'stability-ai/stable-diffusion'
const height = 512;
const width = 512;
const prmt_strgth = 0.6;
const num_interference_steps = 45;
const guidance_scale = 5;

const translator = new deepl.Translator(DEEPL_API_TOKEN);
const replicate = new Replicate({ token: REPLICATE_API_TOKEN });


export default function handler(req, res) {

  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    // Process a POST request
    console.log(body.text)

    translator.translateText(body.text, null, 'en-US').then(({ text }) => {
      replicate.models.get(MODEL_NAME).then((myModel) =>
        myModel.predict({
          prompt: text,
          prmt_strgth: prmt_strgth,
          num_interference_steps: num_interference_steps,
          guidance_scale: guidance_scale,
          width: width,
          height: height,
          init_image: `${CURRENT_BASE_URL}/city_images/${body.image}`,
        })).then((generatedImage) => {
          console.log(generatedImage)
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
