import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup
alert('shsh')
async function handler(req, res) {
alert(req.method)
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://princeloyal1:clusterPrince@cluster0.vtkhsaw.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    alert('hshs');

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
