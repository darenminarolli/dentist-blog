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

export async function GET(){
    try{
        // const { fullName } = params;
        const dentists = await Dentists.findOne({fullName:'Aleks Visha'});
        if (!dentists) {
            return NextResponse.json({message:'User not found'}, {status:404})
        }
        return NextResponse.json({dentists}, {status:200})
    } catch(error){
        return res.status(500).json({ message: "Error retrieving dentist", error });
    }
}

