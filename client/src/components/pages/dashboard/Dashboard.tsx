import React from "react";
import DashboardMenu from "./DashboardMenu";
import AccountForm from "./forms/AccountForm";


const Dashboard: React.FunctionComponent = () => {
    return <section className={'dashboard'}>
        <section className={`intro intro-small bg-yawil`}>
            <h1 className={'absolute-centered text-center intro-title'}>Dashboard</h1>
        </section>
        <section className={'section'}>
            <div className={'container'}>
                <DashboardMenu />
                <AccountForm />
            </div>
        </section>
    </section>
}

export default Dashboard;