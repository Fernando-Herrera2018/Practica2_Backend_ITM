process.stdin.setEncoding('utf8');
process.stdin.on('data', function(line){
  console.log('Este es el resultado:'+ line);
  process.stdout.write(line);
 
});

