import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';
const DummyList = [
{ id: 'm1', title:'First meetup', 
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU',
address: 'Number 12, Akon road',
},
];
const HomePage = () => {
 return (
   <Fragment>
     <MeetupList meetups={DummyList}/>
   </Fragment>
 );
}
export default HomePage;
