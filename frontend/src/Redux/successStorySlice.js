import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSuccessStories = createAsyncThunk('successStories/fetchSuccessStories', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/api/success-stories');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const successStorySlice = createSlice({
    name: 'successStories',
    initialState: {
        list: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuccessStories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSuccessStories.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchSuccessStories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    }
});

export default successStorySlice.reducer;
