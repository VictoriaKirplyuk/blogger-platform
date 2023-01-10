import { ChangeEvent, useState } from 'react';

interface ReturnedUseInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clear: () => void;
}

export const useInput = (initialValue: string = ''): ReturnedUseInput => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  const clearValue = (): void => {
    setValue('');
  };

  return {
    value,
    onChange: handleChange,
    clear: clearValue,
  };
};
