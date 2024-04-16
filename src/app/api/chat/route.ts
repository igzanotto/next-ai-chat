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
        messages: messages
        // messages: [ {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
        // {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}],
    })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
}