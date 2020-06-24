import { OptionInterface } from '../constants/formFields';
import { getUserIdCookie } from '../utils';
import { AppStateInterface } from '../constants/appState';

export const mapCategoryOptions = (
  categoryOptions: {
    id: string;
    name: string;
  }[]
): OptionInterface[] =>
  categoryOptions.map((category) => ({
    name: category.name,
    value: category.id,
  }));

// map and filter options, user with id equals to userId from cookie becomes the first
export const mapAndFilterResponsibleOptions = (
  responsibleOptions: {
    id: string;
    name: string;
    lastname: string;
    email: string;
  }[]
): (OptionInterface & { email: string })[] => {
  const userId = getUserIdCookie();
  const currentUserOption = responsibleOptions.find(
    (option) => option.id.toString() === userId
  );
  const otherUsersOptions = responsibleOptions.filter(
    (option) => option.id.toString() !== userId
  );

  return [currentUserOption, ...otherUsersOptions].map((responsible) => {
    const { id, name, lastname: lastName, email } = responsible;
    return {
      name: `${name} ${lastName}`,
      value: id,
      email,
    };
  });
};

export const mapStateToRequest = (state: AppStateInterface) => {
  const {
    title,
    description,
    category,
    paidEvent,
    fee,
    reward,
    startsOn,
    duration,
    email,
    responsible,
  } = state.fields;
  return {
    title: title.value,
    description: description.value,
    category_id: Number(category.value) || 0,
    paid_event: paidEvent.value === 'paid',
    event_fee: Number(fee.value) || 0,
    reward: Number(reward.value) || 0,
    date: startsOn.value,
    duration: Number(duration.value) || 0, // in seconds
    coordinator: {
      email: email.value,
      id: responsible.value,
    },
  };
};
