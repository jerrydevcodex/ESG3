import logo from '../static/002.png';

const Footer = () => {
    return (
        <footer>
          <ul class = "footer_list">
              <li>
                  <img class = "footer_logo" src={logo} alt = "logo"/>
              </li>
              <li class = "footer_content">
                  <h4>(주) ESG3조 컴퍼니</h4>
                  <h2>고객센터 1588-1588</h2>
                  <h5>(주) ESG3조 컴퍼니는 항공권 서비스의 통신판매중개자로서 당사자가 아니며, 입점 판매시가 등록한 상품 정보 및 거래에 대한 책임을 지지 않습니다.</h5>
                  <h5>대표자 : 홍길동   서울특별시 어쩌구 링딩동 26   사업자등록번호 : 000-00-00000 통신판매업 신고번호 : 제 000000</h5>
                  <h5>개인정보보책임자 : 이율곡   소비자피해보상보험 루루루 서울보증   Fax : 02-0000-00000   abcd@company.com</h5> 
              </li>
          </ul>
        </footer>
    )
}

export default Footer;