/*
 * Programming Quiz: Make An Iterable Object
 *
 * Turn the `james` object into an iterable object.
 *
 * Each call to iterator.next should log out an object with the following info:
 *   - key: the key from the `james` object
 *   - value: the value of the key from the `james` object
 *   - done: true or false if there are more keys/values
 *
 * For clarification, look at the example console.logs at the bottom of the code.
 *
 * Hints:
 *   - Use `Object.keys()` to store the object's properties in an array.
 *   - Each call to `iterator.next()` should use this array to know which property to return.
 *   - You can access the original object using `this`.
 *   - To access the values of the original object, use `this` and the key from the `Object.keys()` array.
 */

const james = {
    name: 'James',
    height: `5'10"`,
    weight: 185,
    [Symbol.iterator] : function (){
    	//let it_obj = {key:'' , value : ''};
    	//let it_obj = { };
    	//console.log(it_obj.key);
    	let keys = Object.keys(this);
    	var i = 0;
    	//console.log('key : ', Object.keys(this));
    	//console.log('this : ', this.name);
    	return{
    	next: () => {
    		return{
    			value : this[keys[i]] , key : keys[i] , done : ++i>=keys.length
    		}
    	}
    }
}
};
//let a=[];
//a.push(james.name,james.height,james.weight);
//console.log(a);
const iterator = james[Symbol.iterator]();
//
 console.log(iterator.next()); // 'James'
 console.log(iterator.next()); // `5'10`
 console.log(iterator.next()); // 185
