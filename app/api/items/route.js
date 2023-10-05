import { getItemsBySearchQuery } from "@/lib/api/getItemsBySearchQuery"
import { NextResponse } from "next/server"

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  const response = await getItemsBySearchQuery(query)

  return NextResponse.json(response)
}
