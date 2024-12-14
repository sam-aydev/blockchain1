import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default  function Middleware(){
    // const session = await auth()
    // if(!session?.user) redirect("/dashboard")
        return(
            <div>Hello</div>
        )

}