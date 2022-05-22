import Link from 'next/link';

export default function Layout({children}) {
    return (
        <div className="flex flex-col">
            <header className="container flex flex-row justify-between py-2">
                <Link href="/">
                    <a className="btn btn-link -ml-3">Codelab Community</a>
                </Link>
                <div className="flex flex-row -mr-4">
                    <Link href="/">
                        <a className="btn btn-link">홈</a>
                    </Link>
                    <Link href="/articles/general">
                        <a className="btn btn-link">일반 게시판</a>
                    </Link>
                    <Link href="/articles/ask">
                        <a className="btn btn-link">질문 게시판</a>
                    </Link>
                    <Link href="/me">
                        <a className="btn btn-link">내 정보</a>
                    </Link>
                </div>
            </header>
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}