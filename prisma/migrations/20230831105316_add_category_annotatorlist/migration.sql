-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'REVIEWER';

-- AlterTable
ALTER TABLE "Text" ADD COLUMN     "category" TEXT DEFAULT '';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "categories" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "reviewer_id" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_reviewer_id_fkey" FOREIGN KEY ("reviewer_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
