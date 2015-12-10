require('node-jsx').install({
	extension: '.jsx',
	harmony: true
})
require("babel-core/register")
// transpile es6 to es5
require("./server");