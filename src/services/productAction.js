import axios from "axios";
import { Base_Url } from "../utils/constan";

export const productCategories = async () =>{
     let resp = await fetch(`${Base_Url}categories/`)

     return resp.json();
} 

export const  productAPI = async () => {
   let resp = await fetch(`${Base_Url}products`)
    return resp.json()
 }


// create function insert product

export const insertProduct = async (product) => {
    let resp = await fetch(`${Base_Url}products/`,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product)  // for ining submit to serve
    })

    return resp;
}

// create file upload api

export const fileUploadToServer = async (image) => {
    let resp = await axios({
        method: "POST" ,
        headers: {
            "Content-Type" : "multipart/form-data"
        },
        url: `${Base_Url}files/upload`,
        data: image  
    })

    return resp
}


// update product
export const updateProduct = async (product, id) => {
    let resp = await fetch(`${Base_Url}products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    return resp
}