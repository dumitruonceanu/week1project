module.exports = function(grunt) {
	// Project configuration.
	 grunt.initConfig({
	   pkg: grunt.file.readJSON('package.json'),
	   sass: {
	   	dist: {
	   		files:{
	   			//destination: source files
	   			'style.css': 'style.scss'
	   		}
	   	}
	   },
	   jade: {
	     compile: {
	       options: {
	         data: {
	           debug: false
	         }
	       },
	       files: {
	       	 //destination: source files
	         "indexJade.html": "indexJade.jade"
	       }
	     }
	   },
	   svginject: {
	       all : {
	         options: {},
	         files: {
	         	//destination: source files
	           'SVGinject.js': 'svgs/*.svg'
	         }
	       }
	   },
	   cssmin: {
	     minify: {
	       expand: true,
	       cwd: '',
	       src: ['*.css', '!*.min.css'],
	       dest: '',
	       ext: '.min.css'
	     }
	   },
	   mkdir: {
	       options: {
	         create: ['tmp', 'test/very/deep/folder', 'production']
	       },
	       your_target: {
	         // Target-specific options go here.
	       },
	   },
	   watch: {
	   	css: {
	   		files: ['*.scss'],
	   		tasks: ['sass', 'autoprefixer'],
	   	},
	   	jade: {
	   		files: ['*.jade'],
	   		tasks: ['jade']
	   	},
	   	options: {
	   		livereload: true
	   	}
	   },
	   autoprefixer: {
	   	options: {
	   		 browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
	   	},
	   	no_dest: {
	   		//source files
	   		src: 'style.css'
	   	}
	   },
	   connect: {
	   		server: {
	   			options: {
	   				port: 9001,
	   				base: ''
	   			}
	   		}
	   }
	 });

	 grunt.loadNpmTasks('grunt-contrib-sass');
	 grunt.loadNpmTasks('grunt-contrib-watch');
	 grunt.loadNpmTasks('grunt-autoprefixer');
	 grunt.loadNpmTasks('grunt-contrib-connect');
	 grunt.loadNpmTasks('grunt-svginject');
	 grunt.loadNpmTasks('grunt-contrib-jade');
	 grunt.loadNpmTasks('grunt-contrib-cssmin');
	 grunt.loadNpmTasks('grunt-mkdir');
	 // Default tasks
	 grunt.registerTask('default', ['connect', 'watch']);
	 //specific on-demand tasks
	 grunt.registerTask('svg', ['svginject']);
	 grunt.registerTask('css', ['cssmin']);
	 grunt.registerTask('directories', ['mkdir']);
 };