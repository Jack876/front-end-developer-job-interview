#!/bin/env node

var fs   = require( 'fs' ),
    path = require( 'path' );


fs.readdir( 'dir/1', function( err, files ) {
    console.log( files );
});

fs.readdir( 'dir/2', function( err, files ) {
    console.log( files );
});