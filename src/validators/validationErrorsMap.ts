export default {
  fallback: {
    isNotEmpty: 'The field cannot be empty.',
    isValidMaxLength: 'Max field length exceeded',
    isValidEmail: 'Email is not valid',
  },
  fields: {
    title: {
      isNotEmpty: 'Title cannot be empty.',
      isDuplicatedTitle: 'Title already exists.',
    },
    description: {
      isNotEmpty: 'Description cannot be empty.',
      isValidMaxLength: 'Description max length exceeded.',
    },
    fee: {
      isNotEmpty: 'Fee cannot be empty.',
    },
    startsOn: {
      isValidDateAndTime: 'Invalid date or time provided',
    },
  },
};
