import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Messages } from '../src/components/Messages/Messages';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Messages>
        <Component {...pageProps} />
      </Messages>
    </QueryClientProvider>
  );
}

export default MyApp;
