var vueLsOne = new Vue({
    el: '#lesson-1',
    data(){
        return{
            //screen 1
            checkDisplayScreen: 0,
            checkAnswer: 0,
            checkNextScreen: 0,
            checkWrongAnswer: 0,
            checkScreenTwo: 0,
            //screen 2
            checkAnswerTwo: 0,
            checkScreenThree:0,
            //screen 3
            optOne: 0,
            optTwo: 0,
            optThree: 0
        }
    },
    methods:{
        //screen 1
        wrongAnswer(){
            this.checkWrongAnswer = 1;
        },
        rightAnswer(){
            this.checkAnswer = 1;
        },
        clickNextScreen(){
            this.checkScreenTwo = 1;
            this.checkNextScreen =1;
        },
        //screen 2
        rightAnswerTwo(){
            this.checkAnswerTwo = 1;
        },
        clickNextScreenTwo(){
            this.checkScreenTwo = 0;
            this.checkScreenThree = 1;
        },
        //screen 3
        handleClickOptOne(){
            this.optOne = 1;
        },
        handleClickOptTwo(){
            if(this.optOne==1){
                this.optTwo = 2;
            }
            else{
                alert('Wrong answer!');
            }
        },
        handleClickOptThree(){
            if(this.optTwo==2){
                this.optThree = 3;
            }
            else{
                alert('Wrong answer!');
            }
        }
    }
})

