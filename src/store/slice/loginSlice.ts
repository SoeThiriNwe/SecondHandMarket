import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserLogin } from '../../../generated/prisma/client'
import { setRelatedCategories } from './categorySlice'

interface loginSliceType {
  item : UserLogin | null
}

const initialState : loginSliceType = {
  item : null
}

export const sendingLoginInfo = createAsyncThunk("sendingDatainLoginSlice", async (loginInfoParameter : loginInfoType , thunkApi)=>{
        const responseData = await fetch("http://localhost:3000/api/login",{
            method : "POST",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify({name : loginInfoParameter.name , email : loginInfoParameter.email, password : loginInfoParameter.password})
        })

        const {sentLoginInfo, relatedCategories} = await responseData.json();
        thunkApi.dispatch( setLoginInfoSlice(sentLoginInfo) )
        if(relatedCategories) {
          thunkApi.dispatch( setRelatedCategories(relatedCategories))
        }
})

export const loginSlice = createSlice({
  name: 'loginSlice functions',
  initialState,
  reducers: {
      setLoginInfoSlice : ( state , action ) => {
        state.item = action.payload;
      }
  },
})

export const { setLoginInfoSlice } = loginSlice.actions

export default loginSlice.reducer

