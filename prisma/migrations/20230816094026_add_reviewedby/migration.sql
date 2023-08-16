-- AlterTable
ALTER TABLE "Text" ADD COLUMN     "reviewed_by_id" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'ANNOTATOR';

-- AddForeignKey
ALTER TABLE "Text" ADD CONSTRAINT "Text_reviewed_by_id_fkey" FOREIGN KEY ("reviewed_by_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
