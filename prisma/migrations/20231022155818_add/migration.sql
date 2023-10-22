/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Text` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Text" ALTER COLUMN "modified_on" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Text_id_key" ON "Text"("id" DESC);
