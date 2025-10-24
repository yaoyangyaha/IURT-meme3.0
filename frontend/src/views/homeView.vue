<script setup lang="ts">
import { onMounted,ref } from 'vue'

const activeIndex = ref('1')
const value = ref(3.7)
import type { ComponentSize } from 'element-plus'

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const state = ref('')

interface LinkItem {
  value: string
  link: string
}

const links = ref<LinkItem[]>([])

const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}

let timeout: ReturnType<typeof setTimeout>
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = (item: Record<string, any>) => {
  console.log(item)
}

onMounted(() => {
  links.value = loadAll()
})
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

          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="搜张图"
            @select="handleSelect"
            style="display: grid;
                    align-items: center; /* 垂直居中 */
                    height: 18%;"

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
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-card style="max-width: 480px">
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
                  score-template="{value} points"
                />
                <br/>
                <el-button type="primary" plain>详情</el-button>
                <el-button type="warning" plain>收藏</el-button>
              </template>
            </el-card>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-card style="max-width: 480px">
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
                  score-template="{value} points"
                />
                <br/>
                <el-button type="primary" plain>详情</el-button>
                <el-button type="warning" plain>收藏</el-button>
              </template>
            </el-card>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-card style="max-width: 480px">
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
                  score-template="{value} points"
                />
                <br/>
                <el-button type="primary" plain>详情</el-button>
                <el-button type="warning" plain>收藏</el-button>
              </template>
            </el-card>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-card style="max-width: 480px">
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
                  score-template="{value} points"
                />
                <br/>
                <el-button type="primary" plain>详情</el-button>
                <el-button type="warning" plain>收藏</el-button>
              </template>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-card style="max-width: 480px">
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
                  score-template="{value} points"
                />
                <br/>
                <el-button type="primary" plain>详情</el-button>
                <el-button type="warning" plain>收藏</el-button>
              </template>
            </el-card>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-card style="max-width: 480px">
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
                  score-template="{value} points"
                />
                <br/>
                <el-button type="primary" plain>详情</el-button>
                <el-button type="warning" plain>收藏</el-button>
              </template>
            </el-card>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-card style="max-width: 480px">
              <template #header>meme title</template>
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                style="width: 100%"
                alt="meme image"
              />
              alt="meme image"
              <template #footer>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value} points"
                />
                <br/>
                <el-button type="primary" plain>详情</el-button>
                <el-button type="warning" plain>收藏</el-button>
              </template>
            </el-card>
          </el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" />
            <el-card style="max-width: 480px">
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
                  score-template="{value} points"
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
          :size="size"
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

<style scoped>
el-row {
  margin-bottom: 20px;
}
el-row:last-child {
  margin-bottom: 0;
}
el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-menu--horizontal > el-menu-item:nth-child(1) {
  margin-right: auto;
}


</style>
