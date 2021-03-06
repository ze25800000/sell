<template>
  <div class="ratings" ref=ratings>
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size=36 :score=seller.serviceScore></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size=36 :score=seller.foodScore></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect :selectType=selectType
                    :onlyContent=onlyContent
                    :ratings=ratings
                    @select=selectRating
                    @toggle=toggleContent
      ></ratingselect>
      <div class="rating-wrapper">
        <ul>
          <li v-for="rating in ratings" v-show="needShow(rating.rateType, rating.text)" class="rating-item">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="item in rating.recommend">{{item}}</span>
              </div>
              <div class="time">
                {{rating.rateTime | formatDate}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';
  import split from 'components/split/split';
  import ratingselect from 'components/ratingselect/ratingselect';
  import BScroll from 'better-scroll';
  import {formatDate} from 'common/js/date';
  const ALL = 2;
  const ERR_OK = 0;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        ratings: [],
        selectType: ALL,
        onlyContent: false
      };
    },
    created(){
      this.$http.get('/api/ratings').then((res) => {
        res = res.body;
        if (res.errno === ERR_OK) {
          this.ratings = res.data;
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.ratings, {
              click: true
            });
          });
        }
      });
    },
    methods: {
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
      star,
      split,
      ratingselect
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .ratings
    position: absolute
    top: 174px
    left: 0
    bottom: 0
    width: 100%
    overflow: hidden
    .ratings-content
      padding: 18px 0
      .overview
        display: flex
        padding-bottom: 18px
        .overview-left
          text-align: center
          flex: 0 0 137px
          border-right: 1px solid rgba(7, 17, 27, .2)
          .score
            font-size: 24px
            color: rgb(255, 153, 0)
            line-height: 28px
            padding-bottom: 6px
          .title
            font-size: 12px
            color: rgb(7, 17, 27)
            padding-bottom: 8px
          .rank
            font-size: 10px
            color: rgba(7, 17, 27, .5)
        .overview-right
          flex: 1
          .title
            font-size: 12px
            color: rgb(7, 17, 27)
            line-height: 18px
            padding-right: 12px
            display: inline-block
            vertical-align: top
          .score-wrapper
            padding-bottom: 8px
            font-size: 0
            padding-left: 24px
            .star
              display: inline-block
            .score
              font-size: 12px
              color: rgb(255, 153, 0)
              line-height: 18px
              margin-left: 6px
          .delivery-wrapper
            padding-left: 24px
            font-size: 0
            .delivery
              font-size: 12px
              color: rgb(147, 153, 159)
              line-height: 18px

      .rating-wrapper
        padding: 0 18px
        .rating-item
          display: flex
          padding: 18px 0
          border-1px(rgba(7, 17, 27, .1))
          .avatar
            flex: 0 0 28px
            width: 28px
            margin-right: 12px
            img
              border-radius: 50%
          .content
            position: relative
            flex: 1
            .name
              margin-bottom: 4px
              line-height: 12px
              font-size: 10px
              color: rgb(7, 17, 27)
            .star-wrapper
              margin-bottom: 6px
              font-size: 0
              .star
                display: inline-block
                vertical-align: top
                margin-right: 6px
              .delivery
                display: inline-block
                vertical-align: top
                font-size: 10px
                color: rgb(147, 153, 159)
                line-height: 12px
            .text
              font-size: 12px
              margin-bottom: 8px
              color: rgb(7, 17, 27)
              line-height: 18px
            .recommend
              line-height: 16px
              font-size: 0
              .icon-thumb_up, .item
                display: inline-block
                margin: 0 8px 4px 0
                font-size: 9px
              .icon-thumb_up
                color: rgb(0, 160, 220)
              .item
                padding: 0 6px
                border: 1px solid rgba(7, 17, 27, 0.1)
                border-radius: 1px
                color: rgb(147, 153, 159)
                background: #fff
            .time
              position: absolute
              top: 0
              right: 0
              line-height: 12px
              font-size: 10px
              color: rgb(147, 153, 159)
</style>
