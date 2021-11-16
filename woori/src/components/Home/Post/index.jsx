import React, { useEffect, useState } from "react";
import DdayModal from "./DdayModal";
import * as S from "./style";

const Post = () => {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isDdayModalOpen, setIsDdayModalOpen] = useState(false);
  useEffect(() => {}, []);

  return (
    <>
      {isDdayModalOpen && (
        <DdayModal isOpen={isDdayModalOpen} setIsOpen={setIsDdayModalOpen} />
      )}
      <S.Container isOpen={isPostOpen}>
        <S.Background
          onClick={() => setIsPostOpen((isPostOpen) => !isPostOpen)}
        />
        <S.Header>
          <S.Dday onClick={() => setIsDdayModalOpen(true)}>
            😍입력하세요😍
          </S.Dday>
          <S.ProfileWrapper>
            <img src="https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F37%2F201604181854386741.jpg" />
            <p>❤️</p>
            <img src="https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F37%2F201604181854386741.jpg" />
          </S.ProfileWrapper>
          <S.PlaceCount>같이 간 플레이스 개수: 36</S.PlaceCount>
        </S.Header>
      </S.Container>
    </>
  );
};

export default Post;
