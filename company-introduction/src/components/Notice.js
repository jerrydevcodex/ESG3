import { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';

function Notice(){
    const [db, setDb] = useState([]); // data를 배열로 받아옴
    useEffect(() => {
        axios
            .get('http://localhost:8080/notice')
            .then((res) => {
                setDb(res.data);
            });
    }, [])
    console.log(db.map((data) => {
        return data.title;
    }));
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
                {console.log(db)}
                {db.map((data) => {
                    return (
                        <tr>
                            <td>{data._id}</td>
                            <td>{data.title}</td>
                            <td>{data.content}</td>
                            <td>{data.createdAt}</td>
                        </tr>
                    );
                })}
                
                </tbody>
                
                </table>
                <button onClick={() => {
                    window.location.href = '/edit';
                }}>작성하기</button>
        </div>
            
        </div>
    )
}

export default Notice;