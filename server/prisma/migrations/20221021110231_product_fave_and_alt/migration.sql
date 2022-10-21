/*
  Warnings:

  - Added the required column `alt` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "alt" TEXT NOT NULL,
ADD COLUMN     "favourite" BOOLEAN NOT NULL DEFAULT false;
