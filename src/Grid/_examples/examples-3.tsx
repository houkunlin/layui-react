import { Col, Row } from 'layui';
import React from 'react';
import './styles.less';

export default () => {
  return (
    <>
      <Row gutter={0}>
        <Col xs={6} sm={6} md={4}>
          <div className={'grid-demo grid-demo-bg1'}>
            xs:6/12 | sm:6/12 | md:4/12
          </div>
        </Col>
        <Col xs={6} sm={6} md={4}>
          <div className={'grid-demo grid-demo-bg2'}>
            xs:6/12 | sm:6/12 | md:4/12
          </div>
        </Col>
        <Col xs={4} sm={12} md={4}>
          <div className={'grid-demo grid-demo-bg3'}>
            xs:4/12 | sm:12/12 | md:4/12
          </div>
        </Col>
      </Row>
      <div style={{ marginBlockStart: 10 }}></div>
      <Row gutter={0}>
        <Col xs={4} sm={7} md={8}>
          <div className={'grid-demo grid-demo-bg1'}>
            xs:4/12 | sm:7/12 | md:8/12
          </div>
        </Col>
        <Col xs={4} sm={5} md={4}>
          <div className={'grid-demo grid-demo-bg2'}>
            xs:4/12 | sm:5/12 | md:4/12
          </div>
        </Col>
      </Row>
    </>
  );
};
