var controllers = require('../controllers')

module.exports = function (app) {
  //minds 
  app.get( '/'					,controllers.mind.list );
  app.get( '/minds'				,controllers.mind.list );
  app.get( '/minds/add'			,controllers.mind.add );
  app.get( '/minds/modify/:id'	,controllers.mind.modify );
  app.post('/minds/add'			,controllers.mind.addPost );

  //users
  app.get( '/users'				,controllers.user.list );
  app.get( '/users/add'			,controllers.user.add );
  app.get( '/users/modify/:id'	,controllers.user.modify );
  app.post('/users/add'			,controllers.user.addPost );
};
