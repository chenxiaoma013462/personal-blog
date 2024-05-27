<template>
    <div class="demo"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import ThreeJsDemo from './demo.js'
onMounted(() => {
    new ThreeJsDemo()
})
</script>
