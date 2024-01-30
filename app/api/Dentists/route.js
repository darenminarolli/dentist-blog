import Dentists from "@/models/Users";
import { NextResponse } from "next/server";

export async function POST(req,){
    try {
        const body = await req.json()
        const userData = body.formData
        await Dentists.create(userData)

        return NextResponse.json({message: 'ticket created'}, {status:201})
    } catch (error) {
        return NextResponse.json({message: error.message}, {status:500})
    }
}

// export async function GET(){
//     try{
//         const dentists = await  Dentists.find();
//         return NextResponse.json({dentists}, {status:200})

//     }catch(error){
//         return NextResponse.json({message: "Error daren ",  error}, {status: 500})
//     }
// }
