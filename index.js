/*!
 * is-es6-generators <https://github.com/tunnckoCore/is-es6-generators>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var isGeneratorFunctionName = require('is-generator-function-name')

/**
 * Check whether a `value` is a generator.
 *
 * @param  {Mixed} `value`
 * @return {Boolean} always boolean `true` or `false`, never `null` or `undefined`
 * @api public
 */
function isGenerator (value) {
  if (!value) return false
  if (typeof value.next === 'function' && typeof value.throw === 'function') return true

  return false
}

/**
 * Check whether a function is generator.
 *
 * @param  {Mixed} `value`
 * @return {Boolean} always boolean `true` or `false`, never `null` or `undefined`
 * @api public
 */
function isGeneratorFunction (value) {
  if (!isGeneratorFunctionName(value)) return false
  if (typeof value !== 'function') return false

  return true
}

/**
 * Expose `is-es6-generators`
 */

exports = module.exports = isGenerator
exports.isGenerator = exports.isGenerator = isGenerator
exports.fn = exports.isGeneratorFunction = isGeneratorFunction
