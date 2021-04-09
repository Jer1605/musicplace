import React from 'react';
import ClassItem from "./ClassItem";

type ClassesProps = {
    length?: number,
    columns?: number,
}

const Classes : React.FunctionComponent<ClassesProps> = ({length, columns} : ClassesProps) => {
    return (
        <div className={'musicians'}>
            <h1>Cursos</h1>
            <section className={`grid grid-cols-${columns || 1} gap-10`}>
                <ClassItem />
                <ClassItem />
                <ClassItem />
            </section>
        </div>
    )
}

export default Classes;