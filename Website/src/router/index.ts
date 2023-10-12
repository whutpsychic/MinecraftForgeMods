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
        { path: '/introduce/zbeautiful_chicken', component: () => import("@/mods/zbeautiful_chicken/main.vue") },
        { path: '/introduce/zchain_dig', component: () => import("@/mods/zchain_dig/main.vue") },
        { path: '/introduce/zcopy_enchantedbook', component: () => import("@/mods/zcopy_enchantedbook/main.vue") },
        { path: '/introduce/zcraft_spawneregg', component: () => import("@/mods/zcraft_spawneregg/main.vue") },
        { path: '/introduce/zcritical_hit', component: () => import("@/mods/zcritical_hit/main.vue") },
        { path: '/introduce/zcut_trees', component: ZcutTrees },
        { path: '/introduce/zdirect_enchant', component: () => import("@/mods/zdirect_enchant/main.vue") },
        { path: '/introduce/zdynamic_light', component: () => import("@/mods/zdynamic_light/main.vue") },
        { path: '/introduce/zeasier_material', component: () => import("@/mods/zeasier_material/main.vue") },
        { path: '/introduce/zempaire_military', component: () => import("@/mods/zempaire_military/main.vue") },
        { path: '/introduce/zepic_weapon', component: () => import("@/mods/zepic_weapon/main.vue") },
        { path: '/introduce/zflooring', component: () => import("@/mods/zflooring/main.vue") },
        { path: '/introduce/zhappy_farmer', component: () => import("@/mods/zhappy_farmer/main.vue") },
        { path: '/introduce/zhead_looter', component: () => import("@/mods/zhead_looter/main.vue") },
        { path: '/introduce/zkeep_inventory', component: () => import("@/mods/zkeep_inventory/main.vue") },
        { path: '/introduce/zmore_enchants', component: () => import("@/mods/zmore_enchants/main.vue") },
        { path: '/introduce/zmore_equipments', component: () => import("@/mods/zmore_equipments/main.vue") },
        { path: '/introduce/znative_spawner', component: () => import("@/mods/znative_spawner/main.vue") },
        { path: '/introduce/zunbreaking', component: () => import("@/mods/zunbreaking/main.vue") },
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
