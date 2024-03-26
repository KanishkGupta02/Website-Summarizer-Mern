import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// const options = {
//     method: 'GET',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//     params: {
//         url: 'https://time.com/6266679/musk-ai-open-letter/',
//         length: '3'
//     },   
//     headers: {
//         'X-RapidAPI-Key': 'ceb6962997msh206e04bbe6dbae7p1d7ab4jsn6723c51bab47',
//         'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
// };

const rapidApiKey=import.meta.env.VITE_RAPID_API_ARTICLE_KEY;




export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi
