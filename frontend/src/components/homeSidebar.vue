<script setup>
import {
  Expand,
  Fold,
  Download,
  Setting,
  Edit,
} from "@element-plus/icons-vue";
import {onMounted, ref} from "vue";
import displayUtil from "@/lib/displayUtil.js";
import router from "@/router/index.js";
import axios from "axios";
import { ElMessage } from 'element-plus'

const prop = defineProps(["defaultActive"])
const defaultActive = prop.defaultActive
const expand = ref(false)
//const token = cookie.get('token')
onMounted(()=> expand.value = displayUtil.isXs)

// onMounted(() => {
//
//   axios.post('/api/admin', {'token':token})
//       .then(res => {
//         console.log(res);
//         if (res.data.success) {
//           console.log(res.data.success);
//           ElMessage({
//             message: '登录成功，欢迎！',
//             type: 'success',
//           })
//         }else{
//           console.log(res.data.success);
//           console.log(res.data.errcode);
//           if(res.data.errcode === 1){
//             cookie.remove('token');
//             ElMessage.error('请先登录！')
//             router.push({path:'/login'})
//           }else if(res.data.errcode === 2){
//             cookie.remove('token');
//             ElMessage.error('错误的token！')
//             router.push({path:'/login'})
//           }else if(res.data.errcode === 3){
//             cookie.remove('token');
//             ElMessage.error('请使用管理员的账号登录！')
//             router.push({path:'/login'})
//           }
//         }
//
//       })
// })

function gotoBasic() {
  router.push("/admin")
}
function gotoDownload() {
  router.push("/admin/download")
}
function gotoChange() {
  router.push("/admin/change")
}

</script>

<template>
  <el-scrollbar>
    <el-menu :default-active="defaultActive" class="menu" :collapse="expand">
      <el-menu-item disabled>
        <h3 v-if="expand"><el-icon><Setting /></el-icon></h3>
        <h3 v-else>EasyCNT管理员页面</h3>
      </el-menu-item>
      <el-menu-item index="1" @click="gotoBasic">
        <el-icon><Menu /></el-icon>
        <span>基本信息</span>
      </el-menu-item>
      <el-menu-item index="2" @click="gotoDownload">
        <el-icon><Download /></el-icon>
        <span>下载xlsx</span>
      </el-menu-item>
      <el-menu-item index="3" @click="gotoChange">
        <el-icon><Edit /></el-icon>
        <span>数据修改</span>
      </el-menu-item>
      <el-menu-item @click="expand = !expand">
        <el-icon v-if="expand"><Expand /></el-icon>
        <el-icon v-else><Fold /></el-icon>
        <span>收缩侧栏</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped lang="scss">
.menu {
  height: 100vh;
  .el-menu-item {
    padding-right: 32px;
  }
}
</style>
