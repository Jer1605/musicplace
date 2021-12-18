import React from "react";
import ClassesSearch from "./ClassesSearch";
import ClassesList from "./ClassesList";

const Classes : React.FunctionComponent = () => {
    return <section className={'classes'}>
        <section className={`intro intro-small bg-5`}>
            <h1 className={'absolute-centered text-center intro-title'}>Cursos y profesores</h1>
        </section>
        <section className={'section'}>
            <div className={'container'}>
                <ClassesSearch />
                <ClassesList pagination={true} itemPerPage={10} />
            </div>
        </section>
    </section>
}

export default Classes;