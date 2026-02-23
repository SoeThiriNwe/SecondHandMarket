export interface NewCategoryParaType extends SuccessfullType {
    category : string
    userId : number
}

export  interface UpdateCategoryParaType extends SuccessfullType{
    id : number
    name : string
}


export interface SuccessfullType {
    onSuccess ?: () => void
    onFail ?: () => void
}