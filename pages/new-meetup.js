import { useRouter } from 'next/router';
import { MongoClient } from 'mongodb';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
alert('start')
    const client = await MongoClient.connect(
      'mongodb+srv://princeloyal1:clusterPrince@cluster0.vtkhsaw.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(enteredMeetupData);

    alert('reached');

    client.close();

    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;
