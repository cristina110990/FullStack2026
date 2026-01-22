const  logger  =  require ( 'node-color-log' ) ;

logger .color('black').bgColor('cyan').bold().append('This is a custom colored log message!').color('yellow').bgColor('black').log('This is a yellow log message!');

console.log('\n');

logger.success ('This is a success message!');
logger.error ('This is an error message!');
logger.warn ('This is a warning message!');
logger.info ('This is an info message!');

console.log('\n');

var asciify = require('asciify-image');

var options = {
  fit:    'box',
  width:  200,
  height: 100
}

asciify('path/to/image.png', options, function (err, asciified) {
  if (err) throw err;

  // Print to console
  console.log(asciified);
});