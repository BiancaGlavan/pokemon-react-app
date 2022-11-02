import "./Pagination.scss";

interface IPropsPagination {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination = (props: IPropsPagination) => {

    const {totalPages, currentPage, onPageChange} = props;
    const changePage = (newPage: number) => {
        onPageChange(newPage);
    }

    /**
     * 
     * @returns array of JSX button elements (page buttons)
     */
    const getPages = () => {
        let pages = [];
        if(totalPages < 10) {
            for(let i = 1; i <= totalPages; i++) {
                let newButton = <button className={`page-btn ${currentPage === i ? 'active' : ''}`} onClick={() => changePage(i)}>{i}</button>;
                pages.push(newButton);
            }
        }

        if(totalPages > 10) {
            if(currentPage + 4 >= totalPages) {
                let firstPage = <button className={`page-btn`} onClick={() => changePage(1)}>{1}</button>;
                pages.push(firstPage);
                pages.push(<span className="more">...</span>);
                for(let i = totalPages - 6; i <=totalPages; i++) {
                    let newButton = <button className={`page-btn ${currentPage === i ? 'active' : ''}`} onClick={() => changePage(i)}>{i}</button>;
                    pages.push(newButton);
                }
            }
            else if(currentPage <= 5) {
                for(let i = 1; i <= 7; i++) {
                    let newButton = <button className={`page-btn ${currentPage === i ? 'active' : ''}`} onClick={() => changePage(i)}>{i}</button>;
                    pages.push(newButton);
                }
                pages.push(<span className="more">...</span>);
                
                let lastPage = <button className={`page-btn`} onClick={() => changePage(totalPages)}>{totalPages}</button>;
                pages.push(lastPage);
            } else {
                let firstPage = <button className={`page-btn`} onClick={() => changePage(1)}>{1}</button>;
                pages.push(firstPage);
                pages.push(<span className="more">...</span>);
                for(let i = currentPage - 2; i <= currentPage + 2; i++) {
                    let newButton = <button className={`page-btn ${currentPage === i ? 'active' : ''}`} onClick={() => changePage(i)}>{i}</button>;
                    pages.push(newButton);
                }
                pages.push(<span className="more">...</span>);
                let lastPage = <button className={`page-btn`} onClick={() => changePage(totalPages)}>{totalPages}</button>;
                pages.push(lastPage);
            }
        }

        return pages;

    }

    const handleChangePage = (direction: string) => {
        if(direction == 'prev') {
            if(currentPage > 1) {
                let prev = currentPage - 1;
                onPageChange(prev);
            }
        } else {
            if(currentPage < totalPages) {
                let next = currentPage + 1;
                onPageChange(next);
            }
        }
        
    }

    return <div className="pagination">
        <button onClick={() => handleChangePage('prev')} className="navigation-btn"><svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93"><path fill-rule="nonzero" d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z"/></svg></button>
        {getPages()}
        <button onClick={() => handleChangePage('next')} className="navigation-btn"><svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 319 511.61"><path d="M48.92 505.72 5.88 462.68c-7.85-7.85-7.83-20.72 0-28.54l178.35-178.35L5.88 77.44c-7.85-7.85-7.8-20.73 0-28.54L48.92 5.87c7.83-7.82 20.71-7.82 28.54 0l192.25 192.26.37.36 43.04 43.03c7.82 7.84 7.86 20.69 0 28.54l-43.04 43.04-.37.36L77.46 505.72c-7.85 7.86-20.68 7.86-28.54 0z"/></svg></button>
        
        
    </div>
}

export default Pagination;