import React from "react";
import OfferItem from "./OfferItem";

type OffersProps = {
    length?: number,
    columns?: number,
}

const Offers : React.FunctionComponent<OffersProps> = ({length, columns} : OffersProps) => {
    return(
        <div className={'offers'}>
            <h1>Ofertas</h1>
            <section className={`grid grid-cols-${columns || 1} gap-10`}>
                <OfferItem />
                <OfferItem />
                <OfferItem />
            </section>
        </div>
    )
}

export default Offers;