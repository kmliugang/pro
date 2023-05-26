import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    hidden: true
  },
  {
    path: '/vuex-persist',
    name: 'vuex-persist',
    component: () => import('../views/vuex-persist.vue'),
    meta: {
      title: 'vuex数据持久化'
    }
  },
  {
    path: '/elementForm',
    name: 'elementForm',
    component: () => import('../views/ElementForm.vue'),
    meta: {
      title: 'ElementUI-Form'
    }
  },
  {
    path: '/el-input',
    name: 'el-input',
    component: () => import('../views/ElInput.vue'),
    meta: {
      title: 'el-input'
    }
  },
  {
    path: '/FormJsx',
    name: 'FormJsxt',
    component: () => import('../views/FormJsx.vue'),
    meta: {
      title: 'FormJsx'
    }
  },
  {
    path: '/recordPageSize',
    name: 'recordPageSize',
    component: () => import('../views/RecordPageSize.vue'),
    meta: {
      title: 'recordPageSize'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
