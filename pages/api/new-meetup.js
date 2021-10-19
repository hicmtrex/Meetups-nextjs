import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  //api/new-meetup
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb://localhost:27017/next-js"
    );
    const db = client.db();
    const meetupsCollection = db.collection("next-js");
    const res = await meetupsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
