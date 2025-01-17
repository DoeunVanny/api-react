import axios from "axios"

import { actionTypes } from "./actionTypes"
import secureLocalStorage from "react-secure-storage"
import { Base_Url } from "../../utils/constan"



export const loginUser = (user) => {
    return (dispatch) => {
         axios(`${Base_Url}auth/login`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(user)
        })
        .then(resp => {
            if(resp.status === 201){
                secureLocalStorage.setItem('auth', resp.data)
                dispatch({
                    type: actionTypes.LOGIN_SUCESS,
                    payload: resp
                })
                return Promise.resolve("Login success")
             }
            //else{
            //     dispatch({
            //         type: actionTypes.LOGIN_FAILED,
            //         payload: resp.data
            //     })
            //     return Promise.resolve("Login failed")
            // }
        })
        return Promise.resolve()
    }
}