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
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    created(){
      this.classMap = ['decrease_1', 'discount_1', 'guarantee_1', 'invoice_1', 'special_1'];
    },
    data(){
      return {};
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .header
    background-color: #999
    color: #ffffff
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
            &.decrease_1
              bg-image(decrease_1)
            &.discount_1
              bg-image(discount_1)
            &.guarantee_1
              bg-image(guarantee_1)
            &.invoice_1
              bg-image(invoice_1)
            &.special_1
              bg-image(special_1)

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
</style>

