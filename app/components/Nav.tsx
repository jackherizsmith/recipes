import { graphql } from '@/graphql/gql';
import Link from 'next/link';

const NAV_ITEMS = [
  { title: 'home', url: '/' },
  { title: 'add recipe', url: '/add-recipe' },
  { title: 'view recipes', url: '/view-recipes' },
  { title: 'create order', url: '/create-order' },
];

export default async function Nav() {
  const thing = await graphql().thing();
  console.log(thing);
  return (
    <nav>
      {NAV_ITEMS.map(({ url, title }) => (
        <Link href={url} key={url}>
          {title}
        </Link>
      ))}
      {thing.ingredients[0].ingredient}
    </nav>
  );
}
