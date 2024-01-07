'use client';

import { useFormState } from 'react-dom';
import Link from 'next/link';
import { login } from '@/libs/actions';

import styles from './loginForm.module.css';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type='text' placeholder='username' name='username' />
      <input type='password' placeholder='password' name='password' />
      <button>Login</button>
      {state?.error}
      <Link href='/register'>
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
