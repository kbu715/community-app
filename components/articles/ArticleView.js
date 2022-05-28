import useFetch from '../../hooks/useFetch';
import Head from 'next/head';
import nl2br from 'react-nl2br';

export default function ArticleView({ id }) {
  const { data, error } = useFetch(`${process.env.API_HOST}/articles/${id}`);
  if (error) {
    return <>데이터 로드에 실패했습니다.</>;
  }
  return (
    <div className="container">
      <Head>
        <title>{data?.subject} - Community App</title>
      </Head>
      <h1>{data?.subject}</h1>
      <hr />
      <p>{nl2br(data?.content)}</p>
    </div>
  );
}
