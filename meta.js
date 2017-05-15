"use strict";

module.exports = function(values) {
	return {
		questions: [
			{
				type: "confirm",
				name: "apiGW",
				message: "Add API Gateway (moleculer-web) service",
				default: true
			},
			{
				type: "confirm",
				name: "needTransporter",
				message: "Would you like communicate with other nodes?",
				default: false
			},
			{
				type: "list",
				name: "transporter",
				message: "Select a transporter",
				choices: [
					{ name: "NATS (recommended)", value: "nats" },
					{ name: "MQTT", value: "mqtt" },
					{ name: "Redis", value: "redis" }
				],
				when(answers) { return answers.needTransporter; },
				default: "nats"
			},
			{
				type: "confirm",
				name: "needCacher",
				message: "Would you like use cache?",
				default: false
			},
			{
				type: "list",
				name: "cacher",
				message: "Select a cacher solution",
				choices: [
					{ name: "Memory", value: "memory" },
					{ name: "Redis", value: "redis" }
				],
				when(answers) { return answers.needCacher; },
				default: "memory"
			}
		],

		completeMessage: `
To get started:

	cd {{projectName}}
	npm run dev

		`
	};
};
