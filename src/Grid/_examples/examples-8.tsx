import { Col, Row } from 'layui';
import React from 'react';
import './styles.less';

export default () => {
  return (
    <>
      <Row gutter={0}>
        <Col md={3}>
          <div className={'grid-demo grid-demo-bg1'}>25%</div>
        </Col>
        <Col md={3}>
          <div className={'grid-demo grid-demo-bg2'}>25%</div>
        </Col>
        <Col md={3}>
          <div className={'grid-demo grid-demo-bg1'}>25%</div>
        </Col>
        <Col md={3}>
          <div className={'grid-demo grid-demo-bg2'}>25%</div>
        </Col>
      </Row>
    </>
  );
};
