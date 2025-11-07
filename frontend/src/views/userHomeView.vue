<script setup lang="ts">
import { h,onMounted,ref } from 'vue'
import { ElNotification } from 'element-plus'
import router from "@/router";
const activeIndex = ref('1')
const value = ref(3.7)

const drawer = ref(false)
const creator = ref('xxx')
const uploadDate =ref('1145-01-04')
const shortInfo =ref('some thing about this picture, such as "FUCK YOU SCH" and "FUCK YOU JETBRAINS". yeah, Fuck Them All!!!')
const commentCnt = ref(114514)
const textarea = ref()
const state = ref('')
const handleSelect = (item: Record<string, unknown>) => {
  console.log(item)
}
const gotoUser = () => {
  router.push('/user')
}
const gotoHome = () => {
  router.push('/')
}
const gotoAdmin = () => {
  router.push('/admin')
}
const gotoUpload = () => {
  router.push('/upload')
}
const randomPic = () => {
  // need fill something.
}
const sortMode = ref('hot')
const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
]
const star = () => {
  ElNotification({
    title: '收藏',
    type: 'success',
    message: h('b', { style: 'color: gold' }, '收藏成功'),
  })
}
onMounted(() => {})


</script>

<template>
  <el-drawer v-model="drawer">
    <template #header>
      <h4>Meme Image</h4>
    </template>
    <template #default>
      <el-image style="width: 80%; text-align: center" :src="url"/>
      <el-row>
        <el-col :span="12">
          <el-text class="mx-1" type="primary" size="large" >上传者</el-text>
        </el-col>
        <el-col :span="12">
          <el-text class="mx-1" size="default" >{{creator}}</el-text>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-text class="mx-1" type="primary" size="large" >上传时间</el-text>
        </el-col>
        <el-col :span="12">
          <el-text class="mx-1" size="default" >{{uploadDate}}</el-text>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-text class="mx-1" type="primary" size="large" >图片简介</el-text>
        </el-col>
        <el-col :span="12">
          <el-text class="mx-1" size="default" >{{shortInfo}}</el-text>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-text class="mx-1" type="primary" size="large" >打分</el-text>
        </el-col>
        <el-col :span="12">
          <el-rate v-model="value" allow-half />
        </el-col>
      </el-row>
      <el-divider />
      <div>
        <h3>评论区</h3>
        <el-text class="mx-1" type="info" size="small">共 {{commentCnt}} 条评论</el-text>
        <el-row :gutter="20">
          <el-col :span="4"><el-avatar :size="50" :src="url" /></el-col>
          <el-col :span="14">
            <el-input
              v-model="textarea"
              style="width: 240px"
              :rows="2"
              type="textarea"
              placeholder="友善评论，温暖你我心"
            />
          </el-col>
          <el-col :span="4"><el-button type="primary" round style="margin-top: 8px;">发送评论</el-button></el-col>
        </el-row>
      </div>
    </template>
  </el-drawer>
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
          <el-menu-item index="0" alt="IURT Meme3.0" href="#">
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

          <el-menu-item index="2" @click="gotoHome">首页</el-menu-item>
          <el-sub-menu index="3">
            <template #title>我的</template>
            <el-menu-item index="2-1" @click="gotoUser">用户中心</el-menu-item>
            <el-menu-item index="2-2" @click="randomPic">随机一张</el-menu-item>
            <el-menu-item index="2-3" @click="gotoAdmin">管理中心</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title @click="gotoUpload">上传</template>
              <el-menu-item index="2-4-1">上传图片</el-menu-item>
              <el-menu-item index="2-4-2">上传文案</el-menu-item>
              <el-menu-item index="2-4-3">历史上传</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-main>

      </el-main>
      <el-footer>
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
  margin-left:10px;
  margin-right:10px;
}
.sort-box{
  text-align: center;
}
</style>
