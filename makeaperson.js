
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getLastName = function(){
    	let lastName = firstAndLast.split(' ');
     	return lastName[1];
    };
    this.getFirstName = function(){
    	let firstName = firstAndLast.split(' ');
    	return firstName[0];
    };
    this.setFirstName = function(first){
    	//console.log(first);
    	let set_first = firstAndLast.split(' ');
    	set_first[0]=first;
    	//console.log(set_first.join(' '));
    	firstAndLast = set_first.join(' ');
    	return set_first[0];

    };
    this.setLastName = function(last){
 		let set_last = firstAndLast.split(' ');
    	set_last[1]=last;
    	//console.log(set_first.join(' '));
    	firstAndLast = set_last.join(' ');
    	return set_last[1];

    };
    this.setFullName = function(newname){
        firstAndLast = newname;
    	return firstAndLast;

    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getLastName());
console.log(bob.getFirstName());
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName());
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName());
console.log(bob.setFullName("Haskell Curry"));
console.log(bob.getFullName());