import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'layui',
    footer: 'Powered by houkunlin',
    socialLinks: {
      github: 'https://github.com/houkunlin/layui-react',
    }
  },
  // 经过测试，这个配置失效，原因是无法加载 https://unpkg.com/lib/lib.esnext.d.ts 文件内容
  // apiParser: {},
  // resolve: {
  //   // 配置入口文件路径，API 解析将从这里开始
  //   entryFile: './src/index.tsx',
  // },
  cssLoader: {},
  lessLoader: {},
  autoCSSModules: true,
});
