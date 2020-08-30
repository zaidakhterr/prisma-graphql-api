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

module.exports = {
  authors,
  author,
  addAuthor,
};
