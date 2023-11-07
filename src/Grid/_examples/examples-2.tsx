import { Col, Row } from 'layui';
import React from 'react';
import './styles.less';

export default () => {
  return (
    <>
      <Row gutter={0}>
        <Col xs={12} md={8}>
          <div className={'grid-demo grid-demo-bg1'}>xs:12/12 | md:8/12</div>
        </Col>
        <Col xs={6} md={4}>
          <div className={'grid-demo grid-demo-bg2'}>xs:6/12 | md:4/12</div>
        </Col>
      </Row>
      <div style={{ marginBlockStart: 10 }}></div>
      <Row gutter={0}>
        <Col xs={6} md={12}>
          <div className={'grid-demo grid-demo-bg1'}>xs:6/12 | md:12/12</div>
        </Col>
      </Row>
    </>
  );
};
