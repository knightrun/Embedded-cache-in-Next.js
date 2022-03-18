import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import styled from '@emotion/styled'
import '../styles/globals.css'
import DefaultLayout from '@/components/layouts/DefaultLayout'

type PageWithLayout = NextPage & { Layout: React.ComponentType }

function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as PageWithLayout).Layout || DefaultLayout
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/images/common/favicon.ico" sizes="192x192" />
        <meta name="description" content="Mock-up" />
        <title>Form Validation</title>
      </Head>
      <S.Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </S.Container>
      <div id="root-modal" />
    </>
  )
}

export default App

const S: any = {}

S.Container = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;

  > div {
    flex: 1;
  }
`
