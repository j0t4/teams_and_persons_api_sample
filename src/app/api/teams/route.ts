import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  const teams = await prisma.team.findMany()
  return NextResponse.json(teams)
}

export async function POST(request: Request) {
  const body = await request.json()
  const team = await prisma.team.create({
      data: { 

      name: body.name,
      }
  })
  return NextResponse.json(team)
}

export async function PATCH(request: Request) {
  const id = request.url.split('/').pop()!;
  const body = await request.json();
  const updatedTeam = await prisma.team.update({
    where: {
      id,
    },
     {
      name: body.name,
    },
  });
  return NextResponse.json(updatedTeam);
}
