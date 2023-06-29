import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // { useNavigate
import axios from 'axios';

const Edit = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <div>
            <h1>공지사항 작성</h1>
            <form>
                <div>
                    <label>제목</label>
                    <input type="text" name="title" 
                    placeholder="제목을 입력하세요."
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}/>
                </div>
                <div>
                    <label>내용</label>
                    <textarea name="content" 
                    placeholder="내용을 입력하세요."
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}></textarea>
                </div>
                <div>
                    <label>작성자</label>
                    <input type="text" name="author" 
                    placeholder="작성자를 입력하세요."
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}/>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" name="password" 
                    placeholder="비밀번호을 입력하세요."
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </div>
                <button type="submit" onClick={() => {
                    if(author == ''){
                        alert('작성자를 입력하세요.');
                        return;
                    }
                    if(password == ''){
                        alert('비밀번호를 입력하세요.');
                        return;
                    }
                    axios.post('http://localhost:8080/notice', {
                        title: title,
                        content: content,
                        author: author,
                        password: password
                    })
                    .then(navigate('/notice'))
                    .catch(function (error) {
                        console.log(error);
                    })
                }}>작성하기</button>
            </form>
        </div>
    )
}

export default Edit;