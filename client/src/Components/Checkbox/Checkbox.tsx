import { CheckboxContainer } from './CheckboxContainer';
import { HiddenCheckbox } from './HiddenCheckbox';
import { VisibleCheckbox } from './VisibleCheckbox';
import { Icon } from './Icon';

export const Checkbox = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <VisibleCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </VisibleCheckbox>
  </CheckboxContainer>
);
