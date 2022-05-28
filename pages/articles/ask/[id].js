import Layout from '../../../components/Layout';
import ArticleView from '../../../components/articles/ArticleView';
import { SWRConfig } from 'swr';
import { fetcher } from '../../../hooks/useFetch';

export default function ViewPage({ id, fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <ArticleView id={id} />
      </Layout>
    </SWRConfig>
  );
}

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  const url = `${process.env.API_HOST}/articles/${id}`;
  const article = await fetcher(url);
  return {
    props: {
      id,
      fallback: {
        [url]: article,
      },
    },
  };
};
