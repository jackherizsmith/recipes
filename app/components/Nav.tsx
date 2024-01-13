import Link from 'next/link';
import styles from './Nav.module.css';

const NAV_ITEMS = [
  { title: 'home', url: '/' },
  { title: 'add recipe', url: '/recipes/add' },
  { title: 'view recipes', url: '/recipes' },
  { title: 'create order', url: '/orders/add' },
  { title: 'view orders', url: '/orders' },
];

export default async function Nav() {
  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map(({ url, title }) => (
        <Link href={url} key={url}>
          {title}
        </Link>
      ))}
    </nav>
  );
}
