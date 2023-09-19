import { FC } from "react";
import "./HeaderSelect.scss";
import { CustomSelect } from "@/components/common/CustomSelect/CustomSelect";

let options = [
  { 
    value: 'Квартира 1', 
    label: 'Квартира 1' 
  },
  { 
    value: 'Квартира 2', 
    label: 'Квартира 2' 
  },
  { 
    value: 'Квартира 3', 
    label: 'Квартира 3' 
  },
  { 
    value: 'Квартира 4', 
    label: 'Квартира 4' 
  }
]

export const HeaderSelect: FC = () => {
  return (
    <CustomSelect
      classNamePrefix="header_subpanel_select"
      options={options}
      placeholder="Выбрать квартиру"
    />
  )
}