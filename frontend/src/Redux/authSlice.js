import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for login
export const loginUser = createAsyncThunk('auth/loginUser', async (userData, thunkAPI) => {
    try {
        const response = await axios.post('/api/auth/login', userData);
        return response.data;  // The token and user data will be returned
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Async thunk for signup
export const signupUser = createAsyncThunk('auth/signupUser', async (userData, thunkAPI) => {
    try {
        const response = await axios.post('/api/auth/signup', userData);
        return response.data;  // The token and user data will be returned
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
