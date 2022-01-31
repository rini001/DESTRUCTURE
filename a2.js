let object={  name: 'masai', address: {  pincode: 560095 }  }

const { address: { pincode: pin } } = object;

console.log(pin);

object.address.pin=object.address.pincode
delete object.address.pincode

console.log(object)

