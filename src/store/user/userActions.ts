import { createAsyncThunk } from '@reduxjs/toolkit';

import userApi, { IUsuario } from '../../services/userApi';

export const registerUser = createAsyncThunk(
  'user/register',
  (user: Partial<IUsuario>, { rejectWithValue }) => {
    userApi.createUser(user).then((data) => {

    }).catch((error) => {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    });
  }
);