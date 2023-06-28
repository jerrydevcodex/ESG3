import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // { useNavigate
import axios from 'axios';

const Edit = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    return (
        <div>
            <h1>공지사항 수정</h1>
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
                <button type="submit" onClick={() => {
                    axios.post('http://localhost:8080/notice', {
                        title: title,
                        content: content,
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