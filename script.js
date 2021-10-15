const aplication = new Vue ({
    el:"#main",
    data: {
        txtToCrypt:'',
        txtToDecrypt:'',
        errorMsg: '',
        titleResult: '',
        textResult: ''

    },
    methods: {
        crypt: function(event) {
            event.preventDefault();

            if(this.txtToCrypt.length > 0) {
                this.titleResult = 'Texto criptografado';
                this.textResult = btoa(this.txtToCrypt)
                this.errorMsg = '';
            }else{
                this.titleResult = '';
                this.textResult = '';
                this.errorMsg = 'Digite um texto para criptografar';
            }
        },

        checkBase64: function(text) {
            const regex = /^([A-Za-z0-9+/])*([A-Za-z0-9+/]|[A-Za-z0-9+/]=|[A-Za-z0-9+/]==)$/;
            return regex.test(text)
        },

        decrypt: function(event) {
            event.preventDefault();

            const checkBase64 = this.checkBase64(this.txtToDecrypt);

            if(checkBase64 && this.txtToDecrypt.length > 0) {
                this.titleResult = 'Texto descriptografado';
                this.textResult = atob(this.txtToDecrypt);
                this.errorMsg = '';
            } else {
                this.titleResult = '';
                this.textResult = '';
                this.errorMsg = 'Este não é um formato válido';
            }
        }
    }
});