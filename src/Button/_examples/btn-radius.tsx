import { Button } from 'layui';
import React from 'react';

export default () => {
  return (
    <>
      <Button type={'primary'} radius>
        原始按钮
      </Button>
      <Button radius>默认按钮</Button>
      <Button type={'normal'} radius>
        百搭按钮
      </Button>
      <Button type={'warm'} radius>
        暖色按钮
      </Button>
      <Button type={'danger'} radius>
        警告按钮
      </Button>
      <Button type={'disabled'} radius>
        禁用按钮
      </Button>
    </>
  );
};
