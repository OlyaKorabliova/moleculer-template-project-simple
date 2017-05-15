"use strict";

let { ServiceBroker{{#needTransporter}}, Transporters{{/needTransporter}}{{#needCacher}}, Cachers{{/needCacher}} } = require("moleculer");
{{#apiGW}}
let ApiGateway = require("moleculer-web");
{{/apiGW}}

// Create broker
let broker = new ServiceBroker({
	{{#if_eq transporter "nats"}}
	transporter: new Transporters.NATS(),
	{{/if_eq}}
	{{#if_eq transporter "mqtt"}}
	transporter: new Transporters.MQTT(),
	{{/if_eq}}
	{{#if_eq transporter "redis"}}
	transporter: new Transporters.Redis(),
	{{/if_eq}}
	{{#if_eq cacher "memory"}}
	cacher: new Cachers.Memory(),
	{{/if_eq}}
	{{#if_eq cacher "redis"}}
	cacher: new Cachers.Redis(),
	{{/if_eq}}
	logger: console,
	logLevel: process.env.LOG_LEVEL || "info"
});

// Load my service
broker.loadServices("./services");

{{#apiGW}}
// Create API Gateway
broker.createService(ApiGateway, {
	settings: {
		port: process.env.PORT || 3000
	}
});

{{/apiGW}}
// Start server
broker.start().then(() => {

	// Call action
	broker.call("test.greeter", { name: "John Doe" })
		.then(broker.logger.info)
		.catch(broker.logger.error);

	broker.call("math.add", { a: 5, b: 2 })
		.then(res => broker.logger.info(" 5 + 2 =", res))
		.catch(broker.logger.error);

});

module.exports = broker;