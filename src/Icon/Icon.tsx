import classnames from 'classnames';
import React, { forwardRef, useMemo } from 'react';
import './styles.less';

// 从 css 里面提取出来的代码
export type IconName =
  | 'leaf'
  | 'folder'
  | 'folder-open'
  | 'gitee'
  | 'github'
  | 'disabled'
  | 'moon'
  | 'error'
  | 'success'
  | 'question'
  | 'lock'
  | 'eye'
  | 'eye-invisible'
  | 'backspace'
  | 'tips-fill'
  | 'test'
  | 'clear'
  | 'heart-fill'
  | 'light'
  | 'music'
  | 'time'
  | 'ie'
  | 'firefox'
  | 'at'
  | 'bluetooth'
  | 'chrome'
  | 'edge'
  | 'heart'
  | 'key'
  | 'android'
  | 'mike'
  | 'mute'
  | 'gift'
  | 'windows'
  | 'ios'
  | 'logout'
  | 'wifi'
  | 'rss'
  | 'email'
  | 'reduce-circle'
  | 'transfer'
  | 'service'
  | 'addition'
  | 'subtraction'
  | 'slider'
  | 'print'
  | 'export'
  | 'cols'
  | 'screen-full'
  | 'screen-restore'
  | 'rate-half'
  | 'rate-solid'
  | 'rate'
  | 'cellphone'
  | 'vercode'
  | 'login-weibo'
  | 'login-qq'
  | 'login-wechat'
  | 'username'
  | 'password'
  | 'refresh-3'
  | 'auz'
  | 'shrink-right'
  | 'spread-left'
  | 'snowflake'
  | 'tips'
  | 'note'
  | 'senior'
  | 'refresh-1'
  | 'refresh'
  | 'flag'
  | 'theme'
  | 'notice'
  | 'console'
  | 'website'
  | 'face-surprised'
  | 'set'
  | 'template'
  | 'app'
  | 'template-1'
  | 'home'
  | 'female'
  | 'male'
  | 'tread'
  | 'praise'
  | 'rmb'
  | 'more'
  | 'camera'
  | 'cart-simple'
  | 'face-cry'
  | 'face-smile'
  | 'survey'
  | 'read'
  | 'location'
  | 'dollar'
  | 'diamond'
  | 'return'
  | 'camera-fill'
  | 'fire'
  | 'more-vertical'
  | 'cart'
  | 'star-fill'
  | 'prev'
  | 'next'
  | 'upload'
  | 'upload-drag'
  | 'user'
  | 'file-b'
  | 'component'
  | 'find-fill'
  | 'loading'
  | 'loading-1'
  | 'add-1'
  | 'pause'
  | 'play'
  | 'video'
  | 'headset'
  | 'voice'
  | 'speaker'
  | 'fonts-del'
  | 'fonts-html'
  | 'fonts-code'
  | 'fonts-strong'
  | 'unlink'
  | 'picture'
  | 'link'
  | 'face-smile-b'
  | 'align-center'
  | 'align-right'
  | 'align-left'
  | 'fonts-u'
  | 'fonts-i'
  | 'tabs'
  | 'circle'
  | 'radio'
  | 'share'
  | 'edit'
  | 'delete'
  | 'engine'
  | 'chart-screen'
  | 'chart'
  | 'table'
  | 'tree'
  | 'upload-circle'
  | 'templeate-1'
  | 'util'
  | 'layouts'
  | 'prev-circle'
  | 'carousel'
  | 'code-circle'
  | 'water'
  | 'date'
  | 'layer'
  | 'fonts-clear'
  | 'dialogue'
  | 'cellphone-fine'
  | 'form'
  | 'file'
  | 'triangle-r'
  | 'triangle-d'
  | 'set-sm'
  | 'add-circle'
  | 'layim-download'
  | 'layim-uploadfile'
  | '404'
  | 'about'
  | 'layim-theme'
  | 'down'
  | 'up'
  | 'circle-dot'
  | 'set-fill'
  | 'search'
  | 'friends'
  | 'group'
  | 'reply-fill'
  | 'menu-fill'
  | 'face-smile-fine'
  | 'picture-fine'
  | 'log'
  | 'list'
  | 'release'
  | 'add-circle-fine'
  | 'ok'
  | 'help'
  | 'chat'
  | 'top'
  | 'right'
  | 'left'
  | 'star'
  | 'download-circle'
  | 'close'
  | 'close-fill'
  | 'ok-circle';

// 从 css 里面提取出来的代码
export const IconNameList: IconName[] = [
  'leaf',
  'folder',
  'folder-open',
  'gitee',
  'github',
  'disabled',
  'moon',
  'error',
  'success',
  'question',
  'lock',
  'eye',
  'eye-invisible',
  'backspace',
  'tips-fill',
  'test',
  'clear',
  'heart-fill',
  'light',
  'music',
  'time',
  'ie',
  'firefox',
  'at',
  'bluetooth',
  'chrome',
  'edge',
  'heart',
  'key',
  'android',
  'mike',
  'mute',
  'gift',
  'windows',
  'ios',
  'logout',
  'wifi',
  'rss',
  'email',
  'reduce-circle',
  'transfer',
  'service',
  'addition',
  'subtraction',
  'slider',
  'print',
  'export',
  'cols',
  'screen-full',
  'screen-restore',
  'rate-half',
  'rate-solid',
  'rate',
  'cellphone',
  'vercode',
  'login-weibo',
  'login-qq',
  'login-wechat',
  'username',
  'password',
  'refresh-3',
  'auz',
  'shrink-right',
  'spread-left',
  'snowflake',
  'tips',
  'note',
  'senior',
  'refresh-1',
  'refresh',
  'flag',
  'theme',
  'notice',
  'console',
  'website',
  'face-surprised',
  'set',
  'template',
  'app',
  'template-1',
  'home',
  'female',
  'male',
  'tread',
  'praise',
  'rmb',
  'more',
  'camera',
  'cart-simple',
  'face-cry',
  'face-smile',
  'survey',
  'read',
  'location',
  'dollar',
  'diamond',
  'return',
  'camera-fill',
  'fire',
  'more-vertical',
  'cart',
  'star-fill',
  'prev',
  'next',
  'upload',
  'upload-drag',
  'user',
  'file-b',
  'component',
  'find-fill',
  'loading',
  'loading-1',
  'add-1',
  'pause',
  'play',
  'video',
  'headset',
  'voice',
  'speaker',
  'fonts-del',
  'fonts-html',
  'fonts-code',
  'fonts-strong',
  'unlink',
  'picture',
  'link',
  'face-smile-b',
  'align-center',
  'align-right',
  'align-left',
  'fonts-u',
  'fonts-i',
  'tabs',
  'circle',
  'radio',
  'share',
  'edit',
  'delete',
  'engine',
  'chart-screen',
  'chart',
  'table',
  'tree',
  'upload-circle',
  'templeate-1',
  'util',
  'layouts',
  'prev-circle',
  'carousel',
  'code-circle',
  'water',
  'date',
  'layer',
  'fonts-clear',
  'dialogue',
  'cellphone-fine',
  'form',
  'file',
  'triangle-r',
  'triangle-d',
  'set-sm',
  'add-circle',
  'layim-download',
  'layim-uploadfile',
  '404',
  'about',
  'layim-theme',
  'down',
  'up',
  'circle-dot',
  'set-fill',
  'search',
  'friends',
  'group',
  'reply-fill',
  'menu-fill',
  'face-smile-fine',
  'picture-fine',
  'log',
  'list',
  'release',
  'add-circle-fine',
  'ok',
  'help',
  'chat',
  'top',
  'right',
  'left',
  'star',
  'download-circle',
  'close',
  'close-fill',
  'ok-circle',
];

export type IconProps = {
  /**
   * @description 图标名称
   */
  icon: IconName;
} & React.HTMLAttributes<HTMLSpanElement>;

function InternalIcon(props: IconProps) {
  const { className, icon, children, ...restProps } = props;
  const _className = useMemo(() => {
    let _icon: string = icon;
    if (_icon.startsWith('layui-icon-')) {
      _icon = _icon.replace('layui-icon-', '');
    }
    return classnames(
      'layui-icon',
      {
        [`layui-icon-${_icon}`]: _icon,
      },
      className,
    );
  }, [className, icon]);

  return (
    <span {...restProps} className={_className}>
      {children}
    </span>
  );
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(InternalIcon);

export default Icon;
