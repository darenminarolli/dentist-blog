import Dentists from "@/models/Users";
import { NextResponse } from "next/server";
import { useParams } from "next/navigation";

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

// export async function GET(paramsName){
//     try {
//         const dentists = await Dentists.findOne({fullName: paramsName});
//         if (!dentists) {
//             return {message:'User not found', status:404};
//         }
//         return {dentists, status:200};
//     } catch(error) {
//         return { message: "Error retrieving dentist", error };
//     }
// }

export async function GET(params){
   
    try {
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
