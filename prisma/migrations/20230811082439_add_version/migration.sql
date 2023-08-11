/*
  Warnings:

  - You are about to drop the column `group` on the `Text` table. All the data in the column will be lost.
  - The `batch` column on the `Text` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Text" DROP COLUMN "group",
ADD COLUMN     "version" TEXT DEFAULT '',
DROP COLUMN "batch",
ADD COLUMN     "batch" INTEGER DEFAULT 0;
