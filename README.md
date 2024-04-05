# Math Rounding Utilities for TypeScript

## Introduction

This TypeScript library adds missing math rounding utilities, in a type-safe manner.

## Quick Start

```
# run this from your Terminal
npm install @safelytyped/math-rounding
```

```typescript
// add this import to your Typescript code
import { roundDown } from "@safelytyped/math-rounding";
```

__VS Code users:__ once you've added a single import anywhere in your project, you'll then be able to auto-import anything else that this library exports.

## Exported Functions

### roundDown()

Use `roundDown()` to round a number down to the precision you require.

```typescript
import { roundDown } from "@safelytyped/math-rounding";

// res == 1.99
const res = roundDown(2, 1.9999);
```

### roundUp()

Use `roundUp()` to round a number up to the precision you require.

```typescript
import { roundUp } from "@safelytyped/math-rounding";

// res == 2
const res = roundUp(2, 1.99999);
```

### roundTo()

Use `roundTo()` if you want to inject your own rounding function.

```typescript
import { roundTo } from "@safelytyped/math-rounding";

// roundedDownRes == 1.99
const roundedDownRes = roundDown(
    Math.trunc,
    2,
    1.99999
);

// roundedUpRes == 2
const roundedDownRes = roundDown(
    Math.ceil,
    2,
    1.99999
);
```

## Documentation

Here's a link to all the documentation about this project.

### Admin Paperwork

* [Our CHANGELOG](CHANGELOG.md)
* [Our software license](LICENSE.md)

### For Contributors

* [How to contribute](CONTRIBUTING.md)
* [Our Code of Conduct](CODE-OF-CONDUCT.md)
* [Our NPM scripts](./docs/v1/contributors/NPM-Scripts.md)

### Credits

* [Current Maintainers](MAINTAINERS.md)
* [All contributors to date](AUTHORS.md)

Follow us on [Twitter](https://twitter.com/SafelyTyped)!