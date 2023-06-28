import logo from '../static/002.png';
import Nav from '../components/Nav';
import '../googlefonts.css';
import Footer from '../components/Footer';

const Home = () => {
    return (
      <body>
      <Nav></Nav>
              <div class = "intro_txt">
              <h1>안녕하세요 우리는 ESG3조 입니다</h1>
              <h4 class = "contents1">오늘은 6월 24일 토요일 입니다</h4>
              </div>
          <div>
      </div>
      
      <ul class = "amount">
          <li>
              <div>
              <div class = "amount_txt">HTML</div>
              <div class = "amount_txt2">Lv.00</div>
              </div>
          </li>
          <li>
              <div>
              <div class = "amount_txt">CSS</div>
              <div class = "amount_txt2">Lv.00</div>
              </div>
          </li>
          <li>
              <div>
              <div class = "amount_txt">JavaScript</div>
              <div class = "amount_txt2">Lv.00</div>
              </div>
          </li>
          <li>
              <div>
              <div class = "amount_txt">Recact</div>
              <div class = "amount_txt2">Lv.00</div>
              </div>
          </li>
      </ul>
      
      <Footer></Footer>
        
      </body>
    )
  }

export default Home;