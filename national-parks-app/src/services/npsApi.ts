// src/services/npsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Access the API key from the environment variables
const API_KEY = process.env.NEXT_PUBLIC_NPS_API_KEY;

export const npsApi = createApi({
  reducerPath: 'npsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://developer.nps.gov/api/v1/' }),
  endpoints: (builder) => ({
    getParks: builder.query<ParkResponse, void>({
      query: () => `parks?limit=5&api_key=${API_KEY}`,
    }),
    getParksByZipcode: builder.query<ParkResponse, string>({
      query: (zipcode) => `parks?zipCode=${zipcode}&api_key=${API_KEY}`,
    }),
  }),
});

export const { useGetParksQuery, useGetParksByZipcodeQuery } = npsApi;


