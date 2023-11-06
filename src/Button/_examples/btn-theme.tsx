import { Button } from 'layui';
import React from 'react';

export default () => {
  return (
    <>
      <div>
        <Button>默认按钮</Button>
        <Button color={'blue'}>蓝色按钮</Button>
        <Button color={'orange'}>橙色按钮</Button>
        <Button color={'red'}>红色按钮</Button>
        <Button color={'purple'}>紫色按钮</Button>
        <Button type={'disabled'}>禁用按钮</Button>
      </div>
      <div style={{ marginBlockStart: 10 }}>
        <Button type={'primary'} border={'green'}>
          主色按钮
        </Button>
        <Button type={'primary'} border={'blue'}>
          蓝色按钮
        </Button>
        <Button type={'primary'} border={'orange'}>
          橙色按钮
        </Button>
        <Button type={'primary'} border={'red'}>
          红色按钮
        </Button>
        <Button type={'primary'} border={'purple'}>
          紫色按钮
        </Button>
        <Button type={'primary'}>普通按钮</Button>
      </div>
    </>
  );
};
