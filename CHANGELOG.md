# CHANGELOG

## Introduction

This CHANGELOG tells you:

* when a release was made
* what is in each release

It also tells you what changes have been completed, and will be included in the next tagged release.

For each release, changes are grouped under these headings:

* _Backwards-Compatibility Breaks_: a list of any backwards-compatibility breaks
* _New_: a list of new features. If the feature came from a contributor via a PR, make sure you link to the PR and give them a mention here.
* _Fixes_: a list of bugs that have been fixed. If there's an issue for the bug, make sure you link to the GitHub issue here.
* _Dependencies_: a list of dependencies that have been added / updated / removed.
* _Tools_: a list of bundled tools that have been added / updated / removed.

## develop branch

The following changes have been completed, and will be included in the next tagged release.

### Tools

- fixed NPM warnings against package.json

## v1.0.1

Released Friday 5th April 2024.

### Fixes

- fix bugs in CI pipeline that prevented package being published to NPMJS

## v1.0.0

Released Friday 5th April 2024.

### New

- added `roundDown()` function
- added `roundUp()` function
- added `roundTo()` function
