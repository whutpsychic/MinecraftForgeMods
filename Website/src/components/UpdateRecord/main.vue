<template>
  <div class="inner-tab-update-can">
    <div v-for="(updateData, i) in data.reverse()" :key="i" class="update-block">
      <div v-if="i > 0" class="spliter"></div>
      <p class="dater">
        <span>更新日期：</span>{{ updateData.date }}
        <span class="version">版本号：</span>v{{ updateData.version }}
      </p>
      <ul>
        <li v-for="(item, j) in updateData.contents" :key="j">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UpadteData } from '@/data/dataType';

const props = defineProps({
  data: { type: Array<UpadteData>, default: () => ([]) }
})

</script>

<style lang="scss" scoped>
.inner-tab-update-can {
  .update-block {

    p {
      margin-bottom: 0;
      line-height: 2em;
    }

    span {
      font-weight: bold;
    }

    .version {
      margin-left: 1em;
    }
  
  }
}

ul,
li {
  list-style: disc;
  margin-left: 1em;
}
</style>