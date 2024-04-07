import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import ConnectDataBase from "./connectDataBase";

export default async function Session(){
    await ConnectDataBase()
    let session = await getServerSession(authOptions)
    return session;
} 