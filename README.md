WinMind --　随时随地、所思所想

	author: linuxlong
	mail  : linuxlong@163.com

	The goal is :

		Whenever you are, Wherever you are, Whatever you think,
		the idea you get all in WebMind;

Documentation
=============
	TODO:

How to Install
=================

Step by :

	Install nodejs dependentics by npm command:

		$cd $WinMind_HOME
		$npm install

Init DataBase:

	WinMind use MySQL DataBase! The default DataBase infomation blow :

		DataBase Name: webmind
		User Name:     webmind
		Password Name: webmind

	Please use below command to init your own dataBase:

		$cd $WinMind_HOME
		$mysql -uroot -p < sql/webmind.sql #including create dataBase and the user!

Startup:

		$node app.js
		
	then see the URL in Brower:

		http://127.0.0.1:3000/minds
