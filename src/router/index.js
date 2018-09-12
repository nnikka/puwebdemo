import Vue from 'vue'
import Router from 'vue-router'
import RegisterCompany from '@/pages/RegisterCompany'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register_company',
      name: 'RegisterCompany',
      component: RegisterCompany
    }
  ]
})
