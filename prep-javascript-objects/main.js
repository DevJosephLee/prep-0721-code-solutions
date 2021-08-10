var person = {
  firstName: 'Joseph',
  lastName: 'Lee',
  hobby: 'Playing with dog!'
};

console.log(person);

var fullName = `The person's name is: ${person.firstName} ${person.lastName}.`;

console.log(fullName);

person.job = 'professional snuggler';

var job = `The person's current job is : ${person.job}.`;
console.log(job);

person.previousJob = 'bread scientist';

var previousJob = `The person's previous job is: ${person.previousJob}`;
console.log(previousJob);

console.log('The complete person object: ', person);
