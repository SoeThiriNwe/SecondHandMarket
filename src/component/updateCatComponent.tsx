import { Button, Dialog, DialogActions, DialogContent, TextField, Typography } from "@mui/material";
import { Category } from "../../generated/prisma/browser";
import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { updateCategoryFunction } from "@/store/slice/categorySlice";

interface updateCatParaType {
    openUpdateCatDialog : boolean,
    setOpenUpdateCatDialog : (value : boolean)=>void,
    selectedCategory : Category
}


const UpdateCategory = ({openUpdateCatDialog , setOpenUpdateCatDialog, selectedCategory} : updateCatParaType )=> { // start here
    const dispatch = useAppDispatch();
    const [updateCategory, setUpdateCategory] = useState<Category>(selectedCategory)//selected category is already had. thus, initial value is selected category.

    const handleUpdateCategory = ()=>{
        dispatch(updateCategoryFunction({id : updateCategory.id , name : updateCategory.name}))
    }

    return(
        <Dialog open={openUpdateCatDialog} onClose={()=>{setOpenUpdateCatDialog(false)}} >
            <DialogContent >
                <Typography sx={{ mb : "10px"}}>Update Category</Typography>
                <TextField onChange={(event)=>{setUpdateCategory({ ...updateCategory,name : event.target.value })}} label="category" defaultValue={selectedCategory.name}  /> {/* also can use updateCategory.name */}
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={()=>{setOpenUpdateCatDialog(false)}} >Cancel</Button>
                <Button variant="contained" onClick={()=>{handleUpdateCategory()}} >Update</Button>
            </DialogActions>
        </Dialog>
    )
}
export default UpdateCategory;