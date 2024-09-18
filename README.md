# Vitest source-map bug repro

Repro steps:

```
pnpm install
cd pkg-b
pnpm vitest
```

Observe the error having an incorrect stack trace:

```
Error: Test error
 ❯ Module.foo ../node_modules/.pnpm/base32-decode@1.0.0/node_modules/base32-decode/index.js:5:9
 ❯ index.test.js:5:3
```

Running similar code in node JS produces the correct stack trace:

```
$ node --enable-source-maps script.js
/Users/dmaretskyi/vitest-sourcemap-bug/pkg-a/index.js:5
  throw new Error("Test error");
        ^

Error: Test error
    at foo (/Users/dmaretskyi/vitest-sourcemap-bug/pkg-a/index.js:5:9)
    at file:///Users/dmaretskyi/vitest-sourcemap-bug/pkg-b/script.js:3:1
    at ModuleJob.run (node:internal/modules/esm/module_job:217:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async loadESM (node:internal/process/esm_loader:34:7)
    at async handleMainPromise (node:internal/modules/run_main:66:12)
```

## Environment

```
pnpm vitest --version                            
vitest/2.1.1 darwin-arm64 node-v20.9.0
```