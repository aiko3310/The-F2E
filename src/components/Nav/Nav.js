import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';
import { Row, Col } from 'antd';
import { StyledBg, StyledLinkHome, StyledImg, StyledLinks } from './styledNav';

const menu = [
  {
    title: 'Github',
    link: 'https://github.com/aiko3310/The-F2E',
    target: true
  },
  {
    title: 'Blog',
    link: 'https://aiko3310.github.io/',
    target: true
  },
  {
    title: '作品展示',
    link: '/product',
    target: false
  }
];

const nav = () => {
  const renderNav = () => {
    return menu.map(link => {
      if (link.target) {
        return (
          <a
            key={link.title}
            href={link.link}
            target='_Blank'
            rel='noopener noreferrer'
          >
            {link.title}
          </a>
        );
      } else {
        return (
          <Link key={link.title} to={link.link}>
            {link.title}
          </Link>
        );
      }
    });
  };
  return (
    <StyledBg>
      <Row justify='space-between' type='flex' align='middle'>
        <Col xs={12} sm={10} push={1}>
          <StyledLinkHome to='./'>
            <StyledImg src={Logo} />
            解到起屁臉的前端工程
          </StyledLinkHome>
        </Col>
        <Col xs={12} sm={4} pull={1}>
          <StyledLinks>{renderNav()}</StyledLinks>
        </Col>
      </Row>
    </StyledBg>
  );
};

export default withRouter(nav);
