interface ganre{
    id:number
    title:string
}

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
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