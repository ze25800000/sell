<template>
  <div class="shopcart">
    <div class="content-wrapper">
      <div class="content-left" @click="toggleList">
        <div class="logo-wrapper">
          <div class="logo" :class="{highLight:totalCount>0}">
            <i class="icon-shopping_cart" :class="{highLight:totalCount>0}"></i>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{highLight:totalCount>0}">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right" @click.stop.prevent="pay">
        <div class="pay" :class="payClass">{{payDesc}}</div>
      </div>
    </div>
    <div class="ball-container">
      <div v-for="ball in balls">
        <transition name="drop" @before-enter="beforeDrop"
                    @enter="dropping"
                    @after-enter="afterDrop"
        >
          <div class="ball" v-show="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
      </div>
    </div>
    <transition name=fold>
      <div class="shopcart-list" v-show="listShow">
        <div class="header border-1px">
          <span class="title">购物车</span>
          <span class="empty" @click="empty">清空</span>
        </div>
        <div class="list-content" ref=listContent>
          <ul>
            <li class="food border-1px" v-for="food in selectFoods">
              <span class="name">{{food.name}}</span>
              <div class="price">￥{{food.price*food.count}}</div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="food"></cartcontrol>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="list-mask" @click="toggleList" v-show="listShow"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import BScroll from 'better-scroll';
  export default {
    data(){
      return {
        balls: [
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false}
        ],
        dropBalls: [],
        fold: true
      };
    },
    props: {
      selectFoods: {
        type: Array,
        default(){
          return [];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    computed: {
      totalPrice(){
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      },
      totalCount(){
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      payDesc(){
        let deff = this.minPrice - this.totalPrice;
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}起送`;
        } else if (this.totalPrice < this.minPrice) {
          return `还差￥${deff}起送`;
        } else if (this.totalPrice >= this.minPrice) {
          return `去结算`;
        }
      },
      payClass(){
        if (this.totalPrice < this.minPrice) {
          return 'not-enough';
        } else {
          return 'enough';
        }
      },
      listShow(){
        if (!this.totalCount) {
          this.fold = true;
          return false;
        }
        let show = !this.fold;
        if (show) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.listContent, {
                click: true
              });
            } else {
              this.scroll.refresh();
            }
          });
        }
        return show;
      }
    },
    methods: {
      drop(el){
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            return;
          }
        }
      },
      beforeDrop(el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22);
            el.style.display = '';
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },
      dropping(el, done) {
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight;
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(0,0,0)';
          el.addEventListener('transitionend', done);
        });
      },
      afterDrop(el) {
        let ball = this.dropBalls.shift();
        if (ball) {
          ball.show = false;
          el.style.display = 'none';
        }
      },
      toggleList(){
        if (!this.totalCount) {
          return;
        }
        this.fold = !this.fold;
      },
      empty(){
        this.selectFoods.forEach((food) => {
          food.count = 0;
        });
      },
      pay(){
        if (this.totalPrice < this.minPrice) {
          return;
        }
        window.alert(`请支付${this.totalPrice}元`);
      }
    },
    components: {
      cartcontrol
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .shopcart
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    z-index: 10
    .content-wrapper
      height: 46px
      display: flex
      background-color: #141d27
      .content-left
        font-size: 0
        flex: 1
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          width: 50px
          height: 50px
          border-radius: 50%
          background-color: #141d27
          margin-top: -10px
          margin-left: 12px
          .logo
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            width: 44px
            height: 44px
            border-radius: 50%
            background-color: #2b343c
            text-align: center
            display: table
            &.highLight
              background-color: rgb(0, 160, 220)
            .icon-shopping_cart
              font-size: 22px
              display: table-cell
              vertical-align: middle
              color: rgba(255, 255, 255, .4)
              &.highLight
                color: #ffffff
          .num
            position: absolute
            width: 24px
            height: 16px
            right: 0
            top: 0
            background-color: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0px rgba(0, 0, 0, .4)
            border-radius: 12px
            color: #ffffff
            font-weight: 700
            line-height: 16px
            font-size: 9px
            text-align: center
        .price
          vertical-align: top
          display: inline-block
          line-height: 22px
          font-weight: 700
          font-size: 16px
          margin-left: 12px
          color: rgba(255, 255, 255, .4)
          border-right: 1px solid rgba(255, 255, 255, .1)
          padding-right: 12px
          margin-top: 12px
          box-sizing border-box
          &.highLight
            color: #ffffff
        .desc
          display: inline-block
          line-height: 46px
          font-weight: 700
          color: rgba(255, 255, 255, .4)
          font-size: 12px
          margin-left: 12px

      .content-right
        flex: 0 0 105px
        .pay
          line-height: 46px
          font-size: 12px
          font-weight: 700
          color: rgba(255, 255, 255, .4)
          text-align: center
          background-color: #2b343c
          &.not-enough
            color: rgba(255, 255, 255, .4)
          &.enough
            color: #ffffff
            background-color: #00b43c

    .ball-container
      .ball
        position: fixed
        left: 32px
        bottom: 22px
        z-index: 200
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width: 16px
          height: 16px
          border-radius: 50%
          background: rgb(0, 160, 220)
          transition: all 0.4s linear
    .shopcart-list
      position: absolute
      left: 0
      top: 0
      width: 100%
      z-index: -1
      transform: translate3d(0, -100%, 0)
      &.fold-enter-active, &.fold-leave-active
        transition: all .5s
      &.fold-enter, &.fold-leave-active
        transform: translate3d(0, 0, 0)
      .header
        padding: 0 18px
        background-color: #f3f5f7
        border-1px(rgba(7, 17, 27, .1))
        .title
          font-size: 14px
          color: rgb(7, 17, 27)
          line-height: 40px
        .empty
          font-size: 14px
          color: rgb(0, 160, 220)
          line-height: 40px
          float: right
      .list-content
        padding: 0 18px
        background-color: #fff
        max-height: 217px
        overflow: hidden
        .food
          display: flex
          border-1px(rgba(7, 17, 27, .1))
          vertical-align: middle
          .name
            flex: 6
            vertical-align: middle
            font-size: 14px
            color: rgb(7, 17, 27)
            line-height: 48px
          .price
            flex: 1
            font-size: 14px
            font-weight: 700
            color: rgb(240, 20, 20)
            line-height: 48px
          .cartcontrol-wrapper
            margin-top: 6px
    .list-mask
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -2
      background-color: rgba(7, 17, 27, .6)
      &.fade-enter-active, &.fade-leave-active
        transition: opacity .5s
      &.fade-enter, &.fade-leave-active
        opacity: 0
</style>
