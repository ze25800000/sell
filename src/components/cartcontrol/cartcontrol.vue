<template>
  <div class="cartcontrol">
    <transition name="cartcontrol">
      <div class="decrease" v-show="food.count>0" @click.stop="minusCart ">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>

    <div class="count" v-show="food.count>0">{{food.count}}</div>
    <div class="increase icon-add_circle" @click.stop="addCart($event)"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart(event){
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
          this.food.count = 1;
        } else {
          this.food.count++;
        }
        this.$emit('add', event.target);
      },
      minusCart(event){
        if (!event._constructed) {
          return;
        }
        this.food.count--;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .decrease
      display: inline-block
      padding: 6px
      opacity: 1
      transform: translate3d(0, 0, 0)
      .inner
        display: inline-block
        font-size: 24px
        line-height: 24px
        color: rgb(0, 160, 220)
        transition: all 0.4s linear
        transform: rotate(0)
      &.cartcontrol-enter-active, &.cartcontrol-leave-active
        transition: all 0.4s linear
      &.cartcontrol-enter, &.cartcontrol-leave-active
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .count
      vertical-align: top
      display: inline-block
      font-size: 10px
      color: rgb(147, 153, 159)
      line-height: 24px
      text-align: center
      margin-top: 6px
    .increase
      display: inline-block
      padding: 6px
      font-size: 24px
      line-height: 24px
      color: rgb(0, 160, 220)
</style>
