"use strict";

const Moleculer = require("moleculer");

module.exports = {
	nodeID: null,

	logger: true,
	logLevel: "info",

	{{#needTransporter}}
	transporter: "{{transporter}}",
	{{/needTransporter}}

	{{#needCacher}}
	cacher: "{{cacher}}",
	{{/needCacher}}

	serializer: null,

	requestTimeout: 0 * 1000,
	requestRetry: 0,
	maxCallLevel: 0,
	heartbeatInterval: 10,
	heartbeatTimeout: 30,

	registry: {
		strategy: Moleculer.STRATEGY_ROUND_ROBIN,
		preferLocal: true				
	},

	circuitBreaker: {
		enabled: false,
		maxFailures: 5,
		halfOpenTime: 10 * 1000,
		failureOnTimeout: true,
		failureOnReject: true
	},

	validation: true,
	metrics: false,
	metricsRate: 1,
	statistics: false,
	internalActions: true
};