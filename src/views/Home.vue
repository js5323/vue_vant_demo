<template>
    <div class="home-index">
        <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
        />


        <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
        />


    </div>
</template>

<script>
import areaList from '@/data/area'
export default {
  name: 'home',
  data() {
    return {
      areaList,
      searchResult: []
    }
  },
  methods: {
    onSave() {
      this.$toast('save');
    },
    onDelete() {
      this.$toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>

<style scoped>
    .home {
        width: 375px;
        height: 100px;
        background-color: #000;
    }
</style>
