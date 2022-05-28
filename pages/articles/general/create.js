import Layout from '../../../components/Layout';
import ArticleForm from '../../../components/articles/ArticleForm';
import Cookies from 'universal-cookie';

export default function CreatePage() {
  return (
    <Layout>
      <ArticleForm category="general" />
    </Layout>
  );
}

export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
  const cookies = new Cookies(req.headers.cookie);
  const token = cookies.get('token');
  if (token) {
    return {
      props: {},
    };
  } else {
    return {
      redirect: {
        // resolvedUrl: A normalized version of the request URL
        destination: `/auth/sign-in?ref=${resolvedUrl}`,
        // if temporary or permanent
        permanent: false,
      },
    };
  }
};
