import jwt from 'jsonwebtoken'
import Cookies from 'cookies'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json({ message: 'Login batata' })
}