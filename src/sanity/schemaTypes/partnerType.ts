import { PiHandshake } from "react-icons/pi";
import { defineArrayMember, defineField, defineType } from 'sanity'

export const partnerType = defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  icon: PiHandshake,
  fields: [
    defineField({
      name: 'partnerName',
      type: 'string',
      title: 'Partner Name'
    }),
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
    defineField({
      name: 'link',
      type: 'string',
    }),
    defineField({
        name: 'bio',
        type: 'array',
        of: [
          defineArrayMember({
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          }),
        ],
      }),
  ],
  preview: {
    select: {
      title: 'partnerName',
      media: 'image',
    },
  },
})
