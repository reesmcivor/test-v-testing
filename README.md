



# Visual Regression Testing Example Repository



This repository is an example for Andrew Taylors talk/workshop Automating your QA with Visual Regression Testing and David Needham's talk/workshop Visual Regression Testing with BackstopJS. Andrew's slides that accompany this repository can be found [here](https://bit.ly/ataylorme-visual-regression-workshop) and David's can be found [here](https://visual-regression.davidneedham.me).

[BackstopJS](https://github.com/garris/BackstopJS/) is used for the visual regression testing. The app itself is built with [Node JS](https://nodejs.org/), [`commander.js`](https://github.com/tj/commander.js/), and [`Inquirer.js`](https://github.com/SBoudrias/Inquirer.js).

## Prerequisites

You will need:

* A local development environment with [Node JS/NPM](https://docs.npmjs.com/getting-started/installing-node)
* [Google Chrome](https://www.google.com/chrome/)
* A live, web-accessible website
* Another environment of the website above (e.g. local, staging, etc.)

### Getting The Code

Create a new repository from this template and then either using Git clone or download the `.zip` file of your copy.

## Instructions

After setting up the repository locally (see above) you will need to:

1. Run the command `npm install` to download dependencies
    * This only needs to be done once
1. Run the command `npm run start`
    * Select the site you want to test from the list
    * Note: `npm run start` can be used anytime you want to run the app
1. Check out the results from the sample test
    * They should open in your browser automatically
1. Edit `inc/sitesToTest.js`
    * This is where the list of sites to test is stored
    * Try changing to one (or more) of your sites
    * `nonProductionBaseUrl` is your non-production environment (local, staging, etc.) URL
    * `productionBaseUrl` is your production site URL
    * Adjust `pathsToTest`, which is the array of URIs to test for each site
1. Edit `inc/backstopConfig.js` to adjust viewports, delay, hidden selectors, etc.
1. Run the command `npm run start`.
    * Select the site you want to test from the list

**Troubleshooting**
If you are having issues with the script hanging or BackstopJS taking a long time there may be headless Chrome instances that didn't close properly.

Try `pkill -f "(chrome)?(--headless)"` on Mac/Linux or `Get-CimInstance Win32_Process -Filter "Name = 'chrome.exe' AND CommandLine LIKE '%--headless%'" | %{Stop-Process $_.ProcessId}` in Windows PowerShell.
