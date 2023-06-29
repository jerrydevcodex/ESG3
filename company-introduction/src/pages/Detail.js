import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const [ db, setDb ] = useState([]); // data를 배열로 받아옴
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get('http://localhost:8080/notice/'+id)
            .then((res) => {
                setDb(res.data);
            });
    }, [id])

    return (
        <div>
            <h1>Detail</h1>
            <h2>{db.title}</h2>
            <p>{db.content}</p>
            <button onClick={() => {
                navigate('/edit/'+id);
            }}>수정</button>
            <button onClick={() => {
                navigate('/notice');
            }}>목록으로</button>
        </div>
    )
}

export default Detail;