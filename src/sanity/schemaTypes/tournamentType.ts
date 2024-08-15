import { TfiCup } from "react-icons/tfi";
import { defineArrayMember, defineField, defineType } from "sanity";

export const tournamentType = defineType({
	name: 'tournament',
	title: 'Tournaments',
	type: 'document',
	icon: TfiCup,
	fields: [
		defineField({
      name: 'title',
      type: 'string',
    }),
		defineField({
			name: 'date',
			type: 'datetime',
		}),
		defineField({
			name: 'gameGoals',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: { type: 'gameGoals' } })],
		}),
		defineField({
			name: 'teams',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: { type: 'teams' } })],
		}),
		defineField({
			name: 'status',
			type: 'string',
			options: {
				list: ['playing', 'schedule', 'finish'],
				layout: 'dropdown'
			}
		}),
		defineField({
			name: 'isActive',
			type: 'boolean',
		}),
		defineField({
			name: 'rounds',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: { type: 'rounds' } })],
		}),
	]
})