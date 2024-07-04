-- CreateEnum
CREATE TYPE "EDepartment" AS ENUM ('HR', 'IT', 'AD', 'MK');

-- CreateEnum
CREATE TYPE "ESubjectType" AS ENUM ('EMPLOYEES', 'FACULTY', 'STUDENTS');

-- CreateTable
CREATE TABLE "IDataMapping" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "department" "EDepartment" NOT NULL,
    "subjectType" "ESubjectType",

    CONSTRAINT "IDataMapping_pkey" PRIMARY KEY ("id")
);
