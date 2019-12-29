import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './login-form.scss'

interface LoginInfo {
  name: string
  room: string
}

const LoginForm: React.FC = () => {
  const [state, setState] = useState<LoginInfo>({ name: '', room: '' })
  const history = useHistory()

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (state.name && state.room) {
      history.push({
        pathname: '/dobble',
        search: '?' + new URLSearchParams({ name: state.name, room: state.room }).toString(),
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="login-form">
        <label>
          <span>Seu Nome:</span>
          <input
            value={state.name}
            onChange={({ target: { value } }) => {
              setState({ ...state, name: value })
            }}
          />{' '}
        </label>
        <label>
          <span>Nome da Sala:</span>
          <input
            value={state.room}
            onChange={({ target: { value } }) => {
              setState({ ...state, room: value })
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
