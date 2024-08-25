import { prisma } from '@/lib/prisma'
import { PrismaClient } from '@prisma/client';

const prismaClient = prisma as PrismaClient;

beforeAll(async () => {
  await prismaClient.$connect()
})

afterEach(async () => {
  await prismaClient.$transaction(async (prisma) => {
    const deletePersons = prisma.person.deleteMany()
    const deleteTeams = prisma.team.deleteMany()
    const deleteMeetings = prisma.meeting.deleteMany()

    await prisma.$transaction([deletePersons, deleteTeams, deleteMeetings])
  })
})

afterAll(async () => {
  await prismaClient.$disconnect()
})
