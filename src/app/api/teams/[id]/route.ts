import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  const id = request.url.split('/').pop()!;
  const team = await prisma.team.findUnique({
    where: {
      id,
    },
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

export async function DELETE(request: Request) {
  const id = request.url.split('/').pop()!;
  await prisma.team.delete({
    where: {
      id,
    },
  });
  return NextResponse.json({});
}
