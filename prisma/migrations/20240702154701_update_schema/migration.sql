/*
  Warnings:

  - The values [IT] on the enum `EDepartment` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EDepartment_new" AS ENUM ('HR', 'IT_IS', 'AD', 'MK');
ALTER TABLE "IDataMapping" ALTER COLUMN "department" TYPE "EDepartment_new" USING ("department"::text::"EDepartment_new");
ALTER TYPE "EDepartment" RENAME TO "EDepartment_old";
ALTER TYPE "EDepartment_new" RENAME TO "EDepartment";
DROP TYPE "EDepartment_old";
COMMIT;
