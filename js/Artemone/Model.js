/**
 * Created by tema on 11.11.16.
 */
'use strict';

var _ = require('underscore');
var Events = require('./Events');


class Models extends Events {
	constructor(attributes) {
		super();
		this.attributes = {};
		this.set(attributes);
	}

	set(attributes) {
		for (let a in attributes) {
			this.attributes[a] = attributes[a];
		}
		this.emit('change');
	}

	get(key) {
		return this.attributes[key];
	}
}

module.exports = Models;
