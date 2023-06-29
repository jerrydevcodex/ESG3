import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Update = () => {
    const { id } = useParams();
    
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
     
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get('http://localhost:8080/notice/'+id)
            .then((res) => {
                
                setTitle(res.data.title);
                setContent(res.data.content);
            });
    }, [id])
    
    return (
        <div>
            <h1>Detail</h1>
            <h2><input value={title}
            onChange={(e) => {
                setTitle(e.target.value);
            }}></input></h2>
            <p><textarea value={content}
            onChange={(e) => {
                setContent(e.target.value);
            }}></textarea></p>
            <button onClick={() => {
                axios.put('http://localhost:8080/notice/'+id, {
                    title: title,
                    content: content,
                })
                .then(navigate('/notice'))
                .catch(function (error) {
                    console.log(error);
                })
            }}>확인</button>
            <button onClick={() => {
                navigate('/notice');
            }}>목록으로</button>
        </div>
    )
}

export default Update;