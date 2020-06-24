import { FieldInterface } from '../constants/formFields';
import { AppStateInterface } from '../constants/appState';
import { getUserIdCookie } from '../utils';

const isNotEmpty = ({ value, isRequired }: FieldInterface) =>
  Promise.resolve(isRequired ? value?.length > 0 : true);

const isValidMaxLength = ({
  value,
  maxLength,
}: FieldInterface): Promise<boolean> => {
  return Promise.resolve(value.length <= maxLength);
};

const isDuplicatedTitle = (
  { value }: FieldInterface,
  { duplicatedTitles }: AppStateInterface
): Promise<boolean> => {
  const userId = getUserIdCookie();
  const userDuplicatedTitles = duplicatedTitles.filter(
    (duplicatedTitle) => duplicatedTitle.userId.toString() === userId
  );
  const matchedTitle = userDuplicatedTitles.find(
    ({ title }) => title === value
  );
  return Promise.resolve(!matchedTitle);
};

const isValidEmail = ({ value }: FieldInterface) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

// TODO: implement date and time validation properly (tradeoff for now)
const isValidDateAndTime = ({ value }: FieldInterface) => {
  try {
    const [date, time] = value.split('T');
    const [year, month, day] = date.split('-');
    const [hour, minute] = time.split(':');
    if (
      year.length !== 4 ||
      month.length !== 2 ||
      day.length !== 2 ||
      hour.length !== 2 ||
      minute.length !== 2 ||
      Number(month) > 12 ||
      Number(day) > 31 ||
      Number(hour) > 23 ||
      Number(minute) > 59
    ) {
      return false;
    }

    const passedDate = new Date(
      Number(year),
      Number(month),
      Number(day),
      Number(hour),
      Number(minute)
    );
    return passedDate.getTime() > new Date().getTime();
  } catch (e) {
    return false;
  }
};

export default {
  isNotEmpty,
  isValidMaxLength,
  isDuplicatedTitle,
  isValidEmail,
  isValidDateAndTime,
};
