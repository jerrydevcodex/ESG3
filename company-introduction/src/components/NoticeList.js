import axios from 'axios';
import { Link } from 'react-router-dom';

const NoticeList = ({ data }) => {
    return (
        <tr>
                            <td>{data._id}</td>
                            <td><Link to={`${data._id}/detail`}>{data.title}</Link></td>
                            <td>{!data.author ? "익명" : data.author}</td>
                            <td>{data.createdAt}</td>
                            <td><button onClick={() => {
                                axios.delete('http://localhost:8080/notice/' + data._id)
                                .then(window.location.reload())
                                .catch(function (error) {
                                    console.log(error);
                                })
                            } }>삭제</button></td>
                        </tr>
    )
}

export default NoticeList;