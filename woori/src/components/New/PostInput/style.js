import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
  background: rgba(196, 196, 196, 0.2);
  margin-bottom: 10px;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Input = styled.input`
  background-color: #ffff;
  border: none;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
`;

export const ImageButton = styled.div``;

export const ImagePreviewWrapper = styled.div`
  /* display: flex;
  flex-direction: row;
  overflow: scroll; */
`;

export const ImagePreview = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
`;

export const PictureInput = styled.input`
  display: none;
`;

export const StarWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #c4c4c4;
  > svg {
    width: 20px;
    height: 20px;
    margin-right: 6px;

    path {
      fill: #e3e3e3;
    }

    &:nth-child(-n + ${({ star }) => star}) {
      path {
        fill: #fdf416;
      }
    }
  }
`;

export const ContentInput = styled.textarea`
  border: none;
  background-color: #e3e3e3;
  width: 100%;
  height: 100px;
  padding: 10px;
  line-height: 19px;
`;
