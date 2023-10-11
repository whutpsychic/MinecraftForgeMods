import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/overview/main.vue'
import Introduce from '../views/introduce/main.vue'
import ZcutTrees from '../mods/zcut_trees/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ================== 总览 ==================
    {
      path: '/overview',
      component: Overview
    },
    // ================== 模组介绍页 ==================
    {
      path: '/introduce',
      component: Introduce,
      children: [
        {
          path: '/introduce/zcut_trees',
          component: ZcutTrees
        }
      ]
    },
    // ================== redirect ==================
    {
      path: '/',
      redirect: '/overview',
    },
    // ================== 404 ==================
    {
      // 找不到路由重定向到404页面
      path: "/:pathMatch(.*)",
      component: () => import("@/views/404/main.vue")
    }
  ]
})

export default router
