import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "./db";
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth} = NextAuth({
    session: { strategy: "jwt"},
    adapter: PrismaAdapter(db),
    providers: [Credentials({
        name: "Credentials",
        credentials:{
            email: {
                label: "Email",
                type: "email",
            },
            password: {
                label: "Password",
                type: "password"
            },

        },
        authorize: async (credentials)=>{
            if(!credentials.email || !credentials.password || !credentials){
                return null
            }
            const email = credentials.email as string
            const hashedPassword: string = await bcrypt.hash(credentials.password as string, 10 )
            const user = await db.user.findUnique({
                where: {
                    email
                }
            })
            if(!user) return null
            const isMatch = bcrypt.compare(hashedPassword, user.password as string)
            if(!isMatch) return null
            return user
        }
    })]
})