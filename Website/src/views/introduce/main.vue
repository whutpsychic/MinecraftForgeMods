<template>
  <main>
    <div class="left-menu">
      <a-menu v-model:selectedKeys="state.selectedKeys" style="width: 256px" mode="inline" :open-keys="state.openKeys"
        @select="onSelectMenu">
        <a-sub-menu key="1.18.1">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>1.18.1</template>
          <a-menu-item
            v-for="(it) in LeftMenuData.filter((_it) => { return _it.versions.findIndex((_it_) => { return _it_ === '1.18.1' }) > -1 })"
            :key="it.name">{{ it.name }}</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="1.16.4">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>1.16.4</template>
          <a-menu-item
            v-for="(it) in LeftMenuData.filter((_it) => { return _it.versions.findIndex((_it_) => { return _it_ === '1.16.4' }) > -1 })"
            :key="it.name">{{ it.name }}</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="1.12.2">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>1.12.2</template>
          <a-menu-item
            v-for="(it) in LeftMenuData.filter((_it) => { return _it.versions.findIndex((_it_) => { return _it_ === '1.12.2' }) > -1 })"
            :key="it.name">{{ it.name }}</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="main-content">
      <RouterView />
    </div>
    <!-- 未来预留的广告位 -->
    <!-- <div class="right-addons"></div> -->
  </main>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import store from '@/store/index'
import { AppstoreOutlined } from '@ant-design/icons-vue';
import LeftMenuData from '@/data/left-menu';

const router = useRouter()

const state = reactive({
  openKeys: ['1.18.1'],
  selectedKeys: [store.state.modeName],
});

const onSelectMenu = (item: any) => {
  // 根据名称找到路径
  const target = LeftMenuData.find((it) => {
    return it.name === item.key
  })
  store.commit('setModeName', item.key)
  const path = target?.router
  router.push(`/introduce${path}`)
}

</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.left-menu {
  // background-color: orange;
  width: 256px;
  height: calc(100vh - 120px);
  overflow-x: hidden;
  overflow-y: hidden;
}

.left-menu:hover {
  overflow-y: auto;

}

.main-content {
  background-color: red;
  width: calc(100vw - 256px);
  min-height: calc(100vh - 120px);
}

.right-addons {
  background-color: blue;
  width: 20vw;
  min-height: 700px;
}

// 此时仅显示两列
@media (max-width: 1279px) {
  .left-menu {
    width: 30vw;
  }

  .main-content {
    width: 70vw;
  }

  .right-addons {
    display: none;
  }
}

// 此时一列展示
@media (max-width: 767px) {
  main {
    flex-wrap: wrap;
  }

  .left-menu {
    width: 100vw;
  }

  .main-content {
    width: 100vw;
  }

  .right-addons {
    display: none;
  }
}
</style>