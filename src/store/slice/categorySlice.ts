import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Category } from '../../../generated/prisma/client'
import { NewCategoryParaType } from '@/type/categoryTypes'

interface categorySliceType {
  items : Category[]
}

const initialState : categorySliceType = {
  items : []
}


export const createNewCategory = createAsyncThunk("createNewCategory" , async( categoryPara : NewCategoryParaType  , thunkApi ) => {
  const responseCategory =  await fetch ("http://localhost:3000/api/category",{
      method : "POST",
      headers : {"content-type" : "application/json"},
      body : JSON.stringify({category : categoryPara.category, userId : categoryPara.userId})
  })
  const data = await responseCategory.json();
  thunkApi.dispatch(addCategoriesToSlice(data.createdCategory))
})

export const deleteCategory = createAsyncThunk("deleteCategory", async ( deleteCategoryPara : Number , thunkApi   )=>{
  const responseDeletedCategory = await fetch("http://localhost:3000/api/category",{
      method : "DELETE",
      headers :  {"content-type" : "application/json"},
      body : JSON.stringify({  deletedId : deleteCategoryPara  })
  })
  const data = await responseDeletedCategory.json();
  thunkApi.dispatch(deleteCategoryinSlice(data.deletedCategory))
})

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
      addCategoriesToSlice : (state, action )=>{
        state.items =[...state.items,action.payload];
      },
      setRelatedCategories : ( state , action ) => {
        state.items = action.payload
      },
      deleteCategoryinSlice : (state, action)=>{
        state.items = state.items.filter((item)=> item.id !== action.payload.id )
      }
  },
})

export const { addCategoriesToSlice , setRelatedCategories , deleteCategoryinSlice } = categorySlice.actions;

export default categorySlice.reducer;
