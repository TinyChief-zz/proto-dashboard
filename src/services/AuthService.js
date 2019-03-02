const users = [
  {
    name: 'Vadim Yuldashbaev',
    login: 'vadim',
    password: '1212',
    role: 'admin'
  },
  {
    name: 'John Smith',
    login: 'john',
    password: '2323',
    role: 'customer'
  }
]

export function tryToLogin (params) {
  if (!params.login && !params.password) {
    return {
      status: 'error',
      message: 'Логин и пароль обязательны!'
    }
  }

  const user = users.find(el => {
    if (el.login === params.login && el.password === params.password) {
      return true
    }
  })

  if (user) {
    return {
      status: 'ok',
      message: 'Пользователь найден.',
      userData: {
        ...user
      }
    }
  } else {
    return {
      status: 'notFound',
      message: 'Пользователь не найден.'
    }
  }
}
