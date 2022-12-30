<template>
  <div class="timer">
    <CountDown
      :time="11 * 1000"
      :autoStart="true"
      ref="countDown"
      @finish="resetTime"
    >
    <!-- 作用域插槽scope -->
    <template v-slot="scope">
      <span>目前還剩 {{ scope.timeData.seconds }}秒</span>
    </template>
    </CountDown>
  </div>
</template>
<script>
  export default {
    name: 'timer',
    data() {
        return{
        }
    },
    methods: {
      resetTime() {
        if (this.$store.state.currentQty === 10) {
          this.$router.push('./Result')
        }
        this.$store.dispatch('updateSpaceQty')
        this.$store.dispatch('updatecurrentQty')
        this.$refs.countDown.reset()
        this.$emit('QuestionNext')
      },
      retime() {
        this.$refs.countDown.reset()
      }
    }
  }
</script>
<style>

</style>
