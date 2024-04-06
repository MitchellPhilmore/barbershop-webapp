/*
  Warnings:

  - You are about to drop the column `feautredProduct` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "feautredProduct",
ADD COLUMN     "featuredProduct" BOOLEAN NOT NULL DEFAULT false;
