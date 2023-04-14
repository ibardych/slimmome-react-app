import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// export const calculatorAnonim = createAsyncThunk(
//   'calculator/calculatorAnonim',
//   async ({weight, height, age, desiredWeight, bloodType}, thunkAPI) => {
//     try {
//       const response = await axios.post('/daily-rate', {weight, height, age, desiredWeight, bloodType});
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const calculatorAnonim = createAsyncThunk(
  'calculator/calculatorAnonim',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {

      const res = await axios.post('/daily-rate', credentials);
      console.log(res.data);
      return res.data;

    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const calculatorLogIn = createAsyncThunk(
  'calculator/calculatorLogIn',
  async ([id, data, token], thunkAPI) => {
    setAuthHeader(token);
    try {
      const res = await axios.post(`/daily-rate/${id}`, {...data});
      return res.data;
    } catch (error) {
      // console.log(error.message);
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, { getState, rejectWithValue }) => {
//     const state = getState();

//     if (state.auth.token === null) {
//       return rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(state.auth.token);
//       const res = await axios.get('/auth/current');
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export async function getData() {
//   const response = await fetch(
//     'https://slimmom-backend.goit.global/daily-rate',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         weight: 100,
//         height: 170,
//         age: 30,
//         desiredWeight: 60,
//         bloodType: 1,
//       }),
//     }
//   );
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

// export const calculatorAnonim = createAsyncThunk(
//   'calculator/calculatorAnonim',
//   async function getData(data) {
//     const response = await fetch(
//       'https://slimmom-backend.goit.global/daily-rate',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       }
//     );
//     const jsonData = await response.json();
//     console.log(jsonData);
//   }
// );