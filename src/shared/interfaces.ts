export interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  style?: any;
  onBlur?: ({target}: {target: EventTarget | null}) => void;
}