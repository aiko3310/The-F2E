import React from 'react';
import week0Img from '../../assets/img/week0/week0.jpg';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { StyledBG, StyledCard } from './StyledProduct';

const products = [
  {
    title: 'week0',
    link: '/week0',
    description: '查詢報名頁',
    img: week0Img
  }
];

const Product = () => {
  return (
    <StyledBG>
      <Row>
        <Col xs={24} md={22} push={2}>
          <Row>
            {products.map(product => {
              return (
                <Col xs={24} md={4} key={product.title}>
                  <Link to={product.link}>
                    <StyledCard
                      cover={<img src={product.img} alt={product.title} />}
                    >
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                    </StyledCard>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </StyledBG>
  );
};

export default Product;
