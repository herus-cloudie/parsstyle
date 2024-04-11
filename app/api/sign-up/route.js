import ConnectDataBase from "@/utils/connectDataBase";
import ParsStyleUser from "@/utils/model";
import Session from "@/utils/session";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
    let {email , password} = await req.json()
 
    try {
        await ConnectDataBase()
    } catch (err) {
        console.log(err)
        return NextResponse.json({status : 'failed' , message : 'problem at connecting to Data-base'} , {status : 500})
    }
    let existUser = await ParsStyleUser.findOne({Email : email}) 
    if(existUser) return NextResponse.json({status : 'failed' ,  message : 'the user does exist'} , {status : 422})
    let hashedPassword = await hash(password , 12)
    const user = await ParsStyleUser.create({Email : email , Password : hashedPassword})
    return NextResponse.json({status : 'success' ,  user} , {status : 200})
}
 
export async function GET() {

    let session = await Session()
    try {
        await ConnectDataBase()
    } catch (err) {
        console.log(err)
        return NextResponse.json({status : 'failed' , message : 'problem at connecting to Data-base'} , {status : 500})
    }
    let user = await ParsStyleUser.findOne({Email : session.user.email}) 

    return NextResponse.json({status : 'success' ,  user} , {status : 200})
}