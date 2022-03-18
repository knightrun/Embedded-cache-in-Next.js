import { ReactNode } from 'react'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import styled from '@emotion/styled'

type LayoutProps = { children: ReactNode }

const DefaultLayout = ({ children }: LayoutProps) => (
  <S.Default>
    <Header />
    <S.Main>{children}</S.Main>
    <Footer />
  </S.Default>
)

export default DefaultLayout

const S: any = {}

S.Default = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

S.Main = styled.main`
  padding: 40px 0;
`
