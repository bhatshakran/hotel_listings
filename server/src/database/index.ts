import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://bhatshakran:${process.env.password}@cluster0.dt6yo.mongodb.net/?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
};
export const connectDatabase = async () => {
  const client = new MongoClient(uri, options);

  const db = client.db("main");

  return {
    listings: db.collection("tlistings"),
  };
};
