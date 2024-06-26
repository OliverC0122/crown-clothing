import {FormInputLabel,Input,Group} from './form-input.styles.jsx'
const FormInput = ({label,...otherProps}) => { 
    return (
        <Group>
            {/* if there exists some other props then we add a class name shrink */}
            <Input className="form-input" {...otherProps}/>
            { label && 
                (<FormInputLabel>{label}</FormInputLabel>)
            }
        </Group>
    )
}

export default FormInput;