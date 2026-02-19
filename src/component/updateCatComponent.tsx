import { Button, Dialog, DialogActions, DialogContent, TextField, Typography } from "@mui/material";

interface updateCatParaType {
    openUpdateCatDialog : boolean,
    setOpenUpdateCatDialog : (value : boolean)=>void
}


const UpdateCategory = ({openUpdateCatDialog , setOpenUpdateCatDialog} : updateCatParaType )=> {
    return(
        <Dialog open={openUpdateCatDialog} onClose={()=>{setOpenUpdateCatDialog(false)}} >
            <DialogContent >
                <Typography sx={{ mb : "10px"}}>Update Category</Typography>
                <TextField label="category"  />
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={()=>{setOpenUpdateCatDialog(false)}} >Cancel</Button>
                <Button variant="contained" >Update</Button>
            </DialogActions>
        </Dialog>
    )
}
export default UpdateCategory;