import React from "react";
import OffersSearch from "./OffersSearch";
import OffersList from "./OffersList";

const Offers : React.FunctionComponent = () => {
    return <section className={'offers'}>
        <section className={`intro intro-small bg-12`}>
            <h1 className={'absolute-centered text-center intro-title'}>Encuentra tu nueva guitara</h1>
        </section>
        <section className={'section'}>
            <div className={'container'}>
                <h1>Ofertas de material</h1>
                <OffersSearch />
                <OffersList pagination={true} itemPerPage={10} />
            </div>
        </section>
    </section>
}

export default Offers;