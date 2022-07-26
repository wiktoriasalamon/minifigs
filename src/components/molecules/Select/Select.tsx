import ReactSelect from 'react-select';
import { Label } from '../../atoms/Label';
import { Option } from './types';
import { Wrapper } from './Select.styles';

interface SelectProps {
  options: Option[];
  id: string;
  label: string;
}

export const Select: React.FC<SelectProps> = ({ options, id, label }) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <ReactSelect options={options} />
  </Wrapper>
);
