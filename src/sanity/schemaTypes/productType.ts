import { GiShoppingCart } from "react-icons/gi";
import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  icon: GiShoppingCart,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Product Name'
    }),
    defineField({
      name: 'description',
      type: 'string'
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
      name: 'price',
      type: 'number'
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
