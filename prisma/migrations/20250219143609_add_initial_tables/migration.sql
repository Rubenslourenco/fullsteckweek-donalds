/*
  Warnings:

  - You are about to drop the column `Total` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `ingredientes` on the `Product` table. All the data in the column will be lost.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "Total",
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "ingredientes",
ADD COLUMN     "ingredients" TEXT[];
