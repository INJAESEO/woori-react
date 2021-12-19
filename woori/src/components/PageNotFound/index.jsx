import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div>페이지를 찾을 수 없습니다.</div>
      <Link to="/">홈으로</Link>
    </>
  );
}

export default PageNotFound;
