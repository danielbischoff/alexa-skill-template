# Alexa Skill Template
Basic alexa skill template.
Uses [webpack2](https://webpack.js.org/) for building the skill, [babel](https://babeljs.io/) for es6 support and [jest](https://facebook.github.io/jest/) for unit testing.
> Because the default UglifyJsPlugin doesn't currently support es6 syntax, I couldn't use the -p webpack switch to build for production. That's why I added all the plugins myself.

## Testing
To unit test your code, run the following command.
```
npm run test
```

## Build
To build the skill, run the following command.
```
npm run build
```
Files are built into /build folder.

## Packaging
To package and zip the skill, run the following command.
After that you can upload the zip to s3 or upload it in the lambda console.
```
npm run package
```

## Useful links
- [Dialog Interface Reference](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/dialog-interface-reference)
- [The Alexa Skills Kit API](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
- [The Interaction Model](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface)