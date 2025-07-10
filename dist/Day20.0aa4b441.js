import * as __parcelExternal0 from "react/jsx-dev-runtime";
import * as __parcelExternal1 from "react";
import * as __parcelExternal2 from "react-dom/client";
import * as __parcelExternal3 from "react-redux";
import * as __parcelExternal4 from "@reduxjs/toolkit";
import * as __parcelExternal5 from "react-router";
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"fxyo1":[function(require,module,exports,__globalThis) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5a6dd852489cb3c1";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d56cb0490aa4b441";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"hloRW":[function(require,module,exports,__globalThis) {
// main.jsx or index.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _client = require("react-dom/client");
var _clientDefault = parcelHelpers.interopDefault(_client);
var _reactRedux = require("react-redux");
var _stores = require("../Stored/stores");
var _rootApp = require("./RootApp");
var _rootAppDefault = parcelHelpers.interopDefault(_rootApp);
(0, _clientDefault.default).createRoot(document.getElementById("root")).render(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRedux.Provider), {
    store: (0, _stores.store),
    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _rootAppDefault.default), {}, void 0, false, {
        fileName: "src/App.js",
        lineNumber: 10,
        columnNumber: 5
    }, undefined)
}, void 0, false, {
    fileName: "src/App.js",
    lineNumber: 9,
    columnNumber: 3
}, undefined));

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-dom/client":"react-dom/client","react-redux":"react-redux","../Stored/stores":"jVXIG","./RootApp":"k5q6j","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"jVXIG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "store", ()=>store);
var _toolkit = require("@reduxjs/toolkit");
var _cartSlicer = require("./CartSlicer");
var _cartSlicerDefault = parcelHelpers.interopDefault(_cartSlicer);
var _restaurantSlice = require("./restaurantSlice");
var _restaurantSliceDefault = parcelHelpers.interopDefault(_restaurantSlice);
var _menuSlice = require("./menuSlice");
var _menuSliceDefault = parcelHelpers.interopDefault(_menuSlice);
const store = (0, _toolkit.configureStore)({
    reducer: {
        restaurants: (0, _restaurantSliceDefault.default),
        cartslice: (0, _cartSlicerDefault.default),
        menu: (0, _menuSliceDefault.default)
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
exports.default = store;

},{"@reduxjs/toolkit":"@reduxjs/toolkit","./CartSlicer":"esNpf","./restaurantSlice":"aG1SX","./menuSlice":"dcSw6","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"esNpf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addItems", ()=>addItems);
parcelHelpers.export(exports, "IncrementItems", ()=>IncrementItems);
parcelHelpers.export(exports, "DecrementItems", ()=>DecrementItems);
var _toolkit = require("@reduxjs/toolkit");
// example
// id:123,
// name:Paneer
// veg:1
// "Add by ourself" quantity:1
const cart = (0, _toolkit.createSlice)({
    name: 'cartslice',
    initialState: {
        items: [],
        count: 0
    },
    reducers: {
        addItems: (state, action)=>{
            state.items.push({
                ...action.payload,
                quantity: 1
            });
            state.count++;
        },
        IncrementItems: (state, action)=>{
            const element = state.items.find((item)=>item.id === action.payload.id);
            element.quantity += 1;
            state.count++;
        },
        DecrementItems: (state, action)=>{
            const element = state.items.find((item)=>item.id === action.payload.id);
            if (element.quantity > 1) element.quantity -= 1;
            else state.items = state.items.filter((item)=>item.id != action.payload.id);
            state.count--;
        }
    }
});
const { addItems, IncrementItems, DecrementItems } = cart.actions;
exports.default = cart.reducer;

},{"@reduxjs/toolkit":"@reduxjs/toolkit","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"fY7n4":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aG1SX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchRestaurants", ()=>fetchRestaurants);
var _toolkit = require("@reduxjs/toolkit");
const fetchRestaurants = (0, _toolkit.createAsyncThunk)("restaurants/fetchList", async (_, { rejectWithValue })=>{
    try {
        await fetch("https://cors-anywhere.herokuapp.com/corsdemo");
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const res = await fetch(proxy + url);
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();
        //  Debug output
        //   console.log("Full API response:", json.data.cards);
        //  Safe access using .find() to locate restaurant card
        const restaurantCard = json?.data?.cards?.find((card)=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        //  Highlights access with safe fallback
        const highlights = json?.data?.cards?.find((card)=>card?.card?.card?.imageGridCards?.info)?.card?.card?.imageGridCards?.info || [];
        return {
            restaurants,
            highlights
        };
    } catch (err) {
        return rejectWithValue(err.message);
    }
});
const restaurantSlice = (0, _toolkit.createSlice)({
    name: "restaurants",
    initialState: {
        list: [],
        list2: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchRestaurants.pending, (state)=>{
            state.status = "loading";
        }).addCase(fetchRestaurants.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.list = action.payload.restaurants || [];
            state.list2 = action.payload.highlights || [];
        }).addCase(fetchRestaurants.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.payload;
        });
    }
});
exports.default = restaurantSlice.reducer;

},{"@reduxjs/toolkit":"@reduxjs/toolkit","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"dcSw6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchMenuById", ()=>fetchMenuById);
var _toolkit = require("@reduxjs/toolkit");
const fetchMenuById = (0, _toolkit.createAsyncThunk)("menu/fetchMenuById", async (id, { rejectWithValue })=>{
    try {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
        const response = await fetch(proxy + swiggyAPI);
        const data = await response.json();
        const header = data?.data?.cards[2]?.card?.card?.info;
        const offers = data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
        const sections = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filteredMenu = sections?.filter((item)=>"title" in item?.card?.card && !item?.card?.card[1]);
        return {
            id,
            headerData: header,
            offers,
            menuData: filteredMenu
        };
    } catch (err) {
        return rejectWithValue(err.message);
    }
});
const menuSlice = (0, _toolkit.createSlice)({
    name: "menu",
    initialState: {
        items: {},
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchMenuById.pending, (state)=>{
            state.status = "loading";
        }).addCase(fetchMenuById.fulfilled, (state, action)=>{
            const { id, headerData, offers, menuData } = action.payload;
            /*state.items["123"] = {
        headerData: { name: "Domino's", rating: 4.5 },
        offers: ["40% off", "Free delivery"],
        menuData: [...]
        }
        So state.items ends up like this:
        js
        {
        123: {
        headerData: {...},
        offers: [...],
        menuData: [...]
        },
        456: {...},
        789: {...}
        }
        Each restaurant ID gets its own entry in the global Redux shelf.*/ state.items[id] = {
                headerData,
                offers,
                menuData
            };
            state.status = "succeeded";
        }).addCase(fetchMenuById.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.payload;
        });
    }
});
exports.default = menuSlice.reducer;

},{"@reduxjs/toolkit":"@reduxjs/toolkit","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"k5q6j":[function(require,module,exports,__globalThis) {
// RootApp.jsx
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RootApp);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRedux = require("react-redux");
var _restaurantSlice = require("../Stored/restaurantSlice");
var _reactRouter = require("react-router");
var _home = require("./Components/Home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _restaurant = require("./Components/Restaurant");
var _restaurantDefault = parcelHelpers.interopDefault(_restaurant);
var _restaurantMenu = require("./Components/RestaurantMenu");
var _restaurantMenuDefault = parcelHelpers.interopDefault(_restaurantMenu);
var _searchFood = require("./Components/SearchFood");
var _searchFoodDefault = parcelHelpers.interopDefault(_searchFood);
var _secondaryHome = require("./Components/SecondaryHome");
var _secondaryHomeDefault = parcelHelpers.interopDefault(_secondaryHome);
var _footer = require("./Components/Footer");
var _footerDefault = parcelHelpers.interopDefault(_footer);
var _checkOut = require("./Components/CheckOut");
var _checkOutDefault = parcelHelpers.interopDefault(_checkOut);
var _stores = require("../Stored/stores");
var _storesDefault = parcelHelpers.interopDefault(_stores);
function RootApp() {
    const dispatch = (0, _reactRedux.useDispatch)();
    (0, _react.useEffect)(()=>{
        if ((0, _storesDefault.default).getState().restaurants.list.length === 0) dispatch((0, _restaurantSlice.fetchRestaurants)());
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.BrowserRouter), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Routes), {
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                    element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _footerDefault.default), {}, void 0, false, {
                        fileName: "src/RootApp.js",
                        lineNumber: 28,
                        columnNumber: 25
                    }, void 0),
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                            path: "/",
                            element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _homeDefault.default), {}, void 0, false, {
                                fileName: "src/RootApp.js",
                                lineNumber: 29,
                                columnNumber: 36
                            }, void 0)
                        }, void 0, false, {
                            fileName: "src/RootApp.js",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                            element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _secondaryHomeDefault.default), {}, void 0, false, {
                                fileName: "src/RootApp.js",
                                lineNumber: 30,
                                columnNumber: 27
                            }, void 0),
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                                    path: "/restaurant",
                                    element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantDefault.default), {}, void 0, false, {
                                        fileName: "src/RootApp.js",
                                        lineNumber: 31,
                                        columnNumber: 48
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "src/RootApp.js",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                                    path: "/city/delhi/:id",
                                    element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantMenuDefault.default), {}, void 0, false, {
                                        fileName: "src/RootApp.js",
                                        lineNumber: 32,
                                        columnNumber: 52
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "src/RootApp.js",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/RootApp.js",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/RootApp.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                    path: "/city/delhi/:id/search",
                    element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _searchFoodDefault.default), {}, void 0, false, {
                        fileName: "src/RootApp.js",
                        lineNumber: 35,
                        columnNumber: 55
                    }, void 0)
                }, void 0, false, {
                    fileName: "src/RootApp.js",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                    path: "/checkout",
                    element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _checkOutDefault.default), {}, void 0, false, {
                        fileName: "src/RootApp.js",
                        lineNumber: 36,
                        columnNumber: 42
                    }, void 0)
                }, void 0, false, {
                    fileName: "src/RootApp.js",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/RootApp.js",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/RootApp.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-redux":"react-redux","../Stored/restaurantSlice":"aG1SX","react-router":"react-router","./Components/Home":"kfWDE","./Components/Restaurant":"i68AF","./Components/RestaurantMenu":"cWYns","./Components/SearchFood":"bGghP","./Components/SecondaryHome":"gDs8I","./Components/Footer":"aFCmY","./Components/CheckOut":"M1P7O","../Stored/stores":"jVXIG","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"kfWDE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Home);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _header = require("./Header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _foodOption = require("./FoodOption");
var _foodOptionDefault = parcelHelpers.interopDefault(_foodOption);
var _groceryOption = require("./GroceryOption");
var _groceryOptionDefault = parcelHelpers.interopDefault(_groceryOption);
var _dineOption = require("./DineOption");
var _dineOptionDefault = parcelHelpers.interopDefault(_dineOption);
function Home() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _headerDefault.default), {}, void 0, false, {
                fileName: "src/Components/Home.js",
                lineNumber: 7,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _foodOptionDefault.default), {}, void 0, false, {
                fileName: "src/Components/Home.js",
                lineNumber: 8,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _groceryOptionDefault.default), {}, void 0, false, {
                fileName: "src/Components/Home.js",
                lineNumber: 9,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _dineOptionDefault.default), {}, void 0, false, {
                fileName: "src/Components/Home.js",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","./Header":"aLffd","./FoodOption":"2yqnR","./GroceryOption":"a34md","./DineOption":"2SXPd","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"aLffd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Header);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouter = require("react-router");
function Header() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("header", {
        className: "bg-[#ff5200] font-sans pb-5 md:pb-8",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex flex-col md:flex-row justify-between items-center container mx-auto px-4 md:px-6 lg:max-w-[80%] py-4 md:py-8",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "w-32 md:w-40 h-auto ml-0 md:ml-6 mb-4 md:mb-0",
                        src: "https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png",
                        alt: "Swiggy Logo"
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "text-white text-sm md:text-base font-bold flex flex-wrap justify-center gap-3 md:gap-4 items-center mr-0 md:mr-6",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://www.swiggy.com/corporate/",
                                className: "hover:underline",
                                children: "Swiggy Corporate"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://partner.swiggy.com/login#/swiggy",
                                className: "hover:underline",
                                children: "Partner with Us"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://www.swiggy.com/corporate/",
                                className: "border border-white py-2 px-3 md:py-3 md:px-4 rounded-2xl hover:bg-white hover:text-[#ff5200] transition-colors",
                                children: "Get the App"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://www.swiggy.com/corporate/",
                                className: "border border-black bg-black py-2 px-6 md:py-3 md:px-8 rounded-2xl hover:bg-gray-800 transition-colors",
                                children: "Sign in"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/Header.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "pt-8 md:pt-16 pb-8 relative",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "hidden md:block h-80 md:h-112 w-auto absolute top-0 left-0",
                        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png",
                        alt: "Vegetables"
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "hidden md:block h-80 md:h-112 w-auto absolute top-0 right-0",
                        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png",
                        alt: "Sushi"
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "max-w-[90%] md:max-w-[80%] lg:max-w-[55%] text-2xl md:text-3xl lg:text-[45px] leading-tight md:leading-normal text-white font-bold container mx-auto text-center px-4",
                        children: "Order food & groceries. Discover best restaurants. Swiggy it!"
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/Header.js",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "max-w-[90%] md:max-w-[80%] lg:max-w-[70%] container mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-5 px-4",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "relative w-full md:w-[40%] lg:w-[33%] ml-0 md:ml-16",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "20",
                                height: "20",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-orange-500",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                    d: "M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "src/Components/Header.js",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                className: "bg-white w-full text-base md:text-[18px] px-8 md:px-10 py-3 md:py-4 rounded-2xl font-semibold focus:outline-none",
                                placeholder: "Delhi, India",
                                type: "text"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "relative w-full md:w-[60%] lg:w-[50%]",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-orange-500",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                    d: "M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 5.6 5.6a7.5 7.5 0 0 0 11.05 11.05Z",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "src/Components/Header.js",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                className: "bg-white w-full text-base md:text-[18px] px-8 md:px-10 py-3 md:py-4 rounded-2xl font-semibold focus:outline-none",
                                placeholder: "Search for restaurant and items",
                                type: "text"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/Header.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "max-w-[90%] md:max-w-[80%] container mx-auto flex flex-col sm:flex-row justify-center mt-6 md:mt-10 gap-4 px-4",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
                        to: "/restaurant",
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            className: "w-full h-auto rounded-lg hover:shadow-lg transition-shadow",
                            src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png",
                            alt: "Food Ordering"
                        }, void 0, false, {
                            fileName: "src/Components/Header.js",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                        href: "https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            className: "w-full h-auto rounded-lg hover:shadow-lg transition-shadow",
                            src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png",
                            alt: "Instamart"
                        }, void 0, false, {
                            fileName: "src/Components/Header.js",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                        href: "https://www.swiggy.com/dineout",
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            className: "w-full h-auto rounded-lg hover:shadow-lg transition-shadow",
                            src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png",
                            alt: "Dine Out"
                        }, void 0, false, {
                            fileName: "src/Components/Header.js",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/Header.js",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/Header.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-router":"react-router","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"2yqnR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FoodOption);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _foodData = require("../Utils/FoodData");
var _foodCard = require("./FoodCard");
var _foodCardDefault = parcelHelpers.interopDefault(_foodCard);
function FoodOption() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-[80%] container mx-auto mt-10 overflow-x-auto pb-6 scrollbar-gap hidden-scroll transition-all smooth",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "grid grid-rows-2 grid-flow-col gap-8 w-max",
            children: (0, _foodData.imageGridCards).map((foodData)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _foodCardDefault.default), {
                    foodData: foodData
                }, foodData.id, false, {
                    fileName: "src/Components/FoodOption.js",
                    lineNumber: 9,
                    columnNumber: 21
                }, this))
        }, void 0, false, {
            fileName: "src/Components/FoodOption.js",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "src/Components/FoodOption.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
} // import { imageGridCards } from "../Utils/FoodData";
 // import FoodCard from "./FoodCard";
 // export default function FoodOption() {
 //   return (
 //     <div className="w-full px-4 sm:px-6 md:w-[90%] lg:w-[80%] container mx-auto mt-6 md:mt-10 overflow-x-auto pb-6 hidden-scroll">
 //       <div className="grid grid-rows-2 grid-flow-col gap-4 sm:gap-6 md:gap-8 w-max">
 //         {imageGridCards.map((foodData) => (
 //           <FoodCard key={foodData.id} foodData={foodData} />
 //         ))}
 //       </div>
 //     </div>
 //   );
 // }

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","../Utils/FoodData":"6WsZl","./FoodCard":"eIaYl","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"6WsZl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "imageGridCards", ()=>imageGridCards);
const imageGridCards = [
    {
        "id": "2568016",
        "imageId": "PC_Mweb/Pizza.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
            "text": "Pizzas",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for pizza",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568358",
        "imageId": "PC_Mweb/North%20Indian.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
            "text": "North Indian",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for north indian",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568339",
        "imageId": "PC_Mweb/Biryani.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
            "text": "Biryani",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for biryani",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568034",
        "imageId": "PC_Mweb/Rolls.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
            "text": "Rolls",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for roll",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568015",
        "imageId": "PC_Mweb/Chole%20Bhature.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
            "text": "Chole Bhature",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for chhole bhatoore",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568009",
        "imageId": "PC_Mweb/Chinese.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
            "text": "Chinese",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for chinese",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568574",
        "imageId": "PC_Mweb/Burger.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
            "text": "Burgers",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for burger",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568142",
        "imageId": "PC_Mweb/Dosa.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
            "text": "Dosa",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for dosa",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568041",
        "imageId": "PC_Mweb/Pasta.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80479?collection_id=80479&type=rcv2",
            "text": "Pasta",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for pasta",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80479?collection_id=80479&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568346",
        "imageId": "PC_Mweb/Noodles.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80463?collection_id=80463&type=rcv2",
            "text": "Noodles",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for noodles",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80463?collection_id=80463&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568359",
        "imageId": "PC_Mweb/Paratha.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80475?collection_id=80475&type=rcv2",
            "text": "Paratha",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for paratha",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80475?collection_id=80475&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568312",
        "imageId": "PC_Mweb/Cake.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
            "text": "Cakes",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for cake",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568337",
        "imageId": "PC_Mweb/Pav%20Bhaji.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
            "text": "Pav Bhaji",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for pav bhaji",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568314",
        "imageId": "PC_Mweb/Idli.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80440?collection_id=80440&search_context=idli&tags=layout_CCS_Idli&type=rcv2",
            "text": "Idli",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for idly",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80440?collection_id=80440&search_context=idli&tags=layout_CCS_Idli&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568331",
        "imageId": "PC_Mweb/Pancake.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80471?collection_id=80471&type=rcv2",
            "text": "Pancakes",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for pancake",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80471?collection_id=80471&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568326",
        "imageId": "PC_Mweb/Ice%20Cream.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
            "text": "Ice Cream",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for icecream",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568370",
        "imageId": "PC_Mweb/Shake.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
            "text": "Shake",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for shakes",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568311",
        "imageId": "PC_Mweb/Poori.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80377?collection_id=80377&type=rcv2",
            "text": "Poori",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for poori",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80377?collection_id=80377&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568341",
        "imageId": "PC_Mweb/Pastry.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80355?collection_id=80355&type=rcv2",
            "text": "Pastry",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for Pastry",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80355?collection_id=80355&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    },
    {
        "id": "2568330",
        "imageId": "PC_Mweb/Shawarma.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
            "text": "Shawarma",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for shawarma",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "overlayIcon": {}
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"eIaYl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FoodCard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function FoodCard({ foodData }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
        className: "block w-32 h-40",
        href: foodData?.action.link,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
            className: "w-full h-full object-cover",
            src: "https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId,
            alt: foodData?.action.text
        }, void 0, false, {
            fileName: "src/Components/FoodCard.js",
            lineNumber: 4,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "src/Components/FoodCard.js",
        lineNumber: 3,
        columnNumber: 9
    }, this);
} // export default function FoodCard({ foodData }) {
 //   return (
 //     <a 
 //       className="block w-38 h-40 sm:w-28 sm:h-28 md:w-24 md:h-40 rounded-lg overflow-hidden hover:scale-95 transition-transform duration-200 hover:shadow-lg"
 //       href={foodData?.action.link}
 //       aria-label={foodData?.action.text}
 //     >
 //       <img 
 //         className="w-full h-full object-cover"
 //         src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}
 //         alt={foodData?.action.text}
 //         loading="lazy"
 //       />
 //     </a>
 //   );
 // }

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"a34md":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>GroceryOption);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _grocery = require("../Utils/Grocery");
var _groceryCard = require("./GroceryCard");
var _groceryCardDefault = parcelHelpers.interopDefault(_groceryCard);
function GroceryOption() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "mt-10 md:mt-16 lg:mt-20 w-full px-4 sm:px-6 md:w-[90%] lg:w-[80%] container mx-auto",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                className: "font-bold text-xl sm:text-2xl lg:text-[25px] text-gray-900 mb-4 sm:mb-5 lg:mb-7",
                children: "Shop groceries on Instamart"
            }, void 0, false, {
                fileName: "src/Components/GroceryOption.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-full overflow-x-auto pb-4 hidden-scroll",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "grid grid-rows-1 grid-flow-col gap-4 sm:gap-6 lg:gap-8 w-max",
                    children: (0, _grocery.GroceryGridCards).map((foodData)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _groceryCardDefault.default), {
                            foodData: foodData
                        }, foodData.id, false, {
                            fileName: "src/Components/GroceryOption.js",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "src/Components/GroceryOption.js",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/Components/GroceryOption.js",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/GroceryOption.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","../Utils/Grocery":"bJ0cL","./GroceryCard":"aLTlo","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"bJ0cL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GroceryGridCards", ()=>GroceryGridCards);
const GroceryGridCards = [
    {
        "id": "6821bc9e09ab2e00019aa5d1",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/43e3c412-4ca9-4894-82ba-24b69da80aa6_06c0d2a9-804c-4bf1-8725-7ebd234e144a",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Fresh Vegetables",
            "text": "Fresh Vegetables",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "6821bc9e09ab2e00019aa5d1",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Fresh Vegetables",
        "overlayIcon": {}
    },
    {
        "id": "6821facbeb76ab0001691ddb",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/a1493d81-f21e-415f-9875-f78383590fc2_9f3f0f68-4fbe-40f6-8f5d-5472a03469bd",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Fresh Fruits",
            "text": "Fresh Fruits",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "6821facbeb76ab0001691ddb",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Fresh Fruits",
        "overlayIcon": {}
    },
    {
        "id": "681f4d69eb76ab0001691dc9",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/6dea6676-ce07-45e6-b60c-a099c01c5462_6d33297a-5828-48ff-aa2a-c052ae97669e",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Dairy, Bread and Eggs",
            "text": "Dairy, Bread and Eggs",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "681f4d69eb76ab0001691dc9",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Dairy, Bread and Eggs",
        "overlayIcon": {}
    },
    {
        "id": "681de790cc67390001a095d2",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/097900ca-5d2d-4bb0-8e54-aede1e58dfd8_eab3796c-ac17-48fd-bfc7-6356c6f89783",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Rice, Atta and Dals",
            "text": "Rice, Atta and Dals",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "681de790cc67390001a095d2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Rice, Atta and Dals",
        "overlayIcon": {}
    },
    {
        "id": "68219298cc67390001a095d8",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/64714677-e6b6-41c1-b533-6644d43e55f7_76ef86af-0483-41a5-8387-37901bf4ca6a",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Masalas and Dry Fruits",
            "text": "Masalas and Dry Fruits",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "68219298cc67390001a095d8",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Masalas and Dry Fruits",
        "overlayIcon": {}
    },
    {
        "id": "682038cdbbe7600001aae469",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/8e48ee13-3b51-49ea-b765-5cf3e7a97c04_695caa8a-c2f6-4a1a-9672-53213fea21aa",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Oils and Ghee",
            "text": "Oils and Ghee",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "682038cdbbe7600001aae469",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Oils and Ghee",
        "overlayIcon": {}
    },
    {
        "id": "68233862667b3c0001eb34ac",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/7/6/73e018a7-d342-475e-aaca-ec5cd3d0c59f_228ff3d4-ff21-44db-9768-7a369c65ce6a",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Munchies",
            "text": "Munchies",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "68233862667b3c0001eb34ac",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Munchies",
        "overlayIcon": {}
    },
    {
        "id": "6824881fcc67390001a095f0",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/7/6/83a9b71b-1db7-4cbe-a9f7-ead650d26326_3afbe8c8-f5c8-4dd7-8357-f5711f80646b",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Sweet Tooth",
            "text": "Sweet Tooth",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "6824881fcc67390001a095f0",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Sweet Tooth",
        "overlayIcon": {}
    },
    {
        "id": "681f455abbe7600001aae467",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/7/6/37d399b1-52d2-47ef-bdd8-8951e51819fc_0361a93d-e864-49be-a57d-46c958eb7b56",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Cold Drinks and Juices",
            "text": "Cold Drinks and Juices",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "681f455abbe7600001aae467",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Cold Drinks and Juices",
        "overlayIcon": {}
    },
    {
        "id": "681f386909ab2e00019aa588",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/7/6/76a7104c-0f11-4182-aa51-0d48efc2be7f_aae098f9-aaff-4504-a222-bf13595d58cd",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Biscuits and Cakes",
            "text": "Biscuits and Cakes",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "681f386909ab2e00019aa588",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Biscuits and Cakes",
        "overlayIcon": {}
    },
    {
        "id": "6820a87b09ab2e00019aa5c4",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/1a08f110-17b6-4785-92d4-404825b75f2d_869c1986-d9c1-4d46-b1c3-10c79a052a59",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Instant and Frozen Food",
            "text": "Instant and Frozen Food",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "6820a87b09ab2e00019aa5c4",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Instant and Frozen Food",
        "overlayIcon": {}
    },
    {
        "id": "6821a0a01f249300018d7735",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/25be4b2d-a9de-495e-a9a4-9a6d6a3d13c0_5f571281-eef0-4820-9982-d8bdd9af91c6",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Meat and Seafood",
            "text": "Meat and Seafood",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "6821a0a01f249300018d7735",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Meat and Seafood",
        "overlayIcon": {}
    },
    {
        "id": "681f386909ab2e00019aa595",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/012beae1-c31a-4360-9b32-173080b64652_aa07a04e-5f2e-4c00-86f6-297344906f01",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Cereals and Breakfast",
            "text": "Cereals and Breakfast",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "681f386909ab2e00019aa595",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Cereals and Breakfast",
        "overlayIcon": {}
    },
    {
        "id": "68247a48cc67390001a095ee",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/7/6/e2f96940-2657-4a4b-a5e1-0c3413ba25cb_8b977351-a415-442a-bb9c-320e1642f740",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Sauces and Spreads",
            "text": "Sauces and Spreads",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "68247a48cc67390001a095ee",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Sauces and Spreads",
        "overlayIcon": {}
    },
    {
        "id": "682496711f249300018d774c",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/5fc3d15a-26b0-41e0-93ab-39ada0f553c2_82e0ff9f-558c-45dd-af3e-fdc16d0aa471",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Tea, Coffee and More",
            "text": "Tea, Coffee and More",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "682496711f249300018d774c",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Tea, Coffee and More",
        "overlayIcon": {}
    },
    {
        "id": "681f386909ab2e00019aa5a3",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/7/6/73a47bc4-c684-447f-9908-22da3ecd3ba2_c9948a61-3dca-4e29-82b4-31178d38746b",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Cleaning Essentials",
            "text": "Cleaning Essentials",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "681f386909ab2e00019aa5a3",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Cleaning Essentials",
        "overlayIcon": {}
    },
    {
        "id": "682058d4bbe7600001aae473",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/fc74f557-a203-4dba-8955-82d6c608e91e_7d2481f0-8614-400c-b25c-554a655c14c7",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Pharma and Hygiene",
            "text": "Pharma and Hygiene",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "682058d4bbe7600001aae473",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Pharma and Hygiene",
        "overlayIcon": {}
    },
    {
        "id": "681f386909ab2e00019aa57e",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/7/6/4342c814-6ff9-4bbe-a360-95200ad602a0_1905dc17-a04d-4a9e-9a4e-adde9b27f321",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Bath, Body and Hair",
            "text": "Bath, Body and Hair",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "681f386909ab2e00019aa57e",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Bath, Body and Hair",
        "overlayIcon": {}
    },
    {
        "id": "682462130c0f930001b218a0",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/3/25/1eae2df9-95a5-40e5-a2c0-92bb4893637a_5e1e6c72-dde5-4a12-8bdf-c7cbc4b0644b",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Paan Corner",
            "text": "Paan Corner",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "682462130c0f930001b218a0",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Paan Corner",
        "overlayIcon": {}
    },
    {
        "id": "6820a87b09ab2e00019aa5ae",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/657a922d-067a-4e0b-b967-b3e0c7906fa9_485311db-2f22-4193-a05d-963f18a89150",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Home and Kitchen",
            "text": "Home and Kitchen",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "6820a87b09ab2e00019aa5ae",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Home and Kitchen",
        "overlayIcon": {}
    },
    {
        "id": "68234e9509ab2e00019aa696",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/52a66c89-6516-489f-96ac-b15286900648_ebbfd2d1-9b36-4ce3-b08c-7378f1ca6d7d",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Office and Electricals",
            "text": "Office and Electricals",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "68234e9509ab2e00019aa696",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Office and Electricals",
        "overlayIcon": {}
    },
    {
        "id": "681f386909ab2e00019aa576",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/7/6/cbbab04b-845a-44bd-aa63-329276af1714_c6c9dc53-ae50-475a-89d8-b03824c4a98a",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Baby Care",
            "text": "Baby Care",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "681f386909ab2e00019aa576",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Baby Care",
        "overlayIcon": {}
    },
    {
        "id": "682462130c0f930001b218ab",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/705173ff-7cd9-4d7e-9e5b-3886d81411b9_bb324827-9556-48e4-b8f6-280706478fe2",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Pet Supplies",
            "text": "Pet Supplies",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "682462130c0f930001b218ab",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Pet Supplies",
        "overlayIcon": {}
    },
    {
        "id": "682316f5667b3c0001eb34a1",
        "imageId": "NI_CATALOG/IMAGES/CIW/2025/5/14/e160e4c4-2114-4e3d-97ff-3922125a3b2e_224bcfa1-77e3-47e5-aea5-1ab060585b4b",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Beauty and Grooming",
            "text": "Beauty and Grooming",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "682316f5667b3c0001eb34a1",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Beauty and Grooming",
        "overlayIcon": {}
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"aLTlo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>GroceryCard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function GroceryCard({ foodData }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "flex flex-col items-center w-28 sm:w-32 md:w-36",
        children: [
            " ",
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                className: "block w-full h-36 sm:h-40 md:h-46 mb-1 sm:mb-2",
                href: foodData?.action.link,
                "aria-label": foodData?.action.text,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    className: "w-full h-full object-cover rounded-lg hover:shadow-md transition-shadow",
                    src: "https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId,
                    alt: foodData?.action.text,
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "src/Components/GroceryCard.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/Components/GroceryCard.js",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                className: "font-bold text-sm sm:text-base lg:text-[18px] text-center line-clamp-2 px-1 text-gray-700",
                children: foodData?.action.text
            }, void 0, false, {
                fileName: "src/Components/GroceryCard.js",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/GroceryCard.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"2SXPd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>DineOption);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _dineData = require("../Utils/DineData");
var _dineCard = require("./DineCard");
var _dineCardDefault = parcelHelpers.interopDefault(_dineCard);
var _location = require("../Utils/Location");
var _placeCard = require("./PlaceCard");
var _placeCardDefault = parcelHelpers.interopDefault(_placeCard);
function DineOption() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-full px-4 md:w-[90%] lg:w-[80%] mx-auto mt-10 md:mt-20",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-2xl md:text-3xl font-bold text-gray-800",
                        children: "Discover best restaurants on Dineout"
                    }, void 0, false, {
                        fileName: "src/Components/DineOption.js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex overflow-x-auto mt-5 gap-3 md:gap-4.5 pb-6 mb-10 md:mb-20 hidden-scroll",
                        children: (0, _dineData.dineoutRestaurants).map((RestData)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _dineCardDefault.default), {
                                RestData: RestData
                            }, RestData.info?.id, false, {
                                fileName: "src/Components/DineOption.js",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "src/Components/DineOption.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/DineOption.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    className: "w-full h-40 md:h-60.5 object-cover",
                    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png",
                    alt: "Download Swiggy App"
                }, void 0, false, {
                    fileName: "src/Components/DineOption.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/Components/DineOption.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-full px-4 md:max-w-[90%] lg:max-w-[70%] mx-auto mt-10 md:mt-20",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "font-bold text-xl md:text-2xl mb-3 text-gray-800",
                        children: "Cities with food delivery"
                    }, void 0, false, {
                        fileName: "src/Components/DineOption.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4",
                        children: (0, _location.Location)?.map((Data)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _placeCardDefault.default), {
                                Data: Data
                            }, Data?.id, false, {
                                fileName: "src/Components/DineOption.js",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "src/Components/DineOption.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/DineOption.js",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","../Utils/DineData":"gUCJw","./DineCard":"4zlKH","../Utils/Location":"dlRIb","./PlaceCard":"i7UIU","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"gUCJw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dineoutRestaurants", ()=>dineoutRestaurants);
const dineoutRestaurants = [
    {
        "info": {
            "id": "853547",
            "name": "Dehradun SOCIAL\t",
            "rating": {
                "value": "3.8",
                "count": 541,
                "countDescription": "541 Google ratings"
            },
            "costForTwo": "\u20B91000 for two",
            "cuisines": [
                "Chinese",
                "American"
            ],
            "locality": "Hathibarkala Salwala",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2024-03-08T12:33:03.891",
                    "name": "DA2 JPG",
                    "url": "v1709901185/ed34b2d7bbc171c939023a8ec7a5dcd7.jpg"
                }
            ],
            "highlights": [
                "Alcohol served",
                "Reservation available",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "4.7 km",
                "landmarkName": "Centrio Mall",
                "city": {
                    "name": "Dehradun"
                },
                "formattedAddress": "Centrio Mall, Hathibarkala Salwala, Dehradun"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 20% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_LATER",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Available 16 Jun"
                        },
                        {
                            "header": "FLAT 15% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "20% OFF",
                        "description": "FLAT 20% OFF",
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_LATER",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Available 16 Jun",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 20
                        }
                    },
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "15% OFF",
                        "description": "FLAT 15% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "infos": [
                    {
                        "header": "Get extra 10% off using SAVE150UPI",
                        "description": " 10% off with SAVE150UPI + Up to 10% bank offers",
                        "coupon": {
                            "code": "SAVE150UPI"
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "offerCount": 2,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "promoted": true,
            "adTrackingId": "cid=82c54e58-d78e-4a9e-b47e-ab61fab07f10~~adtrid=92e25b6f-cd13-41ef-871a-143307efadd2~~adgrpid=82c54e58-d78e-4a9e-b47e-ab61fab07f10#ag1~~cndid=853547~~bp=jdq+8p0mUBYfeMv5Ut9NBkzAasi/HQiArWHwbpIrcV0PJzQNUpZexUMqdi2OEO65nSJeGaYqKxnxQOCO9gi+BfRPCJ/I~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1749795473316~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~plpr=DINEOUT_COLLECTION#LISTING~~zoneid=655~~kw=~~cityid=22~~lmd=2266.201~~collid=116084",
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 20% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 2 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                },
                "couponOffer": {
                    "title": "Get extra 10% off using SAVE150UPI",
                    "style": {
                        "textColour": "primary_accent"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/853547/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "144273",
            "name": "Barista Coffee",
            "rating": {
                "value": "4.1",
                "count": 935,
                "countDescription": "935 Google ratings"
            },
            "costForTwo": "\u20B9599 for two",
            "cuisines": [
                "Beverages",
                "Desserts"
            ],
            "locality": "Rajpur Road",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2025-04-05T04:56:29.760",
                    "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/4/5/1430f822-9fb6-4bcb-9809-c9ee61640566_QIMWobqpsWhT0wXiuHeOziBqb9q9Y2taGg1347674c0b1d147c2bcc34774f384790c.JPG"
                }
            ],
            "highlights": [
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "2.5 km",
                "city": {
                    "name": "Dehradun"
                },
                "formattedAddress": "Rajpur Road, Dehradun"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 50% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "10% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 10% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 10
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "50% OFF",
                        "description": "FLAT 50% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 50
                        }
                    }
                ],
                "infos": [
                    {
                        "header": "Get extra 10% off using BFAST100",
                        "description": " 10% off with BFAST100 + Up to 10% bank offers",
                        "coupon": {
                            "code": "BFAST100"
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "offerCount": 3,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 50% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 3 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                },
                "couponOffer": {
                    "title": "Get extra 10% off using BFAST100",
                    "style": {
                        "textColour": "primary_accent"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/144273/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "760871",
            "name": "Cafune",
            "rating": {
                "value": "4.4",
                "count": 428,
                "countDescription": "428 Google ratings"
            },
            "costForTwo": "\u20B91000 for two",
            "cuisines": [
                "Continental",
                "North Indian"
            ],
            "locality": "Rajender Nagar",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2023-09-01T11:47:35.665",
                    "url": "v1693568857/043d5721e22b541968ddaf5e32060ac7.webp"
                }
            ],
            "highlights": [
                "Reservation available",
                "Parking available",
                "Pet friendly",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "1.6 km",
                "city": {
                    "name": "Dehradun"
                },
                "formattedAddress": "Rajender Nagar, Dehradun"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 15% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "10% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 10% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 10
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "15% OFF",
                        "description": "FLAT 15% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 2,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 15% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 2 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/760871/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "856179",
            "name": "Smoke House Deli",
            "rating": {
                "value": "4.2",
                "count": 396,
                "countDescription": "396 Google ratings"
            },
            "costForTwo": "\u20B91000 for two",
            "cuisines": [
                "European",
                "Italian"
            ],
            "locality": "Hathibarkala Salwala",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2024-03-16T10:30:05.050",
                    "name": "Screenshot 2024-03-14 at 5 08 06   PM jpeg - Stephy Saji Philip png",
                    "url": "v1710585009/2224c3ef68b7c89b90481186b254948f.png"
                }
            ],
            "highlights": [
                "Alcohol served",
                "Reservation available",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "4.5 km",
                "landmarkName": "Centrio Mall",
                "city": {
                    "name": "Dehradun"
                },
                "formattedAddress": "Centrio Mall, Hathibarkala Salwala, Dehradun"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 20% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "20% OFF",
                        "description": "FLAT 20% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 20
                        }
                    }
                ],
                "infos": [
                    {
                        "header": "Get extra 10% off using SAVE150UPI",
                        "description": " 10% off with SAVE150UPI + Up to 10% bank offers",
                        "coupon": {
                            "code": "SAVE150UPI"
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "offerCount": 2,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "promoted": true,
            "adTrackingId": "cid=ebb44d46-5fb1-484f-b273-a7a8a0f56e55~~adtrid=93285d6c-2a96-4dba-acab-c6319b4beddf~~adgrpid=ebb44d46-5fb1-484f-b273-a7a8a0f56e55#ag1~~cndid=856179~~bp=rKZqACSvisbDroYsQ3R8Q6PPI5TA26VpgtKFFkqe5INbuT6sDB3IaEQuTywl+9855Zrq+cjF0Y9whwd+YnjLNVsWEF7E~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1749795473316~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~plpr=DINEOUT_COLLECTION#LISTING~~zoneid=655~~kw=~~cityid=22~~lmd=2288.0886~~collid=116084",
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 20% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 2 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                },
                "couponOffer": {
                    "title": "Get extra 10% off using SAVE150UPI",
                    "style": {
                        "textColour": "primary_accent"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/856179/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "474179",
            "name": "The Banaras",
            "rating": {
                "value": "4.0",
                "count": 1061,
                "countDescription": "1K+ Google ratings"
            },
            "costForTwo": "\u20B91200 for two",
            "cuisines": [
                "Desserts",
                "North Indian"
            ],
            "locality": "Balliwala",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2025-01-27T04:37:30.572",
                    "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/27/bc66cfd6-6d9a-4c1d-87ce-8d229e5aa746_9c4b156cafffb4f8eb73df4dda9b63e97.JPG"
                }
            ],
            "highlights": [
                "Parking available",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "2 km",
                "city": {
                    "name": "Dehradun"
                },
                "formattedAddress": "Balliwala, Dehradun"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 15% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "10% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 10% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 10
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "15% OFF",
                        "description": "FLAT 15% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 2
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 15% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 2 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            }
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/474179/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "686687",
            "name": "Tapri - The Teafe",
            "rating": {
                "value": "4.2",
                "count": 650,
                "countDescription": "650 Google ratings"
            },
            "costForTwo": "\u20B9800 for two",
            "cuisines": [
                "Mexican",
                "North Indian"
            ],
            "locality": "Rajpur Road",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2025-01-27T07:46:34.502",
                    "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/27/b1d80693-c2ca-4f48-b9f7-973c988a7640_110a61d23848a34bfd8f9bee6ce27712d6.JPG"
                }
            ],
            "highlights": [
                "Parking available",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "3.1 km",
                "landmarkName": "MJ Tower",
                "city": {
                    "name": "Dehradun"
                },
                "formattedAddress": "MJ Tower, Rajpur Road, Dehradun"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 30% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "10% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 10% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 10
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "30% OFF",
                        "description": "FLAT 30% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 30
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 5,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    },
                    {
                        "logoCtx": {
                            "text": "Free Dessert",
                            "logo": "dineout/free_desert.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 30% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 5 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                },
                {
                    "logo": {
                        "logo": "dineout/free_desert.png"
                    },
                    "title": "Free Dessert",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/686687/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "721741",
            "name": "Delhi Dehradun Express",
            "rating": {
                "value": "4.5",
                "count": 49,
                "countDescription": "49 Google ratings"
            },
            "costForTwo": "\u20B9800 for two",
            "cuisines": [
                "North Indian",
                "Chinese"
            ],
            "locality": "Rajpur",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2023-06-06T05:52:42.028",
                    "url": "v1686030763/516090b5bf3acd6ac3ae8ec24cd0a503.jpg"
                }
            ],
            "highlights": [
                "Parking available",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "8.7 km",
                "city": {
                    "name": "Dehradun"
                },
                "formattedAddress": "Rajpur, Dehradun"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 20% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "10% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 10% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 10
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "20% OFF",
                        "description": "FLAT 20% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 20
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 2,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "promoted": true,
            "adTrackingId": "cid=555fa9e7-0329-4188-a26a-6192f8c56aca~~adtrid=f834fdcd-0ba0-4929-9e21-b42d13ef22a1~~adgrpid=555fa9e7-0329-4188-a26a-6192f8c56aca#ag1~~cndid=721741~~bp=2LgipXmb+SjcM2EPzMC7guiyO3RLP48kl4uoFyz7q0ney5S5TKn1+FQ6bLKUMOzX5lZXV7nZl3Cio6IBTv/umpqx1Ifm~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1749795473316~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~plpr=DINEOUT_COLLECTION#LISTING~~zoneid=655~~kw=~~cityid=22~~lmd=6597.202~~collid=116084",
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 20% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 2 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/721741/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "734273",
            "name": "T BISTRO",
            "rating": {
                "value": "4.1",
                "count": 723,
                "countDescription": "723 Google ratings"
            },
            "costForTwo": "\u20B9700 for two",
            "cuisines": [
                "Fast Food"
            ],
            "locality": "Chironwali",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2023-07-03T15:23:16.193",
                    "url": "v1688397797/07d61a38daad08a9039a9d4a8d55a442.jpg"
                }
            ],
            "highlights": [
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "3.8 km",
                "landmarkName": "Hotel Saina Inn",
                "city": {
                    "name": "Dehradun"
                },
                "formattedAddress": "Hotel Saina Inn, Chironwali, Dehradun"
            },
            "offerInfoV2": {
                "vendorOffer": {
                    "header": "FLAT 10% OFF",
                    "offerLogo": {}
                },
                "customerOffer": {
                    "header": "+ 10% off with BFAST100 + Up to 10% bank offers",
                    "offerLogo": {}
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "10% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 10% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 10
                    }
                },
                "infos": [
                    {
                        "header": "Get extra 10% off using BFAST100",
                        "description": " 10% off with BFAST100 + Up to 10% bank offers",
                        "coupon": {
                            "code": "BFAST100"
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "offerCount": 1,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 10% off",
                    "subtitle": "on walk-in",
                    "subtext": "+ 1 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                },
                "couponOffer": {
                    "title": "Get extra 10% off using BFAST100",
                    "style": {
                        "textColour": "primary_accent"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/734273/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "734272",
            "name": "Sunset Kitchen & Bar",
            "rating": {
                "value": "4.1",
                "count": 1587,
                "countDescription": "1K+ Google ratings"
            },
            "costForTwo": "\u20B91600 for two",
            "cuisines": [
                "Chinese",
                "North Indian"
            ],
            "locality": "Chironwali",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2024-05-08T08:30:09.960",
                    "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/5/8/b41bc631-e81a-4760-8991-42e2df99dcb8_p37cf5471c25c2411a8b7f8a0b4c4d4f2c.JPG"
                }
            ],
            "highlights": [
                "Alcohol served",
                "Parking available",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "3.8 km",
                "landmarkName": "Hotel Saina Inn",
                "city": {
                    "name": "Dehradun"
                },
                "formattedAddress": "Hotel Saina Inn, Chironwali, Dehradun"
            },
            "offerInfoV2": {
                "vendorOffer": {
                    "header": "FLAT 10% OFF",
                    "offerLogo": {}
                },
                "customerOffer": {
                    "header": "+Up to 10% off with HDFC Bank Credit Card",
                    "offerLogo": {}
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "10% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 10% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 10
                    }
                },
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 10% off",
                    "subtitle": "on walk-in",
                    "subtext": "+ 1 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/734272/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "306081",
            "name": "Bungalow Bar & Kitchen",
            "rating": {
                "value": "4.0",
                "count": 1702,
                "countDescription": "1K+ Google ratings"
            },
            "costForTwo": "\u20B9800 for two",
            "cuisines": [
                "Continental",
                "Italian"
            ],
            "locality": "Karanpur",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2025-01-13T11:46:44.583",
                    "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/13/6d6c6209-9ed5-4e68-862f-d76bc86f09fa_image30aff7d3867604d7cbb02b754725c6992.JPG"
                }
            ],
            "highlights": [
                "Alcohol served",
                "Parking available",
                "Free wifi",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "3.8 km",
                "landmarkName": "Crossroads Mall",
                "city": {
                    "name": "Dehradun"
                },
                "formattedAddress": "Crossroads Mall, Karanpur, Dehradun"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 30% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "10% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 10% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 10
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "30% OFF",
                        "description": "FLAT 30% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 30
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 4,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 30% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 4 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/306081/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"4zlKH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>DineCard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function DineCard({ RestData }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full sm:w-72 md:w-80 lg:w-96 flex-none rounded-xl md:rounded-2xl border border-gray-200 md:border-2 overflow-hidden pb-2 md:pb-3 shadow-sm hover:shadow-md transition-shadow",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                target: "_blank",
                href: RestData.cta.link,
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            className: "w-full h-40 sm:h-44 md:h-48 object-cover",
                            src: "https://media-assets.swiggy.com/swiggy/image/upload/" + RestData?.info?.mediaFiles[0]?.url,
                            alt: RestData?.info?.name,
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "src/Components/DineCard.js",
                            lineNumber: 6,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            className: "absolute bottom-2 left-2 text-base sm:text-lg md:text-xl text-white font-bold z-10 line-clamp-1",
                            children: RestData?.info?.name
                        }, void 0, false, {
                            fileName: "src/Components/DineCard.js",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "absolute bottom-2 right-2 flex items-center gap-1 z-10 bg-black/30 rounded-full px-1.5 py-0.5",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 100 100",
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                                            cx: "50",
                                            cy: "50",
                                            r: "45",
                                            className: "fill-green-500"
                                        }, void 0, false, {
                                            fileName: "src/Components/DineCard.js",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("polygon", {
                                            points: "50,20 58,40 80,40 62,55 70,75 50,62 30,75 38,55 20,40 42,40",
                                            className: "fill-white"
                                        }, void 0, false, {
                                            fileName: "src/Components/DineCard.js",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/DineCard.js",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "text-base sm:text-lg md:text-xl text-white font-bold",
                                    children: RestData?.info?.rating?.value
                                }, void 0, false, {
                                    fileName: "src/Components/DineCard.js",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/DineCard.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "absolute bg-gradient-to-t from-black/100 to-transparent h-12 sm:h-14 md:h-16 bottom-0 left-0 right-0"
                        }, void 0, false, {
                            fileName: "src/Components/DineCard.js",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/DineCard.js",
                    lineNumber: 5,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/Components/DineCard.js",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "mx-2 sm:mx-3 mt-2",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "text-sm sm:text-[15px] text-gray-700 font-semibold line-clamp-2",
                        children: RestData?.info?.cuisines?.join(", ")
                    }, void 0, false, {
                        fileName: "src/Components/DineCard.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex justify-between mt-1",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "text-xs sm:text-[13px] text-gray-700 font-semibold line-clamp-1",
                                    children: RestData?.info?.locationInfo?.formattedAddress
                                }, void 0, false, {
                                    fileName: "src/Components/DineCard.js",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "src/Components/DineCard.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "text-xs sm:text-[13px] text-gray-700 font-semibold",
                                children: RestData?.info?.locationInfo?.distanceString
                            }, void 0, false, {
                                fileName: "src/Components/DineCard.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/DineCard.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex items-center gap-1 bg-gray-200 rounded-lg sm:rounded-xl w-24 sm:w-28 justify-center py-0.5 mt-2",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: "w-3 h-3",
                                src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
                                alt: "Table booking"
                            }, void 0, false, {
                                fileName: "src/Components/DineCard.js",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "text-xs sm:text-[13px] text-gray-700 font-semibold",
                                children: "Table booking"
                            }, void 0, false, {
                                fileName: "src/Components/DineCard.js",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/DineCard.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex justify-between items-center bg-green-500 px-2 sm:px-3 py-1.5 sm:py-2 font-bold rounded-lg sm:rounded-xl mt-2 sm:mt-3",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                        className: "w-5 sm:w-6 h-4 sm:h-5 mr-1",
                                        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png",
                                        alt: "Offer"
                                    }, void 0, false, {
                                        fileName: "src/Components/DineCard.js",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "text-xs sm:text-sm md:text-[15px] text-white line-clamp-1",
                                        children: [
                                            RestData?.info?.offerInfoV3?.vendorOffer?.title,
                                            " ",
                                            RestData?.info?.offerInfoV3?.vendorOffer?.subtitle
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/DineCard.js",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/DineCard.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "text-xs sm:text-[13px] text-white",
                                children: RestData?.info?.offerInfoV3?.vendorOffer?.subtext
                            }, void 0, false, {
                                fileName: "src/Components/DineCard.js",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/DineCard.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "text-xs sm:text-sm md:text-[16px] bg-green-100 text-green-600 px-2 sm:px-3 rounded-lg sm:rounded-xl mt-2 sm:mt-3 py-1.5 sm:py-2 font-bold line-clamp-2",
                        children: RestData?.info?.customerOffer?.infos[0]?.description
                    }, void 0, false, {
                        fileName: "src/Components/DineCard.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/DineCard.js",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/DineCard.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"dlRIb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Location", ()=>Location);
const Location = [
    {
        "id": "10",
        "link": "https://www.swiggy.com/city/bangalore",
        "text": "Order food online in Bangalore"
    },
    {
        "id": "200",
        "link": "https://www.swiggy.com/city/gurgaon",
        "text": "Order food online in Gurgaon"
    },
    {
        "id": "30",
        "link": "https://www.swiggy.com/city/hyderabad",
        "text": "Order food online in Hyderabad"
    },
    {
        "id": "40",
        "link": "https://www.swiggy.com/city/delhi",
        "text": "Order food online in Delhi"
    },
    {
        "id": "50",
        "link": "https://www.swiggy.com/city/mumbai",
        "text": "Order food online in Mumbai"
    },
    {
        "id": "60",
        "link": "https://www.swiggy.com/city/pune",
        "text": "Order food online in Pune"
    },
    {
        "id": "70",
        "link": "https://www.swiggy.com/city/kolkata",
        "text": "Order food online in Kolkata"
    },
    {
        "id": "80",
        "link": "https://www.swiggy.com/city/chennai",
        "text": "Order food online in Chennai"
    },
    {
        "id": "90",
        "link": "https://www.swiggy.com/city/ahmedabad",
        "text": "Order food online in Ahmedabad"
    },
    {
        "id": "100",
        "link": "https://www.swiggy.com/city/chandigarh",
        "text": "Order food online in Chandigarh"
    },
    {
        "id": "110",
        "link": "https://www.swiggy.com/city/jaipur",
        "text": "Order food online in Jaipur"
    },
    {
        "id": "120",
        "link": "https://www.swiggy.com/city/kochi",
        "text": "Order food online in Kochi"
    },
    {
        "id": "130",
        "link": "https://www.swiggy.com/city/coimbatore",
        "text": "Order food online in Coimbatore"
    },
    {
        "id": "140",
        "link": "https://www.swiggy.com/city/lucknow",
        "text": "Order food online in Lucknow"
    },
    {
        "id": "150",
        "link": "https://www.swiggy.com/city/nagpur",
        "text": "Order food online in Nagpur"
    },
    {
        "id": "160",
        "link": "https://www.swiggy.com/city/vadodara",
        "text": "Order food online in Vadodara"
    },
    {
        "id": "170",
        "link": "https://www.swiggy.com/city/indore",
        "text": "Order food online in Indore"
    },
    {
        "id": "18",
        "link": "https://www.swiggy.com/city/guwahati",
        "text": "Order food online in Guwahati"
    },
    {
        "id": "19",
        "link": "https://www.swiggy.com/city/vizag",
        "text": "Order food online in Vizag"
    },
    {
        "id": "20",
        "link": "https://www.swiggy.com/city/surat",
        "text": "Order food online in Surat"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"i7UIU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PlaceCard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function PlaceCard({ Data }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full border border-gray-300 p-3 md:p-4 rounded-lg md:rounded-xl text-gray-700 text-center font-semibold shadow-md hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:shadow-lg",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
            href: Data?.link,
            className: "block w-full h-full",
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "text-sm md:text-base",
                children: Data?.text
            }, void 0, false, {
                fileName: "src/Components/PlaceCard.js",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/Components/PlaceCard.js",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/Components/PlaceCard.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"i68AF":[function(require,module,exports,__globalThis) {
// src/components/Restaurant.jsx
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Restaurant);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _restCard = require("./RestCard");
var _restCardDefault = parcelHelpers.interopDefault(_restCard);
var _shimmer = require("./Shimmer");
var _shimmerDefault = parcelHelpers.interopDefault(_shimmer);
var _restaurantDishes = require("./RestaurantDishes");
var _restaurantDishesDefault = parcelHelpers.interopDefault(_restaurantDishes);
var _react = require("react");
function Restaurant() {
    const [Condition, setCondition] = (0, _react.useState)("All");
    const scrollRef = (0, _react.useRef)(null); // new ref for scrolling
    const scrollLeft = ()=>{
        scrollRef.current.scrollBy({
            left: -450,
            behavior: "smooth"
        });
    };
    const scrollRight = ()=>{
        scrollRef.current.scrollBy({
            left: 450,
            behavior: "smooth"
        });
    };
    const { list, status, list2 } = (0, _reactRedux.useSelector)((state)=>state.restaurants);
    if (status === "loading") return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmerDefault.default), {}, void 0, false, {
        fileName: "src/Components/Restaurant.js",
        lineNumber: 22,
        columnNumber: 36
    }, this);
    if (status === "failed") return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
        children: "Error loading restaurants."
    }, void 0, false, {
        fileName: "src/Components/Restaurant.js",
        lineNumber: 23,
        columnNumber: 35
    }, this);
    let Filtered = [];
    if (Condition == "All") Filtered = list;
    if (Condition == "Rating 4+") Filtered = list.filter((item)=>item?.info?.avgRating >= 4.5);
    if (Condition == "Near me") Filtered = [
        ...list
    ].sort((a, b)=>a?.info?.sla?.lastMileTravel - b?.info?.sla?.lastMileTravel);
    if (Condition == "is Open") Filtered = list?.filter((item)=>item?.info?.isOpen === true);
    if (Condition === "Fast Delivery") // Filtered = list.filter(item => item?.info?.sla?.deliveryTime <= 25);
    Filtered = [
        ...list
    ].sort((a, b)=>a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex justify-between w-[75%] mx-auto mt-5",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "What's on your mind?"
                            }, void 0, false, {
                                fileName: "src/Components/Restaurant.js",
                                lineNumber: 46,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "text-[28px] flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        className: "bg-gray-200 px-2 rounded-[50%]",
                                        onClick: scrollLeft,
                                        children: "\uD83E\uDC14"
                                    }, void 0, false, {
                                        fileName: "src/Components/Restaurant.js",
                                        lineNumber: 48,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        className: "bg-gray-200 px-2 rounded-[50%]",
                                        onClick: scrollRight,
                                        children: "\uD83E\uDC16"
                                    }, void 0, false, {
                                        fileName: "src/Components/Restaurant.js",
                                        lineNumber: 49,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/Restaurant.js",
                                lineNumber: 47,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/Restaurant.js",
                        lineNumber: 45,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            ref: scrollRef,
                            className: "w-[75%] mx-auto overflow-x-auto whitespace-nowrap px-4 py-1 mb-8 hidden-scroll",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "inline-flex gap-2",
                                children: list2?.map((rest)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantDishesDefault.default), {
                                        rest: rest
                                    }, rest.id, false, {
                                        fileName: "src/Components/Restaurant.js",
                                        lineNumber: 56,
                                        columnNumber: 7
                                    }, this))
                            }, void 0, false, {
                                fileName: "src/Components/Restaurant.js",
                                lineNumber: 54,
                                columnNumber: 3
                            }, this)
                        }, void 0, false, {
                            fileName: "src/Components/Restaurant.js",
                            lineNumber: 53,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/Restaurant.js",
                        lineNumber: 52,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {
                        className: "w-[75%] mx-auto font-bold text-gray-200"
                    }, void 0, false, {
                        fileName: "src/Components/Restaurant.js",
                        lineNumber: 61,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/Restaurant.js",
                lineNumber: 44,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "mt-5",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "w-[75%] mx-auto text-2xl font-bold text-gray-900",
                        children: "Restaurants with online food delivery in Delhi"
                    }, void 0, false, {
                        fileName: "src/Components/Restaurant.js",
                        lineNumber: 63,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-[75%] mx-auto flex gap-4 mt-4",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: `px-6 py-1 text-sm font-semibold rounded-2xl border ${Condition === "All" ? "bg-gray-800 text-white" : "border-gray-300 text-gray-700"}`,
                                onClick: ()=>setCondition("All"),
                                children: "All"
                            }, void 0, false, {
                                fileName: "src/Components/Restaurant.js",
                                lineNumber: 65,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: `px-6 py-1 text-sm font-semibold rounded-2xl border ${Condition === "Rating 4+" ? "bg-gray-800 text-white" : "border-gray-300 text-gray-700"}`,
                                onClick: ()=>setCondition("Rating 4+"),
                                children: "Rating 4.5+"
                            }, void 0, false, {
                                fileName: "src/Components/Restaurant.js",
                                lineNumber: 66,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: `px-6 py-1 text-sm font-semibold rounded-2xl border ${Condition === "Near me" ? "bg-gray-800 text-white" : "border-gray-300 text-gray-700"}`,
                                onClick: ()=>setCondition("Near me"),
                                children: "Near me"
                            }, void 0, false, {
                                fileName: "src/Components/Restaurant.js",
                                lineNumber: 67,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: `px-6 py-1 text-sm font-semibold rounded-2xl border ${Condition === "is Open" ? "bg-gray-800 text-white" : "border-gray-300 text-gray-700"}`,
                                onClick: ()=>setCondition("is Open"),
                                children: "is Open"
                            }, void 0, false, {
                                fileName: "src/Components/Restaurant.js",
                                lineNumber: 68,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: `px-6 py-1 text-sm font-semibold rounded-2xl border ${Condition === "Fast Delivery" ? "bg-gray-800 text-white" : "border-gray-300 text-gray-700"}`,
                                onClick: ()=>setCondition("Fast Delivery"),
                                children: "Fast Delivery"
                            }, void 0, false, {
                                fileName: "src/Components/Restaurant.js",
                                lineNumber: 69,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/Restaurant.js",
                        lineNumber: 64,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex flex-wrap w-[90%] mt-10 mx-auto gap-5 justify-center px-10",
                        children: Filtered?.map((rest)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restCardDefault.default), {
                                restInfo: rest
                            }, rest?.info.id, false, {
                                fileName: "src/Components/Restaurant.js",
                                lineNumber: 73,
                                columnNumber: 9
                            }, this))
                    }, void 0, false, {
                        fileName: "src/Components/Restaurant.js",
                        lineNumber: 71,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/Restaurant.js",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-redux":"react-redux","./RestCard":"lVzLp","./Shimmer":"68Hns","./RestaurantDishes":"80glP","react":"react","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"lVzLp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RestCard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouter = require("react-router");
function RestCard({ restInfo }) {
    if (!restInfo?.info) return null;
    const { id, name, cloudinaryImageId, aggregatedDiscountInfoV3, avgRating, sla, cuisines, locality, areaName } = restInfo.info;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
        to: `/city/delhi/${id}`,
        className: "block",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "w-full sm:w-56 md:w-60 mb-1 transform transition duration-200 hover:scale-95",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            className: "w-full h-36 sm:h-40 md:h-[151px] object-cover rounded-xl",
                            src: `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`,
                            alt: name
                        }, void 0, false, {
                            fileName: "src/Components/RestCard.js",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "absolute text-sm sm:text-[16px] font-extrabold text-white bg-gradient-to-t from-black/100 to-transparent h-14 sm:h-16 w-full rounded-xl bottom-0",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mt-5 sm:mt-6 ml-3",
                                children: [
                                    aggregatedDiscountInfoV3?.header,
                                    " ",
                                    aggregatedDiscountInfoV3?.subHeader
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RestCard.js",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/Components/RestCard.js",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/RestCard.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[95%] mx-auto mt-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "font-bold text-base sm:text-[18px] truncate",
                            children: name
                        }, void 0, false, {
                            fileName: "src/Components/RestCard.js",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "flex items-center gap-1 sm:gap-2 mt-1",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 100 100",
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                                            cx: "50",
                                            cy: "50",
                                            r: "45",
                                            className: "fill-green-500"
                                        }, void 0, false, {
                                            fileName: "src/Components/RestCard.js",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("polygon", {
                                            points: "50,20 58,40 80,40 62,55 70,75 50,62 30,75 38,55 20,40 42,40",
                                            className: "fill-white"
                                        }, void 0, false, {
                                            fileName: "src/Components/RestCard.js",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/RestCard.js",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "text-sm sm:text-[18px] font-semibold",
                                    children: avgRating
                                }, void 0, false, {
                                    fileName: "src/Components/RestCard.js",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "text-sm sm:text-[18px] font-semibold",
                                    children: sla?.slaString
                                }, void 0, false, {
                                    fileName: "src/Components/RestCard.js",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/RestCard.js",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "text-gray-700 text-sm sm:text-[16px] mt-1 h-[1.8rem] overflow-hidden line-clamp-2",
                            children: cuisines?.join(", ")
                        }, void 0, false, {
                            fileName: "src/Components/RestCard.js",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "text-gray-700 text-xs sm:text-[12px] font-bold truncate",
                            children: [
                                locality,
                                ", ",
                                areaName
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/RestCard.js",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/RestCard.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/Components/RestCard.js",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/Components/RestCard.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-router":"react-router","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"68Hns":[function(require,module,exports,__globalThis) {
// export default function Shimmer() {
//   return (
//     <div className="flex flex-wrap w-[90%] mt-20 mx-auto gap-8 justify-center px-10">
//       <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//     </div>
//   );
// }
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Shimmer);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function Shimmer() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "flex flex-wrap w-[90%] mt-20 mx-auto gap-8 justify-center px-10",
        children: [
            ...Array(12)
        ].map((_, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-62 mb-1 animate-pulse",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-[250px] h-[151px] rounded-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mx-auto"
                    }, void 0, false, {
                        fileName: "src/Components/Shimmer.js",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-full h-6 mt-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"
                    }, void 0, false, {
                        fileName: "src/Components/Shimmer.js",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-4/5 h-6 mt-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"
                    }, void 0, false, {
                        fileName: "src/Components/Shimmer.js",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-3/5 h-6 mt-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"
                    }, void 0, false, {
                        fileName: "src/Components/Shimmer.js",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-2/5 h-6 mt-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"
                    }, void 0, false, {
                        fileName: "src/Components/Shimmer.js",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "src/Components/Shimmer.js",
                lineNumber: 97,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "src/Components/Shimmer.js",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"80glP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RestaurantDishes);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function RestaurantDishes({ rest }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "inline-block w-40 h-40 rounded-lg overflow-hidden",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
            href: rest.action.link,
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                className: "w-[144px] h-[180px] object-cover",
                src: `https://media-assets.swiggy.com/swiggy/image/upload/${rest.imageId}`,
                alt: rest.accessibility?.altText || "Dish"
            }, void 0, false, {
                fileName: "src/Components/RestaurantDishes.js",
                lineNumber: 4,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "src/Components/RestaurantDishes.js",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/Components/RestaurantDishes.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"cWYns":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RestaurantMenu);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRouter = require("react-router");
var _menuCard = require("./MenuCard");
var _menuCardDefault = parcelHelpers.interopDefault(_menuCard);
var _restInfoShimmer = require("./RestInfoShimmer");
var _restInfoShimmerDefault = parcelHelpers.interopDefault(_restInfoShimmer);
var _discount = require("./Discount");
var _discountDefault = parcelHelpers.interopDefault(_discount);
var _reactRedux = require("react-redux");
var _menuSlice = require("../../Stored/menuSlice");
function RestaurantMenu() {
    let { id } = (0, _reactRouter.useParams)();
    // console.log(id);
    const dispatch = (0, _reactRedux.useDispatch)();
    const menuEntry = (0, _reactRedux.useSelector)((state)=>state.menu.items[id]);
    const status = (0, _reactRedux.useSelector)((state)=>state.menu.status);
    const [Selected, setSelected] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        if (!menuEntry) dispatch((0, _menuSlice.fetchMenuById)(id));
    }, [
        id,
        dispatch,
        menuEntry
    ]);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const scrollRef = (0, _react.useRef)(null); // new ref for scrolling
    const scrollLeft = ()=>{
        scrollRef.current.scrollBy({
            left: -450,
            behavior: "smooth"
        });
    };
    const scrollRight = ()=>{
        scrollRef.current.scrollBy({
            left: 450,
            behavior: "smooth"
        });
    };
    // console.log(menuData);
    // In JavaScript, [] == [] returns false because you're comparing two different array references.
    // if(menuData==[])
    //     return <RestInfoShimmer></RestInfoShimmer>
    // if (RestData?.length === 0) {
    //     return <RestInfoShimmer />;
    //     }
    if (!menuEntry || status === "loading" || menuEntry.menuData?.length === 0) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restInfoShimmerDefault.default), {}, void 0, false, {
        fileName: "src/Components/RestaurantMenu.js",
        lineNumber: 46,
        columnNumber: 12
    }, this);
    const { headerData, offers, menuData } = menuEntry;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-[65%] mx-auto mt-4 mb-2 relative",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "text-3xl font-bold mb-2 text-gray-900",
                        children: headerData?.name
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "relative mt-10 mx-2 border border-gray-300 rounded-2xl px-6 pt-3 pb-8 bg-white p-4 [box-shadow:-16px_16px_16px_rgba(0,0,0,0.1),16px_16px_16px_rgba(0,0,0,0.1)]",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: "absolute right-4 bottom-4 rounded-xl h-30 w-30 object-cover",
                                src: "https://media-assets.swiggy.com/swiggy/image/upload/" + headerData?.cloudinaryImageId
                            }, void 0, false, {
                                fileName: "src/Components/RestaurantMenu.js",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex gap-1 items-center",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 100 100",
                                            className: "w-5 h-5 mt-[2px]",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                                                    cx: "50",
                                                    cy: "50",
                                                    r: "45",
                                                    className: "fill-green-500"
                                                }, void 0, false, {
                                                    fileName: "src/Components/RestaurantMenu.js",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("polygon", {
                                                    points: "50,20 58,40 80,40 62,55 70,75 50,62 30,75 38,55 20,40 42,40",
                                                    className: "fill-white"
                                                }, void 0, false, {
                                                    fileName: "src/Components/RestaurantMenu.js",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/Components/RestaurantMenu.js",
                                            lineNumber: 58,
                                            columnNumber: 27
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/Components/RestaurantMenu.js",
                                        lineNumber: 58,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "text-gray-900 font-bold",
                                        children: headerData?.avgRatingString + " (" + headerData?.totalRatingsString + ")"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestaurantMenu.js",
                                        lineNumber: 69,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "bg-gray-700 rounded-2xl h-1 w-1 mt-1 mx-2"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestaurantMenu.js",
                                        lineNumber: 70,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "text-gray-900 font-bold",
                                        children: headerData?.costForTwoMessage
                                    }, void 0, false, {
                                        fileName: "src/Components/RestaurantMenu.js",
                                        lineNumber: 71,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RestaurantMenu.js",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "text-orange-500 font-bold text-sm underline mt-2",
                                children: headerData?.cuisines.join(",  ")
                            }, void 0, false, {
                                fileName: "src/Components/RestaurantMenu.js",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex mt-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "bg-gray-700 rounded-2xl h-1 w-1  mx-2"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestaurantMenu.js",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "text-gray-900 text-sm font-bold",
                                        children: "Outlet"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestaurantMenu.js",
                                        lineNumber: 76,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "text-gray-500 text-sm ml-2 ",
                                        children: [
                                            headerData?.areaName,
                                            " ",
                                            headerData?.locality
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/RestaurantMenu.js",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RestaurantMenu.js",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "text-gray-900 text-sm font-extrabold mt-2 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "bg-gray-700 rounded-2xl h-1 w-1 mx-2"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestaurantMenu.js",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        children: headerData.sla.slaString
                                    }, void 0, false, {
                                        fileName: "src/Components/RestaurantMenu.js",
                                        lineNumber: 81,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RestaurantMenu.js",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex justify-between w-[96%] mt-10 text-gray-900 items-center",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "text-[20px] font-bold",
                                children: "Deals for you"
                            }, void 0, false, {
                                fileName: "src/Components/RestaurantMenu.js",
                                lineNumber: 85,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "font-bold text-4xl items-center flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        onClick: scrollLeft,
                                        className: " rounded-3xl pb-0.5 pr-0.5 bg-gray-200 hover:bg-gray-300",
                                        children: "\uFF1C"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestaurantMenu.js",
                                        lineNumber: 87,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        onClick: scrollRight,
                                        className: " rounded-3xl pb-0.5 pl-0.5 bg-gray-200 hover:bg-gray-300",
                                        children: "\uFF1E"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestaurantMenu.js",
                                        lineNumber: 93,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RestaurantMenu.js",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        ref: scrollRef,
                        className: "flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-1 mt-4",
                        children: offers.map((item, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _discountDefault.default), {
                                data: item
                            }, index, false, {
                                fileName: "src/Components/RestaurantMenu.js",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/RestaurantMenu.js",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex w-[6%] mt-14 mx-auto text-gray-700 font-bold",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                            d: "M15.7 4.3a1 1 0 0 1 0 1.4L9.42 12l6.3 6.3a1 1 0 1 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.4 0Z"
                        }, void 0, false, {
                            fileName: "src/Components/RestaurantMenu.js",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-center",
                        children: "Menu"
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                            d: "M8.3 4.3a1 1 0 0 0 0 1.4L14.58 12l-6.3 6.3a1 1 0 1 0 1.42 1.4l7-7a1 1 0 0 0 0-1.4l-7-7a1 1 0 0 0-1.4 0Z"
                        }, void 0, false, {
                            fileName: "src/Components/RestaurantMenu.js",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/RestaurantMenu.js",
                lineNumber: 110,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
                to: `/city/delhi/${id}/search`,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[65%] mx-auto mt-4 mb-2 ",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "w-full text-center text-[16px] text-gray-800 font-semibold py-2 bg-gray-200 text-2xl rounded-xl",
                        children: "Search For Dishes"
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "src/Components/RestaurantMenu.js",
                    lineNumber: 120,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "src/Components/RestaurantMenu.js",
                lineNumber: 119,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-[65%] mx-auto mt-6 mb-5",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: ` font-bold text-[14px] py-1 px-5 mr-4 border rounded-xl ${Selected === "veg" ? "bg-green-500 text-white border-green-600" : 'bg-gray-300'}`,
                        onClick: ()=>setSelected(Selected === 'veg' ? null : 'veg'),
                        children: "Veg"
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: `font-bold text-[14px] py-1 px-2 border rounded-xl ${Selected === 'non-veg' ? "bg-red-600 text-white border-red-600" : "bg-gray-300"}`,
                        onClick: ()=>setSelected(Selected === 'non-veg' ? null : 'non-veg'),
                        children: "Non-Veg"
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 126,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {
                        className: "mt-6 text-gray-300"
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/RestaurantMenu.js",
                lineNumber: 124,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-[65%] mx-auto",
                children: menuData?.map((menuitems)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _menuCardDefault.default), {
                        menuitems: menuitems?.card?.card,
                        foodselected: Selected
                    }, menuitems?.card?.card?.title, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 131,
                        columnNumber: 44
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/RestaurantMenu.js",
                lineNumber: 129,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                onClick: scrollToTop,
                className: "fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all",
                children: "\u2191 Top"
            }, void 0, false, {
                fileName: "src/Components/RestaurantMenu.js",
                lineNumber: 134,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/RestaurantMenu.js",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-router":"react-router","./MenuCard":"NqKNB","./RestInfoShimmer":"2MZML","./Discount":"aQJMq","react-redux":"react-redux","../../Stored/menuSlice":"dcSw6","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"NqKNB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MenuCard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _restInfo = require("./RestInfo");
var _restInfoDefault = parcelHelpers.interopDefault(_restInfo);
function MenuCard({ menuitems, foodselected }) {
    const [isOpen, setisOpen] = (0, _react.useState)(true);
    if ("categories" in menuitems) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                className: "text-2xl font-bold",
                children: menuitems?.title
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: menuitems?.categories?.map((items)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(MenuCard, {
                        menuitems: items,
                        foodselected: foodselected
                    }, items?.title, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 16,
                        columnNumber: 57
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 14,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuCard.js",
        lineNumber: 12,
        columnNumber: 13
    }, this);
    if (!isOpen) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between w-full",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-2xl font-bold mb-4 text-gray-800",
                        children: menuitems?.title
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "text-[30px] font-semibold mr-4 text-gray-800 text-center",
                        onClick: ()=>setisOpen(!isOpen),
                        children: isOpen ? "^" : "\u02C5"
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "h-full py-2.5 bg-gray-200 mb-3 rounded-xl"
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuCard.js",
        lineNumber: 25,
        columnNumber: 9
    }, this);
    if (foodselected === 'veg') return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between w-full",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-2xl font-bold mb-4 text-gray-600",
                        children: menuitems?.title
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "text-[30px] font-semibold  mr-4 text-gray-600 text-center",
                        onClick: ()=>setisOpen(!isOpen),
                        children: isOpen ? "^" : "\u02C5"
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 38,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: menuitems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restInfoDefault.default), {
                        restData: items?.card?.info
                    }, items?.card?.info?.id, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 44,
                        columnNumber: 101
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 42,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuCard.js",
        lineNumber: 37,
        columnNumber: 13
    }, this);
    if (foodselected === 'non-veg') return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between w-full",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-2xl font-bold mb-4 text-gray-600",
                        children: menuitems?.title
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "text-[30px] font-semibold  mr-4 text-gray-600 text-center",
                        onClick: ()=>setisOpen(!isOpen),
                        children: isOpen ? "^" : "\u02C5"
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 54,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: menuitems?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restInfoDefault.default), {
                        restData: items?.card?.info
                    }, items?.card?.info?.id, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 60,
                        columnNumber: 104
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 58,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuCard.js",
        lineNumber: 53,
        columnNumber: 13
    }, this);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between w-full",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-2xl font-bold mb-4 text-gray-600",
                        children: menuitems?.title
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "text-[30px] font-semibold  mr-4 text-gray-600 text-center",
                        onClick: ()=>setisOpen(!isOpen),
                        children: isOpen ? "^" : "\u02C5"
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 70,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: menuitems?.itemCards?.map((items)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restInfoDefault.default), {
                        restData: items?.card?.info
                    }, items?.card?.info?.id, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 76,
                        columnNumber: 56
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 74,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuCard.js",
        lineNumber: 69,
        columnNumber: 9
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","./RestInfo":"kKmgG","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"kKmgG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RestInfo);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _cartSlicer = require("../../Stored/CartSlicer");
function RestInfo({ restData }) {
    const dispatch = (0, _reactRedux.useDispatch)();
    const items = (0, _reactRedux.useSelector)((state)=>state.cartslice.items);
    const element = items.find((item)=>item.id === restData.id);
    const count = element ? element.quantity : 0;
    const handleAdd = ()=>dispatch((0, _cartSlicer.addItems)(restData));
    const handleInc = ()=>dispatch((0, _cartSlicer.IncrementItems)(restData));
    const handleDec = ()=>dispatch((0, _cartSlicer.DecrementItems)(restData));
    const VegIcon = ()=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("rect", {
                    x: "1",
                    y: "1",
                    width: "14",
                    height: "14",
                    rx: "3",
                    ry: "3",
                    stroke: "green",
                    fill: "none",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "src/Components/RestInfo.js",
                    lineNumber: 16,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                    cx: "8",
                    cy: "8",
                    r: "4",
                    fill: "green"
                }, void 0, false, {
                    fileName: "src/Components/RestInfo.js",
                    lineNumber: 17,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/Components/RestInfo.js",
            lineNumber: 15,
            columnNumber: 5
        }, this);
    const NonVegIcon = ()=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("rect", {
                    x: "1",
                    y: "1",
                    width: "14",
                    height: "14",
                    rx: "3",
                    ry: "3",
                    stroke: "red",
                    fill: "none",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "src/Components/RestInfo.js",
                    lineNumber: 23,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                    cx: "8",
                    cy: "8",
                    r: "4",
                    fill: "red"
                }, void 0, false, {
                    fileName: "src/Components/RestInfo.js",
                    lineNumber: 24,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/Components/RestInfo.js",
            lineNumber: 22,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex w-full justify-between mb-2 pb-2",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-[70%] pr-3",
                        children: [
                            restData.isVeg ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(VegIcon, {}, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 32,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(NonVegIcon, {}, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 32,
                                columnNumber: 43
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-gray-600 font-bold text-[18px] mb-1 mt-1",
                                children: restData.name
                            }, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-[16px] font-semibold mb-1",
                                children: [
                                    "\u20B9",
                                    ((restData?.defaultPrice ?? restData?.price) / 100).toFixed(0)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex items-center gap-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "green",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                            d: "M12 2L14.85 8.39L22 9.27L16.5 14.14L17.85 21.02L12 17.77L6.15 21.02L7.5 14.14L2 9.27L9.15 8.39L12 2Z"
                                        }, void 0, false, {
                                            fileName: "src/Components/RestInfo.js",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/Components/RestInfo.js",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "text-green-700",
                                        children: restData?.ratings?.aggregatedRating?.rating ?? "N/A"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestInfo.js",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "text-gray-600",
                                        children: [
                                            "(",
                                            restData?.ratings?.aggregatedRating?.ratingCountV2 ?? "N/A",
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/RestInfo.js",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-gray-600 max-w-[84%] mt-1",
                                children: restData?.description?.split(" ").length > 30 ? restData.description.split(" ").slice(0, 30).join(" ") + "..." : restData?.description
                            }, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RestInfo.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-[20%] relative flex justify-center",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: "w-39 h-36 object-cover rounded-2xl",
                                src: `https://media-assets.swiggy.com/swiggy/image/upload/${restData?.imageId}`,
                                alt: restData?.name
                            }, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            count === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                onClick: handleAdd,
                                className: "py-2 px-8 hover:bg-gray-200 transition-all duration-200 absolute top-28 rounded-xl font-bold text-xl text-green-600 shadow-md border border-gray-300 bg-white",
                                children: "ADD"
                            }, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "absolute top-28 flex justify-center font-bold items-center text-2xl text-green-600 shadow-md border border-gray-300 px-5 py-2 bg-white rounded-xl w-28",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        onClick: handleDec,
                                        className: "hover:bg-gray-300 absolute top-0 left-0 w-9 h-12 rounded-l-lg",
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestInfo.js",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "px-2",
                                        children: count
                                    }, void 0, false, {
                                        fileName: "src/Components/RestInfo.js",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        onClick: handleInc,
                                        className: "hover:bg-gray-300 absolute top-0 right-0 w-10 h-12 rounded-r-lg",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestInfo.js",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RestInfo.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/RestInfo.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {
                className: "mb-6 mt-4 text-gray-300"
            }, void 0, false, {
                fileName: "src/Components/RestInfo.js",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-redux":"react-redux","../../Stored/CartSlicer":"esNpf","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"2MZML":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
const RestInfoShimmer = ()=>{
    const placeholderArray = new Array(6).fill(0); // Renders 6 shimmer items
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-[65%] mx-auto mt-20",
        children: placeholderArray.map((_, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex w-full justify-between mb-6 p-2 animate-pulse",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-[70%] space-y-2",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "h-5 bg-gray-300 rounded w-3/4"
                            }, void 0, false, {
                                fileName: "src/Components/RestInfoShimmer.js",
                                lineNumber: 9,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "h-4 bg-gray-300 rounded w-1/2"
                            }, void 0, false, {
                                fileName: "src/Components/RestInfoShimmer.js",
                                lineNumber: 10,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "h-4 w-4 rounded-full bg-gray-300"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestInfoShimmer.js",
                                        lineNumber: 12,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "h-4 bg-gray-300 rounded w-16"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestInfoShimmer.js",
                                        lineNumber: 13,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "h-4 bg-gray-200 rounded w-10"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestInfoShimmer.js",
                                        lineNumber: 14,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RestInfoShimmer.js",
                                lineNumber: 11,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "h-4 bg-gray-200 rounded w-full"
                            }, void 0, false, {
                                fileName: "src/Components/RestInfoShimmer.js",
                                lineNumber: 16,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "h-4 bg-gray-200 rounded w-5/6"
                            }, void 0, false, {
                                fileName: "src/Components/RestInfoShimmer.js",
                                lineNumber: 17,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RestInfoShimmer.js",
                        lineNumber: 8,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-[20%] relative flex justify-center",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "w-[156px] h-36 bg-gray-300 rounded-2xl"
                            }, void 0, false, {
                                fileName: "src/Components/RestInfoShimmer.js",
                                lineNumber: 20,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "absolute top-28 w-[100px] h-[38px] bg-gray-200 rounded-xl"
                            }, void 0, false, {
                                fileName: "src/Components/RestInfoShimmer.js",
                                lineNumber: 21,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RestInfoShimmer.js",
                        lineNumber: 19,
                        columnNumber: 11
                    }, undefined)
                ]
            }, index, true, {
                fileName: "src/Components/RestInfoShimmer.js",
                lineNumber: 7,
                columnNumber: 9
            }, undefined))
    }, void 0, false, {
        fileName: "src/Components/RestInfoShimmer.js",
        lineNumber: 5,
        columnNumber: 5
    }, undefined);
};
exports.default = RestInfoShimmer;

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"aQJMq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Discount);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function Discount({ data }) {
    // console.log(data);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "flex-shrink-0 flex border w-[328px] gap-2 p-[12px] rounded-2xl border-gray-400",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    className: "w-12 h-12",
                    src: "https://media-assets.swiggy.com/swiggy/image/upload/" + data?.info?.offerLogo
                }, void 0, false, {
                    fileName: "src/Components/Discount.js",
                    lineNumber: 7,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "src/Components/Discount.js",
                lineNumber: 6,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "font-extrabold text-[18px] text-gray-900",
                        children: data?.info?.header
                    }, void 0, false, {
                        fileName: "src/Components/Discount.js",
                        lineNumber: 10,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-[14px] text-gray-500 font-bold",
                        children: data?.info?.couponCode ?? data?.info?.offerTag
                    }, void 0, false, {
                        fileName: "src/Components/Discount.js",
                        lineNumber: 11,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/Discount.js",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/Discount.js",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"bGghP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SearchFood);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRouter = require("react-router");
var _restInfo = require("./RestInfo");
var _restInfoDefault = parcelHelpers.interopDefault(_restInfo);
var _restHeader = require("./RestHeader");
var _restHeaderDefault = parcelHelpers.interopDefault(_restHeader);
function SearchFood() {
    const { id } = (0, _reactRouter.useParams)();
    const [food, setfood] = (0, _react.useState)("");
    const [RestData, setRestData] = (0, _react.useState)([]);
    const [restaurantName, setRestaurantName] = (0, _react.useState)("");
    (0, _react.useEffect)(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            setRestaurantName(data?.data?.cards?.[0]?.card?.card?.text ?? "this restaurant");
            const groupedCard = data?.data?.cards.find((card)=>card?.groupedCard?.cardGroupMap?.REGULAR);
            const cardArray = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((items)=>"itemCards" in items?.card?.card || "categories" in items?.card?.card);
            // const cardArray = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((items)=>"itemCards" in items?.card?.card|| "categories" in items?.card?.card );
            const FilterData = cardArray?.flatMap((items)=>{
                const content = items?.card?.card;
                if (content?.itemCards) return content.itemCards;
                if (content?.categories) return content?.categories?.flatMap((cat)=>cat.itemCards);
                return [];
            });
            const FinalData = FilterData?.filter((item)=>item?.card?.info?.name) // ensures it's a real dish
            .map((item)=>item.card.info);
            const uniqueItems = Array.from(new Map(FinalData.map((item)=>[
                    item.id,
                    item
                ])).values());
            setRestData(uniqueItems);
        }
        fetchData();
    }, [
        id
    ]);
    const filteredItems = RestData.filter((item)=>item.name?.toLowerCase().includes(food.toLowerCase()));
    if (food.length <= 1) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restHeaderDefault.default), {}, void 0, false, {
                fileName: "src/Components/SearchFood.js",
                lineNumber: 65,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-[50%] mx-auto mt-20",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                        type: "text",
                        className: "w-full pl-10 py-2 text-[20px] bg-gray-100 shadow-md rounded-2xl border border-gray-200",
                        placeholder: `Search in ${restaurantName}`,
                        value: food,
                        onChange: (e)=>setfood(e.target.value)
                    }, void 0, false, {
                        fileName: "src/Components/SearchFood.js",
                        lineNumber: 67,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-center text-gray-500 mt-10 text-xl font-semibold",
                        children: "No matching dishes found \uD83C\uDF7D\uFE0F"
                    }, void 0, false, {
                        fileName: "src/Components/SearchFood.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/SearchFood.js",
                lineNumber: 66,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restHeaderDefault.default), {}, void 0, false, {
                fileName: "src/Components/SearchFood.js",
                lineNumber: 79,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-[50%] mx-auto mt-20",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                        type: "text",
                        className: "w-full pl-10 py-4 mb-8 text-[20px] shadow-md text-2xl bg-gray-200 rounded-2xl border",
                        placeholder: "Search here",
                        value: food,
                        onChange: (e)=>setfood(e.target.value)
                    }, void 0, false, {
                        fileName: "src/Components/SearchFood.js",
                        lineNumber: 81,
                        columnNumber: 7
                    }, this),
                    filteredItems.length > 0 ? filteredItems.map((item)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restInfoDefault.default), {
                            restData: item
                        }, item.id, false, {
                            fileName: "src/Components/SearchFood.js",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-center text-gray-500 mt-10 text-xl font-semibold",
                        children: "No matching dishes found \uD83C\uDF7D\uFE0F"
                    }, void 0, false, {
                        fileName: "src/Components/SearchFood.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/SearchFood.js",
                lineNumber: 80,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-router":"react-router","./RestInfo":"kKmgG","./RestHeader":"bSWRk","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"bSWRk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RestHeader);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _reactRouter = require("react-router");
function RestHeader() {
    const counter = (0, _reactRedux.useSelector)((state)=>state.cartslice.count);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full py-3 px-4 bg-gray-100 flex flex-col sm:flex-row justify-between items-center sm:px-6 md:px-8 lg:px-10",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex items-center w-full sm:w-auto justify-between sm:justify-start mb-3 sm:mb-0",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
                        to: "/",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            className: "w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-xl",
                            src: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
                            alt: "Swiggy Logo"
                        }, void 0, false, {
                            fileName: "src/Components/RestHeader.js",
                            lineNumber: 12,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/RestHeader.js",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "ml-4 sm:ml-10 text-xs sm:text-sm font-semibold text-gray-500 whitespace-nowrap",
                        children: "Delhi, India"
                    }, void 0, false, {
                        fileName: "src/Components/RestHeader.js",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/RestHeader.js",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-full sm:w-auto overflow-x-auto whitespace-nowrap hidden-scroll",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 font-semibold text-sm sm:text-base md:text-[18px] text-gray-900",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                            href: "https://www.swiggy.com/corporate/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hover:text-orange-600 flex items-center gap-1 sm:gap-2",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("rect", {
                                            x: "2.46094",
                                            y: "7.98145",
                                            width: "15.0784",
                                            height: "10.7765",
                                            rx: "1.52523",
                                            stroke: "#02060C",
                                            strokeOpacity: "0.75",
                                            fill: "none",
                                            strokeWidth: "1.8",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "src/Components/RestHeader.js",
                                            lineNumber: 28,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                            d: "M6.17822 4.91866C6.17822 3.90782 6.99767 3.08838 8.0085 3.08838H11.9916C13.0024 3.08838 13.8219 3.90782 13.8219 4.91866V5.22965C13.8219 5.61625 13.5085 5.92965 13.1219 5.92965H6.87822C6.49162 5.92965 6.17822 5.61625 6.17822 5.22965V4.91866Z",
                                            fill: "#02060C",
                                            fillOpacity: "0.75"
                                        }, void 0, false, {
                                            fileName: "src/Components/RestHeader.js",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "hidden sm:inline",
                                    children: "Swiggy Corporate"
                                }, void 0, false, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "sm:hidden",
                                    children: "Corporate"
                                }, void 0, false, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/RestHeader.js",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                            href: "https://www.swiggy.com/search",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hover:text-orange-600 flex items-center gap-1 sm:gap-2",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                        d: "M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 5.6 5.6a7.5 7.5 0 0 0 11.05 11.05Z",
                                        stroke: "#000",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestHeader.js",
                                        lineNumber: 52,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: "Search"
                                }, void 0, false, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/RestHeader.js",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                            href: "https://www.swiggy.com/offers-near-me",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hover:text-orange-600 flex items-center gap-1 sm:gap-2",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                            d: "M20.59 13.41l-7.99 8a2 2 0 0 1-2.83 0l-7.17-7.17a2 2 0 0 1 0-2.83l8-8a2 2 0 0 1 2.83 0l7.16 7.17a2 2 0 0 1 0 2.83z",
                                            stroke: "#000",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "src/Components/RestHeader.js",
                                            lineNumber: 60,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                                            cx: "8.5",
                                            cy: "8.5",
                                            r: "1.5",
                                            fill: "#000"
                                        }, void 0, false, {
                                            fileName: "src/Components/RestHeader.js",
                                            lineNumber: 62,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: "Offers"
                                }, void 0, false, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/RestHeader.js",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                            href: "https://www.swiggy.com/support",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hover:text-orange-600 flex items-center gap-1 sm:gap-2",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "#000",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "src/Components/RestHeader.js",
                                            lineNumber: 69,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                            d: "M9.09 9a3 3 0 1 1 4.91 2.36c-.49.37-.82.63-.97.79a1.99 1.99 0 0 0-.63 1.39v.12M12 17h.01",
                                            stroke: "#000",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "src/Components/RestHeader.js",
                                            lineNumber: 70,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: "Help"
                                }, void 0, false, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/RestHeader.js",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                            href: "https://www.swiggy.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hover:text-orange-600 flex items-center gap-1 sm:gap-2",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                        d: "M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestHeader.js",
                                        lineNumber: 78,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/RestHeader.js",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
                            to: "/checkout",
                            className: "hover:text-orange-600 flex items-center gap-1 sm:gap-2",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: "\uD83D\uDED2"
                                }, void 0, false, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: [
                                        "Cart (",
                                        counter,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/RestHeader.js",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/RestHeader.js",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/RestHeader.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "src/Components/RestHeader.js",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/RestHeader.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-redux":"react-redux","react-router":"react-router","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"gDs8I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SecondaryHome);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _restHeader = require("./RestHeader");
var _restHeaderDefault = parcelHelpers.interopDefault(_restHeader);
var _reactRouter = require("react-router");
function SecondaryHome() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restHeaderDefault.default), {}, void 0, false, {
                fileName: "src/Components/SecondaryHome.js",
                lineNumber: 7,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Outlet), {}, void 0, false, {
                fileName: "src/Components/SecondaryHome.js",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","./RestHeader":"bSWRk","react-router":"react-router","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"aFCmY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Footer);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouter = require("react-router");
function Footer() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Outlet), {}, void 0, false, {
                fileName: "src/Components/Footer.js",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "bg-gray-100 py-8 md:py-10 mt-10 px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pb-10",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "sm:col-span-2 md:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                        className: "w-32 md:w-40 h-auto",
                                        src: "https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg",
                                        alt: "Swiggy Logo"
                                    }, void 0, false, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 12,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "mt-2 text-sm md:text-base",
                                        children: "\xa9 2025 Swiggy Limited"
                                    }, void 0, false, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 17,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/Footer.js",
                                lineNumber: 11,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "text-base md:text-lg font-bold text-gray-900",
                                        children: "Company"
                                    }, void 0, false, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "grid grid-cols-1 gap-2 text-sm md:text-base",
                                        children: [
                                            [
                                                "About Us",
                                                "https://careers.swiggy.com/#/"
                                            ],
                                            [
                                                "Swiggy Corporate",
                                                "https://www.swiggy.com/corporate/"
                                            ],
                                            [
                                                "Careers",
                                                "https://careers.swiggy.com/#/"
                                            ],
                                            [
                                                "Team",
                                                "https://careers.swiggy.com/#/"
                                            ],
                                            [
                                                "Swiggy One",
                                                "https://www.swiggy.com/swiggy-super"
                                            ],
                                            [
                                                "Swiggy Instamart",
                                                "https://www.swiggy.com/instamart"
                                            ],
                                            [
                                                "Swiggy Dineout",
                                                "https://www.swiggy.com/dineout"
                                            ],
                                            [
                                                "Minis",
                                                "https://mini.store/"
                                            ],
                                            [
                                                "Pyng",
                                                "https://pyng.co.in/"
                                            ]
                                        ].map(([text, href])=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "hover:text-orange-600",
                                                children: text
                                            }, text, false, {
                                                fileName: "src/Components/Footer.js",
                                                lineNumber: 35,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/Footer.js",
                                lineNumber: 21,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex flex-col gap-8",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                className: "text-base md:text-lg font-bold text-gray-900",
                                                children: "Contact us"
                                            }, void 0, false, {
                                                fileName: "src/Components/Footer.js",
                                                lineNumber: 45,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "grid grid-cols-1 gap-2 text-sm md:text-base",
                                                children: [
                                                    [
                                                        "Help & Support",
                                                        "https://www.swiggy.com/support"
                                                    ],
                                                    [
                                                        "Partner with us",
                                                        "https://partner.swiggy.com/login#/swiggy"
                                                    ],
                                                    [
                                                        "Ride with us",
                                                        "http://ride.swiggy.com/"
                                                    ]
                                                ].map(([text, href])=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                        href: href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "hover:text-orange-600",
                                                        children: text
                                                    }, text, false, {
                                                        fileName: "src/Components/Footer.js",
                                                        lineNumber: 52,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "src/Components/Footer.js",
                                                lineNumber: 46,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 44,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                className: "text-base md:text-lg font-bold text-gray-900",
                                                children: "Legal"
                                            }, void 0, false, {
                                                fileName: "src/Components/Footer.js",
                                                lineNumber: 60,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "grid grid-cols-1 gap-2 text-sm md:text-base",
                                                children: [
                                                    [
                                                        "Terms & Conditions",
                                                        "https://www.swiggy.com/terms-and-conditions"
                                                    ],
                                                    [
                                                        "Cookie Policy",
                                                        "https://www.swiggy.com/cookie-policy"
                                                    ],
                                                    [
                                                        "Privacy Policy",
                                                        "https://www.swiggy.com/privacy-policy"
                                                    ]
                                                ].map(([text, href])=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                        href: href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "hover:text-orange-600",
                                                        children: text
                                                    }, text, false, {
                                                        fileName: "src/Components/Footer.js",
                                                        lineNumber: 67,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "src/Components/Footer.js",
                                                lineNumber: 61,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/Footer.js",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "text-base md:text-lg font-bold text-gray-900",
                                        children: "Available in:"
                                    }, void 0, false, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "grid grid-cols-2 gap-2 text-sm md:text-base",
                                        children: [
                                            [
                                                "Bangalore",
                                                "https://www.swiggy.com/city/bangalore"
                                            ],
                                            [
                                                "Gurgaon",
                                                "https://www.swiggy.com/city/gurgaon"
                                            ],
                                            [
                                                "Hyderabad",
                                                "https://www.swiggy.com/city/hyderabad"
                                            ],
                                            [
                                                "Delhi",
                                                "https://www.swiggy.com/city/delhi"
                                            ],
                                            [
                                                "Mumbai",
                                                "https://www.swiggy.com/city/mumbai"
                                            ],
                                            [
                                                "Pune",
                                                "https://www.swiggy.com/city/pune"
                                            ]
                                        ].map(([text, href])=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                href: href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "hover:text-orange-600",
                                                children: text
                                            }, text, false, {
                                                fileName: "src/Components/Footer.js",
                                                lineNumber: 87,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/Footer.js",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex flex-col gap-8",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                className: "text-base md:text-lg font-bold text-gray-900",
                                                children: "Life at Swiggy"
                                            }, void 0, false, {
                                                fileName: "src/Components/Footer.js",
                                                lineNumber: 97,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "grid grid-cols-1 gap-2 text-sm md:text-base",
                                                children: [
                                                    [
                                                        "Explore with Swiggy",
                                                        "https://blog.swiggy.com/"
                                                    ],
                                                    [
                                                        "Swiggy News",
                                                        "https://blog.swiggy.com/category/swiggy-restaurant-awards/"
                                                    ],
                                                    [
                                                        "Snackables",
                                                        "https://blog.swiggy.com/category/snackables/campaigns/"
                                                    ]
                                                ].map(([text, href])=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                        href: href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "hover:text-orange-600",
                                                        children: text
                                                    }, text, false, {
                                                        fileName: "src/Components/Footer.js",
                                                        lineNumber: 104,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "src/Components/Footer.js",
                                                lineNumber: 98,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 96,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                className: "text-base md:text-lg font-bold",
                                                children: "Social Links"
                                            }, void 0, false, {
                                                fileName: "src/Components/Footer.js",
                                                lineNumber: 112,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    [
                                                        "LinkedIn",
                                                        "https://www.linkedin.com/company/swiggy-in/",
                                                        "https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg"
                                                    ],
                                                    [
                                                        "Instagram",
                                                        "https://www.instagram.com/swiggyindia/?hl=en",
                                                        "https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg"
                                                    ],
                                                    [
                                                        "Facebook",
                                                        "https://www.facebook.com/swiggy.in/",
                                                        "https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg"
                                                    ],
                                                    [
                                                        "Pinterest",
                                                        "https://in.pinterest.com/swiggyindia/",
                                                        "https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg"
                                                    ],
                                                    [
                                                        "Twitter",
                                                        "https://x.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
                                                        "https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg"
                                                    ]
                                                ].map(([alt, href, src])=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                        href: href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                            className: "w-5 h-5 hover:opacity-80",
                                                            src: src,
                                                            alt: alt
                                                        }, void 0, false, {
                                                            fileName: "src/Components/Footer.js",
                                                            lineNumber: 122,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, alt, false, {
                                                        fileName: "src/Components/Footer.js",
                                                        lineNumber: 121,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "src/Components/Footer.js",
                                                lineNumber: 113,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 111,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/Footer.js",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/Footer.js",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {
                        className: "border-t border-gray-300 w-full max-w-6xl mx-auto my-4"
                    }, void 0, false, {
                        fileName: "src/Components/Footer.js",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 mt-6",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-lg md:text-xl lg:text-2xl font-bold text-gray-700 text-center lg:text-left",
                                children: "For better experience, download the Swiggy app now"
                            }, void 0, false, {
                                fileName: "src/Components/Footer.js",
                                lineNumber: 134,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex flex-col sm:flex-row gap-3 md:gap-5",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                        href: "https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                            className: "w-40 md:w-48 h-auto hover:scale-95 transition-transform",
                                            src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv",
                                            alt: "Download on App Store"
                                        }, void 0, false, {
                                            fileName: "src/Components/Footer.js",
                                            lineNumber: 141,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 138,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                        href: "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                            className: "w-40 md:w-48 h-auto hover:scale-95 transition-transform",
                                            src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl",
                                            alt: "Get it on Google Play"
                                        }, void 0, false, {
                                            fileName: "src/Components/Footer.js",
                                            lineNumber: 150,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/Components/Footer.js",
                                        lineNumber: 147,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/Footer.js",
                                lineNumber: 137,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/Footer.js",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/Footer.js",
                lineNumber: 7,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-router":"react-router","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"M1P7O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>CheckOut);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _cartPage = require("./CartPage");
var _cartPageDefault = parcelHelpers.interopDefault(_cartPage);
function CheckOut() {
    const Items = (0, _reactRedux.useSelector)((state)=>state.cartslice.items);
    if (!Items || Items.length === 0) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cartPageDefault.default), {
        data: {}
    }, void 0, false, {
        fileName: "src/Components/CheckOut.js",
        lineNumber: 8,
        columnNumber: 10
    }, this);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _cartPageDefault.default), {
        data: Items
    }, void 0, false, {
        fileName: "src/Components/CheckOut.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-redux":"react-redux","./CartPage":"67E2t","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}],"67E2t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>CartPage);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouter = require("react-router");
var _cartSlicer = require("../../Stored/CartSlicer");
var _reactRedux = require("react-redux");
function CartPage({ data }) {
    const dispatch = (0, _reactRedux.useDispatch)();
    if (!data || typeof data !== "object" || Object.keys(data).length === 0) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "flex h-[100vh] flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                className: "h-90 mb-5",
                src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0",
                alt: "Empty Cart"
            }, void 0, false, {
                fileName: "src/Components/CartPage.js",
                lineNumber: 11,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                className: "text-[22px] font-bold text-gray-900",
                children: "Your cart is empty"
            }, void 0, false, {
                fileName: "src/Components/CartPage.js",
                lineNumber: 16,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                className: "text-gray-700 font-semibold",
                children: "You can go to home page to view more restaurants"
            }, void 0, false, {
                fileName: "src/Components/CartPage.js",
                lineNumber: 17,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
                to: "/",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                    className: "mt-8 bg-amber-600 px-6 text-white font-bold py-2 transition-transform duration-200 hover:scale-105",
                    children: "See restaurants near you"
                }, void 0, false, {
                    fileName: "src/Components/CartPage.js",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "src/Components/CartPage.js",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/CartPage.js",
        lineNumber: 10,
        columnNumber: 7
    }, this);
    const total = data.reduce((acc, item)=>{
        const price = (item.defaultPrice ?? item.price) / 100;
        return acc + price * item.quantity;
    }, 0);
    const totalItems = data.reduce((acc, item)=>acc + item.quantity, 0);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "bg-white w-full py-3 px-10 items-center flex justify-between",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
                                to: "/",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                    className: "w-15 h-15 object-cover rounded-xl hover:scale-105 transition-all duration-200",
                                    src: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                                }, void 0, false, {
                                    fileName: "src/Components/CartPage.js",
                                    lineNumber: 38,
                                    columnNumber: 24
                                }, this)
                            }, void 0, false, {
                                fileName: "src/Components/CartPage.js",
                                lineNumber: 38,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "ml-10 text-center mt-3 text-[20px] font-semibold text-gray-800",
                                children: "Checkout"
                            }, void 0, false, {
                                fileName: "src/Components/CartPage.js",
                                lineNumber: 39,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/CartPage.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex gap-10 mr-10",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                href: "https://www.swiggy.com/offers-near-me",
                                target: "_blank",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "hover:text-orange-600 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                    d: "M20.59 13.41l-7.99 8a2 2 0 0 1-2.83 0l-7.17-7.17a2 2 0 0 1 0-2.83l8-8a2 2 0 0 1 2.83 0l7.16 7.17a2 2 0 0 1 0 2.83z",
                                                    stroke: "#000",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "src/Components/CartPage.js",
                                                    lineNumber: 43,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                                                    cx: "8.5",
                                                    cy: "8.5",
                                                    r: "1.5",
                                                    fill: "#000"
                                                }, void 0, false, {
                                                    fileName: "src/Components/CartPage.js",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/Components/CartPage.js",
                                            lineNumber: 42,
                                            columnNumber: 78
                                        }, this),
                                        "Offers"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/CartPage.js",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "src/Components/CartPage.js",
                                lineNumber: 41,
                                columnNumber: 44
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                href: "https://www.swiggy.com/support",
                                target: "_blank",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "hover:text-orange-600 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "#000",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "src/Components/CartPage.js",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                    d: "M9.09 9a3 3 0 1 1 4.91 2.36c-.49.37-.82.63-.97.79a1.99 1.99 0 0 0-.63 1.39v.12M12 17h.01",
                                                    stroke: "#000",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "src/Components/CartPage.js",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/Components/CartPage.js",
                                            lineNumber: 49,
                                            columnNumber: 78
                                        }, this),
                                        "Help"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/CartPage.js",
                                    lineNumber: 49,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "src/Components/CartPage.js",
                                lineNumber: 48,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/CartPage.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/CartPage.js",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex flex-col lg:flex-row w-full min-h-[87vh] bg-gray-100 gap-6 px-6 py-6",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "lg:w-[60%] w-full max-h-[80vh] overflow-y-auto bg-white px-6 py-4 rounded-lg shadow-lg space-y-6",
                        children: data.map((item)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex justify-between items-center border-b pb-2 relative",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "w-2/3",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                className: "font-bold text-lg md:text-xl",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "src/Components/CartPage.js",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                className: "text-sm text-gray-700 font-semibold",
                                                children: [
                                                    "Price for One \u20B9",
                                                    ((item.defaultPrice ?? item.price) / 100).toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/Components/CartPage.js",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                className: "text-sm text-gray-500 mb-1 font-semibold",
                                                children: [
                                                    "Qty: ",
                                                    item.quantity
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/Components/CartPage.js",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "flex items-center gap-4 mt-2 border border-gray-400 font-bold w-28 text-xl justify-center rounded-lg shadow-md py-1",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                        onClick: ()=>dispatch((0, _cartSlicer.DecrementItems)(item)),
                                                        // disabled={item.quantity === 1}
                                                        className: `text-red-600 hover:scale-130 transition-all duration-200 `,
                                                        children: "-"
                                                    }, void 0, false, {
                                                        fileName: "src/Components/CartPage.js",
                                                        lineNumber: 72,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                        children: item.quantity
                                                    }, void 0, false, {
                                                        fileName: "src/Components/CartPage.js",
                                                        lineNumber: 79,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                        onClick: ()=>dispatch((0, _cartSlicer.IncrementItems)(item)),
                                                        className: "text-green-500 hover:scale-130 transition-all duration-200",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "src/Components/CartPage.js",
                                                        lineNumber: 80,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/Components/CartPage.js",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                className: "text-lg text-gray-800 font-semibold mt-2",
                                                children: [
                                                    "Item Total \u20B9",
                                                    (item.quantity * ((item.defaultPrice ?? item.price) / 100)).toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/Components/CartPage.js",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/CartPage.js",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                        src: `https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`,
                                        alt: item.name,
                                        className: "w-28 h-28 object-cover rounded-lg flex justify-between items-stretch gap-4"
                                    }, void 0, false, {
                                        fileName: "src/Components/CartPage.js",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "src/Components/CartPage.js",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "src/Components/CartPage.js",
                        lineNumber: 58,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "lg:w-[35%] w-full sticky top-10 bg-white rounded-lg shadow-md p-6 text-gray-800 h-fit",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                className: "text-2xl font-bold mb-4 border-b pb-2",
                                children: "Bill Details"
                            }, void 0, false, {
                                fileName: "src/Components/CartPage.js",
                                lineNumber: 103,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex justify-between py-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: [
                                            "Items (",
                                            totalItems,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/CartPage.js",
                                        lineNumber: 106,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "font-semibold",
                                        children: [
                                            "\u20B9",
                                            total.toFixed(0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/CartPage.js",
                                        lineNumber: 107,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/CartPage.js",
                                lineNumber: 105,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex justify-between py-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "Delivery Fee"
                                    }, void 0, false, {
                                        fileName: "src/Components/CartPage.js",
                                        lineNumber: 111,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "font-semibold",
                                        children: [
                                            "\u20B9",
                                            (total / 15 + 20).toFixed(0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/CartPage.js",
                                        lineNumber: 112,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/CartPage.js",
                                lineNumber: 110,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex justify-between py-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "GST & Other Charges"
                                    }, void 0, false, {
                                        fileName: "src/Components/CartPage.js",
                                        lineNumber: 116,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "font-semibold",
                                        children: [
                                            "\u20B9",
                                            (total / 24).toFixed(0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/CartPage.js",
                                        lineNumber: 117,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/CartPage.js",
                                lineNumber: 115,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {
                                className: "my-4 border-gray-300"
                            }, void 0, false, {
                                fileName: "src/Components/CartPage.js",
                                lineNumber: 120,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex justify-between items-center text-lg font-bold",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "text-green-700",
                                        children: "To Pay"
                                    }, void 0, false, {
                                        fileName: "src/Components/CartPage.js",
                                        lineNumber: 123,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "text-green-700",
                                        children: [
                                            "\u20B9",
                                            (total + total / 10 + 20 + total / 15).toFixed(0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/CartPage.js",
                                        lineNumber: 124,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/CartPage.js",
                                lineNumber: 122,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/CartPage.js",
                        lineNumber: 102,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/CartPage.js",
                lineNumber: 56,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/CartPage.js",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-router":"react-router","../../Stored/CartSlicer":"esNpf","react-redux":"react-redux","@parcel/transformer-js/src/esmodule-helpers.js":"fY7n4"}]},["fxyo1","hloRW"], "hloRW", "parcelRequired458", {"react/jsx-dev-runtime": __parcelExternal0,"react": __parcelExternal1,"react-dom/client": __parcelExternal2,"react-redux": __parcelExternal3,"@reduxjs/toolkit": __parcelExternal4,"react-router": __parcelExternal5,})
let {} = parcelRequired458("hloRW");
export {};

//# sourceMappingURL=Day20.0aa4b441.js.map
