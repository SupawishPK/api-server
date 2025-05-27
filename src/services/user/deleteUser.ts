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
      await tx.geo.delete({
        where: { addressId: address.id },
      });
    }

    await tx.address.delete({
      where: { userId: id },
    });

    await tx.company.delete({
      where: { userId: id },
    });

    return tx.user.delete({
      where: { id },
    });
  });
};

export default deleteUser;
