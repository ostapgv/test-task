export default {
  fallback: {
    isNotEmpty: 'The field cannot be empty.',
    isValidMaxLength: 'Max field length exceeded',
  },
  fields: {
    title: {
      isNotEmpty: 'Title cannot be empty.',
    },
    description: {
      isNotEmpty: 'Description cannot be empty.',
      isValidMaxLength: 'Description max length exceeded.',
    },
  },
};
