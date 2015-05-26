/*!
 * is-es6-generators <https://github.com/tunnckoCore/is-es6-generators>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isGenerator = require('./index')
var isGeneratorFunction = require('./index').fn

test('is-es6-generators:', function () {
  test('generators', function () {
    test('should return false with non-generators', function () {
      test.equal(isGenerator(null), false)
      test.equal(isGenerator(undefined), false)
      test.equal(isGenerator([1, 2, 3]), false)
      test.equal(isGenerator({name: 'GeneratorFunction'}), false)
      test.equal(isGenerator(25), false)
      test.equal(isGenerator('test'), false)
      test.equal(isGenerator(function * () {}), false)
    })
    test('should return true with a generator', function () {
      test.equal(isGenerator((function * () {})()), true)
      test.equal(isGenerator((function * () { yield 42 })()), true)
    })
  })

  test('generator functions', function () {
    test('should return false with non-generator function', function () {
      test.equal(isGeneratorFunction(null), false)
      test.equal(isGeneratorFunction(undefined), false)
      test.equal(isGeneratorFunction(function () {}), false)
      test.equal(isGeneratorFunction([55, 23, 24]), false)
      test.equal(isGeneratorFunction({name: 'GeneratorFunction'}), false)
      test.equal(isGeneratorFunction(25), false)
      test.equal(isGeneratorFunction('foo bar'), false)
      var noConstructorFn = function () {}
      noConstructorFn.constructor = undefined

      test.equal(isGeneratorFunction(noConstructorFn), false)
    })
    test('should return true with a generator functions', function () {
      test.equal(isGeneratorFunction(function * () {}), true)
      test.equal(isGeneratorFunction(function * () { yield 42 }), true)
    })
  })
})
