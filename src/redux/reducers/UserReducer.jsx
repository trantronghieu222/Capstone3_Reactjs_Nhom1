// rsxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { httpStore } from '../../util/config';
import { TOKEN_AUTHOR, USER_LOGIN, getDataJsonStorage, setDataJsonStorage, setDataTextStorage } from '../../util/utilFuntion';
const initialState = {
  userLogin: getDataJsonStorage(USER_LOGIN)
}

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    }
  }
});

export const { loginAction } = UserReducer.actions

export default UserReducer.reducer

/* -------------------- Action thunk -------------------- */
export const loginActionApi = (email, password) => {
  // Trước khi dispatch chạy
  return  async (dispatch) => {
    // Xử lý API
    // console.log(email, password);
    const res = await httpStore.post('/api/Users/signin', {email, password});

    const actionCreator = loginAction(res.data.content);
    dispatch(actionCreator);

    setDataJsonStorage(USER_LOGIN, res.data.content);
    setDataTextStorage(TOKEN_AUTHOR, res.data.content.accessToken);
  }
}
