import React, { Component } from 'react';
import './index.css'

class Column extends Component {
  render() {
    return (
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>노루페인트 CDP(Customer Data Platform) 구축</h2>
            <h5>기간 : 2019.12 ~ 2020.03</h5>
            <div className="fakeimg h200">Image</div>
            <p>JAVA(전자정부프레임워크) + MySQL 이용한 사용자 데이터 분석 시스템 개발</p>
            <p>매출 분석 시스템 및 마케팅 대상으로 푸쉬 메세지에 대한 통계 분석 시스템</p>
            <p>마케팅 대상 추출하는 분석 기능 개발</p>
          </div>
          <div className="card">
            <h2>웹 사이트 개발 및 유지보수</h2>
            <h5>기간 : 2019.10 ~ 2019.11</h5>
            <div className="fakeimg h200">Image</div>
            <p>PHP + MySQL 이용한 국제과학영재교육센터 홈페이지 구축 및 유지보수</p>
          </div>
          <div className="card">
            <h2>입학지원 웹 사이트 운영 및 유지보수</h2>
            <h5>기간 : 2019.06 ~ 2020.03</h5>
            <div className="fakeimg h200">Image</div>
            <p>ASP(or PHP) + MSSQL(or MySQL) 이용한 영재교육원 입학 지원 시스템 개발</p>
            <p>전형료 결제를 위한 이니시스 결제 모듈 연동</p>
          </div>
          <div className="card">
            <h2>오리온 제주용암수 ERP 구축</h2>
            <h5>기간 : 2018.05 ~ 2019.05</h5>
            <div className="fakeimg h200">Image</div>
            <p>JAVA(Spring Framework) + PostgreSQL 이용한 ERP 통합관리시스템 개발</p>
            <p>기업 분석 정보와 손익 자료를 분석하여 c3 기반인 차트 API 적용</p>
          </div>
          <div className="card">
            <h2>대학교 사이버강의 커뮤니티 어플리케이션 개발</h2>
            <h5>기간 : 2017.09 ~ 2017.11</h5>
            <div className="fakeimg h200">Image</div>
            <p>Android + MySQL + SQLite 이용한 안드로이드 기반 어플리케이션 개발</p>
            <p>Firebase를 이용한 실시간 채팅 기능 개발</p>
            <p>Calendar 라이브러리를 이용한 스케줄러 기능 개발</p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>About Me</h2>
            <div className="fakeimg h100">Image</div>
            <div className="content-center">
              <p><strong>Back-end Developer</strong></p>
              <p>1995.11.02</p>
              <p>부산광역시 / 서울특별시</p>
              <p>010-8260-1940</p>
              <p>ttlle12@naver.com</p>
              <p>한국교통대학교 컴퓨터정보공학과(공학교육인증 이수)</p>
            </div>
          </div>
          <div className="card">
            <h3>Skill</h3>
            <p>JAVA</p>
            <div class="container-sk">
              <div class="skills java"></div>
            </div>

            <p>SQL</p>
            <div class="container-sk">
              <div class="skills sql"></div>
            </div>

            <p>JavaScript</p>
            <div class="container-sk">
              <div class="skills js"></div>
            </div>

            <p>PHP</p>
            <div class="container-sk">
              <div class="skills php"></div>
            </div>

            <p>ASP</p>
            <div class="container-sk">
              <div class="skills asp"></div>
            </div>

            <p>Android</p>
            <div class="container-sk">
              <div class="skills ad"></div>
            </div>

          </div>
          <div className="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
      </div>
    </div>
    );
  }
}

export default Column
