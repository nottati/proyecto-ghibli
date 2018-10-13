import Vue from 'vue'
import Router from 'vue-router'
import Lista from '@/components/Lista'
import Pelicula from '@/components/Pelicula'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lista',
      component: Lista
    },
    {
      path: '/:idPelicula',
      name: 'Pelicula',
      component: Pelicula,
    
    },
    
    
    /*const User = {
      template: '<div>User</div>'
    }
    
    const router = new VueRouter({
      routes: [
        // dynamic segments start with a colon
        { path: '/user/:id', component: User }
      ]
    })*/
  ]
})
