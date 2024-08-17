import { TfiCup } from "react-icons/tfi";
import { defineArrayMember, defineField, defineType } from "sanity";

export const tournamentsType = defineType({
	name: 'tournaments',
	title: 'Tournaments',
	type: 'document',
	icon: TfiCup,
	fields: [
		defineField({
			name: 'date',
			type: 'datetime',
		}),
		defineField({
			name: 'gameGoals',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: { type: 'gameGoals' } })],
			initialValue: []
		}),
		defineField({
			name: 'teams',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: { type: 'teams' } })],
			initialValue: []
		}),
		defineField({
			name: 'status',
			type: 'string',
			options: {
				list: ['playing', 'schedule', 'finish'],
				layout: 'dropdown'
			},
			initialValue: 'schedule'
		}),
		defineField({
			name: 'isActive',
			type: 'boolean',
			initialValue: false
		}),
		defineField({
			name: 'rounds',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: { type: 'rounds' } })],
			initialValue: []
		}),
		defineField({
      name: 'rules',
      type: 'blockContent',
			title: 'Tournament Information'
    }),
	],
	preview: {
    select: {
      title: 'date',
			status: 'status',
			date: 'date'
    },
		prepare({ date, status, title }) {
			const icon = status === 'playing' ? '▶️' : status === 'schedule' ? '🗓️' : '✅';
      return {
        title: `${icon} ${title}`,
        subtitle: new Date(date).toUTCString(),
				media: ''
      }
    }
  },
})