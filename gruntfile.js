module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    uglify:{
      
        dist:{
          src: ['routes/users.js','routes/index.js'],
          dest: 'dest/usersindex.min.js'
        }
        
       } ,


       copy: {
      
       //files: ['src/**/*.js'],
       t1:{
         src: 'dir1/*',
         dest:'dir2/'
       }
     },


     concat: {
          options: {
              // define a string to put between each file in the concatenated output
              separator: ';'
          },
          dist: {     
              // the files to concatenate
              src: ['routes/users.js','routes/index.js'],
              // the location of the resulting JS file
               dest: 'dest/usersindexcon.cat.js'
          }
      }
   
    



  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify' ,'copy' ,'concat']);

};