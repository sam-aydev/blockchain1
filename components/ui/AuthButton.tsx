
import { useFormStatus } from "react-dom";

export default function AuthButton(){
    const { pending } = useFormStatus()
    return (
        <button disabled={pending} type="submit">{pending ? "Loading" : "Sign In" }</button>
    )
}