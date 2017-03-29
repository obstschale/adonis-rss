
```
=========== IMPORTANT / ABANDONED ===========

This package is abonend, because I don't use AdonisJS anymore.
Maybe it works - maybe not. If you want to adpot this project,
please open an issue or fork it but inform me, so I can link to it.
```

***

# Adonis RSS Provider

A RSS provider for the Adonis framework. This package uses the [rss](https://github.com/dylang/node-rss) package by [dylang](https://github.com/dylang).

This package provides easy access to a RSS generator for Node.

## Install

```sh
npm install --save adonis-rss
# or
yarn add adonis-rss
```

## Configure

Register this package in `bootstrap/app.js`

```js
const providers = [
  ...
  'adonis-rss/providers/RssProvider'
]
```

You can also add an alias for easier access.

```js
const aliases = {
  ...
  Rss: 'Adonis/Addons/Rss'
}
```

## Usage

This package works the same as `dylang/node-rss`. Take a look at its [documentation](https://github.com/dylang/node-rss/blob/master/templates/readme/usage.md).

The only addition to original package is an additional prototype to polyfill in the `feedOptions`.

The provider will give you an empty RSS generator object. This will generate a sample feed. Using `Rss.options(feedOptions)` you can use a predefined options object holding all the necessary feed options without the need to assign each proptery yourself.

```js
const Rss = use('Rss');


/**
  * Somewhere in a controller
  */
const feedOptions = {
    title: 'title',
    // description: 'description',
    // feed_url: 'http://example.com/rss.xml',
    site_url: 'http://example.com',
    image_url: 'http://example.com/icon.png',
    docs: 'http://example.com/rss/docs.html',
    managingEditor: 'Dylan Greene',
    webMaster: 'Dylan Greene',
    copyright: '2013 Dylan Greene',
    language: 'en',
    categories: ['Category 1','Category 2','Category 3'],
    pubDate: 'May 20, 2012 04:00:00 GMT',
    ttl: '60',
    custom_namespaces: {
        'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
        {'itunes:subtitle': 'A show about everything'},
        {'itunes:author': 'John Doe'},
        {'itunes:summary': 'All About Everything is a show about everything. Each week we dive into any subject known to man and talk about it as much as we can. Look for our podcast in the Podcasts app or in the iTunes Store'},
        {'itunes:owner': [
            {'itunes:name': 'John Doe'},
            {'itunes:email': 'john.doe@example.com'}
        ]},
        {'itunes:image': {
            _attr: {
                href: 'http://example.com/podcasts/everything/AllAboutEverything.jpg'
            }
        }},
        {'itunes:category': [
            {_attr: {
                text: 'Technology'
            }},
            {'itunes:category': {
                _attr: {
                    text: 'Gadgets'
                }
            }}
        ]}
    ]
};

/* Assign feed options */
Rss.options(feedOptions);

/* loop over data and add to feed */
Rss.item({
    title:  'item title',
    description: 'use this for the content. It can include html.',
    url: 'http://example.com/article4?this&that', // link to the item
    guid: '1123', // optional - defaults to url
    // categories: ['Category 1','Category 2','Category 3','Category 4'], // optional - array of item categories
    author: 'Guest Author', // optional - defaults to feed author property
    date: 'May 27, 2012', // any format that js Date can parse.
    lat: 33.417974, //optional latitude field for GeoRSS
    long: -111.933231, //optional longitude field for GeoRSS
    // enclosure: {url:'...', file:'path-to-file'}, // optional enclosure
    custom_elements: [
        {'itunes:author': 'John Doe'},
        {'itunes:subtitle': 'A short primer on table spices'},
        {'itunes:image': {
            _attr: {
                href: 'http://example.com/podcasts/everything/AllAboutEverything/Episode1.jpg'
            }
        }},
        {'itunes:duration': '7:04'}
    ]
});

/* Send RSS feed with correct Content-Type back */
response
  .header('Content-type', 'application/rss+xml')
  .send(Rss.xml());
```

## Licenses

Copyright (c) 2016 Hans-Helge Buerger.

Released under the [MIT License](./LICENSE).

## Thanks

Special thanks to the creator(s) of [AdonisJS](http://adonisjs.com/) for creating such a great framework. And [Dylan Greene](https://github.com/dylang) for creating node-rss.
