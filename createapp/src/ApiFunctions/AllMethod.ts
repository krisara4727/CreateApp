import axios from "axios";


export function GetMethod(url: string){
    return axios.get(url).then((resp) => {
        return resp;
    }).catch(err => {
        return err.response;
    })
}

export function PostMethod(url:string, payload:any){
    return axios.post(url,payload)
    .then(resp => {return resp})
    .catch(err => {return err.response});
    
}

export function PrivatePostMethod(url:string, payload:any, headerAuth:any){
    return axios.post(url,payload,headerAuth)
    .then(resp => {return resp})
    .catch(err => {return err.response});
}

export function PrivateGetMethod(url:string,headerAuth:any){
    return axios.get(url,headerAuth)
    .then(resp => {return resp})
    .catch(err => {return err.response});
}

export function PrivatePutMethod(url:string,payload:any,headerAuth:any){
    return axios.put(url,payload,headerAuth)
    .then(resp => {return resp})
    .catch(err => {return err.response});
}

export function PrivateDeleteMethod(url:string,headerAuth:any){
    return axios.delete(url,headerAuth)
    .then(resp => {return resp})
    .catch(err => {return err.response});
}