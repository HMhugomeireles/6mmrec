import { TbPentagram } from "react-icons/tb";
import {defineArrayMember, defineField, defineType} from 'sanity'

export const roundType = defineType({
  name: 'rounds',
  title: 'Rounds',
  type: 'document',
  icon: TbPentagram,
  fields: [
    defineField({
			name: 'date',
			type: 'datetime'
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
      initialValue: []
    }),
    defineField({
      name: 'team2Achievements',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'gameGoals'}})],
      initialValue: []
    }),
    defineField({
      name: 'roundTime',
      type: 'number',
      initialValue: 5
    }),
    defineField({
      name: 'isFinish',
      type: 'boolean',
      initialValue: false
    }),
  ],
  preview: {
    select: {
      date: 'date',
      title1: 'team1.teamName',
      title2: 'team2.teamName',
    },
    prepare({ date, title1, title2 }) {
			const icon = status === 'playing' ? '▶️' : status === 'schedule' ? '🗓️' : '✅';
      return {
        title: new Date(date).toUTCString(),
        subtitle: `${title1} Vs ${title2}`,
      }
    }
  },
})
