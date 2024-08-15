import { PiHandshake } from "react-icons/pi";
import { defineArrayMember, defineField, defineType } from 'sanity'

export const partnerType = defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  //icon: PiHandshake,
  fields: [
    defineField({
      name: 'partnerName',
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
      title: 'name',
      media: 'image',
    },
  },
})
