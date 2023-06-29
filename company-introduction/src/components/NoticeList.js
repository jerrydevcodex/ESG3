import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const NoticeList = ({ data }) => {
    const navigate = useNavigate();
    return (
        <tr>
                            <td>{data._id}</td>
                            <td><Link to={`${data._id}/detail`}>{data.title}</Link></td>
                            <td>{!data.author ? "익명" : data.author}</td>
                            <td>{data.createdAt}</td>
                            <td><button onClick={() => {
                                let userInput = prompt("비밀번호를 입력하세요!"+"");
                                if(userInput == data.password){
                                    axios.delete('http://localhost:8080/notice/' + data._id)
                                .then(window.location.reload())
                                .catch(function (error) {
                                    console.log(error);
                                })
                                }else{
                                  alert("비밀번호가 아닙니다.");      
                                }
                                
                            } }>삭제</button></td>
                        </tr>
    )
}

export default NoticeList;