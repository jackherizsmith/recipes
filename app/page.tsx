import { graphql } from '@/graphql/gql';
import styles from './page.module.css';

export default async function Home() {
  const recipesCount = await graphql().recipes_count();
  return <main className={styles.main}>You have {recipesCount.recipes_aggregate.aggregate?.count} recipes</main>;
}
