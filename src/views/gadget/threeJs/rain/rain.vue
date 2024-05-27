<template>
    <div class="rain"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import ThreeJsRain from './rain.js'
onMounted(() => {
    new ThreeJsRain()
})
</script>
