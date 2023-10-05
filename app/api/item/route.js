import getItemById from "@/lib/api/getItemById"
import { NextResponse } from "next/server"

export async function GET(request) {
  const id = request.nextUrl.searchParams.get('id')
  const response = await getItemById(id)

  return NextResponse.json(response)
}  
