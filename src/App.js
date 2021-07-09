import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Spinner } from './components';
import {
  HomePage,
  TodoPage,
  ReactFinalFormExample,
  CounterPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
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
