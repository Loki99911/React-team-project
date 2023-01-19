
export const Translator = name => {
  switch (name.trim()) {
    case 'Продукты':
      return 'Products';
    case 'Алкоголь':
      return 'Alcohol';
    case 'Развлечения':
      return 'Entertainment';
    case 'Здоровье':
      return 'Health';
    case 'Транспорт':
      return 'Transport';
    case 'Всё для дома':
      return 'Housing';
    case 'Техника':
      return 'Technics';
    case 'Коммуналка и связь':
      return 'Communal and communication';
    case 'Спорт и хобби':
      return 'Sport and hobby';
    case 'Образование':
      return 'Education';
    case 'Прочее':
      return 'Other';
    case 'З/П':
      return 'Salary';
    case 'Доп. доход':
      return 'Additional income';
    case 'Products':
      return 'Продукты';
    case 'Alcohol':
      return 'Алкоголь';
    case 'Entertainment':
      return 'Развлечения';
    case 'Health':
      return 'Здоровье';
    case 'Transport':
      return 'Транспорт';
    case 'Housing':
      return 'Всё для дома';
    case 'Technics':
      return 'Техника';
    case 'Communal and communication':
      return 'Коммуналка и связь';
    case 'Sport and hobby':
      return 'Спорт и хобби';
    case 'Education':
      return 'Образование';
    case 'Other':
      return 'Прочее';
    case 'Salary':
      return 'З/П';
    case 'Additional income':
      return 'Доп. доход';
    default:
      break;
  }
};