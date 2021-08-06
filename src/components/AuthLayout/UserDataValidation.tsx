const UserDataValidate = [
  {
    field: 'firstName',
    validations: ['required'],
    name: 'First Name'
  },
  {
    field: 'lastName',
    validations: ['required'],
    name: 'Last Name'
  },
  {
    field: 'email',
    validations: ['required', 'email'],
    name: 'Email'
  }
];

export default UserDataValidate;
