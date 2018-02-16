/*
 * empty test.
 */

exports.test  = function ( done, assertions ) {
    let log = console.log
        , exit = typeof done === 'function' ? done : function () {}
        , assert = assertions || require( 'assert' )
        , Thrank = require( '../' )
        ;

    exit();
};

// single test execution with node
if ( process.argv[ 1 ] === __filename ) exports.test = exports.test();