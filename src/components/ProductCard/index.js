import React from "react";

import "./index.scss";

function ProductCard({ product, achievementRate, ratePosition }) {
  return (
    <div className="ProductCard">
      <div className="card">
        <div
          className="thumbnail"
          style={{ backgroundImage: `url(${product.url})` }}
        >
          {product.soldOutSoon === "TRUE" && (
            <div className="badge badge--soldOutSoon">마감임박</div>
          )}
        </div>

        <div className="achievement-rate">
          {product.typedStatus === "모집중" && (
            <div className="active" style={{ width: `${achievementRate}%` }}>
              <div className={`rate ${ratePosition}`}>
                {achievementRate}% 달성
              </div>
            </div>
          )}
        </div>

        <div className="information">
          <div className="badge">{product.contractType}</div>

          <div className="values">
            <span className="highlight">{product.rateOfReturn}%</span>
            <span>{product.loanPeriod}개월</span>
            <span>{product.grade}</span>
            <span>{product.targetAmount / 100000000}억</span>
          </div>

          <div className="title" title={product.title}>
            {product.title}
          </div>

          <div className="buttons">
            <button className="btn btn-stroke">상세보기</button>
            <button
              className="btn btn-fill"
              disabled={product.typedStatus === "대기중"}
            >
              {product.typedStatus === "대기중" ? "오픈예정" : "바로투자"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
