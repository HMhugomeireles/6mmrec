import { GoGoal } from "react-icons/go";
import { defineField, defineType } from 'sanity'

export const gameGoalsType = defineType({
  name: 'gameGoals',
  title: 'Game Goals',
  type: 'document',
  icon: GoGoal,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'goal',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      type: 'image',
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
      title: 'name',
      media: 'image',
    },
  },
})
