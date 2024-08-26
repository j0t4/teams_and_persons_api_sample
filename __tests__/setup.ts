import { prisma } from '@/lib/prisma'

// __tests__/setup.ts
it('performs setup', () => {}); // Does nothing, but Jest needs it


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
