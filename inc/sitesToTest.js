module.exports = {
    "return-to-pantheon-test": {
        label: "Return to Pantheon Test",
        productionBaseUrl: "https://live-return-to-pantheon-test.pantheonsite.io/",
        nonProductionBaseUrl: "https://dev-return-to-pantheon-test.pantheonsite.io/",
        pathsToTest: [
            "/2018/04/",
            "/2018/04/04/hello-world/",
        ]
    },
    "wordpress-at-scale": {
        label: "WordPress at Scale",
        productionBaseUrl: "https://www.maxpack.co.uk/",
        nonProductionBaseUrl: "https://staging.maxpack.co.uk/",
        pathsToTest: [
            "/",
            "/kitchen-sink",
        ]
    }
};