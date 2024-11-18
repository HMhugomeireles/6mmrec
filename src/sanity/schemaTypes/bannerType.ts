import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const bannerType = defineType({
  name: 'Banner',
  title: 'Banner',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: '',
      media: 'image',
    },
  },
})
