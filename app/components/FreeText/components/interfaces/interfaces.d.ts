interface TextInputProps {
  onAddText: (inputText: string) => void;
}
interface TextProps {
  text: string;
}

interface TextListProps {
  text: text[];
}

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'file';
  placeholder?: string;
  value?: string | number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

interface Props {
  active: boolean;
  pathname: string;
  title: string;
}

interface Text {
  id: number;
  text: string;
}
