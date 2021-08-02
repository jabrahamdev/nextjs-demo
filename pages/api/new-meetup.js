// /api/new-meetup

import { MongoClient } from "mongodb";

export const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://admin-jabraham:dunkel1mongo@cluster0.e4adw.mongodb.net/meetups?retryWrites=true&w=majority`
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
};

export default handler;
