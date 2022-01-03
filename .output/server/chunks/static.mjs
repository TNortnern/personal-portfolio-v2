import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/200.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"222f5-FlqNucRZbj907CLfc9s033OTKfk\"",
    "mtime": "2022-01-03T00:50:08.991Z",
    "path": "../public/200.html"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"21bc-XwkmumvsWAWQvKTShmzlcL3xoys\"",
    "mtime": "2022-01-02T23:58:55.251Z",
    "path": "../public/favicon.ico"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"222f5-FlqNucRZbj907CLfc9s033OTKfk\"",
    "mtime": "2022-01-03T00:50:07.862Z",
    "path": "../public/index.html"
  },
  "/_nuxt/0027a28.js": {
    "type": "application/javascript",
    "etag": "\"c18-gsSmrXvXCJEAl+idWWBW2mck9Tw\"",
    "mtime": "2022-01-03T00:49:56.913Z",
    "path": "../public/_nuxt/0027a28.js"
  },
  "/_nuxt/1737633.js": {
    "type": "application/javascript",
    "etag": "\"1da97-7m4Q2TvrhIoDlZa3u/1SCgxtx6g\"",
    "mtime": "2022-01-03T00:49:56.913Z",
    "path": "../public/_nuxt/1737633.js"
  },
  "/_nuxt/33d6bc1.js": {
    "type": "application/javascript",
    "etag": "\"47d4-1t1TvPI58BLxlc4d/ME7ZA/zW2I\"",
    "mtime": "2022-01-03T00:49:56.913Z",
    "path": "../public/_nuxt/33d6bc1.js"
  },
  "/_nuxt/3e15bbb.js": {
    "type": "application/javascript",
    "etag": "\"974-sdc+/cFwWfgq1lDPJvpaYGXvYAI\"",
    "mtime": "2022-01-03T00:49:56.913Z",
    "path": "../public/_nuxt/3e15bbb.js"
  },
  "/_nuxt/437ba9a.js": {
    "type": "application/javascript",
    "etag": "\"1d85-AmmfcMxhoJy2+B0gWgMGA6lvpR0\"",
    "mtime": "2022-01-03T00:49:56.913Z",
    "path": "../public/_nuxt/437ba9a.js"
  },
  "/_nuxt/6cf423e.js": {
    "type": "application/javascript",
    "etag": "\"2c9-D70tyC2lH8SfytQYYf96g81jKIY\"",
    "mtime": "2022-01-03T00:49:56.913Z",
    "path": "../public/_nuxt/6cf423e.js"
  },
  "/_nuxt/85d7e9a.js": {
    "type": "application/javascript",
    "etag": "\"653-W4WLsf1HAHo93R2PyAUKGO3tD0c\"",
    "mtime": "2022-01-03T00:49:56.913Z",
    "path": "../public/_nuxt/85d7e9a.js"
  },
  "/_nuxt/8f8ffb8.js": {
    "type": "application/javascript",
    "etag": "\"3506f-dh+BRjtPcDTEsQ8ZdtvjLkD1NI4\"",
    "mtime": "2022-01-03T00:49:56.913Z",
    "path": "../public/_nuxt/8f8ffb8.js"
  },
  "/_nuxt/91b4efa.js": {
    "type": "application/javascript",
    "etag": "\"207c-sRXM15K+rhNMcZZef66Fc9pOxUM\"",
    "mtime": "2022-01-03T00:49:56.913Z",
    "path": "../public/_nuxt/91b4efa.js"
  },
  "/_nuxt/972cc7c.js": {
    "type": "application/javascript",
    "etag": "\"427-LCtDtU1lfcTC1GdPh/b4l/uPC7I\"",
    "mtime": "2022-01-03T00:49:56.913Z",
    "path": "../public/_nuxt/972cc7c.js"
  },
  "/_nuxt/ae94fd1.js": {
    "type": "application/javascript",
    "etag": "\"670-vtEZozlP4zwnxRZX9UOj7Vjp2vg\"",
    "mtime": "2022-01-03T00:49:56.913Z",
    "path": "../public/_nuxt/ae94fd1.js"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/static" + "/" + "1641171000";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
