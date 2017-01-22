<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="title">{{seller.name}}</span>
        </div>
        <div class="description">
          <div class="delivery">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon">
            <icon :type="seller.supports[0].type" :typeSize="1"></icon>
          </span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div @click="showDetail" v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div @click="showDetail" class="bulletin-wrapper">
      <span class="brand"></span><span class="bulletin">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background-img"><img :src="seller.avatar" width="100%" height="134px"></div>
    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <star :size=48 :score="seller.score"></star>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="support">
              <li class="support-item" v-for="(item,index) in seller.supports">
                <span class="icon">
                  <icon :type="seller.supports[index].type" :typeSize="1"></icon>
                </span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              {{seller.bulletin}}
            </div>
          </div>
        </div>
        <div class="detail-close">
          <i class="icon-close" @click="close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';
  import icon from 'components/icon/icon';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail(){
        this.detailShow = !this.detailShow;
      },
      close(){
        this.detailShow = false;
      }
    },
    components: {
      star,
      icon
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .header
    background-color: rgba(7, 17, 27, .5)
    color: #ffffff
    overflow: hidden
    .content-wrapper
      position: relative
      font-size: 0
      padding: 24px 12px 18px 24px
      .avatar
        display: inline-block
        vertical-align: top
        padding-right: 16px
        border-radius: 2px
      .content
        display: inline-block
        .title
          margin-top: 2px
          font-size: 16px
          font-weight: bold
          line-height: 18px
          .brand
            width: 30px
            height: 18px
            display: inline-block
            vertical-align: top
            bg-image(brand)
            background-size: 30px 18px
        .description
          font-size: 12px
          font-weight: 200
          line-height: 12px
          padding-top: 8px
        .support
          font-size: 10px
          font-weight: 200
          line-height: 12px
          padding-top: 10px
          .icon
            display: inline-block
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            vertical-align: top
      .support-count
        position: absolute
        right: 12px
        bottom: 12px
        width: 40px
        height: 24px
        background-color: rgba(0, 0, 0, .2)
        border-radius: 12px
        z-index: 1
        .count
          display: inline-block
          font-size: 10px
          line-height: 24px
          padding-left: 8px
        .icon-keyboard_arrow_right
          padding-left: 2px
          display: inline-block
          font-size: 10px
          line-height: 24px
    .bulletin-wrapper
      position: relative
      height: 28px
      line-height: 28px
      padding: 0 24px 0 12px
      box-sizing border-box
      text-overflow ellipsis
      white-space nowrap
      overflow: hidden
      background-color: rgba(7, 17, 27, .2)
      .brand
        vertical-align: middle
        display: inline-block
        width: 22px
        height: 12px
        bg-image(bulletin)
        background-repeat: no-repeat
        background-size: 22px 12px
      .bulletin
        font-size: 10px
        margin-left: 4px
      .icon-keyboard_arrow_right
        position: absolute
        right: 12px
        line-height: 28px
        display: inline-block
        font-size: 10px
    .background-img
      filter: blur(10px)
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 134px
      z-index: -1

    .detail
      position: fixed
      left: 0
      top: 0
      z-index: 2
      width: 100%
      height: 100%
      overflow: auto
      background-color: rgba(7, 17, 27, .8)
      &.fade-enter-active, &.fade-leave-active
        transition: opacity .5s
      &.fade-enter, &.fade-leave-active
        opacity: 0
      .detail-wrapper
        width: 100%
        min-height: 100%
        .detail-main
          margin-top: 64px
          padding-bottom: 64px
          .name
            font-size: 16px
            font-weight: 700
            color: #fff
            line-height: 16px
            text-align: center
          .star
            text-align: center
            margin-top: 18px
          .title
            display: flex
            width: 80%
            margin: 28px auto 24px auto
            .line
              flex: 1
              display: inline-block
              position: relative
              &:after
                content: ''
                position: absolute
                bottom: 50%
                left: 0
                border-top: 1px solid rgba(255, 255, 255, .2)
                width: 100%
            .text
              flex: 1
              text-align: center
              display: inline-block
              font-size: 14px
              font-weight: 700
              line-height: 14px
          .support
            width: 80%
            margin: 0 auto
            .support-item
              font-size: 0
              margin-bottom: 12px
              &.last-child
                margin-bottom: 0
              .icon
                display: inline-block
                margin-right: 6px
              .text
                display: inline-block
                font-size: 12px
                color: #ffffff
                line-height: 16px
          .bulletin
            margin: 0 auto
            width: 80%
            font-weight: 200
            line-height: 24px
            font-size: 12px
      .detail-close
        margin: -64px auto 0 auto
        font-size: 32px
        text-align: center


</style>

