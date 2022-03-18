import { useForm } from 'react-hook-form/dist/index.ie11'
import * as yup from 'yup-ie11'
import { yupResolver } from '@hookform/resolvers/dist/ie11/yup/yup'
import Form from '@/components/common/form/Form'
import CheckboxGroup from '@/components/common/form/CheckboxGroup'
import Input from '@/components/common/form/Input'
import Checkbox from '@/components/common/form/Checkbox'
import InputGroup from '@/components/common/form/InputGroup'
import RadioGroup from '@/components/common/form/RadioGroup'
import Select from '@/components/common/form/Select'
import { useEffect } from 'react'

interface IAccountType {
  id: string
  label: string
  value: string
  selected?: boolean
}

interface IFormInputs {
  category?: string[]
  logged?: boolean
  month?: string
  accountType?: string
  userId?: string
  userPassword?: string
  userConfirmPassword?: string
}

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

const monthList = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
]

const accountTypeList: IAccountType[] = [
  {
    id: 'type-1',
    label: '개인회원',
    value: 'individual',
    selected: true,
  },
  { id: 'type-2', label: '기업회원', value: 'corporate' },
]

const FormPage = () => {
  const validationSchema = yup.object().shape({
    logged: yup.boolean().oneOf([true], '동의해주세요.'),
    month: yup.string().required('필수 입력 입니다.'),
    userId: yup.string().required('필수 입력 입니다.'),
    userPassword: yup
      .string()
      .required('필수 입력 입니다.')
      .min(4, '최소 4글자이상 입력해 주세요.'),
    userConfirmPassword: yup
      .string()
      .required('필수 입력 입니다.')
      .oneOf([yup.ref('userPassword'), null], '비밀번호를 확인해 주세요.'),
  })

  const formOptions = { resolver: yupResolver(validationSchema) }

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>(formOptions)

  const onSubmit = (data: any) => {
    console.log(data)
    return false
  }

  const watchAllFields = watch()

  const watchCategory = watch('category')

  useEffect(() => {
    console.log('watchAllFields : ', watchAllFields)
  }, [watchAllFields])

  useEffect(() => {
    console.log('watchCategory : ', watchCategory)
  }, [watchCategory])

  // useEffect(() => { // const subscription = watch((value, { name, type }) => console.log(value, name, type)) // return () => subscription.unsubscribe() // }, [watch])

  return (
    <div>
      <div className={'checkbox'}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CheckboxGroup list={checkList} ref={register} />
          {/*{errors.category && <p>{errors.category.message}</p>}*/}
          <br />
          <br />
          <Checkbox
            id={'id_checkbox'}
            name={'logged'}
            label={'로그인 상태 유지'}
            ref={register}
            error={errors.logged}
          />
          <br />
          <br />
          <Select
            name={'month'}
            options={monthList}
            defaultValue={'월'}
            ref={register}
            error={errors.month}
          />
          <br />
          <br />
          <div>
            <InputGroup title={'회원가입 양식'}>
              <RadioGroup name={'accountType'} list={accountTypeList} ref={register} />
              <Input
                type="text"
                id={'id_userid'}
                name={'userId'}
                label={'아이디'}
                ref={register}
                error={errors.userId}
              />
              <Input
                type="password"
                id={'id_password'}
                name={'userPassword'}
                label={'비밀번호'}
                ref={register}
                error={errors.userPassword}
              />
              <Input
                type="password"
                id={'id_confirmPassword'}
                name={'userConfirmPassword'}
                label={'비밀번호 확인'}
                ref={register}
                error={errors.userConfirmPassword}
              />
            </InputGroup>
          </div>
          <br />
          <br />
          <button type={'submit'}>로그인</button>
        </Form>
      </div>
    </div>
  )
}
export default FormPage
