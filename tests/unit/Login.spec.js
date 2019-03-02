import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'
// import Contacts from '@/views/Contacts.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
// import { actions, state, mutations } from '@/store'
// import { routes } from '@/router'

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueRouter)

// const router = new VueRouter({ routes })

describe('Login.vue', () => {
  const actions = {
    logUserIn: jest.fn()
  }
  const store = new Vuex.Store({
    state: {},
    actions
  })
  const wrapper = mount(Login, { localVue: Vue, store })

  it('Есть текст для пользователя', () => {
    expect(wrapper.find('h1').text()).toBe('Введите логин и пароль')
  })

  it('Есть кнопка для входа', () => {
    expect(wrapper.find('button').text()).toBe('Войти')
  })

  it('Если данные невалидны, нажатие кнопки приведет к ошибке', () => {
    wrapper.find('[aria-label="Логин"]').setValue('a')
    wrapper.find('[aria-label="Пароль"]').setValue('1')

    const button = wrapper.find('button')
    button.trigger('click')

    expect(wrapper.vm.valid).toBe(false)
  })

  it('Если данные валидны, то вызывает action', async () => {
    const login = 'vadim'
    const password = '1212'

    wrapper.find('[aria-label="Логин"]').setValue(login)
    wrapper.find('[aria-label="Пароль"]').setValue(password)

    const button = wrapper.find('button')
    button.trigger('click')

    expect(actions.logUserIn).toHaveBeenCalled()
  })
})
