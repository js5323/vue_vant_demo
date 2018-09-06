<template>
    <div class="main">
        <transition :name="transitionName">
            <router-view class="router-view"></router-view>
        </transition>

        <van-tabbar v-model="active">
            <van-tabbar-item icon="shop" to="/">Home</van-tabbar-item>
            <van-tabbar-item icon="chat" to="hello">Hello</van-tabbar-item>
            <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
            <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
const pathMap = {
  '/': 0,
  '/hello': 1
}
export default {
  data () {
    return {
      transitionName: 'slide-left',
      active: pathMap[this.$route.path] || 0
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style scoped>
    .main{
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>
