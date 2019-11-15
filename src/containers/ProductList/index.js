import React from "react";
import productList from "../../productList.json";
import ProductCard from "../../components/ProductCard";

import "./index.scss";

function ProductList() {
  console.log(productList);
  return (
    <div className="ProductList">
      <div className="result">
        <div className="total-count">
          총 <span>{productList.total}</span>건의 상품이 검색되었습니다.
        </div>

        <div className="list">
          {productList.list.map(product => {
            const achievementRate = Math.floor(
              (product.investAmount / product.targetAmount) * 100
            );

            const ratePosition =
              achievementRate * 3.5 < 62 || achievementRate <= 50
                ? "left"
                : "right";

            return (
              <ProductCard
                key={product.id}
                product={product}
                achievementRate={achievementRate}
                ratePosition={ratePosition}
              />
            );
          })}
        </div>

        <button className="btn btn-more">더보기 (1/페이지수)</button>
      </div>
    </div>
  );
}

export default ProductList;
