    const app = Vue.createApp({
        data() {
            return {
                submitdata: {
                    mypic: 'images/2.jpg',
                    firstname: null,
                    lastname: null,
                    password: null,
                    email: null,
                    tel: null,
                    chosengender: null,
                    age: null
                },
                gender_lists: [{
                        gender_id: 1,
                        gender_name: 'Male'
                    },
                    {
                        gender_id: 2,
                        gender_name: 'Female'
                    },
                    {
                        gender_id: 3,
                        gender_name: 'No Gender'
                    }
                ],
                errors: null
            }

        },
        methods: {
            checkForm() {

                this.errors = validate(this.submitdata,
                    constraints)

                if (!this.errors) {

                    alert("Registeration successfully.")
                }

            }
        }

    })
    app.component('display-error',{
        props:{
            errors: {
                type: Object,
                required: true,
            },
            field: {
                type: String,
                required: true,
            }
        },
        template: 
        /*html*/
        `
        <div v-if="errors && errorList">
            <span v-for="error in errorList" class="text-red-500 italic">{{error}}<br></span>
        </div>
        `,
        computed: {
            errorList(){
                return this.errors[this.field]
            }
        }
    })

    const constraints = {
        firstname: {
            presence: true,
        },
        lastname: {
            presence: true,
        },
        email: {
            presence: true,
            email: true
        },
        password: {
            presence: true,
            length: {
                minimum: 6,
                message: "must be at least 6 digits"
            },
            format: {
                pattern: "[a-z0-9]+",
                flags: "i",
                message: "can only contain a-z and 0-9"
            }

        },
        tel: {
            presence: true,
            length: {
                maximum: 10,
                minimum: 10,

                message: "must be at least 10 digits and not more than 10 digits"
            },
            format: {
                pattern: "[0-9]+",
                flags: "i",
                message: "can only contain  0-9"
            }
        },
        chosengender: {
            presence: true
        },
        age: {
            presence: true,
            numericality: {
                lessThan: 120,
                greaterThan: 0
            }

        }
    }


    app.mount('#app')