<template>
  <transition name="slide">
    <div class="food" v-show="showFlag" ref=food>
      <div class="food-content">
        <div class="back icon-arrow_lift" @click="back"></div>
        <div class="image-header">
          <img :src="food.image" height="375">
        </div>
        <div class="title-wrapper">
          <h1 class="name">{{food.name}}</h1>
          <span class="sell-count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
          <div class="price">￥{{food.price}}<s class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</s></div>
          <div class="cartcontrol-wrapper">
            <cartcontrol @add="addFood" :food=food></cartcontrol>
          </div>
          <transition name="fade">
            <div @click.stop.prevent="addFirst($event)" class="buy" v-show="!food.count||food.count===0">加入购物车</div>
          </transition>
        </div>
        <split></split>
        <div class="description-wrapper">
          <h1 class="title">商品介绍</h1>
          <p class="content">{{food.info}}</p>
        </div>
        <split></split>
        <h1 class="title-content">商品评价</h1>
        <ratingselect :selectType="selectType"
                      :onlyContent="onlyContent"
                      :desc="desc"
                      :ratings="food.ratings"
                      @select="selectRating"
                      @toggle="toggleContent"
        ></ratingselect>
        <div class="rating-wrapper">
          <ul v-show="food.ratings && food.ratings.length">
            <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in food.ratings"
                class="rating-item border-1px">
              <div class="user">
                <span class="name">{{rating.username}}</span>
                <img class="avatar" width="12" height="12" :src="rating.avatar">
              </div>
              <div class="time">{{rating.rateTime | formatDate}}</div>
              <p class="text">
                <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
              </p>
            </li>
          </ul>
          <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import split from 'components/split/split';
  import BScroll from 'better-scroll';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import ratingselect from 'components/ratingselect/ratingselect';
  import {formatDate} from '../../common/js/date';
  const ALL = 2;
  export default {
    props: {
      food: {
        type: Object
      }
    },
    data(){
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      };
    },
    methods: {
      show(){
        this.showFlag = true;
        this.selectType = 2;
        this.onlyContent = false;
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },
      back(){
        this.showFlag = false;
      },
      addFirst(event){
        if (!event._constructed) {
          return;
        }
        this.$emit('add', event.target);
        Vue.set(this.food, 'count', 1);
      },
      addFood(target){
        this.$emit('add', target);
      },
      needShow(type, text){
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      },
      toggleContent(){
        this.onlyContent = !this.onlyContent;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      selectRating(type){
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      }
    },
    filters: {
      formatDate(time){
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    components: {
      split,
      cartcontrol,
      ratingselect
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 46px
    z-index: 1
    width: 100%
    background-color: #fff
    transform: translate3d(0, 0, 0)
    &.slide-enter-active, &.slide-leave-active
      transition: all .2s
    &.slide-enter, &.slide-leave-active
      transform: translate3d(100%, 0, 0)
    .icon-arrow_lift
      position: absolute
      left: 12px
      top: 12px
      padding: 6px
      z-index: 1
      color: #ffffff
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
    .title-wrapper
      position: relative
      padding: 18px
      .name
        font-size: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
        line-height: 14px
      .sell-count, .rating
        font-size: 10px
        color: rgb(147, 153, 159)
        line-height: 10px
        margin-top: 8px
      .rating
        margin-left: 12px
      .price
        font-size: 14px
        font-weight: 700
        color: rgb(240, 20, 20)
        line-height: 24px
        margin-top: 18px
        .oldPrice
          font-size: 10px
          font-weight: normal
          color: rgb(147, 153, 159)
          padding-left: 12px
      .buy
        position: absolute
        right: 18px
        bottom: 18px
        width: 74px
        height: 24px
        background-color: rgb(0, 160, 220)
        border-radius: 12px
        font-size: 10px
        text-align: center
        line-height: 24px
        color: #ffffff
        opacity: 1
        &.fade-enter-active, &.fade-leave-active
          transition: all .1s
        &.fade-enter, &.fade-leave-active
          opacity: 0
      .cartcontrol-wrapper
        position: absolute
        right: 18px
        bottom: 13px
    .description-wrapper
      padding: 18px
      .title
        font-size: 14px
        color: rgb(7, 17, 27)
        line-height: 14px
      .content
        font-size: 12px
        color: rgb(77, 85, 93)
        line-height: 24px
        margin-top: 6px
        padding: 0 8px
    .rating-wrapper
      padding: 0 18px
      .rating-item
        position: relative
        padding: 16px 0
        border-1px(rgba(7, 17, 27, 0.1))
        .user
          position: absolute
          right: 0
          top: 16px
          line-height: 12px
          font-size: 0
          .name
            display: inline-block
            margin-right: 6px
            vertical-align: top
            font-size: 10px
            color: rgb(147, 153, 159)
          .avatar
            border-radius: 50%
        .time
          margin-bottom: 6px
          line-height: 12px
          font-size: 10px
          color: rgb(147, 153, 159)
        .text
          line-height: 16px
          font-size: 12px
          color: rgb(7, 17, 27)
          .icon-thumb_up, .icon-thumb_down
            margin-right: 4px
            line-height: 16px
            font-size: 12px
          .icon-thumb_up
            color: rgb(0, 160, 220)
          .icon-thumb_down
            color: rgb(147, 153, 159)

      .no-rating
        padding: 16px 0
        font-size: 12px
        color: rgb(147, 153, 159)

  .title-content
    font-size: 14px;
    color: #07111b;
    line-height: 14px;
    padding: 18px 0 0 18px
</style>
