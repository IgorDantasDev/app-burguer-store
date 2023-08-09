import styled from 'styled-components/native';

interface FilterMenuStyleProps {
  isSelected: boolean;
}
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #232227;
  padding: 24px;
`;

export const MainTitle = styled.Text`
  font-size: 36px;
  color: white;
  font-weight: bold;
  margin-top: 40px;
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 300;
`;

export const FilterMenu = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
`;

export const BlankDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;

export const YellowDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: yellow;
`;
export const TouchableFilterOptions = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  column-gap: 10px;
`;

export const FilterOptionsLabel = styled.Text<FilterMenuStyleProps>`
  color: white;
  font-size: 16px;
  font-weight: ${({isSelected}) => (isSelected ? 'bold' : '400')};
`;

export const FilterIcon = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: white;
`;