import { createSlice } from '@reduxjs/toolkit'
import { IUsuario } from '../../services/userApi';
import { registerUser } from './userActions';

export interface IUserState {
  loading: boolean;
  userInfo: IUsuario;
  userToken: string | null;
  error: any;
  success: boolean;
}

const initialState: IUserState = {
  loading: false,
  userInfo: {} as IUsuario,
  userToken: '',
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default userSlice.reducer;