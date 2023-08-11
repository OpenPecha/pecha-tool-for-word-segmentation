-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Text" ADD COLUMN     "batch" TEXT DEFAULT '',
ADD COLUMN     "reviewed" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "assigned_batch" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
