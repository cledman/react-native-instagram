import styled from 'styled-components/native';

export const Small = styled.ImageBackground`
  aspect-ratio: ${(props) => props.aspect};
  background: #eee;
  width: 100%;
`;

export const Original = styled.Image`
  aspect-ratio: ${(props) => props.aspect};
  width: 100%;
`;
