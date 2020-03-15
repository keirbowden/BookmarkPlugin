bbbookmarks
===========

Bookmarks example plugin for ApexHours

[![Version](https://img.shields.io/npm/v/bbbookmarks.svg)](https://npmjs.org/package/bbbookmarks)
[![Downloads/week](https://img.shields.io/npm/dw/bbbookmarks.svg)](https://npmjs.org/package/bbbookmarks)
[![License](https://img.shields.io/npm/l/bbbookmarks.svg)](https://github.com/keirbowden/bbbookmarks/blob/master/package.json)

<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g bbbookmarks
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
bbbookmarks/1.0.1 darwin-x64 node-v8.11.3
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx bbbm:create [-n <string>] [-d <string>] [-s <string>] [-l <string>] [-t <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-bbbmcreate--n-string--d-string--s-string--l-string--t-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx bbbm:find [-t <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-bbbmfind--t-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx bbbm:list [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-bbbmlist--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx bbbm:shortcode [-s <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-bbbmshortcode--s-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx bbbm:create [-n <string>] [-d <string>] [-s <string>] [-l <string>] [-t <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Create a new bookmark

```
USAGE
  $ sfdx bbbm:create [-n <string>] [-d <string>] [-s <string>] [-l <string>] [-t <string>] [-u <string>] [--apiversion 
  <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -d, --description=description                                                     Brief description of bookmark
  -l, --url=url                                                                     The Bookmark URL
  -n, --name=name                                                                   Bookmark name

  -s, --shortcode=shortcode                                                         Short (3 character) code for the
                                                                                    bookmark

  -t, --tags=tags                                                                   Comma separated list of tags for the
                                                                                    bookmark

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx bbbm:create -u ApexHoursDocs 
                     -n "Bob Buzzard Blog" 
                     -d "Bob Buzzard Blog Homepage"
                     -s BLOG
                     -l https://bobbuzzard.blogspot.com
                     -t "Blog,Developer,Apex"
  
  Successfully created bookmark
```

_See code: [lib/commands/bbbm/create.js](https://github.com/keirbowden/bbbookmarks/blob/v1.0.1/lib/commands/bbbm/create.js)_

## `sfdx bbbm:find [-t <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Find a bookmark based on a search term that appears in any field

```
USAGE
  $ sfdx bbbm:find [-t <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -t, --term=term                                                                   Term to look for

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx bbbm:find -u ApexHoursDocs -t Develop 
  
  *****************************
  Find Results

  1) LWC Dev Guide [LWCDG] - Official Lightning Web Components Developer Guide from Salesforce
  2) Apex Dev Guide [APXDG] - Official Salesforce Apex Developer Guide

  0) Quit
  Choose a bookmark:
```

_See code: [lib/commands/bbbm/find.js](https://github.com/keirbowden/bbbookmarks/blob/v1.0.1/lib/commands/bbbm/find.js)_

## `sfdx bbbm:list [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

print a greeting and your org IDs

```
USAGE
  $ sfdx bbbm:list [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx bbbm:find -u ApexHoursDocs
  
  *****************************
  All bookmarks

  1) Bob Buzzard Blog [BLOG] - Bob Buzzard Blog Homepage
  2) LWC Dev Guide [LWCDG] - Official Lightning Web Components Developer Guide from Salesforce
  3) Apex Dev Guide [APXDG] - Official Salesforce Apex Developer Guide
  4) Google [GGL] - Google home page

  0) Quit
  Choose a bookmark:
```

_See code: [lib/commands/bbbm/list.js](https://github.com/keirbowden/bbbookmarks/blob/v1.0.1/lib/commands/bbbm/list.js)_

## `sfdx bbbm:shortcode [-s <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Retrieve a bookmark based on its shortcode

```
USAGE
  $ sfdx bbbm:shortcode [-s <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -s, --code=code                                                                   Shortcode of bookmark

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx bbbm:shortcode -u ApexHoursDoc -c Blog 
     Opening Bob Buzzard Blog Homepage
```

_See code: [lib/commands/bbbm/shortcode.js](https://github.com/keirbowden/bbbookmarks/blob/v1.0.1/lib/commands/bbbm/shortcode.js)_
<!-- commandsstop -->
