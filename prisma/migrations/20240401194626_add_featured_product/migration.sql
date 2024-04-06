-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "feautredProduct" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
