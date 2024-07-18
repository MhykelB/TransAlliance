import React from "react";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

const CustomInput = ({
  type,
  variant,
  required,
  placeholder,
  onChange,
  label,
  size,
  helperText,
  fullWidth,
  formHelperText,
  formControlStyle,
  ...rest
}) => {
  const id = placeholder + label + ".";
  if (type === "file") {
    return (
      <div className="input-textfield">
        <input
          type={type}
          className="input-filed-upload"
          required={required}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
        <label htmlFor={id} className="label">
          {label}
        </label>
      </div>
    );
  }

  return (
    <FormControl
      variant={variant ? variant : "outlined"}
      fullWidth={fullWidth}
      sx={formControlStyle}
    >
      <InputLabel size={size} htmlFor={id}>
        {label}
      </InputLabel>
      {variant === "standard" ? (
        <Input
          type={type ? type : "text"}
          required={required}
          id={id}
          fullWidth={fullWidth}
          placeholder={placeholder}
          onChange={onChange}
          label={label}
          size={size}
          {...rest}
        />
      ) : (
        <OutlinedInput
          type={type ? type : "text"}
          required={required}
          id={id}
          fullWidth={fullWidth}
          placeholder={placeholder}
          onChange={onChange}
          label={label}
          size={size}
          {...rest}
        />
      )}
      {formHelperText && (
        <FormHelperText id="outlined-weight-helper-text" color="error">
          {formHelperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomInput;
