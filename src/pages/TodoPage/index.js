import React from 'react';
import { TodoForm, TodoList } from '../../components';
import styles from './styles.module.scss';

const TodoPage = () => {
  return (
    <main className={styles.page}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href={'/'}>Home</a>
          </li>
        </ul>
      </nav>
      <article className={styles.article}>
        <h1 className={styles.title}>Todo page</h1>
        <section className={styles.section}>
          <TodoForm />
        </section>
        <ul className={styles.section}>
          <TodoList />
        </ul>
      </article>
    </main>
  );
};

export default TodoPage;
