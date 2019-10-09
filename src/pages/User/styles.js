import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #eee;
`;

export const Name = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
`;

export const Bio = styled.Text`
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background-color: #eee;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
