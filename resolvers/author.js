const prisma = require("../prisma");

const authors = async () =>
  await prisma.author.findMany({
    include: {
      books: true,
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

module.exports = { authors, author };
