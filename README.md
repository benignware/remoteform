# remoteform

Ajaxify forms easily

## Install

First of all install [nodejs](https://nodejs.org]) if you haven't already.

In your project directory, hit the following command order to install `remoteform`:

```cli
npm install remoteform --save
```

`remoteform` relies on `fetch` for making requests, hence you may need to install a [polyfill](https://www.npmjs.com/package/isomorphic-fetch) in addition.

## Usage

Create your html form

```html
<div id="test" class="remoteform">
  <form action="/submit.html" method="POST">
    <div class="form-group">
      <input class="form-control" name="test" value=""/>
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</div>
```

Import `remoteform` to your bundle and initialize with the specified selector:

```js
const remoteform = require('remoteform');

remoteform('#test');
```

If you control all forms on your site, you may want to ajaxify all forms globally by omitting the selector or passing in `form`.

### Customizing response selector

By default, `remoteform` generates a unique selector for the given element against which it matches the response. You can customize the `responseSelector` by specifying the corresponding option as follows.

```js
const remoteform = require('remoteform');

remoteform('#test', {
  responseSelector: '.my-response-selector'
});
```

## Options

| Name                    | Type    | Description                                     |
|-------------------------|---------|-------------------------------------------------|
| request                 | Object  | Options passed to fetch                         |
| responseSelector        | String  | Customize the remote content selector           |
