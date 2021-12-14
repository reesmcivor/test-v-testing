const untrailingSlashIt = require('./utils').untrailingSlashIt;
const trailingSlashIt = require('./utils').trailingSlashIt;
const leadingSlashIt = require('./utils').leadingSlashIt;

module.exports = function backstopConfig(nonProductionBaseUrl, productionBaseUrl, pathsToTest, siteName) {

    const backstopDataDir = `backstop_data/${siteName}`;
    const delayTime = 2000;
    const acceptableThreshold = 0.1;

    const config = {
        'id': siteName,
        'onBeforeScript': './../../../inc/backstopBefore.js',
        asyncCaptureLimit: 10,
        'viewports': [{
                'name': 'phone',
                'width': 320,
                'height': 480
            },
            {
                'name': 'desktop',
                'width': 1920,
                'height': 1080
            }
        ],
        'removeSelectors': [
            '#demo-store'
        ],
        'scenarios': [{
            'label': 'Homepage',
            'url': trailingSlashIt(nonProductionBaseUrl),
            'referenceUrl': trailingSlashIt(productionBaseUrl),
            'selectors': ['document'],
            'readyEvent': null,
            'delay': delayTime,
            'misMatchThreshold': acceptableThreshold,
            'scrollToSelector' : '#header',
        }],
        'paths': {
            'ci_report': `${backstopDataDir}/ci_report`,
            'json_report': `${backstopDataDir}/json_report`,
            'html_report': `${backstopDataDir}/html_report`,
            'bitmaps_reference': `${backstopDataDir}/bitmaps_reference`,
            'bitmaps_test': `${backstopDataDir}/bitmaps_test`,
            'compare_data': `${backstopDataDir}/bitmaps_test/compare.json`,
            'casper_scripts': `${backstopDataDir}/casper_scripts`,
            'engine_scripts': `${backstopDataDir}/engine_scripts`
        },
        'engine': 'puppeteer',
        'report': ['browser', 'json'],
        'casperFlags': [],
        'debug': false,
        'port': 3001
    };


    const scenarios = pathsToTest.map(function (path) {

        return {
            'label': path,
            'url': untrailingSlashIt(nonProductionBaseUrl) + leadingSlashIt(path),
            'referenceUrl': untrailingSlashIt(productionBaseUrl) + leadingSlashIt(path),
            'hideSelectors': [],
            'selectors': ['document'],
            'readyEvent': null,
            'delay': delayTime,
            'misMatchThreshold': acceptableThreshold
        };

    });

    config.scenarios = config.scenarios.concat(scenarios);

    return config;

};