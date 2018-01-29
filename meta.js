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
				message: "Would you like to communicate with other nodes?",
				default: false
			},
			{
				type: "list",
				name: "transporter",
				message: "Select a transporter",
				choices: [
					{ name: "NATS (recommended)", value: "NATS" },
					{ name: "MQTT", value: "MQTT" },
					{ name: "AMQP", value: "AMQP" },
					{ name: "Redis", value: "Redis" }
				],
				when(answers) { return answers.needTransporter; },
				default: "NATS"
			},
			{
				type: "confirm",
				name: "needCacher",
				message: "Would you like to use cache?",
				default: false
			},
			{
				type: "list",
				name: "cacher",
				message: "Select a cacher solution",
				choices: [
					{ name: "Memory", value: "Memory" },
					{ name: "Redis", value: "Redis" }
				],
				when(answers) { return answers.needCacher; },
				default: "Memory"
			},
			{
				type: "confirm",
				name: "lint",
				message: "Use ESLint to lint your code?",
				default: true
			},
			{
				type: "confirm",
				name: "jest",
				message: "Setup unit tests with Jest?",
				default: true
			}
		],

		"filters": {
			"services/api.service.js": "apiGW",
			".eslintrc.js": "lint",
			"test/**/*": "jest",
		},

		completeMessage: `
To get started:

	cd {{projectName}}
	npm run dev

		`
	};
};
