<template>
  <div id="app">
    <a-layout>
      <a-layout-header class="header" :style="{ paddingInline: '0', height: 'auto' }">
        <bili-banner />
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
            :style="{ height: '100%', borderRight: 0 }">
            <a-sub-menu :key="item.key" v-for="item in subList">
              <template #title>
                <span>
                  <user-outlined />
                  {{ item.title }}
                </span>
              </template>
              <a-menu-item :key="children.key" v-for="children in item.children">{{ children.title }}</a-menu-item>

            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
            <RouterView />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>

</template>
<script setup>
import { ref } from 'vue';
import BiliBanner from '@/components/bili-banner/index.vue'
const selectedKeys2 = ref(['home']);
const subList = ref([
  {
    key: 'me',
    title: '快速了解',
    icon: 'user-outlined',
    children: [
      {
        key: 'home',
        title: '本人介绍'
      },

    ]
  },
  {
    key: 'gadget',
    title: '小工具',
    icon: 'user-outlined',
    children: [
      {
        key: 'threeJs',
        title: 'threeJs'
      },

    ]
  },
  {
    key: 'game',
    title: '小游戏',
    icon: 'user-outlined',
    children: [
      {
        key: 'weiqi',
        title: '围棋'
      },

    ]
  }
])
const openKeys = ref(['me']);
</script>
<style scoped>
#id {
  height: 100%;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;

}

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>