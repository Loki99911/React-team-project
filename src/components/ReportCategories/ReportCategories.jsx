// import { useSelector } from "react-redux"
// import {getExpencesReportData} from "../../redux/Transaction/transactionSelectors"

// import { useSelector } from "react-redux"
// import { getExpencesReportData } from "redux/Transaction/transactionSelectors"

export default function ReportCategories({onChange}) {

  // const data = useSelector(getExpencesReportData)
  // console.log(data)

    return (
      <><p>{onChange === "expenses"? `expenses`: `income`}</p></>
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

// const TrimCategories = categories.map(category => category.replace(/ /g,''))
// console.log(TrimCategories)
