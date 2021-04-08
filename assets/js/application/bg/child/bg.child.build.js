BG.child.build = class{
    constructor(width, height){
        this.#init(width, height)
        this.#create()
    }


    // init
    #init(width, height){
        this.param = new BG.child.param()

        this.width = width
        this.height = height
    }


    // create
    #create(){
        this.element = []

        const ratio = this.height / this.width

        const col = this.param.count
        const row =  Math.round(this.param.count * ratio)

        const w = 100 / col
        const h = 100 / row

        const wgap = Math.ceil(this.width - this.width * 0.04) * 0.04 / 100 / col
        const hgap = Math.ceil(this.height - this.height * 0.05) * 0.05 / 100 / row

        for(let i = 0; i < row; i++){
            for(let j = 0; j < col; j++){
                const index = i * col + j

                const l = Math.floor(Math.random() * 50 + 35)

                const top = h * i - hgap * i
                const bottom = (100 - h) - h * i
                const left = w * j - wgap * j
                const right = (100 - w) - w * j

                this.element[index] = {
                    key: index,
                    style: {
                        // width: `${w}%`,
                        // height: `${h}%`,
                        // top: `${top}%`,
                        // left: `${left}%`,
                        // backgroundColor: `rgb(255, 255, 255)`,
                        clipPath: `inset(${top}% ${right}% ${bottom}% ${left}%)`,
                        animationDelay: `${Math.random() * 0.8}s`
                    }
                }
            }
        }
    }


    // resize
    resize(width, height){
        this.width = width
        this.height = height

        this.#create()
    }

    
    // click
    click(){
    }


    // get
    get(){
       return this.element
    }
}