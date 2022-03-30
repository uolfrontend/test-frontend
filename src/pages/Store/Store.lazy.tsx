import React, { lazy, Suspense } from 'react';

const LazyStore = lazy(() => import('./Store'));

const Store = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyStore {...props} />
  </Suspense>
);

export default Store;
