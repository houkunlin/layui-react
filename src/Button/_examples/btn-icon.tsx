import { Button, Icon } from 'layui';
import React from 'react';

export default () => {
  return (
    <>
      <div>
        <Button>
          按钮 <Icon icon={'down'} className={'layui-font-12'} />
        </Button>
        <Button>
          <Icon icon={'left'} />
        </Button>
        <Button>
          <Icon icon={'right'}></Icon>
        </Button>
        <Button>
          <Icon icon={'edit'}></Icon>
        </Button>
        <Button>
          <Icon icon={'share'}></Icon>
        </Button>
      </div>
      <div style={{ marginBlockStart: 10 }}>
        <Button type={'primary'} size={'sm'}>
          <Icon icon={'left'}></Icon>
        </Button>
        <Button type={'primary'} size={'sm'}>
          <Icon icon={'right'}></Icon>
        </Button>
        <Button type={'primary'} size={'sm'}>
          <Icon icon={'edit'}></Icon>
        </Button>
        <Button type={'primary'} size={'sm'}>
          <Icon icon={'delete'}></Icon>
        </Button>
        <Button type={'primary'} size={'sm'}>
          <Icon icon={'share'}></Icon>
        </Button>
        <Button type={'disabled'} size={'sm'}>
          <Icon icon={'delete'}></Icon>
        </Button>

        <Button type={'normal'} size={'sm'}>
          <Icon icon={'left'}></Icon>
        </Button>
        <Button type={'warm'} size={'sm'}>
          <Icon icon={'right'}></Icon>
        </Button>
        <Button type={'danger'} size={'sm'}>
          <Icon icon={'edit'}></Icon>
        </Button>
      </div>
    </>
  );
};
