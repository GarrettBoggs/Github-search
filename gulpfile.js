var jshint = require('gulp-jshint');
var del = require('del');
var utilities = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var buildProduction = utilities.env.production;
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
