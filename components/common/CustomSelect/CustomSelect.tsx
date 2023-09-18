'use client'

import { FC, useState } from "react";
import ReactSelect from "react-select";

interface IOptions {
  value: string, 
  label: string 
}

type Props = {
  classNamePrefix: string;
  options: IOptions[];
  placeholder: string;
}

export const CustomSelect: FC<Props> = ({
  classNamePrefix,
  options,
  placeholder
}) => {
  const [currentFlat, setCurrentFlat] = useState('');

  const getValue = () => {
    return currentFlat ? options
      .find(flat => flat.value === currentFlat) : ''
  }

  const onChange = (newValue:any) => {
    setCurrentFlat(newValue.value);
  }

  return (
    <ReactSelect
      classNamePrefix={classNamePrefix}
      options={options}
      placeholder={placeholder}
      value={getValue()}
      onChange={onChange}
    />
  )
}