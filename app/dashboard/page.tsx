
import { auth, signOut } from "@/auth";
import { logout } from "@/lib/actions";
// interface User{
//     email: string;
//     password: string;
//     username: string
// }
export default async function Dashboard(){
    const session : any = await auth()
    return (
        <>
           <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
            <p>{session}</p>
        </>
    )
}