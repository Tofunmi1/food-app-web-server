import { dedupExchange, fetchExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { LoginMutation, LogoutMutation, MeDocument, MeQuery, RegisterMutation } from '../src/generated/graphql'
import { betterUpdateQuery } from './betterUpdateQuery'
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch'


export const createUrqlClient =(ssrExchange:any)=> ({
  url: "http://localhost:4000/graphql",
  fetchOptions : {
    credentials:"include" as const
  },
  /*we are adding caching here*/
  exchanges: [dedupExchange, cacheExchange({
    updates:{
      Mutation: {
        logout:(_result, args, cache, info) => {
          //me
          betterUpdateQuery<LogoutMutation, MeQuery>(
            cache,
            {query:MeDocument},
            _result,
            () =>  ({me: null}) 
          )
        },
        login:(_result, args, cache, info) => {
          betterUpdateQuery<LoginMutation, MeQuery>(
            cache, {query: MeDocument},
            _result,
            (result, query) => {
              if(result.login.errors){
                return query
              }else{
                return{
                  me: result.login.user
                }
              }
            }
          ) 
        },
        register:(_result, args, cache, info) => {
          betterUpdateQuery<RegisterMutation, MeQuery>(
            cache, {query: MeDocument},
            _result,
            (result, query) => {
              if(result.register.errors){
                return query
              }else{
                return{
                  me: result.register.user
                }
              }
            }
          ) 
        }
      }
    }
  }),ssrExchange, multipartFetchExchange],
})