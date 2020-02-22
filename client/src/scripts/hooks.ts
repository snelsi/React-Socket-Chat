import { useState, Dispatch, SetStateAction } from "react";

/**
 * Хук возвращает useState и дополнительный метод для прямой работы с input
 */
export const useInput = (
  initialValue: any = ""
): [any, Dispatch<SetStateAction<any>>, (e: any) => void] => {
  const [value, setValue] = useState(initialValue);
  const updateState = e => {
    setValue(e.target.value);
  };
  return [value, setValue, updateState];
};
