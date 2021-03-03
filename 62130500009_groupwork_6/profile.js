    const app = Vue.createApp({
        data() {
            return {
                // myname: 'Kampol Thaipricha',
                mypic: 'images/2.jpg',
                // member: 'Member since Jan 2021',
                // rawHtml1: '<span class="font-weight-bold">Post</span>',
                // rawHtml2: '<span class="font-weight-bold">Comments</span>',
                // rawHtml3: '<span class="font-weight-bold">Favourites</span>',
                // follow:'follow',
                // num:[281,2,37,12],
                firstname: null,
                password: null,
                email:null,
                errors: null

            }
        },
        methods: {
            checkForm(){
                this.errors = validate({firstname: this.firstname,
                                        password:this.password,
                                        email: this.email,
                                        // age: this.age,
                                        // gender: this.gender,
                                        // email: this.email,
                                        // phone: this.phone,
                                        // chosensubject: this.chosensubject
                                    },
                                        constraints)
                if(!this.errors){
                    
                    alert("Registered successfully.")
                }
            }
        }

    })

    const constraints = {
        firstname: {
            presence: true,
            exclusion: {
                within: {username: "Japan", "ch": "China"},
                message: "^We don't support %{value} right now, sorry"
              }
        },
        password: {
            presence: true,
            length: {
                minimum : 10,
                message: "must be at least 10 digits"
            }, 
            format: {
                pattern: "[a-z0-9]+",
                flags: "i",
                message: "can only contain a-z and 0-9"
              }
            
        },
        // age: {
        //     presence: true,
        //     numericality: {
        //         lessThan: 150
        //     }
        // },
        // gender: {
        //     presence: true,
        // },
        email: {
            presence: true,
            email: true
        },
        // phone: {
        //     presence: true,
        //     length: {
        //         minimum : 10,
        //         message: "must be at least 10 digits"
        //     },        
        // },
        // chosensubject: {
        //     presence: true
        // }
    }

    
    app.mount('#app')