# Webpack Hot Middleware Example

* Install deps

**NOTE**:
> You shoude execute `npm install` command in parent folder first. Then run this command once again in `examples/` folder.
```sh
npm install
```

## Basic Hot Reload Example

Start server:

```sh
npm start
```

* Open page in browser http://localhost:1616
* Open the developer console
* Edit `client.js` & save
* Watch the page reload
* Also try making a syntax error in `client.js`.

## Multiple Entry Points Example

There is also an example for multiple entry points in webpack.

```sh
npm run start:multientry
```

* Open page in browser http://localhost:1616/multientry
* Edit `client.js` or `extra.js` & save

## CSP-compatible Styling Examples

These scenarios run with a strict CSP configuration that disallow inline styles.

### CSP Violation

This scenario intentionally violates CSP rules by inlining the styles instead of importing from a CSS file.

```sh
npm run start:csp::violate
```

* Open the page in browser http://localhost:1616/csp
* Try making a syntax error in `client.js`.
* Check the console logs; CSP must be violated, styles must be blocked.

### CSP-compatible Styling

Since inline styles are disallowed, styles must be imported from a CSS file. To demonstrate this, the example uses `file-loader` and `style-loader` by setting the `injectType` option to `linkTag`.

```sh
npm run start:csp
```

* Open the page in browser http://localhost:1616/csp
* Try making a syntax error in `client.js`.
* Check the console logs; CSP must not be violated, styles must be applied.

## Headless Styling Example

This scenario demonstrates custom styling behavior.

```sh
npm run start:headless-styling
```

* Open the page in browser http://localhost:1616/headless-styling
* Try making a syntax error in `client.js`.
* The `ERROR` label must appear as white text on a black background only.
