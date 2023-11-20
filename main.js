const { createApp } = Vue

createApp({
    data() {
        return {
            emailList: [],

        }
    },
    methods: {

        randomMails() {

            this.emailList = []; // Clear the existing emailList
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response => {
                    let respEmail = response.data.response;
                    this.emailList.push(respEmail);
                });

            }

        }

    },
    mounted() {


    }
}).mount('#app')