import { Col, Row } from 'layui';
import React from 'react';
import './styles.less';

export default () => {
  return (
    <>
      <Row gutter={0}>
        <Col md={4}>
          <div className={'grid-demo grid-demo-bg1'}>4/12</div>
        </Col>
        <Col md={4} offset={{ md: 4 }}>
          <div className={'grid-demo grid-demo-bg2'}>偏移4列</div>
        </Col>
      </Row>
      <div style={{ marginBlockStart: 10 }}></div>
      <Row gutter={0}>
        <Col md={3} offset={{ md: 3 }}>
          <div className={'grid-demo grid-demo-bg1'}>偏移3列</div>
        </Col>
        <Col md={3}>
          <div className={'grid-demo grid-demo-bg2'}>不偏移</div>
        </Col>
      </Row>
    </>
  );
};
