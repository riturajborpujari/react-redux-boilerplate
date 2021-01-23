import Box from '../Box';
import Input from '../Input';

const FormField = ({ label, children, padding, ...rest }) => {
  return <Box padding={padding}>
    <label>{label}</label>
    <Box>
      <Input padding={1} {...rest}/>
    </Box>
  </Box>
}

export default FormField;