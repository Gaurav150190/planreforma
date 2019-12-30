

var quotation = new Vue({

    el: '#quotation',
    data: {
        model:
        {
            firstName: '', lastName: '', email: '', confirmEmail: '', phone: '',
            isNameError: false, isEmailError: false, isPhoneError: false, isConfirmEmailError: false,
            message: ''
        },
        errors: []
    },
    methods: {

        submitQuotation(e) {
            this.errors = [];
            this.model.isNameError = this.model.isEmailError = this.model.isPhoneError = false;
            if (!this.model.firstName) {
                this.errors.push('First Name is required');
                this.model.isNameError = true;
            }
            if (!this.model.lastName) {
                this.errors.push('Last Name is required');
                this.model.isNameError = true;
            }
            if (!this.model.email) {
                this.errors.push('Email is required');
                this.model.isEmailError = true;
            }
            else if (!this.vEml(this.model.email)) {
                this.errors.push('Email not valid');
                this.model.isEmailError = true;
            }
            if (this.model.email && this.vEml(this.model.email) && !this.model.confirmEmail) {
                this.errors.push('Confirm Email is required');
                this.model.isConfirmEmailError = true;
            }
            else if (!this.vEml(this.model.confirmEmail) || (this.model.email != this.model.confirmEmail)) {
                this.errors.push('Confirm Email not valid');
                this.model.isConfirmEmailError = true;
            }
            if (!this.model.phone) {
                this.errors.push('Phone is required')
                this.model.isPhoneError = true;
            }
            else if (!Number(this.model.phone)) {
                this.errors.push('Phone is not valid');
                this.model.isPhoneError = true;
            }

            if (this.errors.length == 0) {
                //api for quotation will be implemented
                this.resetForm();
                $(".quotation-modal").hide();
                $(".successform-modal").css('display', 'flex');
                cart.removeAllRacks();
            }

            e.preventDefault();

        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        resetForm() {
            this.model = { firstName: '', lastName: '', email: '', confirmEmail: '', phone: '', message: '' };
            this.errors = [];
        }
    }

});