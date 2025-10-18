<script setup lang="ts">
import { ref } from 'vue'
import '@/components/homeSidebar.vue'
//import HomeSidebar from "components/homeSidebar.vue";
const activeIndex = ref('1')
const expand = ref(false)
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
         <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
          >
            <el-menu-item index="0">
              <img
                style="width: 100px"
                src="/images/logo.png"
                alt="IURT Meme"
              />
            </el-menu-item>
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
              <template #title>Workspace</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-scrollbar>
            <el-menu  class="menu" :collapse="expand">
            <el-menu-item disabled>
              <h3 v-if="expand"><el-icon><Setting /></el-icon></h3>
              <h3 v-else>IURT Meme</h3>
            </el-menu-item>
            <el-menu-item index="1" @click="">
              <el-icon><Menu /></el-icon>
              <span>浏览</span>
            </el-menu-item>
            <el-menu-item index="2" @click="">
              <el-icon><Download /></el-icon>
              <span>随便一张</span>
            </el-menu-item>
            <el-menu-item index="3" @click="">
              <el-icon><Edit /></el-icon>
              <span>我的</span>
            </el-menu-item>
            <el-menu-item @click="expand = !expand">
              <el-icon v-if="expand"><Expand /></el-icon>
              <el-icon v-else><Fold /></el-icon>
              <span>收缩侧栏</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
