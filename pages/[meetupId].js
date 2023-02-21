import MeetupDetail from '../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image = { props.meetup.image }
      title = { props.meetup.title }
      address = { props.meetup.address }
      description = { props.meetup.description }
    />
  );
}

export function getStaticPaths(){
 return {
  fallback: false, 
  paths: [
    {
      params: {
        meetupId : '1'
      }
    },
    {
      params: {
        meetupId : '2'
      }
    },
    {
      params: {
        meetupId : '3'
      }
    },
  ]
 };
}

export function getStaticProps(context){
  const id = context.params.meetupId;
  async function getMeetups(){
    const response = await fetch('https://nextjs-faf60-default-rtdb.firebaseio.com/meetups.json');
    const meetups = await response.json();
    for (const key in meetups){
      if(meetups[key].id === id){
        const meetup = {
          image: meetups[key].image,
          title: meetups[key].title,
          address: meetups[key].address,
          description: meetups[key].description, 
        }
        return meetup;
      }
    }
  }
  const meetup = getMeetups();
  return {
     props: {
       meetup: meetup
     },
  };
}

export default MeetupDetails;
