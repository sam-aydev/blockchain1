"use client"
import { signOut } from "next-auth/react";
import { logout } from "@/lib/actions";
// interface User{
//     email: string;
//     password: string;
//     username: string
// }
export default  function Dashboard(){
    return (
        <>
       
    
    <button onClick ={()=> signOut({ redirect: true, 
      redirectTo: "https://urban-space-acorn-x66rp7ggwqvc6xrj-3000.app.github.dev/login",
      callbackUrl: "https://urban-space-acorn-x66rp7ggwqvc6xrj-3000.app.github.dev/login"
    })}>Sign Out</button>

            
        </>
    )
}