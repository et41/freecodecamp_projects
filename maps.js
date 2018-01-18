const first_map = new Map();
first_map.set ( 'james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
first_map.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
console.log(first_map);
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);
console.log(members);
console.log(members.has('Xavier'));
console.log(members.has('Marcus'));
console.log(members.get('Evelyn'));
let iteratorObjForKeys = members.values();//members.keys();
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());
for (const member of members){
	let [x,y] = member;
	console.log('x: ', x);
	console.log('y : ', y );
}
members.forEach((key,value) => console.log('key :' , key , 'value :' , value));