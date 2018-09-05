<template>
    <div class="home-index">
        <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
        />

        <div class="home"></div>

        <van-button :block="true" type="primary">hello</van-button>
        <van-button :block="true" type="danger">hello</van-button>
        <van-button :block="true" type="default">hello</van-button>
        <van-button :block="true" type="warning">hello</van-button>

        <van-tabbar v-model="active">
            <van-tabbar-item icon="shop">标签</van-tabbar-item>
            <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
            <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
            <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
    .home {
        width: 375px;
        height: 100px;
        background-color: #000;
    }
</style>
