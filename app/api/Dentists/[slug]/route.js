import Dentists from "@/models/Users";
import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";

export async function POST(req,res){
    try {
        await connectToDB()
        const body = await req.json();
        const userData = body.formData;
        await Dentists.create(userData);

        return NextResponse.json({message: 'ticket created'}, {status:201})
    } catch (error) {
        return NextResponse.json({message: error.message}, {status:500})
    }
}



export async function GET(params){
    
    try {
        await connectToDB()
        const user= params.url.slice(45)  
        const dentists = await Dentists.findOne({fullName: user});
        // console.log('dentists',dentists, 'alo')

        if (!dentists) {
            return  NextResponse.json({message:'User not found'}, {status: 404});
        }
        return  NextResponse.json({dentists}, {status: 200});
    } catch(error) {
        // console.log(error);
        return  NextResponse.json({ message: "Error retrieving dentist", error }, {status: 500});
    }
}
