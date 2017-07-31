import Alexa from 'alexa-sdk';

export function handler(event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = '';
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('Hello');
    },
    'Unhandled': function () {
        this.emit('Hello');
    }
};
