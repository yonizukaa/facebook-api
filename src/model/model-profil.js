import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

export const createOne = async ({ firstname, lastname, userId }) => {
  return prisma.profil.create({
    data: {
      firstname,
      lastname,
      userId,
    },
  });
};

export const updateOne = async ({ id, firstname, lastname, userId }) => {
  return prisma.profil.update({
    where: {
      id,
    },
    data: {
      firstname,
      lastname,
      userId,
    },
  });
};

export const deleteOne = async (id) => {
  return prisma.profil.delete({
    where: { id },
  });
};

export const findOneById = async (id) => {
  return prisma.profil.findUnique({
    where: { id },
  });
};

export const findAll = async () => {
  return prisma.profil.findMany();
};
