import { EDepartment, ESubjectType, PrismaClient } from "@prisma/client";
import { myPrisma } from "../../_base";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const singleId = Number(params.id);

    const data = await myPrisma.iDataMapping.findUnique({
      where: {
        id: singleId,
      },
    });

    if (!data) {
      return new Response(JSON.stringify({ error: "Item not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { title, desc, department, subjectType } = await body;

    if (!title) {
      throw new Error("Title is required");
    }
    if (!desc) {
      throw new Error("Description is required");
    }

    if (!Object.values(EDepartment).includes(department)) {
      throw new Error("Department is required");
    }

    const singleId = Number(params.id);

    const updatedPost = await myPrisma.iDataMapping.update({
      where: {
        id: singleId,
      },
      data: {
        title,
        desc,
        department,
        subjectType: subjectType === "" ? null : subjectType,
      },
    });

    return new Response(JSON.stringify(updatedPost), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const singleId = Number(params.id);

    const updatedPost = await myPrisma.iDataMapping.delete({
      where: {
        id: singleId,
      },
    });

    return new Response(
      JSON.stringify(`delete item id : ${singleId} completed`),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
