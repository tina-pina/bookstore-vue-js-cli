import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import BookList from './views/BookList.vue'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home'
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/bookList',
      name: 'bookList',
      component: BookList
    },
  ]
})
