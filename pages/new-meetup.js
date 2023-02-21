import { useRouter } from 'next/router';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
alert('shhs')
    const response = await fetch('https://nextjs-faf60-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
alert('data')
    const data = await response.json();

    alert('reached Finnish');

    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;
