import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { sendingLoginInfo, setLoginInfoSlice } from "@/store/slice/loginSlice";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const IntroPage = () => {
    const [ loginInfo , setLoginInfo ] = useState<loginInfoType>({name : "" , email : "", password : ""})
    const dispatch = useAppDispatch();
    const loginData = useAppSelector(store => store.loginSliceReducer.item); //useAppSelector((store) => { return store.loginSlice.item})
    const router = useRouter();

    useEffect(() => {
        if(loginData) {
            router.push("/admin/modification")
        }
    } , [ loginData ])

    const sendLoginInfo  = async ()=>{
        dispatch(sendingLoginInfo({name : loginInfo.name, email : loginInfo.email , password : loginInfo.password}))
    }


    return (
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh" }}>
            <Box sx={{bgcolor:"#d7a0a0ff",display:"flex",flexDirection:"column",p:"40px",borderRadius:"6px",gap:"50px"}} >
                <Typography sx={{fontSize:"37px",fontFamily:"system-ui"}}>Login</Typography>
                <TextField label="name" onChange={(e)=>{setLoginInfo({...loginInfo, name : e.target.value})}} />
                <TextField label="email" onChange={(e)=>{setLoginInfo({...loginInfo, email : e.target.value})}} />
                <TextField label="password" onChange={(e)=>{setLoginInfo({...loginInfo, password : e.target.value})}} />

                <Button variant="contained" sx={{bgcolor:"#000101ff"}} onClick={ ()=>{sendLoginInfo()}}>Send Data</Button>
            </Box>
        </Box>
    )
}

export default IntroPage;




