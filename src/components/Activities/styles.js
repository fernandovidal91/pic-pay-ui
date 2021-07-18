import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

export const Header = styled.View`
    height: 50px;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
`;

export const Card = styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-bottom: 5px;
    padding: 15px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`

`;

export const Description = styled.Text`
    color: #ffffff;
    font-size: 16px;
    margin-left: 15px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const CardBody = styled.View`
    margin-top: 20px;
`;

export const UserName = styled.Text`
    color: #FFF;
    font-size: 15px;
`;

export const CardFooter = styled.View`
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Details = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #f75175;
    font-size: 14px;
    font-weight: bold;
`;

export const Divider = styled.View`
    width: 2px;
    height: 15px;
    background: rgba(255, 255, 255, 0.4);
    margin: 0 10px;
`;

export const Date = styled.Text`
    color: #FFFFFF;
    margin-left: 5px;
`;

export const Actions = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`;

export const Option = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
`;

export const OptionLabel = styled.Text`
    color: #FFFFFF;
    font-size: 14px;
    margin-left: 5px;
`;