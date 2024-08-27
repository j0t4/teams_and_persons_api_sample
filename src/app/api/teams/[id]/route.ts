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

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  const body = await req.json();
  //const id = Number(params.id);
  const id = params.id;
 // if(isNaN(id)) {
 //   return new NextResponse(null, { status: 400});
 // }

  const updatedTeam = await prisma.team.update({
    where: {
      id, 
    },
    data: { 
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

