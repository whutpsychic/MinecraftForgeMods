<template>
  <div class="inner-tab-faq-can">
    <div v-for="(item, i) in data.contents" :key="i" class="faq-block">
      <div v-if="i > 0" class="spliter"></div>
      <p><span>问：</span>{{ item.q }}</p>
      <p><span>答：</span>{{ item.a }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FAQData } from '@/data/dataType';

const props = defineProps({
  data: { type: FAQData, default: () => (new FAQData()) }
})


</script>

<style lang="scss" scoped>
.inner-tab-faq-can {

  .faq-block {

    p {
      margin-bottom: 0;
      line-height: 2em;
    }

    span{
      font-weight: bold;
    }

    .spliter {
      margin: 20px 0;
      margin-right: 40px;
      // width: 100%;
      height: 1px;
      background-color: #ddd;
    }
  }
}
</style>