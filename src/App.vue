<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller" keep-alive></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';
  import {urlParse} from 'common/js/url';
  const ERR = 0;
  export default {
    data(){
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }
      };
    },
    created(){
      this.$http.get('/api/seller?id=' + this.seller.id).then((res) => {
        res = res.data;
        if (res.errno === ERR) {
          this.seller = Object.assign({}, this.seller, res.data);
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'common/stylus/mixin.styl'

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    text-align: center
    border-1px(rgba(7, 17, 27, .1))
    .tab-item
      flex 1
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
      .active
        color: rgb(240, 20, 20)

</style>
