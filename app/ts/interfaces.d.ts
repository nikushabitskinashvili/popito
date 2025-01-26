interface ganre{
    id:number
    title:string
}

interface MovieCardProps{
    id:number,
    title:string,
    year:number,
    rating:number,
    ganres:ganre[],
    movieImg:string,
    duration:number
}

export interface ButtonProps {
  name?: string;
  title: string;
  className?: string;
  action: () => void;
}

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  XButton?: boolean;
  size?: "small" | "medium" | "large" | "confirm";
  h2?: string;
}

export interface askModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export interface XButtonProps {
  onClick?: () => void;
  size?: "small" | "large";
}

export interface InputModalProps {
  isModalOpen: () => void;
  isOpen: boolean;
  onSubmit: () => void;
}

export interface InputProps {
  placeholder?: string;
  size?: 'small' | 'medium' | 'large' | undefined;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;

}

export interface SelectModalProps {
  isModalOpen: () => void;
  isOpen: boolean;
  onSubmit: () => void;
}

export interface ConfirmModalProps {
  onDelete: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export interface ButtonProps {
  name?: string;
  title?: string;
  className?: string;
  background?: boolean;
  action: () => void;
}

export interface Movies {
  id: number;
  title: string;
  year: number;
  ganres:genre[];
  movieImg:string;
  rating:number;
  duration:number;
}

export interface AnswerProps {
  value: string;
  label: string;
  selectedAnswer: string | null;
  onChange: (value: string) => void;
}