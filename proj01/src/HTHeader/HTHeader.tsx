import React from "react";
import './HTHeader.css';

function HTheader() {
    return <div className="logo"> 
        <h1><img src="./images/logo.png"></img></h1>
        <div className="sitemap">
            <img src="./images/Sitemap.png"></img>

        </div>
        
        
    <nav>
        <ul className="GNB">
            
            <li><a href="">제품소개</a></li>
            <li><a href="">달콤한 세상</a></li>
            <li><a href="">이벤트</a></li>
            <li><a href="">고객센터</a></li>
            <li><a href="">회사소개</a></li>



        </ul>



        
    </nav>
    </div>
    
}
export default HTheader;