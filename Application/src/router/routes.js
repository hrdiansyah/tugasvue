
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'play', component: () => import('pages/Play.vue') },
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'fb', component: () => import('pages/fb.vue')},
      { path: 'cobainput', component: () => import('pages/cobainput.vue') },
      { path: 'todo', component: () => import('pages/PageTodo.vue') },
      { path: 'setting', component: () => import('pages/PageSetting.vue')},
      //EMPLOYEE
      { path: 'table', component: () => import('pages/Employees/index.vue')},
      { path: 'add', component: () => import('pages/Employees/add.vue')},
      { path: 'edit', component: () => import('pages/Employees/edit.vue')},
      { path: 'coba', component: () => import('pages/Employees/cobalist.vue')},
      //PROJEK
      { path: 'tblproject', component: () => import('pages/Projek/index.vue')},
      { path: 'addprojek', component: () => import('pages/Projek/add.vue')},
      { path: 'editprojek', component: () => import('pages/Projek/edit.vue')},
      { path: 'tampilprojek', component: () => import('pages/Projek/tampil.vue')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
