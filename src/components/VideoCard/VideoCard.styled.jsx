import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 8px 32px rgba(18, 45, 69, 0.2);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const GridCard = styled(Card)`
  width: 22%;
  @media (max-width: 1200px) {
    width: 30%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 900px) {
    width: 42%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ListCard = styled(Card)`
  width: 100%;
`;

export const AspectRatioFrame = styled.div`
  position: relative;
  &::after {
    display: block;
    content: '';
    /* 16:9 aspect ratio */
    padding-bottom: 56.25%;
  }
`;

export const ThumbnailImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  min-height: 7.5rem;
`;

export const Title = styled.p`
  width: 100%;
  color: black;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: start;
  margin-bottom: 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Subtitle = styled.p`
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  text-align: start;
  max-lines: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Creator = styled(Subtitle)`
  margin-bottom: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;
