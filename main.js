const { createApp } = Vue

createApp({
    data() {
        return {
        emails: [],


        }
    },
    methods: {

        randomMails(){
            
            for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response => {
                let respEmail = response.data.response;
                this.emails.push(respEmail);
            });
        
        }
        
        }
        
    },
    mounted() {
        

     
    }
}).mount('#app')