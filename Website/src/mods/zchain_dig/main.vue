<template>
  <div class="page-can">
    <div class="top-tabs">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="design" tab="设计">
          <Design :data="designData" />
        </a-tab-pane>
        <a-tab-pane key="introduce" tab="介绍">
          <Introduce :data="introduceData" />
          <div class="spliter" />
          <p>改建位置图示如下</p>
          <img alt="i" :src="img1" />
          <img alt="i" :src="img2" />
          <img alt="i" :src="img3" />
          <img alt="i" :src="img4" />
          <p>1.16.x 版本以下的改建位置图示如下</p>
          <img alt="i" :src="img5" />
          <img alt="i" :src="img6" />
        </a-tab-pane>
        <a-tab-pane key="update" tab="更新记录">
          <UpdateRecord :data="updateData" />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Design, Introduce, UpdateRecord } from '@/components'
import { designData, introduceData, updateData } from './data'
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from "./img/4.png"
import img5 from "./img/5.png"
import img6 from "./img/6.png"

const activeKey = ref('design')

</script>

<style lang="scss" scoped>
.page-can {
  min-height: calc(100vh - 120px);
  padding: 20px 40px;
}

img {
  height: 380px;
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>