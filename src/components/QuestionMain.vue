<template>
	<div class="QuestionMain">
		<div class="card">
			<div class="content">
				<div class="header">
					<div class="title">
						第 {{ currentQty }} 題
					</div>
					<div class="qty">
						{{ currentQty }}/{{ totolQty }}
					</div>
				</div>
				<div class="main">
					{{ question[0].topic }}
				</div>
				<div class="Ans" v-if="totolQty > currentQty">
					<div class="BtnYes" @click="QuestionAdd('Y')">
						O
					</div>
					<div class="BtnNo" @click="QuestionAdd('N')">
						X
					</div>
				</div>
				<div class="Ans" v-else>
					<div class="BtnYes" @click="commit('Y')">
						O
					</div>
					<div class="BtnNo" @click="commit('N')">
						X
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
    name: 'QuestionMain',
    data() {
      return{
      }
    },
    created() {
      this.getQuestion();
    },
    computed: {
      currentQty() {
        return this.$store.state.currentQty
      },
      totolQty() {
        return this.$store.state.totolQty
      },
      question() {
        return this.$store.state.question
      },
    },
    methods: {
      QuestionAdd(ans) {
        this.submit(ans)
      },
      getQuestion() {
        this.$store.dispatch('getQuestion')
      },
      commit(ans) {
        this.submit(ans)
        this.$router.push('./Result')
      },
      submit(ans) {
        let data ={ qid: this.question[0].qid, answer: ans}
        this.$store.dispatch('commitAnswer',data)
        this.$store.dispatch('updatecurrentQty')
        this.$emit('nextQuestion')
        this.getQuestion()
      }
    }
  }
</script>
<style>
    .QuestionMain{
        min-width: 60vw;
    }
    .card{
        min-width: 600px;
    }
    .content{
        display: flex;
        flex-direction: column;
    }
    .header{
        height: 20%;
        margin: 2% 2% 0 2%;
        display: flex;
        justify-content: space-between;
    }
    .main{
        margin: 40px 0 ;
        flex-grow: 1;
        min-height: 250px;
    }
    .footer{
        display: flex;
        justify-content: space-around;
        height: 10%;
    }
    .Ans{
        display: flex;
        height: 50px;
    }
    .BtnYes,.BtnNo{
        cursor: pointer;
        width: 50%;
    }
    .BtnYes{
        background-color:#C4E1FF;
        height: 100%;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .BtnYes:hover{
        background-color:#46A3FF;
    }
    .BtnNo{
        background-color:#FF9797;
        height: 100%;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .BtnNo:hover{
        background-color:#FF5151;
    }
    .BtnCommit{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 415px) {
        .QuestionMain{
            min-width: 80vw;
        }
    }
</style>
