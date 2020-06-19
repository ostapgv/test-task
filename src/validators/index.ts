export const isNotEmpty = (value: string): boolean => value.length > 0;

export const createIsValidMaxLength = (maxLength: number) => (
  value: string
): boolean => value.length <= maxLength;
