import React, { useState, useEffect } from "react";
import productData from "../../productList.json";
import ProductCard from "../../components/ProductCard";

import "./index.scss";

function ProductList() {
  const pageSize = 5;
  const numberOfPages = Math.ceil(productData.total / pageSize);

  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState([]);

  // 더보기 페이지네이션 기능
  const calcPagination = _list => {
    let accList = _list;
    const targetIndex =
      pageSize * currentPage < productData.total
        ? pageSize * currentPage
        : productData.total;

    for (let i = pageSize * (currentPage - 1); i < targetIndex; i++) {
      accList = accList.concat(productData.list[i]);
    }

    return accList;
  };

  useEffect(() => {
    // currentPage 가 바뀔때마다 실행
    const calcList = calcPagination(productList);
    setProductList(calcList);
  }, [currentPage]);

  const viewMore = page => {
    setCurrentPage(page);
  };

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
