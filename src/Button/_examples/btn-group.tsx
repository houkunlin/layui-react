import { Button } from 'layui';
import React from 'react';

export default () => {
  return (
    <>
      <Button.Group>
        <Button>增加</Button>
        <Button>编辑</Button>
        <Button>删除</Button>
      </Button.Group>
      <Button.Group>
        <Button size={'sm'}>增加</Button>
        <Button size={'sm'}>编辑</Button>
        <Button size={'sm'}>删除</Button>
        <Button size={'sm'}>删除</Button>
      </Button.Group>
    </>
  );
};
