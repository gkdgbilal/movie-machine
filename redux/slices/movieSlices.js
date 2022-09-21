import { createSlice } from '@reduxjs/toolkit'
import { fetchMovies } from '../services/movieServices';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
        status: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchMovies.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.loading = false;
            state.movies = action.payload;
        },
        [fetchMovies.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default movieSlice.reducer