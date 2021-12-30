import store from "../store"

export const stringToNumberArray = (arr:string[]) => {
    return arr.map((item: string) => Number(item))
}

export const NumberToStringArray = (arr:number[]) => {
    return arr.map((item:number) => ''+item)
}

export const ArrayToObject = (arr:any[]) => {
    for(let i=0;i<arr.length;i++){
        store.listItems = [...store.listItems,arr[i]]
    }
}