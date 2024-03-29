import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import authAtom from '../../stores/authAtom';

export default function ArticleList({ title, category, page }) {
  const [auth, setAuth] = useAtom(authAtom);
  const { data, error } = useFetch(`${process.env.API_HOST}/articles?category=${category}&page=${page}`);
  const router = useRouter();

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  if (error) {
    return <>데이터를 불러올 수 없습니다.</>;
  }
  return (
    <div className="container">
      <h1>{title}</h1>

      <ul className="list-unstyled">
        {data?.data.map((article) => (
          <li key={article.id.toString()} className="flex flex-row">
            <span className="mr-4">{article.id}</span>
            <Link href={`/articles/${category}/${article.id}`}>
              <a>{article.subject}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-between align-items-center">
        {data?.meta && (
          <Pagination
            current={data?.meta?.current_page}
            total={data?.meta?.total}
            pageSize={data?.meta?.per_page}
            onChange={(page) => {
              router.push(`?page=${page}`);
            }}
          />
        )}
        {auth?.token && (
          <Link href={`/articles/${category}/create`}>
            <a className="btn btn-primary">글 작성하기</a>
          </Link>
        )}
      </div>
    </div>
  );
}
