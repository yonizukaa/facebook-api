import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findByCredentials = (
  { email, password, profile, posts },
  select
) => {
  return prisma.user.findFirst({
    where: {
      email,
      password,
      profile,
      posts,
    },
    select,
  });
};

export const findAll = async () => {
  return prisma.user.findMany();
};

export const findOneById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
  });
};
export const updateOne = async ({ id, email, password, profile, posts }) => {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
      password,
    },
  });
};
