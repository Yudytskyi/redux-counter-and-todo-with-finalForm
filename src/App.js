import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const TodoPage = lazy(() => import('./pages/TodoPage'));
const ReactFinalFormExample = lazy(() =>
  import('./components/ReactFinalFormExample')
);
const CounterPage = lazy(() => import('./pages/CounterPage/ReduxCounterPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>loading...</h1>}>
        <Switch>
          <Route path="/todo" component={TodoPage} />
          <Route path="/counter" component={CounterPage} />
          <Route path="/example" component={ReactFinalFormExample} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
