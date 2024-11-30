import * as actionTypes from '../constants/actionTypes';
import {registerUserApi,loginUserApi,passwordChangeApi} from '../../../api/authApi'
import {addToast} from '../../toast/actions/toastAction'


export const register = (data) => async (dispatch) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST });

    try {
        const response = await registerUserApi(data, dispatch);
        const payload = response;
        dispatch({ type: actionTypes.REGISTER_SUCCESS, payload });
        dispatch(addToast(response.message, 'success'));
    } catch (error) {
        dispatch({ type: actionTypes.REGISTER_FAILURE , error });
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const login = (loginData) =>async(dispatch) =>{
    dispatch({type:actionTypes.LOGIN_REQUEST})

    try{
        const response = await loginUserApi(loginData,dispatch)
        
        
        const payload = response
        dispatch({type:actionTypes.LOGIN_SUCCESS, payload})
    }
    catch(error){
        console.log(error);
        dispatch({type:actionTypes.LOGIN_FAILURE, error})
    }
}



export const passwordChange = (data) => async (dispatch) => {
    dispatch({ type: actionTypes.PASSWORD_CHANGE_REQUEST });

    try {
        const response = await passwordChangeApi(data, dispatch);
        const payload = response.data;
        dispatch({ type: actionTypes.PASSWORD_CHANGE_SUCCESS,  });
        dispatch(addToast(response.message, 'success'));
    } catch (error) {
        dispatch({ type: actionTypes.PASSWORD_CHANGE_FAILURE, error });
    }
}

export const setRole = (role) =>(dispatch)=>{
    dispatch({type:actionTypes.SET_ROLE, role})

} 


export const logout = () => async (dispatch) => {
    dispatch({ type: actionTypes.LOGOUT_REQUEST });

    try {
        dispatch({ type: actionTypes.LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: actionTypes.LOGOUT_FAILURE, error });
    }
}