import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    & h1{
        color: #fff;
    }
    & nav ul{
        list-style: none;
        display: flex;
        gap: 36px;
        & li a{
            text-decoration: none;
            color: #ffffff80;
            &:hover, &.active{
                color: #ffffff;
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/produtos">Produtos</NavLink></li>
                </ul>
            </nav>
        </HeaderContainer>

    );
}

export default Header;