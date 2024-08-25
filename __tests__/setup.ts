import { prisma } from '@/lib/prisma'
beforeAll(async () => {
  await prisma.$connect()
})

afterEach(async () => {
  await prisma.$transaction([
    prisma.person.deleteMany(),
    prisma.team.deleteMany(),
    prisma.meeting.deleteMany(),
  ])
})

afterAll(async () => {
  await prisma.$disconnect()
})
