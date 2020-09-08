const prisma = require("../prisma");

const books = async (_, { pageNo, filter, orderBy }) => {
  const booksList = await prisma.book.findMany({
    skip: 5 * ((pageNo || 1) - 1),
    take: 6,
    where: filter || {},
    include: {
      author: true,
    },
    orderBy,
  });

  return {
    list: booksList.slice(0, 5),
    hasMore: booksList.length === 6,
  };
};

const book = async (_, { id }) =>
  await prisma.book.findOne({
    where: {
      id,
    },
    include: {
      author: true,
    },
  });

const addBook = async (_, { title, authorId }) =>
  await prisma.book.create({
    data: {
      title,
      author: {
        connect: {
          id: authorId,
        },
      },
    },
    include: {
      author: true,
    },
  });

const removeBook = async (_, { id }) => {
  let toBeDeletedBook = await prisma.book.findOne({
    where: {
      id,
    },
  });

  if (!toBeDeletedBook) return null;

  return await prisma.book.delete({
    where: {
      id,
    },
    include: {
      author: true,
    },
  });
};
module.exports = {
  books,
  book,
  addBook,
  removeBook,
};
