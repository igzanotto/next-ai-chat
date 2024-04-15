import {Configuration, OpenAIApi} from 'openai-edge'
import { NextResponse } from 'next/server'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
    })

const openai = new OpenAIApi(config)

export async function POST(request: Request) {
    const {messages} = await request.json()
    console.log(messages)

    return NextResponse.json({message: "respuesta del POST"})
}