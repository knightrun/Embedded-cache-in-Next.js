/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'

type LayoutProps = {
  children: React.ReactNode
}

const ErrorLayout = ({ children }: LayoutProps) => {
  const route = useRouter()
  const goMain = async () => {
    await route.push('/')
  }

  return (
    <S.Error>
      {children}
      <button css={btnStyle} onClick={goMain}>
        메인으로
      </button>
    </S.Error>
  )
}

export default ErrorLayout

const S: any = {}

S.Error = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 200px 0;
  text-align: center;
  font-size: 30px;
`

const btnStyle = css`
  cursor: pointer;
  font-size: 16px;
  background-color: #222;
  width: 400px;
  height: 50px;
  border: 0;
  color: #fff;
  font-weight: 500;
  margin-top: 20px;
`
