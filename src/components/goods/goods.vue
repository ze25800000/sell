<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="menu">
        <li class="menu-list"
            v-for="(item,index) in goods" :class="{active:currentIndex===index}"
            @click="selectMenu(index,$event)"
        >
          <span class="name border-1px">
            <span class="icon" v-if="item.type>-1">
              <icon :typeSize="4" :type="item.type"></icon>
            </span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref=foodsWrapper>
      <ul>
        <li class="foot-list foot-list-hook" v-for="item in goods">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="">
              <div class="content-wrapper border-1px">
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
        goods: [],
        heightList: [],
        scrollY: 0
      };
    },
    computed: {
      currentIndex(){
        for (let i = 0; i < this.heightList.length; i++) {
          let height1 = this.heightList[i];
          let height2 = this.heightList[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      }
    },
    created(){
      this.$http.get('/api/goods').then((res) => {
        res = res.data;
        if (res.errno === ERR) {
          this.goods = res.data;
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
          });
        }
      });
    },
    methods: {
      selectMenu(index, event){
        if (!event._constructed) {
          return false;
        }
        let foodListHook = this.$refs.foodsWrapper.getElementsByClassName('foot-list-hook');
        let el = foodListHook[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      _initScroll(){
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3
        });
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _calculateHeight(){
        let foodListHook = this.$refs.foodsWrapper.getElementsByClassName('foot-list-hook');
        let height = 0;
        this.heightList.push(height);
        for (let i = 0; i < foodListHook.length; i++) {
          let item = foodListHook[i];
          height += item.clientHeight;
          this.heightList.push(height);
        }
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
        background-color: #f3f5f7
        .menu-list
          box-sizing border-box
          display: table
          width: 100%
          height: 54px
          font-size: 0
          padding: 0 12px
          &.last-child
            .name
              border: none
          &.active
            background-color: #fff
            font-weight: 700
            border: 0 none
          .icon
            display: inline-block
            width: 12px
            height: 12px
            background-size: 12px 12px
            margin-right: 2px
          .name
            display: table-cell
            vertical-align: middle
            font-size: 12px
            color: rgb(77, 85, 93)
            line-height: 14px
            border-1px(rgba(7, 17, 27, .1))
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
