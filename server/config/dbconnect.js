const { default: mongooose } = require("mongoose");
mongooose.set("strictQuery", false);

const dbConnect = async () => {
  const conn = await mongooose.connect(process.env.MONGODB_URI);
  if (conn.connection.readyState === 1)
    console.log("DB connection is successfully!");
  else console.log("DB connecting");
  try {
  } catch (error) {
    console.log("DB connection is failed");
    throw new Error(error);
  }
};

module.exports = dbConnect;
