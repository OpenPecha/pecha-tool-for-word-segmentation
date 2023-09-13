-- AlterTable
CREATE SEQUENCE text_batch_seq;
ALTER TABLE "Text" ALTER COLUMN "batch" SET DEFAULT nextval('text_batch_seq');
ALTER SEQUENCE text_batch_seq OWNED BY "Text"."batch";
