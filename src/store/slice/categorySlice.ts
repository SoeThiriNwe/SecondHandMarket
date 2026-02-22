import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Category } from '../../../generated/prisma/client'
import { NewCategoryParaType, UpdateCategoryParaType } from '@/type/categoryTypes'

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

export const updateCategoryFunction = createAsyncThunk("updateCategory", async ( updateCategoryPara : UpdateCategoryParaType , thunkApi )=>{

  const reponseUpdatedCategory  = await fetch("http://localhost:3000/api/category",{
    method : "PUT",
    headers : {"content-type" : "application/json"},
    body : JSON.stringify({ updateId : updateCategoryPara.id , updateName :  updateCategoryPara.name })
  })
  const data  = await reponseUpdatedCategory.json();
  thunkApi.dispatch(updateCategoryinSlice(data.updatedCategory))

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
      },
      updateCategoryinSlice : (state, action) =>{
        state.items = state.items.map( item =>  item.id === action.payload.id ? action.payload : item  )
      }
  },
})

export const { addCategoriesToSlice , setRelatedCategories , deleteCategoryinSlice , updateCategoryinSlice } = categorySlice.actions;

export default categorySlice.reducer;
