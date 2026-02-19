import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography } from "@mui/material"
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import { useState } from "react";
import CategoryDialog from "@/component/categorycomponent";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { Category } from "../../../../generated/prisma/browser";
import { deleteCategory } from "@/store/slice/categorySlice";
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import UpdateCategory from "@/component/updateCatComponent";

const modification = ()=>{
    
    const [openCatDialog, setOpenCatDialog] = useState<boolean>(false)
    const [openUpdateCatDialog, setOpenUpdateCatDialog] = useState<boolean>(false)
    const [selectedCategory , setSelectedCategory] = useState<Category>();
    const categories = useAppSelector(store => store.categorySliceReducer.items);
    const dispatch = useAppDispatch();
    const handleDeleteCategory = ()=>{
        if(selectedCategory){
            dispatch(deleteCategory(selectedCategory.id))
        }
    }

    return (
        <Box sx={{display : "flex" , flexDirection : "column",alignItems : "center", width : "100vw" , height : "100vh"}}>
                <Box sx={{display : "flex" , justifyContent : "space-between", border :  "1px solid black", width : "100vw" , alignItems : "center", padding :  "10px"}}>
                    <Typography>Category</Typography>
                    <Box>
                        {selectedCategory ? <IconButton onClick={()=>{handleDeleteCategory()}} ><DeleteForeverTwoToneIcon sx={{color : "black"}}/></IconButton> : undefined}
                        {selectedCategory ? <IconButton onClick={()=>{setOpenUpdateCatDialog(true)}} ><DriveFileRenameOutlineTwoToneIcon sx={{color : "black"}} /></IconButton> : undefined}
                        <IconButton onClick={()=>{setOpenCatDialog(true)}}><AddBoxTwoToneIcon sx={{color : "black"}} /></IconButton>
                    </Box>
                </Box>
                <Box sx={{display : "flex" , gap : "5px" ,flexWrap :  "wrap" , padding :  "10px"}}>
                    {categories.map((a)=>{
                        return (
                            <Box onClick = {()=>{setSelectedCategory(a)}}   key={a.id} sx={{ bgcolor : (selectedCategory && selectedCategory.id === a.id ? "#ebb6b6ff" : "#857d7dff" ) , height : "60px" ,width :  "100px" ,border : "2px solid black" , display : "flex" , alignItems : "center", justifyContent :  "center" }} >
                                <Typography >{a.name}</Typography>
                            </Box>
                        );
                    })}
                </Box>

                    <UpdateCategory openUpdateCatDialog={openUpdateCatDialog} setOpenUpdateCatDialog={setOpenUpdateCatDialog} />
              <CategoryDialog openCatDialog={openCatDialog} setOpenCatDialog={setOpenCatDialog} />

        </Box>
    )
}
export default modification;