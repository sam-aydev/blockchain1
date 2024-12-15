import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Middleware(){
    // const session = await auth()
    // if(!session?.user) redirect("/dashboard")
        return(
            <div>Hello</div>
        )

}