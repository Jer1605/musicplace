import React from "react";
import musicalStyles from '../../../../config/selects/styles';
import selectDays from '../../../../config/selects/days';
import selectSpain from '../../../../config/selects/spain';
import Select from "react-select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ImageUploader from "../../../common/ImageUploader";

type ShowProps = {
    jamSession?: boolean,
}

const ShowForm : React.FunctionComponent<ShowProps> = ({jamSession}: ShowProps) => {

    return <form>
        <h2>Tu {jamSession ? 'Jam session' : 'concierto'}</h2>
        <section className={'form-section form-section-you mosaic'} data-space={4} data-size={'1/2'}>
            <div className={'mosaic-item'}>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Titulo: </label></div>
                    <div data-size={70} className={'mosaic-item'}><input className={'input'} type={'text'} placeholder={'Titulo'}/></div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Precio: </label></div>
                    <div data-size={70} className={'mosaic-item'}>
                        <div className={'input-icon'}>
                            <FontAwesomeIcon icon={['fas', 'euro-sign']} />
                            <input className={'input'} type={'number'} placeholder={'10'}/>
                        </div>
                    </div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Descripcion: </label></div>
                    <div data-size={70} className={'mosaic-item'}><textarea className={'input'} placeholder={'Description...'} /></div>
                </div>
                <div className={'form-line mosaic'}>
                    <div data-size={30} className={'mosaic-item'}><label>Estilos: </label></div>
                    <div data-size={70} className={'mosaic-item'}>
                        <div className={'mosaic'} data-wrap={'wrap'}>
                            {musicalStyles.map((item, i) => <div className={'mosaic-item'} key={i}>
                                <input id={`${item}-${i}`} type="checkbox" className="checkbox mr-1" />
                                <label htmlFor={`${item}-${i}`}><small>{item}</small></label>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className={'mosaic-item'}>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Fecha: </label></div>
                    <div data-size={70} className={'mosaic-item'}>
                        <div className={'mosaic'} data-valign={'center'}>
                            <div className={"mosaic-item"} data-size={60}>{jamSession ? <Select {...selectDays} /> : <input className={'input'} type={'date'}/>}</div>
                            <div className={"mosaic-item"} data-size={40}><input type="time" step="3600000" /></div>
                        </div>
                    </div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Provincia: </label></div>
                    <div data-size={70} className={'mosaic-item'}><Select {...selectSpain.provinces} /></div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Direccion: </label></div>
                    <div data-size={70} className={'mosaic-item'}>
                        <div className={'input-icon'}>
                            <input className={'input'} type={'text'} placeholder={'Direccion'}/>
                            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                        </div>
                    </div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Foto: </label></div>
                    <div data-size={70} className={'mosaic-item'}><ImageUploader /></div>
                </div>
            </div>
        </section>
    </form>
}

export default ShowForm;