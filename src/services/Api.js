import axios from "axios"

const BASE_URL=" http://127.0.0.1:8000/api/"

export async function addCustomerApi(data){

    return await axios.post(BASE_URL+"customers/",data)
}
 
export async function listCustomerApi(){
    return await  axios.get(BASE_URL+"customers/")
}


export async function retrieveCustomerApi(id){

    return await axios.get(BASE_URL+`customers/${id}/`)
}

export async function addWorkApi(custId,data){

    // http://127.0.0.1:8000/api/customers/1/work

    return await  axios.post(BASE_URL+`customers/${custId}/work/`,data)
}