const customerValidate = [
  {
    field: 'firstName',
    validations: ['required'],
    name: 'First name'
  },
  {
    field: 'lastName',
    validations: ['required'],
    name: 'Last name'
  },
  {
    field: 'areaCode',
    validations: ['required'],
    name: 'Country code'
  },
  {
    field: 'email',
    validations: ['required', 'email'],
    name: 'Email'
  },
  {
    field: 'phone',
    validations: ['required', 'numeric', 'digit:10:11'],
    name: 'Number'
  },
  {
    field: 'password',
    validations: ['required'],
    name: 'Password'
  }
];

export default customerValidate;
