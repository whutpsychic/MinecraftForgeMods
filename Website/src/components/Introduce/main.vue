<template>
  <div class="inner-tab-introduce-can">
    <p v-for="(item, i) in props.data.contents" :key="i">{{ item }}</p>
  </div>
</template>

<script lang="ts" setup>
import { IntroduceData } from '@/data/dataType';

const props = defineProps({
  data: { type: IntroduceData, default: () => (new IntroduceData()) }
})

</script>

<style lang="scss" scoped>
.inner-tab-introduce-can {

  p {
    text-indent: 2em;
    margin-bottom: 0;
    font-size: 15px;
    line-height: 1.8em;
  }
}
</style>