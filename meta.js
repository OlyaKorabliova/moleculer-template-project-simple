"use strict";

module.exports = function(values) {
	return {
		questions: [
			{
				type: "confirm",
				name: "apiGW",
				message: "Add API Gateway (moleculer-web) service",
				default: true
			}
		],

		completeMessage: `
To get started:

	cd {{projectName}}
	npm run dev

		`
	};
};
