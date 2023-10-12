<template>
  <div class="inner-tab-design-can">
    <!-- -------------- -->
    <p class="purpose">主旨</p>
    <ul class="purpose-content">
      <li>{{ props.data.purpose }}</li>
    </ul>
    <!-- -------------- -->
    <p class="design">设计</p>
    <div class="design-block" v-for="(detail) in props.data.details" :key="detail.title">
      <p class="design-title">{{ detail.title }}</p>
      <ul class="design-content">
        <li v-for="(content, i) in detail.contents" :key="i">{{ content }}</li>
      </ul>
    </div>
    <!-- -------------- -->
    <div class="extra-text">
      <span>{{ props.data.extra }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DesignData } from '@/data/dataType';

const props = defineProps({
  data: { type: DesignData, default: () => ({}) }
})

</script>

<style lang="scss" scoped>
.inner-tab-design-can {

  p {
    font-weight: bold;
    font-size: 20px;
  }

  p.design-title {
    font-size: 15px;
  }

  .design-block {
    margin-left: 1.5em;
  }

  ul.purpose-content,
  ul.design-content {
    li {
      margin-left: 2em;
      margin-bottom: 0.5em;
      display: flex;
      align-items: center;
    }

    li::before {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-size: 20px;
    }

  }

  ul.purpose-content li::before {
    background-image: url('@/assets/img-minecraft/lantern.png');
  }

  ul.design-content li::before {
    background-image: url('@/assets/img-minecraft/compass.png');
  }

  .extra-text {
    margin-top: 30px;
    text-indent: 2em;
  }

}
</style>