// Application configuration.
'use strict';

var config = module.exports;

config.db = {
    user: 'appuser', 
    password: 'appuser',
    name: 'test'
};

config.db.details = {
    host: 'localhost',
    port: 3306,      
    dialect: 'mysql'
};

config.keys = {
    secret: '/jVdfUX+u/Kn3qPY4+ahjwQgyV5UhkM5cdh1i2xhozE=' // Not anymore...
};
