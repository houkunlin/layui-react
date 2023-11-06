import { Button } from 'layui';
import React from 'react';

export default () => {
  return (
    <>
      <div>
        <Button size={'lg'}>大型按钮</Button>
        <Button>默认按钮</Button>
        <Button size={'sm'}>小型按钮</Button>
        <Button size={'xs'}>迷你按钮</Button>
      </div>
      <div style={{ marginBlockStart: 10 }}>
        <Button type={'normal'} size={'lg'}>
          大型按钮
        </Button>
        <Button type={'normal'}>默认按钮</Button>
        <Button type={'normal'} size={'sm'}>
          小型按钮
        </Button>
        <Button type={'normal'} size={'xs'}>
          迷你按钮
        </Button>
      </div>
      <div style={{ marginBlockStart: 10 }}>
        <Button type={'primary'} size={'lg'}>
          大型按钮
        </Button>
        <Button type={'primary'}>默认按钮</Button>
        <Button type={'primary'} size={'sm'}>
          小型按钮
        </Button>
        <Button type={'primary'} size={'xs'}>
          迷你按钮
        </Button>
      </div>
      <div style={{ marginBlockStart: 10, width: 380 }}>
        <Button block>流体按钮（宽度自适应）</Button>
      </div>
    </>
  );
};
