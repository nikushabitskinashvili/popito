interface ganre{
    id:number
    title:string
}

interface MovieCard{
    id:number,
    title:string,
    year:number,
    rating:number,
    ganres:ganre[],
    movieImg:string,
    duration:number
}


interface ButtonProps {
  openModal: () => void;
}

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
