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

module.exports = { books, book };
