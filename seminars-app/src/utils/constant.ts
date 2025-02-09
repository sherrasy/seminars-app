export const ApiConnectParam = {
  Url: 'http://localhost:3000/seminars',
  Timeout: 5000,
};

export const AppMessage = {
  Loading: 'Загружаем данные...',
  EmptyList: 'Нет данных о семинарах',
  ErrorLoadingList: 'Ошибка загрузки семинаров',
  ErrorLoadingSeminar: 'Ошибка загрузки данных о семинаре',
  ErrorUpdate: 'Ошибка обновления данных. Попробуйте снова',
  ErrorDelete: 'Произошла ошибка при удалении. Попробуйте снова',
} as const;

export const LabelName = {
  Title: 'Название',
  Description: 'Описание',
  Date: 'Дата',
  Time: 'Время',
} as const;

export const FormFieldName = {
    Title: 'title',
    Description: 'description',
    Date: 'date',
    Time: 'time',} as const;
