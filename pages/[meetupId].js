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

export async function getStaticPaths(){
 const response = await fetch('https://nextjs-faf60-default-rtdb.firebaseio.com/meetups.json');
 const meetups = await response.json();
 const meetupIds = [];
 for(const key in meetups){
   const meetupId = meetups[key].id;
   meetupIds.push(meetupId);
 }
 return {
  fallback: false, 
  paths: meetups.map((meetup) => ({
     params: { meetupId : meetup }
  }))
 };
}

export async function getStaticProps(context){
  const id = context.params.meetupId;

    const response = await fetch('https://nextjs-faf60-default-rtdb.firebaseio.com/meetups.json');
    const meetups = await response.json();
    let meetup = {};

    for (const key in meetups){
      if(meetups[key].id === id){
         meetup = {
          image: meetups[key].image,
          title: meetups[key].title,
          address: meetups[key].address,
          description: meetups[key].description, 
        }
      }
    }

  return {
     props: {
       meetup: meetup
     },
  };
}

export default MeetupDetails;
