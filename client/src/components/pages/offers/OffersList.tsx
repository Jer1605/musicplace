import React from "react";
import List from "../../common/List";
import OfferItem from "./OfferItem";

type OffersProps = {
    title?: string,
    itemPerPage?: number,
    pagination?: boolean,
    columns?: number,
    preview?: boolean,
}

const OffersList : React.FunctionComponent<OffersProps> = ({title, itemPerPage, columns, preview, pagination} : OffersProps) => {
    return(
        <div className={'offers'}>
            {title ? <h1>{title}</h1> : null}
            <List className={'musicians-list'} itemPerPage={itemPerPage} columns={columns} pagination={pagination}>
                <OfferItem preview={preview}/>
                <OfferItem preview={preview}/>
                <OfferItem preview={preview}/>
            </List>
        </div>
    )
}

export default OffersList;