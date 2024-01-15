'use client';

import { submitFormData } from '@/actions/submitFormData';
import { HTMLInputTypeAttribute } from 'react';

type Input = {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
};

type FormProps = {
  inputs: Input[];
};

export default function Form(form: FormProps) {
  return (
    <form
      action={f =>
        submitFormData(
          f,
          form.inputs.map(({ id }) => id),
        )
      }
    >
      {form.inputs.map(({ label, id }) => (
        <label htmlFor={id}>
          {label}
          <input name={id} id={id} />
        </label>
      ))}
      <button>Go</button>
    </form>
  );
}
