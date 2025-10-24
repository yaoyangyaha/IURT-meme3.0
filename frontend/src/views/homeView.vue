<script setup lang="ts">
import { onMounted,ref } from 'vue'

const activeIndex = ref('1')
const value = ref(3.7)

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const state = ref('')

const handleSelect = (item: Record<string, unknown>) => {
  console.log(item)
}

onMounted(() => {})
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
              style="width: 50px"
              src="../images/logo.png"
              alt="IURT Meme3.0"
            />
          </el-menu-item>

          <el-input
            v-model="state"
            placeholder="搜张图"
            @select="handleSelect"
            class="search-input"
          />

          <el-menu-item index="2">首页</el-menu-item>
          <el-sub-menu index="3">
            <template #title>我的</template>
            <el-menu-item index="2-1">用户中心</el-menu-item>
            <el-menu-item index="2-2">随机一张</el-menu-item>
            <el-menu-item index="2-3">管理中心</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>上传</template>
              <el-menu-item index="2-4-1">上传图片</el-menu-item>
              <el-menu-item index="2-4-2">上传文案</el-menu-item>
              <el-menu-item index="2-4-3">历史上传</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-main>
        <el-row :gutter="8">
          <el-col :span="6" v-for="i in 20" :key="i">
            <el-card class="img-card" shadow="hover" style="max-width: 480px">
              <template #header>meme title</template>
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                style="width: 100%"
                alt="meme image"
              />
              <template #footer>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value} 分"
                />
                <br/>
                <el-button type="primary" plain>详情</el-button>
                <el-button type="warning" plain>收藏</el-button>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[50, 100, 150, 200]"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
        <el-divider />
        <div style="text-align: center;">
          IURT Meme3.0
          <br/>
          Licensed under the MIT License.
          <br/>
          by <el-link type="primary" href="https://github.com/schlibra" target="_blank">SCH</el-link> and <el-link type="primary" href="https://github.com/yaoyangyaha" target="_blank">Yaoyangyaha</el-link>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
el-row {
  margin-bottom: 20px;
}
el-row:last-child {
  margin-bottom: 0;
}
el-col {
  border-radius: 4px;
}
.el-menu--horizontal > el-menu-item:nth-child(1) {
  margin-right: auto;
}

.img-card {
  margin-bottom: 8px;
}
.search-input {
  height: 70%;
  margin-top: 8px;
}
</style>
