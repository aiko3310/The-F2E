import React from 'react';
import week1Img from '../../assets/img/week1/week1.jpg';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { StyledBG, StyledCard, StyledOl, StyledRow } from './StyledProduct';

const products = [
  {
    title: 'Todolist',
    link: '/week1',
    description: ['hooks', 'antd'],
    img: week1Img
  },
  {
    title: '動物認養平台',
    link: '/week2',
    description: ['hooks', 'antd'],
    img: week1Img
  }
];
const renderDescription = product => {
  return product.description.map((description, i) => {
    return <li key={i}>{description}</li>;
  });
};
const Product = () => {
  return (
    <StyledBG>
      <StyledRow>
        <Col xs={24} md={22} push={2}>
          <Row gutter={16}>
            {products.map(product => {
              return (
                <Col xs={24} md={6} key={product.title}>
                  <Link to={product.link}>
                    <StyledCard
                      cover={<img src={product.img} alt={product.title} />}
                    >
                      <h3>{product.title}</h3>
                      <StyledOl>{renderDescription(product)}</StyledOl>
                    </StyledCard>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Col>
      </StyledRow>
    </StyledBG>
  );
};

export default Product;