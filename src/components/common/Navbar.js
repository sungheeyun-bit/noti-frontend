import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import LogoImg from '../../assets/logo.png';
import { CloseIcon } from '@chakra-ui/icons';
import { IconButton, Button } from '@chakra-ui/react';
import { FaHamburger } from 'react-icons/fa';

const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 5;
`;

const LeftContainer = styled.a`
  display: flex;
  justify-content: flex-end;
  padding-left: 50px;
  flex: 10%;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
  flex: 90%;
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const LinkExtendedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  margin-top: 3rem;
  text-align: center;
`;

const LinkButtonWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarLinkExtended = styled(Link)`
  margin: 11px;
  font-size: x-large;
  letter-spacing: 1px;

  &:hover {
    color: purple;
  }
`;

const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
  cursor: pointer;
`;

const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Spacer = styled.div`
  height: 80px;
`;

const Navbar = ({ user, onLogout }) => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer href="/">
            <Logo src={LogoImg}></Logo>
          </LeftContainer>
          <RightContainer>
            {user ? (
              <NavbarLinkContainer>
                <LinkButtonWrapper>
                  <Button
                    variant="ghost"
                    as="a"
                    href="/"
                    size="md"
                    fontWeight="normal"
                  >
                    홈
                  </Button>
                  <Button
                    variant="ghost"
                    as="a"
                    href="/user/alarm"
                    size="md"
                    fontWeight="normal"
                  >
                    알림리스트
                  </Button>
                  {user.isAdmin && (
                    <Button
                      variant="ghost"
                      as="a"
                      href="/upload"
                      size="md"
                      fontWeight="normal"
                    >
                      업로드
                    </Button>
                  )}

                  <Button
                    variant="ghost"
                    as="a"
                    href="/"
                    size="md"
                    fontWeight="normal"
                    onClick={onLogout}
                  >
                    로그아웃
                  </Button>
                </LinkButtonWrapper>
                <OpenLinksButton
                  onClick={() => {
                    setExtendNavbar((curr) => !curr);
                  }}
                >
                  {extendNavbar ? (
                    <IconButton
                      colorScheme="purple"
                      aria-label="Close Menu"
                      icon={<CloseIcon />}
                      size="md"
                      ml="10"
                    />
                  ) : (
                    <IconButton
                      colorScheme="purple"
                      icon={<FaHamburger />}
                      size="md"
                      ml="10"
                    />
                  )}
                </OpenLinksButton>
              </NavbarLinkContainer>
            ) : (
              <NavbarLinkContainer>
                <LinkButtonWrapper>
                  <LinkScroll to="products" smooth={true}>
                    <Button
                      variant="ghost"
                      as="a"
                      size="md"
                      fontWeight="normal"
                      cursor="pointer"
                    >
                      발매리스트
                    </Button>
                  </LinkScroll>
                  <Button
                    variant="ghost"
                    as="a"
                    href="/login"
                    size="md"
                    fontWeight="normal"
                  >
                    로그인
                  </Button>
                </LinkButtonWrapper>

                <OpenLinksButton
                  onClick={() => {
                    setExtendNavbar((curr) => !curr);
                  }}
                >
                  {extendNavbar ? (
                    <IconButton
                      colorScheme="purple"
                      aria-label="Close Menu"
                      icon={<CloseIcon />}
                      size="md"
                      ml="10"
                    />
                  ) : (
                    <IconButton
                      colorScheme="purple"
                      icon={<FaHamburger />}
                      size="md"
                      ml="10"
                    />
                  )}
                </OpenLinksButton>
              </NavbarLinkContainer>
            )}
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            {user ? (
              <LinkExtendedContainer>
                <NavbarLinkExtended to="/">홈</NavbarLinkExtended>
                <NavbarLinkExtended to="/user/alarm">
                  알림리스트
                </NavbarLinkExtended>
                {user.isAdmin && (
                  <NavbarLinkExtended to="/upload">업로드</NavbarLinkExtended>
                )}
                <NavbarLinkExtended to="/" onClick={onLogout}>
                  로그아웃
                </NavbarLinkExtended>
              </LinkExtendedContainer>
            ) : (
              <LinkExtendedContainer>
                <NavbarLinkExtended to="/">홈</NavbarLinkExtended>
                <NavbarLinkExtended to="/login">로그인</NavbarLinkExtended>
              </LinkExtendedContainer>
            )}
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
      <Spacer />
    </>
  );
};

export default Navbar;
