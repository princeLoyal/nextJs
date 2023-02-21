import { useRouter } from 'next/router';
import { MongoClient } from 'mongodb';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
alert('start')
    

    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;
