<template>
  <div class="result">
    <div class="card">
      <div class="content">
        <!-- title -->
        <div class="resultTitle">
          您的成績
        </div>
        <!-- score -->
        <div class="score">
          {{score}} 分
        </div>
        <!-- answerQty -->
        <div class="answerQty">
          答對題數：{{answerQty}} 題
        </div>
        <!-- wrongQty -->
        <div class="wrongQty">
          答錯題數：{{wrongQty}} 題
        </div>
        <!-- SpaceQty -->
        <div class="SpaceQty">
          未答題數：{{SpaceQty}} 題
        </div>
      </div>
     </div>
  </div>
</template>
<script>
  export default{
    name:"Result",
    computed: {
      answerQty() {
        return this.$store.state.answerQty
      },
      wrongQty() {
        return this.$store.state.wrongQty
      },
      SpaceQty() {
        return this.$store.state.SpaceQty
      },
      score() {
        return this.$store.getters.score
      },
    },
    methods:{

    }
  }
</script>
<style>
  .result{
    background-color:#FCFCFC;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60vw;
  }
  .card{
    min-width: 600px;
  }
  .content{
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
  .resultTitle{
    font-size: 24px;
    border-bottom: 1px solid#c4c9c9;
  }
  .score{
    font-size: 20px;
    color: red;
    margin: 2% 0;
  }
  .answerQty,.wrongQty,.SpaceQty{
    margin-bottom: 2%;
  }
  @media (max-width: 415px) {
    .card{
      min-width: 380px;
    }
  }
</style>
