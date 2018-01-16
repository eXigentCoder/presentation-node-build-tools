# Task runners

* NPM 
    * [*] init
    * [*] config
    * [*] search
    * [*] install
    * [*] uninstall
    * [*] scripts (run)
    * [*] adduser
    * [*] whoami
    * [*] logout
    * [*] publish
    * [*] unpublish (rules for this)
    * [*] Specific versions
    * [] @scopes
* Grunt
* Gulp
* yarn
    I heard Facebook released their own package manger, Yarn, can I use that too? Yup, simply do a `yarn add <nameOfDependency>`.

## What sort of tasks?
JavaScript is interpreted, not compiled so no need to "build" the application, so what sorts of tasks would we want to run?
The logic for what your CI/CD server does should be checked into source control, tasks are ideal for this.

* Minification
* Obfuscation
* File concatenation
* Transpile - Convert from a newer version of ES to an earlier one for browser/Node compatibility
* Optimisation
* Check for errors (Lint)
* Format code (Prettier)
* Run an application
* Watch files for changes and then kick off another task such as reboot application
* Run automated tests (Unit, integration, performance, etc.)
* Get code coverage
* Publish (to NPM registry)
* Deploy to an environment
* Generate a code complexity report
* Run any miscellaneous/arbitrary script or binary
* Update dependencies
* Check dependencies for vulnerabilities (Snyk)
* Code generation
* Data generation

# Transpilers
* Babel

# Bundlers
* Webpack

# Links

1. https://survivejs.com/webpack/appendices/comparison/

# Flow