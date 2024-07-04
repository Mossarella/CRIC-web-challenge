import { EDepartment, ESubjectType, PrismaClient } from "@prisma/client";
import { myPrisma } from "../_base";

export async function GET(
  request: Request
  // {
  //   params,
  // }: {
  //   params: { title?: string; department?: string[]; subjectType?: string[] };
  // }
) {
  try {
    const url = new URL(request.url);
    const title = url.searchParams.get("title");
    const department = url.searchParams.getAll("department");
    let subjectType: (string | null)[] = url.searchParams.getAll("subjectType");

    const filters: any = {};

    if (subjectType) {
      if (subjectType.length === 1) {
        if (subjectType[0] === "null") {
          // subjectType = null;
          filters.subjectType = null;
        } else {
          filters.subjectType = { in: subjectType };
        }
      } else if (subjectType.length > 1) {
        subjectType = subjectType.map((param) =>
          param === "null" ? null : param
        );

        if (subjectType.includes(null)) {
          filters.OR = [
            {
              subjectType: { in: subjectType.filter((item) => item !== null) },
            },
            {
              subjectType: null,
            },
          ];
        } else {
          filters.subjectType = { in: subjectType };
        }
      }
    }

    if (title) {
      filters.title = { contains: title };
    }

    if (department.length > 0) {
      filters.department = { in: department };
    }

    const data = await myPrisma.iDataMapping.findMany({ where: filters });
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

export async function POST(request: Request) {
  try {
    const { title, desc, department, subjectType } = await request.json();

    if (!title) {
      throw new Error("Title is required");
    }
    if (!desc) {
      throw new Error("Description is required");
    }

    if (!Object.values(EDepartment).includes(department)) {
      throw new Error("Department is required");
    }

    let validSubjectType: ESubjectType | null = null;
    if (subjectType && Object.values(ESubjectType).includes(subjectType)) {
      validSubjectType = subjectType;
    }

    const newMappingData = await myPrisma.iDataMapping.create({
      data: {
        title,
        desc,
        department,
        subjectType: validSubjectType,
      },
    });
    return new Response(JSON.stringify(newMappingData), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
