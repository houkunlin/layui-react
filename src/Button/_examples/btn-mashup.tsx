import { Button } from 'layui';
import React from 'react';

export default () => {
  return (
    <>
      <Button type={'primary'} size={'lg'} radius>
        大型加圆角
      </Button>
      <Button href={'/'} type={'link'}>
        跳转的按钮
      </Button>
      <Button type={'normal'} size={'sm'}>
        <i className="layui-icon layui-icon-delete"></i> 删除
      </Button>
      <Button type={'disabled'} size={'xs'}>
        <i className="layui-icon layui-icon-share"></i> 分享
      </Button>
    </>
  );
};
