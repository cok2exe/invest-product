import React, { useState } from "react";
import productData from "../../productList.json";

import ProductCard from "../../components/ProductCard";

import "./index.scss";

const pageSize = 5;
const numberOfPages = Math.ceil(productData.total / pageSize);
const totalCount = productData.total;

const getProductList = (page, productList) => {
  const accList = [...productList];
  const endIndex = pageSize * page;
  const targetIndex = endIndex < totalCount ? endIndex : totalCount;

  for (let i = pageSize * (page - 1); i < targetIndex; i++) {
    accList.push(productData.list[i]);
  }

  return accList;
};

function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState(getProductList(1, []));

  const viewMore = page => {
    setProductList(getProductList(page, productList));
    setCurrentPage(page);
  };

  return (
    <div className="ProductList">
      <div className="result">
        <div className="total-count">
          총 <span>{totalCount}</span>건의 상품이 검색되었습니다.
        </div>

        <div className="list">
          {productList.map(product => {
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

        {currentPage < numberOfPages && (
          <button
            className="btn btn-more"
            onClick={() => viewMore(currentPage + 1)}
          >
            더보기 ({currentPage}/{numberOfPages})
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductList;
