import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'ae5c8a4bf1msha6fa0da127be674p1c54f9jsn28fe7ae34dac',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
})

export const { useGetCryptosQuery } = cryptoApi