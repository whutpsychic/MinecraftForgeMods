<template>
  <div :class="`theme-${store.state.style}`">
    <header>
      <div class="top-header">
        <!-- top section -->
        <p>Minecraft Mods(Java Edition) From <span>Z_Bo</span></p>
        <a-button shape="circle" @click="toggleStyle">
          <template #icon>
            <unicon name="moon" fill="white"></unicon>
          </template>
        </a-button>
      </div>
      <div class="title-section">
        <p>{{ store.state.modeName }}</p>
      </div>
    </header>
    <main class="main-body">
      <RouterView />
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import store from '@/store/index';

const toggleStyle = () => {
  store.commit("toggleStyle");
}

</script>

<style lang="scss" scoped>
header {
  height: 120px;
}

.top-header {
  width: 100vw;
  background-image: url("@/assets/img/land-bg.webp");
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
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
}

footer {}
</style>
