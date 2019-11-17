import React, { useState, useEffect } from "react";
import productData from "../../productList.json";

import ProductCard from "../../components/ProductCard";

import "./index.scss";

function ProductList() {
  const pageSize = 5;
  const numberOfPages = Math.ceil(productData.total / pageSize);

  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState([]);

  const getProductList = page => {
    const accList = [];
    const endIndex = pageSize * page;
    const totalCount = productData.total;
    const targetIndex = endIndex < totalCount ? endIndex : totalCount;

    for (let i = 0; i < targetIndex; i++) {
      accList.push(productData.list[i]);
    }

    setCurrentPage(page);
    setProductList(accList);
  };

  // currentPage 가 바뀔때마다 실행
  useEffect(() => {
    getProductList(1);
  }, []);

  // const viewMore = page => {
  //   getProductList(page);
  // };

  return (
    <div className="ProductList">
      <div className="result">
        <div className="total-count">
          총 <span>{productData.total}</span>건의 상품이 검색되었습니다.
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
            onClick={() => getProductList(currentPage + 1)}
          >
            더보기 ({currentPage}/{numberOfPages})
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductList;
