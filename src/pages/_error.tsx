import ErrorLayout from '@/components/layouts/ErrorLayout'
import { NextPageContext } from 'next'

const Error = ({ statusCode }: { statusCode: number | string }) => {
  return (
    <p>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode: number | undefined = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

Error.Layout = ErrorLayout

export default Error
