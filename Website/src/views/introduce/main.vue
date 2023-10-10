<template>
  <main>
    <div class="left-menu"></div>
    <div class="main-content"></div>
    <!-- 未来预留的广告位 -->
    <!-- <div class="right-addons"></div> -->
  </main>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.left-menu {
  background-color: orange;
  width: 20vw;
  height: calc(100vh - 120px);
}

.main-content {
  background-color: red;
  width: 80vw;
  min-height: calc(100vh - 120px);
}

.right-addons {
  background-color: blue;
  width: 20vw;
  min-height: 700px;
}

// 此时仅显示两列
@media (max-width: 1279px) {
  .left-menu {
    width: 30vw;
  }

  .main-content {
    width: 70vw;
  }

  .right-addons {
    display: none;
  }
}

// 此时一列展示
@media (max-width: 767px) {
  main {
    flex-wrap: wrap;
  }

  .left-menu {
    width: 100vw;
  }

  .main-content {
    width: 100vw;
  }

  .right-addons {
    display: none;
  }
}
</style>