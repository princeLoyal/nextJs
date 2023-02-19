import { Fragment } from 'react';
import Link from 'next/link';

const newsItems = [
 {id: 'n1', title:'The first news'},
 {id: 'n2', title:'The second news'},
 {id: 'n3', title:'The third news'},
 {id: 'n4', title:'The fourth news'},
];
const News = () => {
 return (
   <Fragment>
    <h1>News Pag</h1>
    <ul>
      { 
       newsItems.map( news => (
       <li key={news.id}>
        <Link href={'/news/' + news.title}>{news.title}</Link>
       </li>
       ))
      }
    </ul>
   </Fragment>
 );
}
export default News;
