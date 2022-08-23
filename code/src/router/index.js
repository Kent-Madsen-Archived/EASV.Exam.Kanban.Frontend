import { createRouter, createWebHistory }
  from 'vue-router';

import HomeView
  from '../views/HomeView.vue';

const routes =
[
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "registration" */ '../views/RegistrationView.vue')
  },
  {
    path: '/workspace',
    name: 'Workspace',
    component: () => import(/* webpackChunkName: "workspace" */ '../views/WorkspaceView.vue')
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: () => import(/* webpackChunkName: "documentation" */ '../views/DocumentationView.vue')
  }
];

const router = createRouter(
{
  history: createWebHistory( process.env.BASE_URL ),
  routes
  }
);

export default router;
