import { Col, Row } from 'layui';
import React from 'react';
import './styles.less';

export default () => {
  return (
    <>
      <Row gutter={0}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <Col md={1} key={item}>
            <div
              className={
                'grid-demo ' +
                (item % 2 === 0 ? 'grid-demo-bg1' : 'grid-demo-bg2')
              }
            >
              1/12
            </div>
          </Col>
        ))}
      </Row>
      <div style={{ marginBlockStart: 10 }}></div>
      <Row gutter={0}>
        <Col md={9}>
          <div className={'grid-demo grid-demo-bg1'}>75%</div>
        </Col>
        <Col md={3}>
          <div className={'grid-demo grid-demo-bg2'}>25%</div>
        </Col>
      </Row>
      <div style={{ marginBlockStart: 10 }}></div>
      <Row gutter={0}>
        <Col md={4}>
          <div className={'grid-demo grid-demo-bg1'}>33.33%</div>
        </Col>
        <Col md={4}>
          <div className={'grid-demo grid-demo-bg2'}>33.33%</div>
        </Col>
        <Col md={4}>
          <div className={'grid-demo grid-demo-bg3'}>33.33%</div>
        </Col>
      </Row>
      <div style={{ marginBlockStart: 10 }}></div>
      <Row gutter={0}>
        <Col md={6}>
          <div className={'grid-demo grid-demo-bg1'}>50%</div>
        </Col>
        <Col md={6}>
          <div className={'grid-demo grid-demo-bg2'}>50%</div>
        </Col>
      </Row>
    </>
  );
};
