import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    image: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 30,
    }
});

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    }
}))`
    background: #1e222b;
    height: 130px;
`;

export const Option = styled.TouchableOpacity`
    width: auto;
    minWidth: 80px;
    margin-right: 16px;
    align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
`;