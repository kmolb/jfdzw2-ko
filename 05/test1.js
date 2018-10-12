const hello = function(){
    
 console.log('cześć');
}
const helloCopy = hello;
 hello();
 helloCopy();
 function call(fn){
     fn();
 }
 call(hello);
 call(helloCopy); 