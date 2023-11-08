import { Anim, AnimTypeName, Button, Icon } from 'layui';
import React, { useState } from 'react';
import './styles.less';

export default () => {
  const [animType, setAnimType] = useState<AnimTypeName | undefined>('down');

  const switchAnim = () => {
    setAnimType(undefined);
    setTimeout(() => {
      setAnimType('down');
    });
  };

  return (
    <div>
      <Anim type={animType}>
        <div style={{ padding: '16px 0' }}>目标元素</div>
      </Anim>
      <Button type={'primary'} onClick={switchAnim}>
        点击触发动画
      </Button>
      <p>旋转动画加自动循环</p>
      <Button>
        <Icon icon={'loading'} rotateLoop />
      </Button>
    </div>
  );
};
