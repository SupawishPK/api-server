import { PrismaClient, User } from "../../generated/prisma";

const prisma = new PrismaClient();

const deleteUser = async (id: number): Promise<User> => {
  return prisma.$transaction(async (tx) => {
    await tx.post.deleteMany({
      where: { authorId: id },
    });

    const address = await tx.address.findUnique({
      where: { userId: id },
    });

    if (address) {
      await tx.geo.deleteMany({
        where: { addressId: address.id },
      });

      await tx.address.delete({
        where: { id: address.id },
      });
    }

    const company = await tx.company.findUnique({
      where: { userId: id },
    });

    if (company) {
      await tx.company.delete({
        where: { id: company.id },
      });
    }

    return tx.user.delete({
      where: { id },
    });
  });
};

export default deleteUser;
