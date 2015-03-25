module.exports = function(grunt) {

	//Variables
	var libs = 'bower_dist/';
	var bs3 = 'bower_components/bootstrap/less/';

	grunt.initConfig({

		//JS
		jshint: {
			all: ['javascripts/*.js']
		},
	  	uglify: {
		    dist: {
		    	files: {
		        	'../web/js/scripts.min.js': [libs + 'jquery/jquery.js', libs + '**/*.js', 'javascripts/*.js', '!'+libs+'**/*.min.js']
		      	}
		    }
		},

		//CSS
		less: {
		  dist: {
		    files: {
		      "../web/css/styles.min.css": "less/main.less"
		    }
		  },
		},
		cssmin: {
			combine: {
		    	files: {
		      		'../web/css/styles.min.css': ['../web/css/styles.min.css', libs + '**/*.css', '!'+libs+'bootstrap/*.css']
		   		}
		  	}
		},

		//Bower
		bower: {
		    install: {
		    	options: {
		    		targetDir: './bower_dist',
		    		'layout': 'byComponent'
		    	}
		    }
		},

		//Bootstrap
		replace: {
		  example: {
		    src: [bs3 + 'bootstrap.less', bs3 + 'variables.less'],
		    dest: 'less/',
		    replacements: [
		    	{
		      		from: '@import "',
		     		to: '@import "../bower_components/bootstrap/less/',
		    	},
		    	{
		      		from: '@import "../bower_components/bootstrap/less/variables',
		     		to: '@import "variables',
		    	}
		    ]
		  }
		},

		//Sprites
        sprite:{
            retina: {
                src: 'images/*.png',
                dest: '../web/img/sprite@2x.png',
                destCss: 'less/sprite.less',
                cssTemplate: 'sprite.mustache',
                imgPath: "../img/sprite",
                padding: 2
            },
        },
        image_resize: {
            options: {
                width: "50%",
                height: "50%",
            },
            dist: {
                src: '../web/img/sprite@2x.png',
                dest: '../web/img/sprite.png'

            }
        },
        imagemin: {
            sprites: {
                options: {
                    optimizationLevel: 3
                },
            src: ['../web/img/sprite.png','../web/img/sprite@2x.png']
            }
        },

		//Temps réel
		watch: {
			js: {
		    	files: ['javascripts/*.js'],
		    	tasks: ['jshint', 'uglify'],
		    	options: { spawn: false },
		  	},
			css: {
		    	files: ['less/**/*.less'],
		    	tasks: ['less', 'cssmin'],
		    	options: { spawn: false },
		  	},
		},
	});

	//Modules
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-contrib-imagemin');


	//Tasks
	grunt.registerTask('bower:init', ['bower', 'replace']);
	grunt.registerTask('default', ['jshint', 'uglify', 'less', 'cssmin']);
	grunt.registerTask('sprites', ['sprite', 'image_resize', 'imagemin']);
};
