/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `UserLogin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserLogin_email_key" ON "UserLogin"("email");
