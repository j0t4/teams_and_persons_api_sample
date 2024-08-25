import { prisma } from '@/lib/prisma'

beforeAll(async () => {
  await prisma.$connect()
})

afterEach(async () => {
  await prisma.$transaction(async (prisma) => {
    const deletePersons = prisma.person.deleteMany()
    const deleteTeams = prisma.team.deleteMany()
    const deleteMeetings = prisma.meeting.deleteMany()

    await prisma.$transaction([deletePersons, deleteTeams, deleteMeetings])
  })
})

afterAll(async () => {
  await prisma.$disconnect()
})
