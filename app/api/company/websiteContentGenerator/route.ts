/** @format */

import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { PrismaClient } from '@prisma/client'

export async function POST(req: NextRequest, res: NextResponse) {
  const { prompt, type, template, company_name, desc, creation_year, address } = await req.json();
  const prisma = new PrismaClient()

  const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

  if (!prompt) {
    return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
  }

  try {
    console.log('Start request: ', prompt)
    await prisma.company.create({
      data: {
        type: type,
        template: template,
        company_name: company_name,
        desc: desc,
        creation_year: creation_year,
        address: address,
      }
    })
    return NextResponse.json({ content: 'ok' }, { status: 200 })
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            `You are Créateur de Site Vitrine, an expert at generating personalized website content for businesses. Your role is to create cohesive and engaging paragraphs for a company’s website using the provided data. Ensure the content is polished, accurate, and reflective of the unique aspects of the business. Focus on presenting the company, its services or products, history and foundation, values and mission, locations and contact information, client testimonials, partnerships, and social media presence.`,
        },
        { role: 'user', content: prompt },
      ],
    });
    console.log('response:', response.choices[0].message.content);
    const content = response.choices[0].message.content;
    return NextResponse.json({ content }, { status: 200 })
  } catch (error) {
    console.error('Error creating chat completion:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 })

  }
}
