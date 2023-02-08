/*
  Warnings:

  - You are about to drop the `Consumidor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vendedor` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "order" ALTER COLUMN "time_exit" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Consumidor";

-- DropTable
DROP TABLE "Vendedor";

-- CreateTable
CREATE TABLE "Seller" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
