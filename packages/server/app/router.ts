import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/login', controller.login.create);

  router.get('/queryUserInfo', controller.login.queryUserInfo);
};
