import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import useClickOutside from '../../hooks/useClickOutside';

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

  const ref = useRef<HTMLDivElement>(null);

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

  useClickOutside(ref, () => setActive(false));

  return (
    <Container ref={ref} data-testid="select-element">
      <SelectContainer
        onClick={() => setActive(!active)}
        data-testid="select-container"
      >
        <SelectText value={selectedItem}>{selectedItem || 'Status'}</SelectText>
        <FiChevronDown size={23} />
      </SelectContainer>
      {active && (
        <OptionsContainer data-testid="select-options">
          {items.map((item, index) => (
            <Option
              onClick={() => handleOptionClick(item)}
              active={selectedItem === item.text}
              key={item.value}
              type="button"
              data-testid={`select-option${index}`}
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
