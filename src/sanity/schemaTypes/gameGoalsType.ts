import { GoGoal } from "react-icons/go";
import { defineField, defineType } from 'sanity'

export const gameGoalsType = defineType({
  name: 'gameGoals',
  title: 'Game Goals',
  type: 'document',
  icon: GoGoal,
  fields: [
    defineField({
      name: 'goal',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Icon',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'points',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'goal',
      media: 'image',
    },
  },
})
