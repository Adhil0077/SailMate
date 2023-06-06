import appSlice from './appSlice'

const USERS_URL = '/api/users'

export const userApiSlice = appSlice.injectEndpoints({
  endpoints:(builder)=>({
    login:builder.mutation({
      query:(data)=>({
        url:`${USERS_URL}/auth`,
        method :'POST',
        body :data
      })
    })
  })
})

export const {useLoginMutation} = userApiSlice