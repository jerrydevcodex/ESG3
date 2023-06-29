import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NoticeList from '../components/NoticeList';

function Notice(){
    const [db, setDb] = useState([]); // data를 배열로 받아옴
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get('http://localhost:8080/notice')
            .then((res) => {
                setDb(res.data);
            });
    }, [])
    
    return (
        <div className="notice">
            <div className="intro_bg">
            <Nav/>
            <h1>공지사항</h1>
            <table>
                <tbody>
                <tr>
                    <th><strong>번호</strong></th>
                    <th><strong>제목</strong></th>
                    <th><strong>작성자</strong></th>
                    <th><strong>날짜</strong></th>
                </tr>
                {db.map((data) => {
                    return (
                        <NoticeList data={data}/>
                    );
                })}
                
                </tbody>
                
                </table>
                <button onClick={() => {
                    navigate('/edit');
                }}>작성하기</button>
        </div>
            
        </div>
    )
}

export default Notice;