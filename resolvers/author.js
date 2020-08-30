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
