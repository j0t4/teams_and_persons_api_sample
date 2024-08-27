import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  const id = request.url.split('/').pop()!;
  const person = await prisma.person.findUnique({
    where: {
      id,
    },
  })
  return NextResponse.json(person)
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  const body = await req.json();
  const id = params.id;

  const updatedPerson = await prisma.person.update({
    where: {
      id, 
    },
     
      data: {
              name: body.name,
      }
    ,
  });

  return NextResponse.json(updatedPerson);
}

export async function DELETE(request: Request) {
  const id = request.url.split('/').pop()!;
  await prisma.person.delete({
    where: {
      id,
    },
  });
  return NextResponse.json({});
}
