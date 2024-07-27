import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from './path-to-logo.png'; // Update with your logo path

const Navbar = () => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    if (currentScrollTop < lastScrollTop) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }
    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: scrollingUp ? 0 : -100 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <NavContent>
        <Logo src={logo} alt="Logo" />
        <NavLinks>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled(motion.nav)`
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #007BFF;
  }
`;

export default Navbar;
