"use server"

import { db } from "@/db"
import bcrypt from "bcryptjs"
import {signIn} from "@/auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { signOut } from "next-auth/react"
import { AuthError } from "next-auth"

export async function registerUser(formData: FormData){
    const name   = formData.get("name") as string
    console.log(name)
const email  = formData.get("email") as string
const password = formData.get("password") as string
const confirmPassword : string = formData.get("confirm_password") as string

if(password !== confirmPassword ) throw new Error("Password does not correlate")
const hashedPassword = await bcrypt.hash(password, 10)



const newUser = await db.user.create({
    data: {
        name,
        email,
        password: hashedPassword,
        image: ""
    }
})
return newUser
}

export const login = async(formData: FormData)=>{
    const userData={
        email: formData.get("email"),
        password: formData.get("password")
    }
    const existingUser = await getUserByEmail(formData.get("email") as string)
    if(!existingUser) throw new Error("Incorrect Detaiks")
    
        try{

            await signIn("credentials", userData)
        }catch(err: any){
            if(err instanceof AuthError){
                switch(err.type){
                    case "CredentialsSignin":
                    return {error: "Invalid credentials"}
                    
                    default:
                    return {error: "Something is wrong"}
                }
            }
            throw err
        }
    redirect("/middleware")
    revalidatePath("/dashboard")
    
}

export async function logout(){
    await signOut({
        redirectTo: "/"
    })
    revalidatePath("/")
}

export async function getUserByEmail(email:string){
    const user = await db.user.findUnique({
        where: {
            email
        }
    })
    if(!user) throw new Error("User does not exist!")
        return user
}