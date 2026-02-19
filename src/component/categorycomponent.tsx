import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addCategoriesToSlice, createNewCategory } from "@/store/slice/categorySlice";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

interface ParameterType {
    openCatDialog : boolean,
    setOpenCatDialog : ( value : boolean)=> void
}

const CategoryDialog = ({ openCatDialog , setOpenCatDialog } : ParameterType  )=>{
    const userObject = useAppSelector(store => store.loginSliceReducer.item);
    const [category , setCategory] = useState<string>("");
    const dispatch = useAppDispatch();

    const handleCreateNewCategory = async ()=>{
        if(userObject) {
            dispatch(createNewCategory( { category : category , userId : userObject.id } ))
        }
    }


    return(
        <Dialog  open={openCatDialog} onClose={()=>{setOpenCatDialog(false)}} >
            <DialogTitle>New Catgory</DialogTitle>
            <DialogContent>
                <TextField onChange={(event)=>{setCategory(event.target.value)}} ></TextField>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={()=>{setOpenCatDialog(false)}}>Cancel</Button>
                <Button variant="contained" onClick={()=>{handleCreateNewCategory()}} >Create</Button>
            </DialogActions>
        </Dialog>
    )
}
export default CategoryDialog;

