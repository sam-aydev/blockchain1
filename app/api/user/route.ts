import { NextRequest, NextResponse } from "next/server";

interface User{
    name: string;
    email: string;
    password: string
}
export async function POST(req: NextRequest, res: NextResponse){
const { name, email, password } : User | undefined = res.json()


}