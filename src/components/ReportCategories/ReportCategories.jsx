export default function ReportCategories() {
    return (
        <p>Expenses
        </p>
    )
}


const categories = [
  "Продукты",
  "Алкоголь",
  "Развлечения",
  "Здоровье",
  "Транспорт",
  "Всё для дома",
  "Техника",
  "Коммуналка и связь",
  "Спорт и хобби",
  "Образование",
  "Прочее"
]

const TrimCategories = categories.map(category => category.replace(/ /g,''))
// console.log(TrimCategories)
