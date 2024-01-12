import styled from "styled-components/native";
import theme from "../../styles/theme";

export const HeaderContainer = styled.View`
 width: 100%;
 margin-top: 20px;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
`;

export const Count = styled.View`
 background: ${theme.colors.red};
 position: absolute;
 width: 20px;
 height: 20px;
 z-index: 1;
 left: 15px;
 top: -5px;
 border-radius: 50px;
 justify-content: center;
 align-items: center;
`;