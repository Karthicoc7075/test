import { createStore , applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { loadState, saveState } from '../utils/localStorage'
import  {composeWithDevTools} from '@redux-devtools/extension'
import authReducer from '../features/auth/reducers/authReducer'
import postReducer from '../features/post/reducers/postReducer';
import toastReducer from '../features/toast/reducers/toasterReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    toast: toastReducer,
    // theme: themeReducers    
});

const persistedState = loadState();

const store = createStore(
    rootReducer,
    {auth:persistedState?.auth,
    // theme:persistedState?.theme 
    },
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
    
    saveState({auth:state?.auth, })
});

export default store;