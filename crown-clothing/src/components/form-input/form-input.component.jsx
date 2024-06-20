import './form-input.style.scss'
const FormInput = ({label,...otherProps}) => { 
    return (
        <div className="group">
            {/* if there exists some other props then we add a class name shrink */}
            <input className="form-input" {...otherProps}/>
            { label && 
                (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label` }>{label}</label>)
            }
        </div>
    )
}

export default FormInput;