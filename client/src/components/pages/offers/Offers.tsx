import React from "react";
import OffersSearch from "./OffersSearch";
import OffersList from "./OffersList";

const Offers : React.FunctionComponent = () => {
    return <section className={'offers'}>
        <section className={`intro intro-small bg-store`}>
            <h1 className={'absolute-centered text-center intro-title'}>Ofertas de material</h1>
        </section>
        <section className={'section'}>
            <div className={'container'}>
                <OffersSearch />
                <OffersList pagination={true} itemPerPage={10} />
            </div>
        </section>
    </section>
}

export default Offers;