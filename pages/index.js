import MeetupList from '../components/meetups/MeetupList';
const DummyList = [
  {
    id: 'm1', 
    title:'First meetup', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU',
    address: '12, Akon road',
    description: 'This is the first meetup',
  },
  {
    id: 'm2', 
    title:'Second meetup', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
    address: '87, Akon road',
    description: 'This is the second meetup',
  },
  {
    id: 'm3', 
    title:'Third meetup', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQDIfOuSLBdsibcUHhT1TteMkO1VzJhGPfg&usqp=CAU',
    address: '18, Akon road',
    description: 'This is the third meetup',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups}/>
}

export function getStaticProps(){
  return {
    props: {
      meetups: DummyList
    }
  }
}

export default HomePage;
