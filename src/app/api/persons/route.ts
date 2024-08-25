import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  const persons = await prisma.person.findMany()
  return NextResponse.json(persons)
}

export async function POST(request: Request) {
  const body = await request.json()
  const person = await prisma.person.create({
      {
      name: body.name,
    },
  })
  return NextResponse.json(person)
}
