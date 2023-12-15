import type { IPlugin } from 'build-scripts';

const plugin: IPlugin = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig(config => {
    config.module
      .rule('mjs')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');
  });
};

export default plugin;
