const prisma = require("../prisma");

const authors = async (_, { pageNo, filter, orderBy }) => {
  const authorsList = await prisma.author.findMany({
    skip: 5 * ((pageNo || 1) - 1),
    take: 5 + 1,
    where: filter || {},
    include: {
      books: true,
    },
    orderBy,
  });

  return {
    list: authorsList.slice(0, 5),
    hasMore: authorsList.length === 6,
  };
};

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
