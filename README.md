# 🎈MagicPanel 
## 👾 An application that uses jwt authentication and mongo to save your daily notes.

<img alt="Next" src="https://img.shields.io/badge/-Next-black?style=flat-square&logo=react" width="73px"/> <img alt="Node" src="https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js" width="90px"/>

<a href="https://github.com/davi-souza2001/MagicPanel_Api">Link for the api</a>

![2021-12-29-11-29-46](https://user-images.githubusercontent.com/77704994/147777807-165b17c4-1b6d-4994-93dc-ed23d295befe.gif)


##  How to use ? 🤔

Only make login in app and write your notes, with your dates ! 😁

## How to make my changes ? 🤔

```sh
npm install
```

```sh
npm run build
```

<!-- https://magicpaneapi.herokuapp.com/ -->

<!-- cópia arquivo de test

// it('test route get all users', async() => {
    //     const response = await request(appClient)
    //     .get('/notes/getAllNotes')

    //     console.log(response)
    // })

// import mongoose from 'mongoose'
// import { app } from '../../src/app'
// import User from '../../src/models/User'

describe('Tests all about user', () => {
    
    // beforeAll(async () => {
    //     if (!process.env.MONGO_URL){
    //         throw new Error('MongoDB server not init !')
    //     }

    //     await mongoose.connect(process.env.MONGO_URL)
    // })

    // it('should be able to create new user', async() => {
    //     await User.create({ email: '123@gmail', name: 'Davi teste', password: '123'} );
        
    //     const list = await User.find({})

    //     expect(list).toEqual(
    //         expect.arrayContaining([
    //             expect.objectContaining({
    //                 email: '123@gmail'
    //             })
    //         ])
    //     ) 
    // })

    // beforeEach(async () => {
    //     await User.deleteMany({})
    // })

    // afterAll(async () => {
    //     await mongoose.connection.close();
    // })

    it('should be able to create new user', async() => {

        expect(2 + 2).toEqual(4) 
    })
}); -->


<!-- cópia arquivo de config do jest 

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  bail: false,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "C:\\Users\\david\\AppData\\Local\\Temp\\jest",

  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  // coverageDirectory: undefined,

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: undefined,

  // A path to a custom dependency extractor
  // dependencyExtractor: undefined,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  // Force coverage collection from ignored files using an array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   "js",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  preset: '@shelf/jest-mongodb',

  // Run tests from one or more projects
  // projects: undefined,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state before every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: undefined,

  // Automatically restore mock state and implementation before every test
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: undefined,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: [],

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  // slowTestThreshold: 5,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  // testEnvironment: "jest-environment-node",

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.spec.ts",
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // This option allows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // testRunner: "jest-circus/runner",

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: "http://localhost",

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  // timers: "real",

  // A map from regular expressions to paths to transformers
  // transform: undefined,

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "\\\\node_modules\\\\",
  //   "\\.pnp\\.[^\\\\]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};














<!-- {
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "node dist/server.js",
    "dev": "nodemon src/server.ts --ignore __tests__",
    "build": "sucrase ./src -d ./dist --transforms typescript,imports",
    "test": "jest"
  },
  "dependencies": {
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.1.2",
    "nodemon": "^2.0.15"
  },
  "devDependencies": {
    "@shelf/jest-mongodb": "^2.1.1",
    "@types/bcrypt": "^5.0.0",
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.13",
    "@types/jest": "^27.0.3",
    "@types/jsonwebtoken": "^8.5.6",
    "@types/supertest": "^2.0.11",
    "jest": "^27.4.5",
    "sucrase": "^3.20.3",
    "supertest": "^6.1.6",
    "ts-jest": "^27.1.2",
    "ts-node": "^10.4.0",
    "typescript": "^4.5.4"
  }
} -->
