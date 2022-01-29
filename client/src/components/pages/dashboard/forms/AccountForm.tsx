import React from "react";
import musicalStyles from '../../../../config/selects/styles';
import selectIam from '../../../../config/selects/iam';
import selectStatus from '../../../../config/selects/status';
import selectSpain from '../../../../config/selects/spain';
import Select from "react-select";
import ImageUploader from "../../../common/ImageUploader";

const AccountForm = () => {
    return <form>
        <h2>Sobre tu</h2>
        <section className={'form-section form-section-you mosaic'} data-space={4} data-size={'1/2'}>
            <div className={'mosaic-item'}>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Civilidad: </label></div>
                    <div className={'mosaic-item'}>
                        <input id={'civ-1'} type={'radio'} className="radio mr-05" name={'civ'} />
                        <label htmlFor={`civ-1`}><small>Sra</small></label>
                    </div>
                    <div className={'mosaic-item'}>
                        <input id={'civ-2'} type={'radio'} className="radio mr-05" name={'civ'} />
                        <label htmlFor={`civ-2`}><small>Sr</small></label>
                    </div>
                    <div className={'mosaic-item'}>
                        <input id={'civ-3'} type={'radio'} className="radio mr-05" name={'civ'} />
                        <label htmlFor={`civ-3`}><small>Otro</small></label>
                    </div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Nombre: </label></div>
                    <div data-size={70} className={'mosaic-item'}><input className={'input'} type={'text'} placeholder={'Nombre'}/></div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Apelidos: </label></div>
                    <div data-size={70} className={'mosaic-item'}><input className={'input'} type={'text'} placeholder={'Apelidos'}/></div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Fecha de nacimiento: </label></div>
                    <div data-size={70} className={'mosaic-item'}><input className={'input'} type={'date'} /></div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>City: </label></div>
                    <div data-size={70} className={'mosaic-item'}><Select {...selectSpain.provinces} /></div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Codigo postal: </label></div>
                    <div data-size={70} className={'mosaic-item'}><input className={'input'} type={'text'} placeholder={'Zipcode'}/></div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Téléfono: </label></div>
                    <div data-size={70} className={'mosaic-item'}><input className={'input'} type={'text'} placeholder={'Phone'}/></div>
                </div>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Descripcion: </label></div>
                    <div data-size={70} className={'mosaic-item'}><textarea className={'input'} placeholder={'Description...'} /></div>
                </div>
            </div>
            <div className={'mosaic-item'}>
                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Foto: </label></div>
                    <div data-size={70} className={'mosaic-item'}><ImageUploader /></div>
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
                    <div data-size={30} className={'mosaic-item'}><label>Instrumentos: </label></div>
                    <div data-size={70} className={'mosaic-item'}>
                        <div className={'mosaic'} data-wrap={'wrap'}>
                            {selectIam.options.map((item, i) => <div className={'mosaic-item'} key={i}>
                                <input id={`${item.label}-${i}`} type="checkbox" className="checkbox mr-1" />
                                <label htmlFor={`${item.label}-${i}`}><small>{item.label}</small></label>
                            </div>)}
                        </div>
                    </div>
                </div>

                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Status: </label></div>
                    <div data-size={70} className={'mosaic-item'}><Select {...selectStatus} /></div>
                </div>

                <div className={'form-line mosaic'} data-valign={'center'}>
                    <div data-size={30} className={'mosaic-item'}><label>Disponibilidad: </label></div>
                    <div className={'mosaic-item'}>
                        <input id={'disp-1'} type={'radio'} className="radio mr-05" name={'disp'} />
                        <label htmlFor={`disp-1`}><small>Busco grupo</small></label>
                    </div>
                    <div className={'mosaic-item'}>
                        <input id={'disp-2'} type={'radio'} className="radio mr-05" name={'disp'} />
                        <label htmlFor={`disp-2`}><small>No disponible</small></label>
                    </div>
                </div>

            </div>
        </section>
    </form>
}

export default AccountForm;