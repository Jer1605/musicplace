import React from "react";
import musicalStyles from '../../../../config/selects/styles';
import selectIam from '../../../../config/selects/iam';
import selectStatus from '../../../../config/selects/status';
import selectSpain from '../../../../config/selects/spain';
import Select from "react-select";

const MusicianForm = () => {
    return <form>
        <h2>Tu anuncio</h2>
        <section className={'form-section form-section-you mosaic'} data-space={4} data-size={'1/2'}>
            <div className={'mosaic-item'}>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Titulo: </label></div>
                    <div data-size={70} className={'mosaic-item'}><input className={'input'} type={'text'} placeholder={'Titulo'}/></div>
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
                <div className={'form-line mosaic'}>
                    <div data-size={30} className={'mosaic-item'}><label>Buscas: </label></div>
                    <div data-size={70} className={'mosaic-item'}>
                        <div className={'mosaic'} data-wrap={'wrap'}>
                            {selectIam.options.map((item, i) => <div className={'mosaic-item'} key={i}>
                                <input id={`${item.label}-${i}`} type="checkbox" className="checkbox mr-1" />
                                <label htmlFor={`${item.label}-${i}`}><small>{item.label}</small></label>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className={'mosaic-item'}>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Provincia: </label></div>
                    <div data-size={70} className={'mosaic-item'}><Select {...selectSpain.provinces} /></div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Foto: </label></div>
                    <div data-size={70} className={'mosaic-item'}><input className={'input'} type={'file'} placeholder={'photo'}/></div>
                </div>
            </div>
        </section>
    </form>
}

export default MusicianForm;