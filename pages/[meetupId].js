
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
  path: [
    {
      params: {
        meetupId : 'm1'
      }
    },
  ],
 };
}

export function getStaticProps(context){

  const id = context.params.meetupId;

  return {
     props: {
       meetup: {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
          id: id, 
          title: 'First meetup',
          address: 'Some Street 5, Some City',
          description: 'This is the first meetup', 
       },
     },
  };
}

export default MeetupDetails;
