import Nav from './Nav';
import axios from 'axios';

const Notice = () => {
    const posts = axios.get('/notice');
    return (
        <div className="notice">
            <div class="intro_bg">
            <Nav/>
            <h1>공지사항</h1>
            <table>
                <tr>
                    <th>{posts.number}</th>
                    <th>{posts.title}</th>
                    <th>{posts.author}</th>
                    <th>{posts.timestamps}</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>공지사항입니다.</td>
                    <td>관리자</td>
                    <td>2021-09-01</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>공지사항입니다.</td>
                    <td>관리자</td>
                    <td>2021-09-01</td>
                </tr>
                </table>
        </div>
            
        </div>
    )
}

export default Notice;