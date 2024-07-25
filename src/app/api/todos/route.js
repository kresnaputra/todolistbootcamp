import { NextResponse } from "next/server";

export async function GET() {
  const result = {
    success: true,
    message: "Berhasil di GET",
  };

  return NextResponse.json(result);
}

export async function POST(request) {
  const body = await request.json();

  console.log('data', body.data.name)

  const result = {
    success: true,
    message: "Berhasil di POST",
    body: body.data.name
  };

  return NextResponse.json(result);
}
