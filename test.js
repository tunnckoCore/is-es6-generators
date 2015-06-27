/*!
 * is-es6-generators <https://github.com/tunnckoCore/is-es6-generators>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var g = require('./index')

test('is-es6-generators:', function () {
  test('should have few aliases', function (done) {
    test.equal(typeof g, 'function')
    test.equal(typeof g.fn, 'function')
    test.equal(typeof g.gen, 'function')
    test.equal(typeof g.gen.fn, 'function')
    test.equal(typeof g.generator, 'function')
    test.equal(typeof g.generator.fn, 'function')
    test.equal(typeof g.isGen, 'function')
    test.equal(typeof g.isGen.fn, 'function')
    test.equal(typeof g.isGenerator, 'function')
    test.equal(typeof g.isGeneratorFn, 'function')
    test.equal(typeof g.isGenerator.fn, 'function')
    test.equal(typeof g.isGeneratorFunction, 'function')
    done()
  })
  test('generators', function () {
    test('should return false with non-generators', function () {
      test.equal(g.generator(null), false)
      test.equal(g.generator(undefined), false)
      test.equal(g.generator([1, 2, 3]), false)
      test.equal(g.generator({name: 'GeneratorFunction'}), false)
      test.equal(g.generator(25), false)
      test.equal(g.generator('test'), false)
      test.equal(g.generator(function * () {}), false)
    })
    test('should return true with a generator', function () {
      test.equal(g.generator((function * () {})()), true)
      test.equal(g.generator((function * () { yield 42 })()), true)
    })
  })

  test('generator functions', function () {
    test('should return false with non-generator function', function () {
      test.equal(g.gen.fn(null), false)
      test.equal(g.gen.fn(undefined), false)
      test.equal(g.gen.fn(function () {}), false)
      test.equal(g.gen.fn([55, 23, 24]), false)
      test.equal(g.gen.fn({name: 'GeneratorFunction'}), false)
      test.equal(g.gen.fn(25), false)
      test.equal(g.gen.fn('foo bar'), false)
      var noConstructorFn = function () {}
      noConstructorFn.constructor = undefined

      test.equal(g.gen.fn(noConstructorFn), false)
    })
    test('should return true with a generator functions', function () {
      test.equal(g.gen.fn(function * () {}), true)
      test.equal(g.gen.fn(function * () { yield 42 }), true)
    })
  })
})
