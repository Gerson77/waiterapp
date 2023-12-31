import styled from 'styled-components';

export const Container = styled.header`
  background: #d73035;
  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
