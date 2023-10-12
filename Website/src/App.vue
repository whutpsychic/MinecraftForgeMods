<template>
  <div :class="`main-app-container theme-${store.state.style}`">
    <header>
      <div class="top-header">
        <!-- top section -->
        <p class="title-text" @click="backToHome">Minecraft Mods(Java Edition) From <span>Z_Bo</span></p>
        <a-button shape="circle" @click="toggleStyle">
          <template #icon>
            <unicon name="moon" fill="white"></unicon>
          </template>
        </a-button>
      </div>
      <div class="title-section">
        <p>{{ store.state.modeName }}</p>
        <a-tag v-for="(ver) in vers" :key="ver" color="#f50">{{ ver }}</a-tag>
      </div>
    </header>
    <main class="main-body">
      <RouterView />
    </main>
    <footer>
      <p>Copyright ©2021-2099 Z_Bo, All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { RouterView, useRouter } from 'vue-router';
import store from '@/store/index';
import { getVersionsByModeName } from '@/utils/tool'

const router = useRouter()

const toggleStyle = () => {
  store.commit("toggleStyle");
}

const backToHome = () => {
  router.replace("/")
}

const vers = computed(() => {
  return getVersionsByModeName(store.state.modeName)
})

</script>

<style lang="scss" scoped>
header {
  height: 120px;
}

.title-text {
  cursor: pointer;
}

.top-header {
  width: 100vw;
  background-image: url("@/assets/img/land-bg.webp");
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px 0 20px;
  padding-top: 6px;
  overflow: hidden;

  p {
    font-weight: bold;
    font-size: 24px;
  }
}

.top-header::before {
  content: " ";
  display: block;
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 127px;
  background-image: url("@/assets/img-minecraft/grass_block_side.png");
  background-size: 32px;
}

.title-section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  p {
    font-weight: bold;
    font-size: 36px;
    color: lightblue;
    margin-bottom: 0;
    letter-spacing: 4px;
    margin-right: 16px;
  }
}

.title-section::before {
  content: "";
  display: block;
  width: 150px;
  height: 42px;
  margin-right: 16px;
  background-image: url("@/assets/img/wiki_logo.png");
  background-size: 100%;
}

.main-body {
  // overflow: hidden;
  min-height: calc(100vh - 200px);
}

footer {
  height: 80px;
  padding-top: 20px;
  background-image: url("@/assets/img-minecraft/stone.png");
  background-size: 32px;
  display: flex;
  justify-content: center;

  p {
    margin-bottom: 0;
    color: white;
  }
}
</style>
