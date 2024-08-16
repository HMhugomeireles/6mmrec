import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { gameGoalsType } from './gameGoalsType'
import { partnerType } from './partnerType'
import { teamsType } from './teamsType'
import { roundType } from './roundsType'
import { tournamentType } from './tournamentType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    gameGoalsType,
    partnerType,
    teamsType,
    roundType,
    tournamentType,
    productType
  ],
}
