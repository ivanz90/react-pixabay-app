export interface ITextInput extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  style?: React.CSSProperties;
  onBlur?: ({target}: {target: EventTarget | null}) => void;
}