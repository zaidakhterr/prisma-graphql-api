const prisma = require("../prisma");

const books = async () =>
  await prisma.book.findMany({
    include: {
      author: true,
    },
  });

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

module.exports = {
  books,
  book,
  addBook,
};
