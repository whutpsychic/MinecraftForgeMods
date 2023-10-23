<template>
  <main>
    <a-table class="clickable-table" :dataSource="tableData" :pagination="pagination" :customRow="customRow">
      <a-table-column key="name" title="模组名称" data-index="name" :width="150" />
      <a-table-column key="range" title="适用范围" data-index="range" :width="150">
        <template #customRender="{ record }">
          <a-tag color="#f50">{{ renderCellTextByOptions(record.range, rangeDictionary) }}</a-tag>
        </template>
      </a-table-column>
      <a-table-column key="type" title="模组类型" data-index="type" :width="150">
        <template #customRender="{ record }">
          <a-tag :color="getColorFromDictionary(record.type, typeDictionary)">{{
            renderCellTextByOptions(record.type, typeDictionary) }}</a-tag>
        </template>
      </a-table-column>
      <a-table-column key="version" title="模组版本" data-index="version" :width="150" />
      <a-table-column key="state" title="模组状态" data-index="state" :width="150">
        <template #customRender="{ record }">
          <span :style="`color:${getColorFromDictionary(record.state, stateDictionary)};`">{{
            renderCellTextByOptions(record.state, stateDictionary) }}</span>
        </template>
      </a-table-column>
      <a-table-column key="versions" title="支持的游戏版本" data-index="versions" :width="300">
        <template #customRender="{ record }">
          <a-tag v-for="(v) in record.versions" :key="v" color="blue">{{ v }}</a-tag>
        </template>
      </a-table-column>
      <a-table-column key="price" title="售价" data-index="price" :width="120">
        <template #customRender="{ record }">
          <div class="price-can">
            <img v-if="record.priceType === 'diamond'" alt="钻" src="@/assets/img-minecraft/diamond.png" />
            <img v-else-if="record.priceType === 'emerald'" alt="绿" src="@/assets/img-minecraft/emerald.png" />
            <span>{{ record.price || "免费" }}</span>
          </div>
        </template>
      </a-table-column>
      <a-table-column key="reasons" title="未过审原因" data-index="reasons">
        <template #customRender="{ record }">
          <span>{{ record.reasons || " - " }}</span>
        </template>
      </a-table-column>
    </a-table>
  </main>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import store from "@/store/index"
import { LeftMenuData } from "@/data/main"
import { renderCellTextByOptions, getColorFromDictionary } from "@/utils/tool"
import { rangeDictionary, typeDictionary, stateDictionary } from '@/data/dictionary/overview'

const router = useRouter();

// 重新处理的表格数据
const tableData = LeftMenuData

const pagination = {
  total: LeftMenuData.length,
  showQuickJumper: true,
  showTotal: (total: string, range: string) => `${range[0]}-${range[1]} 条，共 ${total} 条`
}

// ======================== 渲染区 ========================
const customRow = (record: any) => {
  return {
    // 点击行
    onClick: (event: any) => {
      // 记录当前模组名
      store.commit("setModeName", record.name);
      // 前往模组相关页
      router.push(`/introduce${record.router}`);
    },
  }
}

</script>

<style lang="scss" scoped>
main {
  background-color: #fff;
  margin: 0 20px;
}

.price-can {
  display: flex;
  align-items: center;
}

// 二级窄页
@media (max-width: 1279px) {}

// 一级窄页(移动端)
@media (max-width: 767px) {}
</style>
