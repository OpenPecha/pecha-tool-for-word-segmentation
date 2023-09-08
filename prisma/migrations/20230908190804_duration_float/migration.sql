/*
  Warnings:

  - You are about to drop the column `duration_sec` on the `Text` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Text" DROP COLUMN "duration_sec",
ADD COLUMN     "duration" DOUBLE PRECISION DEFAULT 0;
