BG.build = class{
    constructor(){
        this.#init()
        this.#create()
    }


    // init
    #init(){
        this.element = '.bg-container'

        const {width, height} = document.querySelector(this.element).getBoundingClientRect()
        this.width = width
        this.height = height
    }


    // create
    #create(){
        this.#createChild()
    }
    #createChild(){
        this.child = new BG.child.build(this.width, this.height)
    }


    // resize
    resize(){
        const {width, height} = document.querySelector(this.element).getBoundingClientRect()
        this.width = width
        this.height = height

        this.child.resize(this.width, this.height)
    }
}