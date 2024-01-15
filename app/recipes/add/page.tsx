import Form from '@/app/components/Form';
import styles from './page.module.css';

export default function AddRecipe() {
  return (
    <main>
      <h1>Add a recipe</h1>
      <Form
        inputs={[
          { id: 'ingredient', label: 'Ingredient' },
          { id: 'potato', label: 'Potato' },
        ]}
      />
    </main>
  );
}
