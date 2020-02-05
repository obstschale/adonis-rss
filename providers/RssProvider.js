'use strict';

const {ServiceProvider} = require('@adonisjs/fold');

class RssProvider extends ServiceProvider {
  register () {
    this.app.singleton('Adonis/Addons/Rss', function (app) {
      const RSS = require('../src/Rss');
      return new RSS();
    });
  }
}

module.exports = RssProvider;
