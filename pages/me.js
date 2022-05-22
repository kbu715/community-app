import axios from 'axios';
import {useCallback, useEffect, useState} from "react";
import Cookies from 'universal-cookie';
import {useRouter} from "next/router";
import dayjs from 'dayjs';

export default function Me() {
    const [profile, setProfile] = useState({});
    const router = useRouter();
    useEffect(() => {
        axios.get(`${process.env.API_HOST}/me`)
            .then(response => {
                setProfile({
                    ...response.data,
                    ['created_at']: dayjs(response.data.created_at).format('YYYY.MM.DD hh:mm:ss')
                })
            })
            .catch(error => console.warn(error))
    }, [])
    const logout = useCallback(() => {
        const cookies = new Cookies();
        cookies.remove('token');
        delete axios.defaults.headers.common.Authorization;
        router.push( '/' );
    }, [])
    return (
        <div className="container">
            <dl>
                <dt>이메일</dt>
                <dd>{profile.email}</dd>
                <dt>이름</dt>
                <dd>{profile.name}</dd>
                <dt>가입일시</dt>
                <dd>{profile.created_at}</dd>
            </dl>

            <button className="btn btn-danger" onClick={logout}>로그아웃</button>
        </div>)
}

export const getServerSideProps = async ({req, res, resolvedUrl}) => {
    // server side에서 쿠키 생성 방법 : req.headers.cookie를 포함해준다.
    const cookies = new Cookies(req.headers.cookie);
    const token = cookies.get('token');
    if (token) {
        return {
            props: {}
        }
    } else {
        return {
            redirect: {
                // resolvedUrl: A normalized version of the request URL
                destination: `/auth/sign-in?ref=${resolvedUrl}`,
                // if temporary or permanent
                permanent: false,
            }
        }
    }
}