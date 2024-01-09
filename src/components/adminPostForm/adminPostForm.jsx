'use client';

import { useFormState } from 'react-dom';
import { addPost } from '@/libs/actions';
import styles from './adminPostForm.module.css';

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type='hidden' name='userId' value={userId} />
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='slug' placeholder='slug' />
      <input type='text' name='img' placeholder='img' />
      <textarea type='text' name='desc' placeholder='desc' rows={10} />
      <button type='submit'>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
