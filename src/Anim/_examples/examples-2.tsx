import { Anim, AnimTypeName, Col, Row } from 'layui';
import React, { useEffect, useState } from 'react';
import './styles.less';

const anims = [
  { title: '顶部往下滑入', type: 'down' },
  { title: '底部往上滑入', type: 'up' },
  { title: '微微往下滑入', type: 'downbit' },
  { title: '微微往上滑入', type: 'upbit' },
  { title: '平滑放大', type: 'scale' },
  { title: '弹簧式放大', type: 'scaleSpring' },
  { title: '平滑放小', type: 'scalesmall' },
  { title: '弹簧式放小', type: 'scalesmall-spring' },
  { title: '渐现', type: 'fadein' },
  { title: '渐隐', type: 'fadeout' },
  { title: '360 度旋转', type: 'rotate' },
  { title: '循环动画', type: 'rotate', loop: true },
] as { title: string; type?: AnimTypeName; loop?: boolean }[];

export default () => {
  const [showAnims, setShowAnims] = useState(anims.map(() => true));

  const switchAnim = (index: number, value?: boolean) => {
    setShowAnims((values) => {
      values[index] = value ?? !values[index];
      return [...values];
    });
  };

  const changeAnim = (index: number) => {
    if (anims[index].loop !== undefined) {
      if (anims[index].loop) {
        anims[index].loop = false;
        switchAnim(index, false);
        return;
      } else {
        anims[index].loop = true;
      }
    }
    switchAnim(index, false);

    setTimeout(() => {
      switchAnim(index, true);
    });
    //恢复渐隐
    if (anims[index].type === 'fadeout') {
      setTimeout(function () {
        switchAnim(index, false);
      }, 1300);
    }
  };

  useEffect(() => {
    for (let index = 0; index < anims.length; index++) {
      //恢复渐隐
      if (anims[index].type === 'fadeout') {
        setTimeout(function () {
          switchAnim(index, false);
        }, 1300);
      }
    }
  }, []);

  return (
    <Row className={'ws-docs-anim'}>
      {showAnims.map((show, index) => {
        const anim = anims[index];

        return (
          <Col sm={3} key={anim.title} onClick={() => changeAnim(index)}>
            <Anim type={show ? anim.type : undefined} loop={anim.loop}>
              {anim.title}
            </Anim>
            <div>{anim.type}</div>
          </Col>
        );
      })}
    </Row>
  );
};
