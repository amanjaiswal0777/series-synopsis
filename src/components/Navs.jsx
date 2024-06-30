import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


// array of object
const LINKS = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Starred',
    to: '/starred',
  },
];

const Navs = () => {
  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled to={item.to}>{item.text}</LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;

//in react html code is replaced for differnet routes in that single html file instead of creating separte html file

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  li {
    margin: 0 10px;
  }
`;
const LinkStyled = styled(NavLink)`
  display: block;
    background-color: azure;
    padding: 7px 21px;
    border-radius: 17px;
    text-decoration: none;
    box-shadow: 1px 1px 10px 3px black;
    border: 4px solid white;
    font-weight:900;
    position: relative;
    /* text-decoration: none; */
    text-underline-offset: auto;
    color: #c6c6c6;
  color: ${({ theme }) => theme.mainColors.gray};
  &.active {
    color: #832a00;
    
    background-color: #64f864;
    // color: ${({ theme }) => theme.mainColors.blue};
    &:after {
      content: '';
      position: absolute;
      display: block;
      
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.blue};
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;
