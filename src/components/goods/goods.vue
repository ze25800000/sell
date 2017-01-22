<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="menu">
        <li class="menu-list border-1px" v-for="item in goods">
          <span class="name">
            <span class="icon" v-if="item.type>-1">
              <icon :typeSize="4" :type="item.type"></icon>
            </span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref=foodsWrapper>
      <ul>
        <li class="foot-list" v-for="item in goods">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="foot-item">
              <div class="content-wrapper">
                <div class="icon">
                  <img :src="food.icon" width="64" height="64"/>
                </div>
                <div class="content-right-wrapper">
                  <h2 class="food-name">{{food.name}}</h2>
                  <p class="description" v-if="food.description">{{food.description}}</p>
                  <p class="sell-count">月售{{food.sellCount}} 好评率{{food.rating}}%</p>
                  <span class="price">￥{{food.price}}</span>
                  <span v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import icon from 'components/icon/icon';
  const ERR = 0;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        goods: []
      };
    },
    created(){
      this.$http.get('/api/goods').then((res) => {
        res = res.data;
        if (res.errno === ERR) {
          this.goods = res.data;
          this.$nextTick(() => {
            this._initScroll();
          });
        }
      });
    },
    methods: {
      _initScroll(){
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {});
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {});
      }
    },
    components: {
      icon
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .goods
    position: absolute
    top: 174px
    bottom: 64px
    width: 100%
    display: flex
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      .menu
        padding: 0 12px
        background-color: #f3f5f7
        .menu-list
          display: table
          width: 100%
          height: 54px
          border-1px(rgba(7, 17, 27, .1))
          font-size: 0
          &.last-child
            border: none
          .icon
            display: inline-block
            width: 12px
            height: 12px
            background-size: 12px 12px
            margin-right: 4px
          .name
            display: table-cell
            vertical-align: middle
            font-size: 12px
            color: rgb(77, 85, 93)
            line-height: 14px
    .foods-wrapper
      flex: 1
      .title
        font-size: 12px
        color: rgb(147, 153, 159)
        line-height: 26px
        background-color: #f3f5f7
        border-left: 3px solid #d9dde1
        padding-left: 14px
      .content-wrapper
        display: flex
        padding: 18px
        font-size: 0
        border-1px(rgba(7, 17, 27, .1))
        .icon
          flex: 0 0 54px
          margin-right: 10px
        .content-right-wrapper
          flex: 1
          .food-name
            font-size: 14px
            color: rgb(7, 17, 27)
            line-height: 14px
            margin-bottom: 8px
          .description, .sell-count
            color: rgb(147, 153, 159)
            line-height: 10px
            font-size: 10px
            margin-bottom: 8px
          .price
            color: rgb(240, 20, 20)
            font-weight: 700
            line-height: 24px
            font-size: 20px
          .oldPrice
            color: rgb(147, 153, 159)
            font-size: 10px
            line-height: 24px


</style>
