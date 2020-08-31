const prisma = require("../prisma");

const authors = async (_, { pageNo, filter, orderBy }) => {
  console.log(JSON.stringify(filter, null, 2));
  return await prisma.author.findMany({
    skip: 5 * ((pageNo || 1) - 1),
    take: 5,
    where: filter || {},
    include: {
      books: true,
    },
    orderBy,
  });
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
