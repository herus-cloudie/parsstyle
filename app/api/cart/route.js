
import ConnectDataBase from "@/utils/connectDataBase";
import {ParsStyleUser} from "@/utils/model";
import Session from "@/utils/session";
import { NextResponse } from "next/server";
 


export async function POST(req) {
    let session = await Session();
    let {data , additionalData} = await req.json()

    if(!session) return NextResponse.json({status : 'failed' , message : 'please log in'} , {status : 403})
    try {
        await ConnectDataBase()
    } catch (err) {
        console.log(err)
        return NextResponse.json({status : 'failed' , message : 'problem at connecting to Data-base'} , {status : 500})
    }
    let user = await ParsStyleUser.findOne({Email : session?.user.email}) 
    let existProductInCart = user.Cart.find(item => item.id == data.id)
    // if(!existProductInCart){
    //     return NextResponse.json({'no' : 'no'} , {status : 200})
    //     } 
    //     else{
    //         return NextResponse.json({'yes' : 'yes'} , {status : 200})
    //     } 
    if(!existProductInCart){
      user.Cart.push({...data , ...additionalData}) 
      user.save();
      return NextResponse.json({status : 'success' , message : 'added'} , {status : 200})
    } 
    else{
        user.Cart.pop({...data , ...additionalData}) 
        user.save();
        return NextResponse.json({status : 'success' , message : 'deleted'} , {status : 200})
    } 
}
 
export async function PATCH(req) {
    let id = await req.json()
    let session = await Session();
    if(!session) return NextResponse.json({status : 'failed' , message : 'please log in'} , {status : 403})
    try {
        await ConnectDataBase()
    } catch (err) {
        console.log(err)
        return NextResponse.json({status : 'failed' , message : 'problem at connecting to Data-base'} , {status : 500})
    }
    let user = await ParsStyleUser.findOne({Email : session?.user.email});
    let existProductInCart = user.Cart.find(item => item.id == id)
    if(existProductInCart) return NextResponse.json({status : 'success' , message : 'we have had it already'} , {status : 200})
    else if(!existProductInCart) return NextResponse.json({status : 'success', message : 'we do not have it' } , {status : 200})
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
    let user = await ParsStyleUser.findOne({Email : session?.user.email});
    return NextResponse.json({status : 'success' , cart : user.Cart} , {status : 200})
}

export async function DELETE(req) {
    let id = await req.json()
    let session = await Session();
    if(!session) return NextResponse.json({status : 'failed' , message : 'please log in'} , {status : 403})
    try {
        await ConnectDataBase()
    } catch (err) {
        console.log(err)
        return NextResponse.json({status : 'failed' , message : 'problem at connecting to Data-base'} , {status : 500})
    }
    let user = await ParsStyleUser.findOne({Email : session?.user.email});
    let otherProduct = user.Cart.filter(item => item.id != id)
    user.Cart = otherProduct;
    user.save();
    return NextResponse.json({status : 'success' , otherProduct} , {status : 200})
}
