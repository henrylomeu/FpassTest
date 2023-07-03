import {PaginationContainer,PaginationButton} from './PaginationStyles'

interface PaginationProps {
  heroesPerPage: number;
  totalHeroes: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ heroesPerPage, totalHeroes, paginate }) => {
  const pageNumbers = Math.ceil(totalHeroes / heroesPerPage);

  return (
    <PaginationContainer>
      {Array.from({ length: pageNumbers }).map((_, index) => (
        <PaginationButton key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination