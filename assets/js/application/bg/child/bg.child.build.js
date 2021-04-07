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

        for(let i = 0; i < row; i++){
            for(let j = 0; j < col; j++){
                const index = i * col + j

                const r = Math.floor(Math.random() * 255)
                const g = Math.floor(Math.random() * 255)
                const b = Math.floor(Math.random() * 255)
                const l = Math.floor(Math.random() * 50 + 35)

                this.element[index] = {
                    key: index,
                    style: {
                        width: `${w}%`,
                        height: `${h}%`,
                        top: `${h * i}%`,
                        left: `${w * j}%`,
                        backgroundColor: `hsl(200, 100%, ${l}%)`
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


    // get
    get(){
       return this.element
    }
}