var controllers = require('../controllers')

module.exports = function (app) {
  //minds 
  app.get( '/'					,controllers.mind.list );
  app.get( '/minds'				,controllers.mind.list );
  app.get( '/minds/get'			,controllers.mind.get );
  app.get( '/minds/get/:id'		,controllers.mind.get );
  app.post('/minds/add'			,controllers.mind.add);
  app.get( '/minds/del/:id'		,controllers.mind.del);

  //users
  app.get( '/users'				,controllers.user.list );
  app.get( '/users/get'			,controllers.user.get );
  app.get( '/users/get/:id'		,controllers.user.get );
  app.post('/users/add'			,controllers.user.add);
  app.get( '/users/del/:id'		,controllers.user.del);
};
