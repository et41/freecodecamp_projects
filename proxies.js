/*const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
        return target[propName];

    }
};
const agent = new Proxy(richard, handler);

console.log(agent.status);*/
/*

const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        return `He's following many leads, so you should offer a contract as soon as possible!`;
    }
};
const agent = new Proxy(richard, handler);
console.log(agent.status);
// returns the text `He's following many leads, so you should offer a contract as soon as possible!`
*/
const richard = {status: 'looking for work'};
const handler = {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent = new Proxy(richard, handler);
agent.payRate = 1000; // set the actor's pay to $1,000
console.log(agent.payRate); // $850 the actor's actual pay

const proxyObj = new Proxy ({age : 5 , height : 4 }, {
	get(targetObj , property){
		console.log(`getting the ${property} property`);
		console.log(targetObj[property]);
	}
});
proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4
proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120