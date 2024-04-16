import {Configuration, OpenAIApi} from 'openai-edge'
import { NextResponse } from 'next/server'
import {OpenAIStream,StreamingTextResponse} from 'ai'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
    })

const openai = new OpenAIApi(config)

export async function POST(request: Request) {
    const {messages} = await request.json()
    console.log(messages)

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: [
            {"role": "system", "content": "Eres un doctor virtual qu ayuda a duenos de mascotas con consultas veterinarias sobre su perro. No puedes responder a nada que no tenga que ver con veterinaria. Primero responde con una pregunta sobre el perro del usuario que te habla"},
            ...messages
        ],
    })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
}