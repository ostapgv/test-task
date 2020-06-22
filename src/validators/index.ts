const isNotEmpty = (name: string, value: string) =>
  Promise.resolve(value.length > 0);

const isValidMaxLength = (
  name: string,
  value: string,
  maxLength: number
): Promise<boolean> => {
  return Promise.resolve(value.length <= maxLength);
};

export default {
  isNotEmpty,
  isValidMaxLength,
};
