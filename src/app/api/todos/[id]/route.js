import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: Number(params.id),
    } 
  })

  const result = {
    success: true,
    data: todo
  };

  return NextResponse.json(result);
}

export async function PUT(request, { params }) {
  const body = await request.json();

  await prisma.todo.update({
    where: {
      id: Number(params.id),
    },
    data: {
      completed: body.completed
    }
  })

  const result = {
    success: true,
    message: "Berhasil diupdate",
  };

  return NextResponse.json(result);
}

export async function DELETE(request, { params }) {
  await prisma.todo.delete({
    where: {
      id: Number(params.id),
    }
  })

  const result = {
    success: true,
    message: "Berhasil dihapus",
  };

  return NextResponse.json(result);
}
