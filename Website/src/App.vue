<template>
  <div :class="`theme-${store.state.style}`">
    <header>
      <p>Minecraft Mods From <span>Z_Bo</span></p>
      <a-button shape="circle" @click="toggleStyle">
        <template #icon>
          <unicon name="moon" fill="white"></unicon>
        </template>
      </a-button>
    </header>
    <RouterView />
    <footer></footer>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import store from '@/store';

const toggleStyle = () => {
  store.commit("toggleStyle");
}

</script>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 146px;
  background-image: url("@/assets/img/land-bg.webp");
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  padding-top: 6px;

  p {
    font-weight: bold;
    font-size: 24px;
  }
}

header::before {
  content: " ";
  display: block;
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 127px;
  background-image: url("@/assets/img/grass_block_side.png");
  background-size: 32px;
}
</style>
