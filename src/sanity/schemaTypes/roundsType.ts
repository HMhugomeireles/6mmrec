import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const roundType = defineType({
  name: 'rounds',
  title: 'Rounds',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'team1',
      type: 'reference',
      to: [{ type: 'teams'}]
    }),
    defineField({
      name: 'team2',
      type: 'reference',
      to: [{ type: 'teams'}]
    }),
    defineField({
      name: 'team1Achievements',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'gameGoals'}})],
    }),
    defineField({
      name: 'team2Achievements',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'gameGoals'}})],
    }),
    defineField({
      name: 'roundTime',
      type: 'number',
      initialValue: 5
    }),
    defineField({
      name: 'isFinish',
      type: 'boolean',
    }),
  ],
})
