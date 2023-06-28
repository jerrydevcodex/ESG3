import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
    const { id } = useParams();
    const [ db, setDb ] = useState([]); // data를 배열로 받아옴
    useEffect(() => {
        axios
            .get('http://localhost:8080/notice/'+id)
            .then((res) => {
                setDb(res.data);
            });
    }, [])

    return (
        <div>
            <h1>Detail</h1>
            <h2>{db.title}</h2>
            <p>{db.content}</p>
        </div>
    )
}

export default Detail;