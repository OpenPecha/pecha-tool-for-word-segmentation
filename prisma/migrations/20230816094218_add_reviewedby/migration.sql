-- DropForeignKey
ALTER TABLE "Text" DROP CONSTRAINT "Text_reviewed_by_id_fkey";

-- AlterTable
ALTER TABLE "Text" ALTER COLUMN "reviewed_by_id" DROP NOT NULL,
ALTER COLUMN "reviewed_by_id" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Text" ADD CONSTRAINT "Text_reviewed_by_id_fkey" FOREIGN KEY ("reviewed_by_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
