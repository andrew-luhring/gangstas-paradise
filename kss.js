var kss = require('kss')
 ,  options = {
        markdown: false
    ,   mask: '*.scss'
    }
 ,  STYLE_DIR = 'public/scss';


kss.traverse(STYLE_DIR, options, function(err, styleguide) {

	if (err){
	    console.log(err + "\n ############ error ###############");
	    throw err;
	   
	} else {
	    console.log("pass");
	}
});