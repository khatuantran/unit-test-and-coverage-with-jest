module.exports = {
    collectCoverage: true,
    coverageDirectory:"./coverage",
    coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
    collectCoverageFrom: [
        "./router/manageStore.js",
    ],
    coverageThreshold: {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": 80
        }, 
    }
}