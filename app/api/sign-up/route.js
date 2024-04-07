import ConnectDataBase from "@/utils/connectDataBase";
import { NextResponse } from "next/server";

export async function POST(req) {
    let body = await req.json()
    try {
        await ConnectDataBase()
    } catch (err) {
        console.log(err)
        return NextResponse.json({status : 'failed' , message : 'problem at connecting to Data-base'} , {status : 500})
    }
    return NextResponse.json({status : 'success' ,  data : body} , {status : 200})
}
 