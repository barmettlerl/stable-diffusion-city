// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import path from 'path'

const DEVELOPMENT = process.env.DEVELOPMENT || false


export default function handler(req, res) {

	if (req.method === 'GET') {

		let images = []

		fs.readdirSync(path.resolve(DEVELOPMENT ? '/Users/themaimu/privat/st_gall_hack/stable-diffusion-city/public/city_images' : '/city_images/')).forEach(file => {
			if (file.endsWith('.jpg')) {
				images.push(file)
			}
		});

		res.status(200).json(images)
	}

}
