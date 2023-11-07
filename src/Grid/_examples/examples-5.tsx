import { Col, Row } from 'layui';
import React from 'react';
import './styles.less';

export default () => {
  return (
    <>
      <Row gutter={1}>
        {[1, 2, 3, 4].map((item) => (
          <Col md={3} key={item}>
            <div
              className={
                'grid-demo ' +
                (item % 2 === 0 ? 'grid-demo-bg1' : 'grid-demo-bg2')
              }
            >
              1/4
            </div>
          </Col>
        ))}
      </Row>
      <div style={{ marginBlockStart: 10 }}></div>
      <Row gutter={5}>
        {[1, 2, 3].map((item) => (
          <Col md={4} key={item}>
            <div
              className={
                'grid-demo ' +
                (item % 2 === 0 ? 'grid-demo-bg1' : 'grid-demo-bg2')
              }
            >
              1/3
            </div>
          </Col>
        ))}
      </Row>
      <div style={{ marginBlockStart: 10 }}></div>
      <Row gutter={16}>
        <Col md={9}>
          <div className={'grid-demo grid-demo-bg1'}>9/12</div>
        </Col>
        <Col md={3}>
          <div className={'grid-demo grid-demo-bg2'}>3/12</div>
        </Col>
      </Row>
      <div style={{ marginBlockStart: 10 }}></div>
      <Row gutter={15}>
        <Col md={7}>
          <div className={'grid-demo grid-demo-bg1'}>7/12</div>
        </Col>
        <Col md={5}>
          <div className={'grid-demo grid-demo-bg2'}>5/12</div>
        </Col>
      </Row>
      <div style={{ marginBlockStart: 10 }}></div>
      <Row gutter={30}>
        <Col md={7}>
          <div className={'grid-demo grid-demo-bg1'}>7/12</div>
        </Col>
        <Col md={5}>
          <div className={'grid-demo grid-demo-bg2'}>5/12</div>
        </Col>
      </Row>
    </>
  );
};
