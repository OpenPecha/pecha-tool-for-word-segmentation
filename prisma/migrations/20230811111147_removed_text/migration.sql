/*
  Warnings:

  - You are about to drop the `Text` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserIgnoredText` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserRejectedText` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Text" DROP CONSTRAINT "Text_modified_by_id_fkey";

-- DropForeignKey
ALTER TABLE "_UserIgnoredText" DROP CONSTRAINT "_UserIgnoredText_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserIgnoredText" DROP CONSTRAINT "_UserIgnoredText_B_fkey";

-- DropForeignKey
ALTER TABLE "_UserRejectedText" DROP CONSTRAINT "_UserRejectedText_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserRejectedText" DROP CONSTRAINT "_UserRejectedText_B_fkey";

-- DropTable
DROP TABLE "Text";

-- DropTable
DROP TABLE "_UserIgnoredText";

-- DropTable
DROP TABLE "_UserRejectedText";
