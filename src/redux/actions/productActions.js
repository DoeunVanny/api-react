import { type } from "@testing-library/user-event/dist/type"
import { Base_Url } from "../../utils/constan"
import { actionTypes } from "./actionTypes"


export const fetchAllProducts  = () => {
         return (dispatch) => {
            fetch(`${Base_Url}products/`)
            .then(res => res.json())
            .then(resp => dispatch({
                type: actionTypes.FETCH_PRDOUCTS,
                payload: resp
            }))
         }
} 

export const fetchProductCategories = () => {
    return (dispatch) => {
        fetch(`${Base_Url}categories`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_CATEGORIES,
            payload: resp
        }))
    }
}