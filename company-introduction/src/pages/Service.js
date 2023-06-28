import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../googlefonts.css';

const Service = () => {
    return (
        <body>
    <div class="wrap">
        
            <Nav></Nav>
    </div>
            

<div class = "wrap1">
    <div class = "searcharea">
            <h1>궁금하신 점을 검색해 보세요.</h1>
            <h4 class = "contents1">
                검색창에 원하는 정보를 키워드로 입력하세요.<br/>
                FAQ, 이용 안내, 팁 등 다양한 내용을 검색을 통해 확인하실 수 있습니다.
            </h4>
            <form class = "searchform" action = "#" method = "GET">
            <input type = "text" name = "keyword" placeholder="검색어를 입력하세요"/>
            <button type = "submit">검색 </button>
            </form>
    </div>
</div>
    
<div class = "wrap2">
    <div class = "faq">
    <h1>FAQ</h1>
    </div>

</div>
    

    
 
 <Footer></Footer>
    </body>
    )
}

export default Service;