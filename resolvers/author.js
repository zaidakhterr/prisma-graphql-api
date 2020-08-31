const prisma = require("../prisma");

const authors = async (_, { pageNo, filter }) =>
  await prisma.author.findMany({
    skip: 5 * ((pageNo || 1) - 1),
    take: 5,
    where: filter
      ? {
          name: {
            contains: filter,
            mode: "insensitive",
          },
        }
      : {},
    include: {
      books: true,
    },
    orderBy: {
      name: "asc",
    },
  });

const author = async (_, { id }) =>
  await prisma.author.findOne({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });

const addAuthor = async (_, { name, email }) =>
  await prisma.author.create({
    data: {
      name,
      email,
    },
    include: {
      books: true,
    },
  });

const removeAuthor = async (_, { id }) => {
  let toBeDeletedAuthor = await prisma.author.findOne({
    where: {
      id,
    },
  });

  if (!toBeDeletedAuthor) return null;

  await prisma.book.deleteMany({
    where: {
      authorId: id,
    },
  });

  return await prisma.author.delete({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });
};

module.exports = {
  authors,
  author,
  addAuthor,
  removeAuthor,
};
