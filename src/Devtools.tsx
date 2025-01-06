import { lazy, Suspense } from 'react';

const ReactQueryDevtoolsProduction = lazy(() =>
  import('@tanstack/react-query-devtools/build/modern/production.js').then((d) => ({
    default: d.ReactQueryDevtools,
  })),
);

const Devtools = () => {
  return (
    <Suspense fallback={null}>
      <ReactQueryDevtoolsProduction initialIsOpen={false} />
    </Suspense>
  );
};

export default Devtools;
