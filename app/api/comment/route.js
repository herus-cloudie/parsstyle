import ConnectDataBase from "@/utils/connectDataBase"
import { ParsStyleComment } from "@/utils/model";
import { NextResponse } from "next/server"

export async function POST(req) {
    let {commentData , id} = await req.json();
    
    try {
        await ConnectDataBase();
    } catch (err) {
        console.log(err);
        return NextResponse.json({status : 'failed' , message : 'problem at connecting to Data-base'} , {status : 500});
    }
    let comment = await ParsStyleComment.create({...commentData , id})
    return NextResponse.json({status : 'success' , comment} , {status : 200});
}

export async function GET() {

    try {
        await ConnectDataBase();
    } catch (err) {
        console.log(err);
        return NextResponse.json({status : 'failed' , message : 'problem at connecting to Data-base'} , {status : 500});
    }
    let comments = await ParsStyleComment.find()
    return NextResponse.json({status : 'success' , comments} , {status : 200});
}