import { BUTTON, CHECKBOX, INPUT, RADIO_BUTTON, SELECT, SPAN } from '../../../../core/constants/custom-table-styles';

export interface TableColumn {
  name: string;
  dataKey: string;
  position?: 'right' | 'left';
  isSortable?: boolean;
  hasCustomStyle?: boolean;
  customStyle?: CustomStyle;
  statusKey?: true | false;
}

export class CustomStyle {
  type?: typeof BUTTON |
    typeof CHECKBOX |
    typeof INPUT |
    typeof RADIO_BUTTON |
    typeof SELECT |
    typeof SPAN;
  cssClass: string = '';
}