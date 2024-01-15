'use server';

import { redirect } from 'next/navigation';

export async function submitFormData(formData: FormData, ids: string[]) {
  ids.forEach(id => console.log(formData.get(id)));
  // handle db post
  redirect('/');
}
