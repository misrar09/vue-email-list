const { createApp } = Vue

createApp({
    data() {
        return {
            emailList: [],
            listDone: false,
        }
    },
    methods: {

        randomMails() {

            this.emailList = []; // Clear the existing emailList
            this.listDone = false;
            let counter = 0; //Using a counter to count the number of items got

            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response => {
                    let respEmail = response.data.response;
                    this.emailList.push(respEmail);

                    counter++ //Increment the counter

                    if(counter === 10){
                        this.listDone = true;
                    }

                });

            }

        }

    },
    mounted() {
        

    },
}).mount('#app')