import { Icon, IconItemList } from 'layui';
import React, { useEffect, useState } from 'react';
import './styles.less';

function getIconUnicode(iconClass: any) {
  const iconEl = document.querySelector(`.site-doc-icon > li > .${iconClass}`);
  if (!iconEl) {
    return '';
  }
  return window?.getComputedStyle(iconEl)?.content;
}

export default () => {
  const [iconsUnicode, setIconsUnicode] = useState<string[]>([]);

  useEffect(() => {
    const code: string[] = [];
    IconItemList?.forEach((icon) => {
      // unicode 10进制转16进制
      const unicode = getIconUnicode('layui-icon-' + icon.class)
        .charCodeAt(1)
        .toString(16);
      code.push(unicode);
    });
    setIconsUnicode(code);
  }, []);

  return (
    <ul className="site-doc-icon">
      {IconItemList.map((item, index) => {
        const icon = item.class;

        return (
          <li key={icon}>
            <Icon icon={icon} />
            <div className="doc-icon-name">{item.name}</div>
            <div className="doc-icon-code">&amp;#x{iconsUnicode[index]};</div>
            <div className="doc-icon-fontclass">{icon}</div>
          </li>
        );
      })}
    </ul>
  );
};
