import { useRouter } from 'next/router';
const NewsDetail = () => {
 const router = useRouter();
 const id  = router.query.newsId;
 return (
   <>
    <h1>News Detail</h1>
    <p>The router is is { id } </p>
   </>
 )
}
export default NewsDetail;
