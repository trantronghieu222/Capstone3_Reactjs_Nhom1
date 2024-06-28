// rsxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { httpStore } from '../../util/config';
import { TOKEN_AUTHOR, USER_LOGIN, getDataJsonStorage, setDataJsonStorage, setDataTextStorage } from '../../util/utilFuntion';
import { assign } from 'lodash';
const initialState = {
  userLogin: getDataJsonStorage(USER_LOGIN),
  arrUser: [{
    id: 0,
    email: "",
    password: "",
    name: "",
    gender: true,
    phone: ""
  }]
}

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    setArrAction: (state, action) => {
      state.arrUser = action.payload;
    }
  }
});

export const { loginAction, setArrAction } = UserReducer.actions

export default UserReducer.reducer

/* -------------------- Action thunk -------------------- */
export const loginActionApi = (email, password) => {
  // Trước khi dispatch chạy
  return async (dispatch) => {
    // Xử lý API
    // console.log(email, password);
    const res = await httpStore.post('/api/Users/signin', { email, password });

    const actionCreator = loginAction(res.data.content);
    dispatch(actionCreator);

    setDataJsonStorage(USER_LOGIN, res.data.content);
    setDataTextStorage(TOKEN_AUTHOR, res.data.content.accessToken);
  }
}

// Đăng ký tài khoản
export const signupActionAsync = (usRegis) => {
  return async (dispatch) => {
    const res = await httpStore.post('/api/Users/signup', usRegis);
    // console.log(res.data.content)
    const  acition = setArrAction(res.data.content);
    dispatch(acition);
  }
}

// Cập nhật thông tin tài khoản
export const updateProfileAsync  = (usProf) => {
  return async (dispatch) => {
    const res = await httpStore.post('/api/Users/updateProfile', usProf)
    const action = setArrAction(res.data.content);
    dispatch(action);
  }
}