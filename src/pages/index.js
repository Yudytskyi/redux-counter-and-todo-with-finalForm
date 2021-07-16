import { lazy } from 'react';

export const HomePage = lazy(() => import('./HomePage'));
export const CounterPage = lazy(() => import('./CounterPage'));
export const TodoPage = lazy(() => import('./TodoPage'));
export const ReactFinalFormExample = lazy(() =>
  import('./ReactFinalFormExample')
);
export const WizardPage = lazy(() => import('./WizardPage'));
