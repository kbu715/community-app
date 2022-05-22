import Layout from "../../../components/Layout";
import ArticleView from "../../../components/articles/ArticleView";

export default function ViewPage({ id } ) {
    return ( 
        <Layout>
            <ArticleView id={id}/>
        </Layout>)
}

export const getServerSideProps = async ({params}) => {
    const id = params.id;
    return {
        props: {
            id
        }
    }
}