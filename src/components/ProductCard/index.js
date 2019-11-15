import React from "react";

import "./index.scss";

function ProductCard() {
  return (
    <div className="ProductCard">
      <div className="thumbnail">
        <div className="badge badge--soldOutSoon">마감임박</div>
        <div className="badge badge--rate">99% 달성</div>
      </div>

      <div className="achievement-rate">
        <div className="active" style={{ width: "99%" }} />
      </div>

      <div className="information">
        <div className="badge">부동~산담보</div>

        <div className="values">
          <span className="highlight">16%</span>
          <span>13개월</span>
          <span>B2</span>
          <span>3.7억</span>
        </div>

        <div className="title">
          제 1390차 동대문 장안동 힐스테이트아파트 외 건 근저당권 담보대출 3호
          4차
        </div>

        <div className="buttons">
          <button className="btn btn-stroke">상세보기</button>
          <button className="btn btn-fill">바로투자</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
