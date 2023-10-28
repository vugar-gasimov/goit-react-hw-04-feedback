import styled from 'styled-components';

export const StyledText = styled.p`
  font-size: 18px;
  color: ${({ $appreciation }) => ($appreciation ? '#00ff00' : '#ff0000')};
  background-color: ${({ $appreciation }) =>
    $appreciation ? '#e0ffe0' : '#ffe0e0'};
  padding: 10px;
  border: 1px solid
    ${({ $appreciation }) => ($appreciation ? '#00ff00' : '#ff0000')};
  border-radius: 5px;
  text-align: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionContainer = styled.section`
  background-color: #f5f5f5;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ddd;
  max-width: 350px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const FeedbackContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
`;

export const FeedbackButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  margin: 10px;
  cursor: pointer;
`;

export const StatisticsHeading = styled.h2`
  text-align: center;
`;

export const FeedbackText = styled.p`
  font-size: 18px;
`;

export const FeedbackCount = styled.span`
  font-weight: bold;
`;
