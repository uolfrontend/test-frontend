import React, { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import {
  SelectContainer,
  Container,
  Option,
  OptionsContainer,
  SelectText,
} from './styles';

interface ItemData {
  value: string;
  text: string;
}

interface Props {
  items: ItemData[];
  setValue: React.Dispatch<React.SetStateAction<any>>;
  defaultValue?: string;
}

const Select: React.FC<Props> = ({ items, setValue, defaultValue }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [active, setActive] = useState(false);

  const handleOptionClick = (item: ItemData) => {
    setActive(false);
    setSelectedItem(item.text);
    setValue(item.value);
  };

  useEffect(() => {
    const findItem = items.find((item) => item.value === defaultValue);

    if (findItem) {
      setSelectedItem(findItem.text);
    }
  }, [defaultValue]);

  return (
    <Container>
      <SelectContainer onClick={() => setActive(!active)}>
        <SelectText value={selectedItem}>{selectedItem || 'Status'}</SelectText>
        <FiChevronDown size={23} />
      </SelectContainer>
      {active && (
        <OptionsContainer>
          {items.map((item) => (
            <Option
              onClick={() => handleOptionClick(item)}
              active={selectedItem === item.text}
              key={item.value}
            >
              {item.text}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
};

export default Select;
