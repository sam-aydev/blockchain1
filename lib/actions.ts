"use server"

import { db } from "@/db"
import bcrypt from "bcryptjs"

export async function registerUser(formData: FormData){
    const name : string  = formData.get("name")
    console.log(name)
const email : string = formData.get("email")
const password : string= formData.get("password")
const confirmPassword : string = formData.get("confirm_password")

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

export async function login(formData: FormData){
    userData={
        email: formData.get("email"),
        password: formData.get("password")
    }
    const existingUser = await getUserByEmail(formData.get("email"))
    const user = await signIn("credentials", userData)
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