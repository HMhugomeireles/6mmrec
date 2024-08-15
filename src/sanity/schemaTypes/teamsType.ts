import { UsersIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const teamsType = defineType({
  name: 'teams',
  title: 'Teams',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'teamName',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'city',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
