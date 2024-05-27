<template>
  <div id="app">
    <a-layout>
      <a-layout-header class="header" :style="{ paddingInline: '0', height: 'auto' }">
        <bili-banner />
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <a-menu v-model:openKeys="openKeys" mode="inline" :style="{ height: '100%', borderRight: 0 }"
            v-model:selectedKeys="selectedKeys" :inline-collapsed="collapsed" :items="items"
            @select="handleSelect"></a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item v-for="item in breadcrumb" :key="item">{{ item }}</a-breadcrumb-item>
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
import { ref, h } from 'vue';
import {
  RocketTwoTone, MehTwoTone, ToolTwoTone
} from '@ant-design/icons-vue';
import BiliBanner from '@/components/bili-banner/index.vue'
import { RouterView, useRouter } from 'vue-router';
const router = useRouter();
const collapsed = ref(false);
const selectedKeys = ref(['home']);
const items = ref([
  {
    key: 'Home',
    icon: () => h(MehTwoTone),
    label: '了解一下',
    title: '了解一下',
    children: [
      {
        key: 'Index',
        label: '本人简介',
        title: '本人简介',
      },
    ],
  },
  {
    key: 'Game',
    icon: () => h(RocketTwoTone),
    label: '小游戏',
    title: '小游戏',
    children: [
      {
        key: 'WeiQi',
        label: '围棋',
        title: '围棋',
      },
    ],
  },
  {
    key: 'Gadget',
    icon: () => h(ToolTwoTone),
    label: '小工具',
    title: '小工具',
    children: [
      {
        key: 'ThreeJs',
        label: 'ThreeJs',
        title: 'ThreeJs',
        children: [
          {
            key: 'ThreeJsRain',
            label: '下雨特效',
            title: '下雨特效',
          },

        ],
      },
    ],
  },
]);
const openKeys = ref(['me']);
const breadcrumb = ref(['home', 'me']);
const handleSelect = (e) => {
  let key = e.key;
  selectedKeys.value = [key];
  breadcrumb.value = e.keyPath;
  console.log('key', e);
  router.push({ name: key });

};
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