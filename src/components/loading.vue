<template>
    <div class="loading-wrap" v-if="show">
        <div class="loading-inner">
            加载中
        </div>
    </div>
</template>

<script>
  export default {
    name: 'loading',
    props: ['show']
  }
</script>

<style scoped lang="less">
    .loading-wrap{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background: rgba(255, 255, 255, 0.8);
    }
    .loading-inner{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        color: #333;
        font-size: 14px;
    }
</style>
