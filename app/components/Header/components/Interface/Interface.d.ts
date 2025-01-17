interface navbarItemProps {
  active: boolean;
  pathname: string;
  title: string;
}
export interface headerInputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'file';
  placeholder?: string;
  value?: string | number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
