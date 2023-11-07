import { Col, Row } from 'layui';
import React from 'react';
import './styles.less';

export default () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <div className={'grid-demo grid-demo-bg1'}>6/12</div>
        </Col>
        <Col span={6}>
          <div className={'grid-demo grid-demo-bg2'}>6/12</div>
        </Col>
      </Row>
      <div style={{ marginTop: 10 }}></div>
      <Row gutter={16}>
        <Col span={3}>
          <div className={'grid-demo grid-demo-bg1'}>3/12</div>
        </Col>
        <Col span={3}>
          <div className={'grid-demo grid-demo-bg2'}>3/12</div>
        </Col>
        <Col span={3}>
          <div className={'grid-demo grid-demo-bg3'}>3/12</div>
        </Col>
        <Col span={3}>
          <div className={'grid-demo grid-demo-bg1'}>3/12</div>
        </Col>
      </Row>
    </>
  );
};
