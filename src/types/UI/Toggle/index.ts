export type ToggleProps = {
  id: string;
  value: boolean;
  onChange?: (checked: boolean) => void;
  textColor?: string;
  disabled?: boolean;
  title?: string;
};
