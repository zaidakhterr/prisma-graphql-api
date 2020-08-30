const prisma = require("../prisma");

const authors = async () => {
  const allAuthors = prisma.author.findMany({ include: { books: true } });

  return allAuthors;
};

module.exports = { authors };
