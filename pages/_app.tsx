import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from './components/Layout'
import { ThemeProvider } from 'next-themes'

import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
