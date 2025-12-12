const useRouter = require("./user");
const { notFound, errorHandler } = require("../middlewares/errHandler");

const initRoutes = (app) => {
  app.use("/api/user", useRouter);

  app.use(notFound);
  app.use(errorHandler);
};

module.exports = initRoutes;
