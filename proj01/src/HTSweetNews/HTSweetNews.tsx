import React from "react";
import './HTsweetnews.css'

function HTsweetnews() {
    return <div className="newsbody">
        <h3>SWEET NEWS</h3>
        <span>--- NOTICE & PRESS --- </span>
        <ul className="boxcont">
            <li><a>Notice</a></li>
            <li className="day"><a>2022-05-03</a></li>
            <li><h1>더 강력한 농약관리! 농약 PLS 제도란?</h1></li>
            <li><span>농약 허용물질목록 관리제도(PLS)에 대해 알아봅시다'농약 허용물질 목록 관리제도(PLS)'란</span></li>
        </ul>
        <ul className="boxcont2">
            <li><a>PRESS</a></li>
            <li className="day"><a>2022-05-03</a></li>
            <li><span className="head">해태, 세번째 빠삭 시리즈 '빠삭한 치즈감자' 출시</span></li>
            <li><span>미식의 나라 프랑스 가정식'그라탕' 담은 과재해태, 세번째 빠삭 시리즈 '빠삭한 치즈감자' 출</span></li>
        </ul>
        <ul className="boxcont3">
            <li><a>PRESS</a></li>
            <li className="day"><a>2022-05-03</a></li>
            <li><span className="head">국악의 새 이름 '한음' 알리는 '제1회 한음회' 성료</span></li>
            <li><span>국악(國樂), 이제'한음(韓音)'으로 즐기자!! 국악의 새 이름'한음'알리는 제'1회 한음회' 성</span></li>
        </ul>
        
        <ul className="boxcont4">
            <img src="./images/box1.png"></img>
        </ul>
        <ul className="boxcont5">
            <img src="./images/box2.png"></img>
        </ul>
        <ul className="boxcont6">
        <img src="./images/box3.png"></img>
        </ul>
    
    
    </div>


}

export default HTsweetnews;