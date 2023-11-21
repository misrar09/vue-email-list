const { createApp } = Vue
createApp({
    data() {
        return {
            emailList: [],
            // listLoading: false,
        }
    },
    methods: {
        randomMails() {

            this.emailList = []; // Clear the existing emailList

            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response => {
                    let respEmail = response.data.response;
                    console.log(this.emailList.length);
                    if (this.emailList.length < 10) {
                        
                        this.emailList.push(respEmail);
                    }

                });
            }

        }
    },
    mounted() {

    },
}).mount('#app')