<!-- 仿哔哩哔哩 顶部组件 -->
<template>
    <div class="bili-banner">
        <div class="animateds-banner">
            <div class="layer">
                <img src="@/assets/img/1.png" height="184" data-height="360" data-width="9666" width="4957" />
            </div>
            <div class="layer">
                <img src="@/assets/img/2.png" height="184" data-height="360" data-width="9666" width="4957" />
            </div>
            <div class="layer">
                <img src="@/assets/img/3.png" height="166" data-height="360" data-width="3523" width="1626" />
            </div>
            <div class="layer">
                <img src="@/assets/img/4.png" height="180" data-height="360" data-width="2938" width="1476" />
            </div>
            <div class="layer">
                <img src="@/assets/img/5.png" height="64" data-height="139" data-width="556" width="256" />
            </div>
            <div class="layer">
                <img src="@/assets/img/6.png" height="86" data-height="302" data-width="734" width="210" />
            </div>
            <div class="layer">
                <img src="@/assets/img/7.png" height="129" data-height="180" data-width="1757" width="1261" />
            </div>
            <div class="layer">
                <img src="@/assets/img/8.png" height="83" data-height="116" data-width="1757" width="1261" />
            </div>
            <div class="layer">
                <img src="@/assets/img/9.png" height="141" data-height="346" data-width="497" width="203" />
            </div>
            <div class="layer">
                <img src="@/assets/img/10.png" height="105" data-height="256" data-width="146" width="59" />
            </div>
            <div class="layer">
                <img src="@/assets/img/11.png" height="117" data-height="254" data-width="602" width="277" />
            </div>
            <div class="layer">
                <img src="@/assets/img/12.png" height="184" data-height="360" data-width="4277" width="2193" />
            </div>
            <div class="layer">
                <img src="@/assets/img/13.png" height="150" data-height="327" data-width="933" width="430" />
            </div>
            <div class="layer">
                <img src="@/assets/img/14.png" height="217" data-height="353" data-width="740" width="455" />
            </div>
            <div class="layer">
                <img src="@/assets/img/15.png" height="184" data-height="360" data-width="1916" width="982" />
            </div>

            <canvas width="1677" height="159" style="position: absolute; top: 0px; left: 0px"></canvas>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { dynamicBanner } from './index'

onMounted(() => {
    dynamicBanner()
})
</script>
<style lang="less" scoped>
.bili-banner {
    margin: 0 auto;
    position: relative;
    z-index: 0;
    min-height: 155px;
    height: 9.375vw;
    min-width: 999px;
    background-color: pink;
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center 0;
    background-size: cover;
}

.animateds-banner {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}

.animateds-banner>.layer {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>