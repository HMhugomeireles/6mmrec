import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Admin')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('partners').title('Partners'),
      S.documentTypeListItem('gameGoals').title('Game Goals'),
      S.documentTypeListItem('teams').title('Teams'),
      S.documentTypeListItem('rounds').title('Rounds'),
      S.documentTypeListItem('tournament').title('Tournaments'),
      S.documentTypeListItem('products').title('Products'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && ![
          'post',
          'category',
          'author',
          'partners',
          'gameGoals',
          'teams',
          'rounds',
          'tournament',
          'products',
        ].includes(item.getId()!),
      ),
    ])
