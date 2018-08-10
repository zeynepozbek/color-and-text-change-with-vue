window.addEventListener('load', () => {

    var Chrome = window.VueColor.Chrome;

    window.vue = new Vue({

        el: '#app',
        data: {
            message: 'Your Name',
            isLoggedIn: true,
            colors: {
                "hex": "#444",
                "source": "hex"
            },
            updateValue: '',
            hex: '',
            isOpen: false
        },
        components: {
            'chrome-picker': Chrome
        },
        methods: {
            toggle: function() {
                this.isOpen = !this.isOpen
                this.colors.source = 'hex'
            }
        }
    })

})