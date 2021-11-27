import { EXPORT_ID } from "./actionTypes/actionTypes";

export const exportId = (value) => {
    return {
        type: EXPORT_ID,
        payload: value
    }
}