import Session from "@/utils/session"
import { redirect } from "next/navigation";
import SignPage from "@/components/template/signPage"

export default async function Sign(){
    let session = await Session();
    if(session) redirect('/')
    
    return <SignPage />
}