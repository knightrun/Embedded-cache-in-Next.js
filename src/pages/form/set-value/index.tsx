import { useForm } from 'react-hook-form/dist/index.ie11'
import CheckboxGroup from '@/components/common/form/CheckboxGroup'
import Form from '@/components/common/form/Form'
import Input from '@/components/common/form/Input'
import Checkbox from '@/components/common/form/Checkbox'
import { GetServerSideProps } from 'next'

const checkList = [
  { label: '알바', value: 'alba', group: 'category' },
  {
    label: '정규직',
    value: 'regular',
    group: 'category',
  },
  { label: '계약직', value: 'contract', group: 'category' },
  {
    label: '파견직',
    value: 'dispatched',
    group: 'category',
  },
  { label: '인턴', value: 'intern', group: 'category' },
]

const SetValuePage = ({ data }) => {
  const formOptions = { defaultValues: { ...data } }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions)
  const onSubmit = (data: any) => {
    console.log(data)
    return false
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxGroup list={checkList} ref={register} />
        <Input
          type="text"
          id={'id_username'}
          name={'userName'}
          label={'이름'}
          ref={register}
          error={errors.userName}
        />
        <Input
          type="text"
          id={'id_email'}
          name={'userEmail'}
          label={'이메일'}
          ref={register}
          error={errors.userEmail}
        />{' '}
        <Checkbox
          id={'id_checkbox'}
          name={'logged'}
          label={'필수 동의'}
          ref={register}
          error={errors.logged}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button type={'submit'}>로그인</button>
      </Form>
    </>
  )
}

export default SetValuePage

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      data: {
        category: ['alba', 'contract'],
        userName: '홍길동',
        userEmail: 'hong@jobkorea.co.kr',
        logged: true,
      },
    },
  }
}
