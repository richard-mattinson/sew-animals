-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "userName" TEXT,
    "profileImage" TEXT DEFAULT 'https://drive.google.com/uc?id=1jFeB1P2VU3WwajVgyAcbtR-9o68bAOoO',
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductTag" (
    "id" SERIAL NOT NULL,
    "tag" TEXT,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductTagToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductTagToUser_AB_unique" ON "_ProductTagToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductTagToUser_B_index" ON "_ProductTagToUser"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTag" ADD CONSTRAINT "ProductTag_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductTagToUser" ADD CONSTRAINT "_ProductTagToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductTagToUser" ADD CONSTRAINT "_ProductTagToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
