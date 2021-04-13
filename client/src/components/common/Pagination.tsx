import React from "react";
import '../../scss/components/pagination.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type PaginationProps = {
    total: number,
    itemPerPage?: number,
}

const Pagination : React.FunctionComponent<PaginationProps> = ({total, itemPerPage} : PaginationProps) => {
    itemPerPage = itemPerPage || 10;
    const [config, setConfig] = React.useState({
        currentPage: 0,
        itemPerPage,
        total,
        pages: Math.ceil(total / itemPerPage),
    });

    return <div className={'pagination mosaic'} data-halign={'center'}>
        <div className={'mosaic-item'}><button className={'astyle pagination-previous'}><FontAwesomeIcon icon={['fas', 'chevron-left']} /></button></div>
        <div className={'mosaic-item pagination-pages'}>
            <div className={'mosaic'} data-valign={'center'} data-space={0}>
                <div className={'mosaic-item'}><button className={'astyle pagination-page'}>1</button></div>
                <div className={'mosaic-item'}><button className={'astyle pagination-page'}>2</button></div>
                <div className={'mosaic-item'}><button className={'astyle pagination-page'}>3</button></div>
                <div className={'mosaic-item'}><button className={'astyle pagination-page'}>...</button></div>
                <div className={'mosaic-item'}><button className={'astyle pagination-page'}>4</button></div>
            </div>
        </div>
        <div className={'mosaic-item'}><button className={'astyle pagination-next'}><FontAwesomeIcon icon={['fas', 'chevron-right']} /></button></div>
    </div>
}

export default Pagination;