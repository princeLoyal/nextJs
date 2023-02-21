import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups}/>
}
export async function getStaticProps(){
  const response = await fetch('https://nextjs-faf60-default-rtdb.firebaseio.com/meetups.json');
  const data = await response.json();
  const meetups = [];
  for(const key in data){
    const meetup = {
      title: data[key].title, 
      image: data[key].image, 
      description: data[key].description, 
      address: data[key].address,
      id: data[key].id
    };
    meetups.unshift(meetup);
  }
  return {
    props: {
      meetups: meetups
    }, 
    revalidate: 1
  }
}



//export function getServerSideProps(){
//  return {
//    props: {
 //     meetups: DummyMeetups,
//    },
  //};
//}

export default HomePage;
