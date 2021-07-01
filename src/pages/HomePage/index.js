import React from 'react';

const HomePage = () => {
  return (
    <article>
      <h1>HomePage</h1>
      <a href={'/counter'}>Counter</a>
      <br />
      <br />
      <a href={'/todo'}>Todo List</a>
    </article>
  );
};

export default HomePage;
