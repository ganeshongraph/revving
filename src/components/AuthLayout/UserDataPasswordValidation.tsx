const UserDataPasswordValidate = [
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
  },
  {
    field: 'password',
    validations: ['required', 'password', 'confirm'],
    name: 'Password'
  },
  {
    field: 'passwordConfirm',
    validations: ['required'],
    name: 'Password confirm'
  }
];

export default UserDataPasswordValidate;
