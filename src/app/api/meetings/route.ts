import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  const meetings = await prisma.meeting.findMany()
  return NextResponse.json(meetings)
}

export async function POST(request: Request) {
  const body = await request.json()
  const meeting = await prisma.meeting.create({
      {
      subject: body.subject,
      date: body.date,
      teamId: body.teamId,
      attendees: {
        connect: body.attendees.map((attendeeId: string) => ({ id: attendeeId })),
      },
    },
  })
  return NextResponse.json(meeting)
}
