import store from "../store";

export function GetItemById(id: number){
    return store.listItems.find(ele => ele.id===id)
}