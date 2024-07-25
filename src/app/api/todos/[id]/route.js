import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  console.log("params", params.id);

  const result = {
    success: true,
    message: "Berhasil di GET " + params.id,
  };

  return NextResponse.json(result);
}

export async function PUT(request, { params }) {
  const body = await request.json();

  const result = {
    success: true,
    message: "Berhasil di PUT " + params.id,
    body: body.data.name,
  };

  return NextResponse.json(result);
}

export async function DELETE(request, { params }) {
  const result = {
    success: true,
    message: "Berhasil di DELETE " + params.id,
  };

  return NextResponse.json(result);
}
