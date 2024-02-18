import { createSupabaseReqResClient } from "@/utils/supabase/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const supabase = createSupabaseReqResClient(request)

    const {data}= await supabase.from('users').select()
    return NextResponse.json(data)
}

export async function PUT(request: NextRequest){
    const {id} = await request.json()
    const supabase = createSupabaseReqResClient(request)

    const {data}= await supabase.from('users')
    .update(
        {firstname: "Delhia", 
        lastName: "Gbelidji", 
        email:"delhia.gb5@gmail.com"})
    .match({id})
    return NextResponse.json(data)
}   