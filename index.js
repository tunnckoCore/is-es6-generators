/*!
 * is-es6-generators <https://github.com/tunnckoCore/is-es6-generators>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var isGenerator = require('is-es6-generator')
var isGeneratorFunction = require('is-es6-generator-function')

exports = module.exports = isGenerator

exports.fn = isGeneratorFunction
exports.gen = isGenerator
exports.gen.fn = isGeneratorFunction
exports.generator = isGenerator
exports.generator.fn = isGeneratorFunction
exports.isGen = isGenerator
exports.isGen.fn = isGeneratorFunction
exports.isGenerator = isGenerator
exports.isGeneratorFn = isGeneratorFunction
exports.isGenerator.fn = isGeneratorFunction
exports.isGeneratorFunction = isGeneratorFunction
