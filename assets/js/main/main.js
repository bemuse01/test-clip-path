new Vue({
    el: '#wrap',
    data(){
        return{
            element: {
                bg: new BG.build()
            }
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        // init
        init(){
            window.addEventListener('resize', this.onWindowResize, false)
        },


        // event
        onWindowResize(){
            this.element.bg.resize()
        }
    }
})