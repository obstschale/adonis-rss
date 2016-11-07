'use strict';

const Rss = require('rss');

/**
 * Method for populating feed information as object
 * @param  {object} options Object holding feed information
 * @return {object}         this
 */
Rss.prototype.options = function(options) {
  this.title              = options.title || 'Untitled RSS Feed';
  this.description        = options.description || '';
  this.generator          = options.generator || 'RSS for Node';
  this.feed_url           = options.feed_url;
  this.site_url           = options.site_url;
  this.image_url          = options.image_url;
  this.author             = options.author;
  this.categories         = options.categories;
  this.pubDate            = options.pubDate;
  this.hub                = options.hub;
  this.docs               = options.docs;
  this.copyright          = options.copyright;
  this.language           = options.language;
  this.managingEditor     = options.managingEditor;
  this.webMaster          = options.webMaster;
  this.ttl                = options.ttl;
  //option to return feed as GeoRSS is set automatically if feed.lat/long is used
  this.geoRSS             = options.geoRSS || false;
  this.custom_namespaces  = options.custom_namespaces || {};
  this.custom_elements    = options.custom_elements || [];

  return this;
}

module.exports = Rss;
