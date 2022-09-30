import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BaseLayout } from '../src/layouts/BaseLayout/BaseLayout';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </QueryClientProvider>
  );
}

export default MyApp;
