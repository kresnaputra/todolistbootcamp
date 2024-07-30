import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const todos = await prisma.todo.findMany();

  const result = {
    success: true,
    body: todos,
  };

  return NextResponse.json(result);
}

export async function POST(request) {
  const body = await request.json();

  try {
    const newTodo = await prisma.todo.create({
      data: {
        title: body.title,
      },
    });

    const result = {
      success: true,
      message: "Berhasil ditambahkan",
      body: newTodo,
    };

    return NextResponse.json(result);
  } catch (error) {
    const result = {
      success: false,
      message: error.message,
    };

    return NextResponse.json(result).status(500);
  }
}
