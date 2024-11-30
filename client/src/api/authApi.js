import axiosInstance from "./axiosConfig"
import { addToast } from '../features/toast/actions/toastAction'

export const registerUserApi = async (data,dispatch) => {
    try {
        const response = await axiosInstance.post('/auth/signup', data);
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}


export const loginUserApi = async (loginData,dispatch) => {
    try {
        const response = await axiosInstance.post('/auth/signin', loginData );
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}



export const passwordChangeApi = async (data,dispatch) => {
    try {
        const response = await axiosInstance.put('/dashboard/auth/change-password', data);
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response.data.message || error.message , 'error'));
    }
}