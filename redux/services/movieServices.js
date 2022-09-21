import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../config";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (arg, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `${server}/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1&region=TR`
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);