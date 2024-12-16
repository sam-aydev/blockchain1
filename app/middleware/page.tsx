import { auth } from "@/auth";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

export default async function Middleware(){
    const session = await auth()
    console.log(session)
    if(!session?.user) redirect("/dashboard")
        return(
            <div>Hello so</div>
        )

}