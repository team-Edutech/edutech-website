import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CourseCreateArgs>({
  course: {
    one: { data: { title: 'String', video: 'String' } },
    two: { data: { title: 'String', video: 'String' } },
  },
})

export type StandardScenario = typeof standard
