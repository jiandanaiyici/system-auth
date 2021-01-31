import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  'egg-validate': {
    enable: true,
    package: 'egg-validate'
  },
  'egg-cors': {
    enable: true,
    package: 'egg-cors'
  }
};

export default plugin;
