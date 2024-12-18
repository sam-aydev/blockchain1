import { auth} from "./auth"
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const protectedRoutes = ["/middleware", "/dashboard"]
export default async function middleware(request: NextRequest){
    const session = await auth()
    const response = NextResponse.next()
    const currentCookies = request.cookies.getAll()
    const preferredOrigin = "https://urban-space-acorn-x66rp7ggwqvc6xrj-3000.app.github.dev"
    if(currentCookies.find((cookie)=>cookie.name === "next-url-origin")){
        response.cookies.set("next-url-origin", preferredOrigin)
    }else{
        response.cookies.set("next-url-origin", preferredOrigin)
    }

    console.log(request.nextUrl)
    const isProtected = protectedRoutes.some((route)=> request.nextUrl.pathname.startsWith(route))
    console.log(request)
    if(!session && isProtected){
        const absoluteUrl = new URL("/login", request.nextUrl.origin)
        
        return NextResponse.redirect(absoluteUrl.toString())
    }
    return response
}

export const config ={
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}