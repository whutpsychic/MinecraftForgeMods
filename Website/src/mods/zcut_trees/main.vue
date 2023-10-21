<template>
  <div class="page-can">
    <div class="top-tabs">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="design" tab="设计">
          <Design :data="designData" />
        </a-tab-pane>
        <a-tab-pane key="introduce" tab="介绍">
          <Introduce :data="introduceData" />
        </a-tab-pane>
        <a-tab-pane key="FAQ" tab="FAQ">
          <FAQ :data="faqData" />
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
import { Design, Introduce, FAQ, UpdateRecord } from '@/components'
import { designData, introduceData, faqData, updateData } from './data'

const activeKey = ref('design')

</script>

<style lang="scss" scoped>
.page-can {
  // background-color: orange;
  min-height: calc(100vh - 120px);
  padding: 20px 40px;
}
</style>