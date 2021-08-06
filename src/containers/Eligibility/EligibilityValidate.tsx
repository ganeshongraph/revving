const eligibilityValidate = [
  {
    field: 'registered_in',
    validations: ['required'],
    name: 'Country'
  },
  {
    field: 'type',
    validations: ['required'],
    name: 'Type'
  },
  {
    field: 'duration',
    validations: ['required'],
    name: 'Trade Duration'
  },
  {
    field: 'sector',
    validations: ['required'],
    name: 'Trade sector'
  }
];

export default eligibilityValidate;
