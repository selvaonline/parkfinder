import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.NEXT_PUBLIC_NPS_API_KEY;

export const npsApi = createApi({
  reducerPath: 'npsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://developer.nps.gov/api/v1/' }),
  endpoints: (builder) => ({
    getParksByZipcode: builder.query({
      query: (zipcode) => `parks?zipCode=${zipcode}&api_key=${API_KEY}`,
    }),
  }),
});

export const { useGetParksByZipcodeQuery } = npsApi;
