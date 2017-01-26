<template>
  <div class="seller" ref=seller>
    <div class="seller-content">
      <div class="header-wrapper">
        <div class="title">
          <h1 class="title-name">{{seller.name}}</h1>
          <star :size=36 :score=seller.score></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
          <div class="collect" @click="toggleFavorite">
            <i class="icon-favorite" :class="{active:favorite}"></i>
            <div class="text">{{favoriteText}}</div>
          </div>
        </div>
        <div class="info">
          <div class="info-content">
            <h5 class="text">起送价</h5>
            <span class="num">{{seller.minPrice}}<i class="unit">元</i></span>
          </div>
          <div class="info-content">
            <h5 class="text">商家配送</h5>
            <span class="num">{{seller.deliveryPrice}}<i class="unit">元</i></span>
          </div>
          <div class="info-content">
            <h5 class="text">平均配送时间</h5>
            <span class="num">{{seller.deliveryTime}}<i class="unit">分钟</i></span>
          </div>
        </div>
      </div>
      <split></split>
      <div class="activity">
        <h1 class="title">公告与活动</h1>
        <p class="text">{{seller.bulletin}}</p>
        <ul>
          <li v-for="item in seller.supports" class="supports-item">
            <icon :type="item.type" :typeSize="4"></icon>
            <span class="description">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="view-container">
        <h1 class="title">商家实景</h1>
        <div class="view">
          <div class="pic-wrapper" ref=picWrapper>
            <ul class="pic-list" ref=picList style="height:90px">
              <li v-for="pic in seller.pics" class="pic-item">
                <img :src="pic" width="120" height="90">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <split></split>
      <div class="infos">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li v-for="item in seller.infos" class="info-item border-1px">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import icon from 'components/icon/icon';
  import split from 'components/split/split';
  import star from 'components/star/star';
  import {saveToLocal, loadFromLocal} from 'common/js/store';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        favorite: (() => {
          return loadFromLocal(this.seller.id, 'favorite', false);
        })()
      };
    },
    watch: {
      'seller'() {
        this.$nextTick(() => {
          this._initScroll();
          this._initPics();
        });
      }
    },
    mounted(){
      this.$nextTick(() => {
        this._initScroll();
        this._initPics();
      });
    },
    computed: {
      favoriteText(){
        return this.favorite ? '已收藏' : '收藏';
      }
    },
    methods: {
      toggleFavorite(event){
        if (!event._constructed) {
          return;
        }
        this.favorite = !this.favorite;
        saveToLocal(this.seller.id, 'favorite', this.favorite);
      },
      _initScroll(){
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.seller, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      },
      _initPics(){
        if (this.seller.pics) {
          let picWidth = 120;
          let margin = 6;
          let width = (picWidth + margin) * this.seller.pics.length;
          this.$refs.picList.style.width = width + 'px';
          this.$nextTick(() => {
            if (!this.picScroll) {
              this.picScroll = new BScroll(this.$refs.picWrapper, {
                scrollX: true,
                eventPassthrough: 'vertical'
              });
            } else {
              this.picScroll.refresh();
            }
          });
        }
      }
    },
    components: {
      star,
      split,
      icon
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .seller
    position: absolute
    width: 100%
    top: 174px
    bottom: 0
    left: 0
    overflow: hidden
    .header-wrapper
      padding: 18px
      position: relative
      .title
        border-1px(rgba(7, 17, 27, .1))
        font-size: 0
        .title-name
          color: rgb(7, 17, 27)
          line-height: 14px
          margin-bottom: 8px
          font-size: 14px
        .star
          display: inline-block
          padding-right: 8px
          padding-bottom: 18px
        .text
          vertical-align: top
          color: rgb(77, 85, 93)
          line-height: 18px
          padding-right: 12px
          font-size: 10px
        .collect
          position: absolute
          top: 0
          right: 0
          width: 30px
          text-align: center
          .text
            padding-right: 0
          .icon-favorite
            display: block
            width: 100%
            color: #d4d6d9
            line-height: 24px
            font-size: 24px
            margin-bottom: 4px
            &.active
              color: rgb(240, 20, 20)

      .info
        display: flex
        padding-top: 18px
        width: 100%
        .info-content
          flex: 1
          text-align: center
          .text
            color: rgb(147, 153, 159)
            line-height: 10px
            margin-bottom: 4px
            font-size: 10px
          .num
            color: rgb(7, 17, 27)
            line-height: 24px
            font-size: 24px
            .unit
              font-size: 10px
              color: rgb(7, 17, 27)
              font-style normal

    .activity
      padding: 18px 18px 0
      .title
        color: rgb(7, 17, 27)
        line-height: 14px
        font-size: 14px
      .text
        color: rgb(240, 20, 20)
        line-height: 24px
        font-size: 12px
        margin-top: 8px
        padding: 0 12px
        margin-bottom: 16px
      .supports-item
        font-size: 0
        padding: 16px
        border-top: 1px solid rgba(7, 17, 27, .1)
        .icon
          vertical-align: top
          display: inline-block
          width: 16px
          height: 16px
          background-size: 16px 16px
          padding-right: 6px
        .description
          color: rgb(7, 17, 27)
          font-size: 12px

    .view-container
      width: 100%
      font-size: 0
      padding: 18px
      .title
        color: rgb(7, 17, 27)
        line-height: 14px
        font-size: 14px
        margin-bottom: 12px
      .pic-wrapper
        width: 100%
        overflow: hidden
        white-space: nowrap
        .pic-item
          display: inline-block
          width: 120px
          height: 90px
          margin-right: 6px
          &.last-child
            margin-right: 0
    .infos
      padding: 18px
      .title
        color: rgb(7, 17, 27)
        line-height: 14px
        font-size: 14px
        padding-bottom: 12px
        border-1px(rgba(7, 17, 27, .1))
      .info-item
        padding: 16px 12px
        color: rgb(7, 17, 27)
        line-height: 16px
        font-size: 12px
        border-1px(rgba(7, 17, 27, .1))

</style>
