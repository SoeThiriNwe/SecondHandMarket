import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Button variant="text" onClick={()=>{router.push("/IntroPage")}}>To Next Page</Button>
    </div>
  );
}
