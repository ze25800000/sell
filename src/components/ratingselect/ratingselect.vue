<template>
  <div class="ratings-wrapper">
    <div class="title border-1px">
      <span @click="select(2,$event)"
            class="positive"
            :class="{active:selectType===2}"
      >{{desc.all}}<i
        class="count">{{ratings.length}}</i>
      </span>
      <span @click="select(0,$event)"
            class="positive"
            :class="{active:selectType===0}"
      >{{desc.positive}}<i
        class="count">{{positives.length}}</i>
      </span>
      <span @click="select(1,$event)"
            class="negative"
            :class="{active:selectType===1}"
      >{{desc.negative}}<i
        class="count">{{negatives.length}}</i>
      </span>
    </div>
    <div @click=toggleSelect($event) :class="{on:onlyContent}" class="choose border-1px"><i
      class="icon-check_circle"></i>只看有内容的评价
    </div>
    <div class="rating-content">
      <div class="time"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;
  export default {
    props: {
      ratings: {
        type: Array,
        default(){
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default(){
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          };
        }
      }
    },
    computed: {
      positives(){
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE;
        });
      },
      negatives(){
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGATIVE;
        });
      }
    },
    methods: {
      select(type, event){
        if (!event._constructed) {
          return;
        }
        this.$emit('select', type);
      },
      toggleSelect(event){
        if (!event._constructed) {
          return;
        }
        this.$emit('toggle');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .ratings-wrapper
    padding-top: 18px
    .title
      margin-left: 18px
      margin-right: 18px
      font-size: 14px
      color: rgb(7, 17, 27)
      line-height: 14px
      padding-bottom: 18px
      border-1px(rgba(7, 17, 27, .1))
      .title-content
        margin-bottom: 18px
      span
        display: inline-block
        padding: 8px 12px
        font-size: 12px
        line-height: 16px
        margin-right: 8px
        border-radius: 2px
        .count
          font-size: 8px
          font-style: normal
          margin-left: 2px
        &.positive
          color: rgb(77, 85, 93)
          background-color: rgba(0, 160, 220, .2)
          &.active
            background-color: rgb(0, 160, 220)
            color: #fff
        &.negative
          color: rgb(77, 85, 93)
          background-color: rgba(77, 85, 93, .2)
          &.active
            background-color: rgb(77, 85, 93)
            color: #fff
    .choose
      padding: 12px 0 12px 18px
      font-size: 12px
      color: rgb(147, 153, 159)
      &.on
        .icon-check_circle
          color: #00c850
      border-1px(rgba(7, 17, 27, .1))
      .icon-check_circle
        font-size: 24px
        color: rgb(147, 153, 159)
        line-height: 24px
        vertical-align: middle
        margin-right: 4px
</style>
