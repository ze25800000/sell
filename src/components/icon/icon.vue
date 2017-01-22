<template>
  <div class="classMap">
    <div class="icon" :class="typeName[type]"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      typeSize: {
        type: Number
      },
      type: {
        type: Number
      }
    },
    computed: {
      typeName(){
        let classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
        let arr = [];
        for (let i = 0; i < classMap.length; i++) {
          arr.push(classMap[i] + '_' + this.typeSize);
        }
        return arr;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .icon
    background-repeat: no-repeat
    vertical-align: top
    &.decrease_1
      bg-image(decrease_1)
    &.decrease_2
      bg-image(decrease_2)
    &.decrease_3
      bg-image(decrease_3)
    &.decrease_4
      bg-image(decrease_4)
    &.discount_1
      bg-image(decrease_1)
    &.discount_2
      bg-image(decrease_2)
    &.discount_3
      bg-image(decrease_3)
    &.discount_4
      bg-image(decrease_4)
    &.guarantee_1
      bg-image(guarantee_1)
    &.guarantee_2
      bg-image(guarantee_2)
    &.guarantee_3
      bg-image(guarantee_3)
    &.guarantee_4
      bg-image(guarantee_4)
    &.invoice_1
      bg-image(invoice_1)
    &.invoice_2
      bg-image(invoice_2)
    &.invoice_3
      bg-image(invoice_3)
    &.invoice_4
      bg-image(invoice_4)
    &.special_1
      bg-image(special_1)
    &.special_2
      bg-image(special_2)
    &.special_3
      bg-image(special_3)
    &.special_4
      bg-image(special_4)
</style>
