import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/new-meetups',{
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-type' : 'application/json'
      }
    });
    const data = await response.json();
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;
