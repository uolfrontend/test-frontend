import React, { lazy, Suspense } from 'react';

const LazyEdit = lazy(() => import('./Edit'));

const Edit = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEdit {...props} />
  </Suspense>
);

export default Edit;
