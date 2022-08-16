<template>
  <div class="home">
    <div class="HomeMain">
      <timer class="timer" v-if="currentQty<=totolQty" @QuestionNext="TopicNext" ref="timer"></timer>
      <QuestionMain @nextQuestion="next" ref="QuestionMain"></QuestionMain>
    </div>
  </div>
</template>

<script>
import QuestionMain from '@/components/QuestionMain.vue'
import timer from '@/components/timer.vue'

export default {
  name: 'Home',
  components: {
    QuestionMain,
    timer
  },
  computed:{
    EndTest(){
        return this.$store.state.EndTest
    },
    currentQty(){
        return this.$store.state.currentQty
    },
    totolQty(){
        return this.$store.state.totolQty
    },
  },
  methods:{
    next(){
      this.$refs.timer.retime()
    },
    TopicNext(){
      this.$refs.QuestionMain.getQuestion()
    }
  }
}
</script>
<style>
  .home{  
    background-color: 	#FCFCFC;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center; 
  }
  .timer{
    margin-bottom: 2%;
  }
</style>
