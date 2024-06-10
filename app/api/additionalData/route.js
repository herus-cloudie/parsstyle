import ConnectDataBase from "@/utils/connectDataBase";
import {ParsStyleUser} from "@/utils/model";
import Session from "@/utils/session";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";
 
export async function POST(req) {
    let session = await Session();
    let {userName , newPassword , currentPassword} = await req.json()

    if(!session) return NextResponse.json({status : 'failed' , message : 'please log in'} , {status : 403})
    try {
        await ConnectDataBase()
    } catch (err) {
        console.log(err)
        return NextResponse.json({status : 'failed' , message : 'problem at connecting to Data-base'} , {status : 500})
    }
    let user = await ParsStyleUser.findOne({Email : session?.user.email})
    if(!await compare(currentPassword , user.Password)) return NextResponse.json({status : 'failed' , message : 'you password is incorrect'} , {status : 401})
    
    if(userName && !newPassword){
        if(user.Email == userName) return NextResponse.json({status : 'failed' , message : 'your userName is already registered'} , {status : 406})
        user.Email = userName;
        user.save();
        return NextResponse.json({status : 'success' , message : 'your user name get change'} , {status : 202})
    }
    else if(newPassword && !userName){
        user.Password = await hash(newPassword , 12);
        user.save();
        return NextResponse.json({status : 'success' , message : 'your password get change'} , {status : 202})
    }
    else{
        if(user.Email == userName) return NextResponse.json({status : 'failed' , message : 'your userName is already registered'} , {status : 406})
        user.Email = userName;
        user.Password = await hash(newPassword , 12);
        user.save();
    } return NextResponse.json({status : 'success' , message : 'your user name and password get change'} , {status : 202})
    
}

export async function PATCH(req) {
    let session = await Session();
    let address = await req.json()

    if(!session) return NextResponse.json({status : 'failed' , message : 'please log in'} , {status : 403})
    try {
        await ConnectDataBase()
    } catch (err) {
        console.log(err)
        return NextResponse.json({status : 'failed' , message : 'problem at connecting to Data-base'} , {status : 500})
    }
    let user = await ParsStyleUser.findOne({Email : session?.user.email})

    user.Address = address;
    user.save()
    
    return NextResponse.json({status : 'success' , user } , {status : 200})
}

export async function GET() {
    let session = await Session();

    if(!session) return NextResponse.json({status : 'failed' , message : 'please log in'} , {status : 403})
    try {
        await ConnectDataBase()
    } catch (err) {
        console.log(err)
        return NextResponse.json({status : 'failed' , message : 'problem at connecting to Data-base'} , {status : 500})
    }

    let user = await ParsStyleUser.findOne({Email : session?.user.email})
    return NextResponse.json({status : 'success' , address : user.Address} , {status : 200})
    
}