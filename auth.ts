import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth} = NextAuth({
    session: { strategy: "jwt"},
    adapter: PrismaAdapter(db),
    providers: [Credentials({})]
})