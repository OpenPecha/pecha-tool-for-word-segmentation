-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'OWNER';

-- AlterTable
ALTER TABLE "Text" ALTER COLUMN "batch" DROP NOT NULL;
