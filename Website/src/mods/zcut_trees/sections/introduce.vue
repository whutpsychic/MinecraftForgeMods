<template>
  <div class="page-can">
    <div class="top-tabs">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="design" tab="设计">设计</a-tab-pane>
        <a-tab-pane key="introduce" tab="介绍">介绍</a-tab-pane>
        <a-tab-pane key="code" tab="代码">代码</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeKey = ref('design')

</script>

<style lang="scss" scoped>
.page-can {
  // background-color: orange;
  min-height: calc(100vh - 120px);
  padding: 20px 40px;
}
</style>