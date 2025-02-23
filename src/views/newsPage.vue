<template>
  <div class="horizonta-scoll">
    <horizontal-scroll :list="list" style="display: flex">
      <template v-slot="{ data }">
        <div class="vertical-text">
          {{ data.name }}
        </div>
      </template>
    </horizontal-scroll>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { HorizontalScroll } from 'vue3-seamless-scroll'

const list = ref(
  Array.from({ length: 10 }, (_, i) => ({
    id: Date.now() + i + 1,
    name: `Vue3.0无缝滚动展示数据第${i + 1}条`,
  })),
)
</script>

<style>
.horizonta-scoll {
  overflow: hidden;
  width: 90px;
  height: 220px;
}

.vertical-text {
  height: 220px;
  writing-mode: vertical-lr;
  text-orientation: upright;
  line-height: 30px;
  display: inline-block;
}
</style>
