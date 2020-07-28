import React from 'react'
import logoImg from '../../assets/logoapp.svg'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

import { Title, FormCSS } from './styles'
type FormValues = {
  firstName: string
  lastName: string
  githubUsername: string
  email: string
  password: string
}

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = values => {
    axios
      .post('http://localhost:3003/users', values)
      .then(resp => {
        const { data } = resp
        if (data) {
          localStorage.setItem('app-token', data.email)
        }
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  return (
    <>
      <img src={logoImg} alt="Register" />
      <Title>Register</Title>
      <FormCSS onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Primeiro nome" name="firstName" ref={register} />
        <input placeholder="Sobrenome" name="lastName" ref={register} />
        <input
          placeholder="Nome de usuário github"
          name="gitHubUsername"
          ref={register}
        />
        <input placeholder="E-mail" name="email" ref={register} />
        <input
          placeholder="Password"
          type="password"
          name="password"
          ref={register}
        />
        <button type="submit">cadastrar</button>
      </FormCSS>
    </>
  )
}

export default Register