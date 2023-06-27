import { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';

function Notice(){
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/notice')
                        .then((res) => {
                            console.log(res);
                            setData(res.data);
                        });
    }, [])
    if (!data) {
        return <div>loading...</div>;
    }
    return (
        <div className="notice">
            <div class="intro_bg">
            <Nav/>
            <h1>공지사항</h1>
            <table>
                <tr>
                    <th><strong>번호</strong></th>
                    <th><strong>제목</strong></th>
                    <th><strong>작성자</strong></th>
                    <th><strong>날짜</strong></th>
                </tr>
                {data.map((item) => {
                        return (
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td>{item.createdAt}</td>
                            </tr>
                        )
                    })}
                <button onClick={() => {
                    window.location.href = '/edit';
                }}>작성하기</button>
                </table>
        </div>
            
        </div>
    )
}

export default Notice;