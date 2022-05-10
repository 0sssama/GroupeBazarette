import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import Select from "react-select";

function Label({ label, subLabel, required }) {
  return (
    <div className="input-label w-full flex items-center justify-between">
      <div className="flex items-center col-gap-s">
        {required && <p className="required">*</p>}
        {label && <p className="label">{label}</p>}
      </div>
      {subLabel && <p className="sub-label">{subLabel}</p>}
    </div>
  );
}

function CheckBox({
  className,
  required,
  checked,
  onChange,
  name,
  disabled,
  ref,
  label,
}) {
  return (
    <div
      className={`checkbox ${className} flex items-center justify-start col-gap`}
    >
      <input
        type="checkbox"
        required={required}
        checked={checked}
        onChange={onChange}
        name={name}
        disabled={disabled}
        ref={ref}
      />
      {label && <p className="label">{label}</p>}
    </div>
  );
}

function parsedOptions(options) {
  let arr = [];
  options.forEach((option) => {
    arr.push({
      value: option.toLowerCase(),
      label: option,
    });
  });
  return arr;
}

function Input({
  type,
  HTMLtype,
  placeholder,
  required,
  name,
  value,
  onChange,
  disabled,
  className,
  classNameContainer,
  error,
  label,
  subLabel,
  ref,
  options,
  minLength,
  maxLength,
}) {
  switch (type) {
    case "textarea":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {(label || subLabel) && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <textarea
            className={`w-full ${className} ${error ? "error" : ""}`}
            type={HTMLtype}
            placeholder={placeholder}
            required={required}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
            minLength={minLength}
            maxLength={maxLength}
          ></textarea>
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "select":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {(label || subLabel) && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <Select
            options={parsedOptions(options)}
            className={`react-select w-full ${className} ${
              error ? "error" : ""
            }`}
            classNamePrefix="react-select"
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            type={HTMLtype}
            ref={ref}
            instanceId="snagat"
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "file":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {(label || subLabel) && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <input
            className={`w-full ${className} ${error ? "error" : ""}`}
            type="file"
            required={required}
            name={name}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "checkbox":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          <CheckBox
            className={`w-full ${className} ${error ? "error" : ""}`}
            required={required}
            checked={value}
            onChange={onChange}
            name={name}
            disabled={disabled}
            ref={ref}
            label={label}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "phone":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {(label || subLabel) && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <PhoneInput
            className={`w-full ${className} ${error ? "error" : ""}`}
            country={"ng"}
            placeholder={placeholder}
            required={required}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
            minLength={minLength}
            maxLength={maxLength}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    case "date":
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {(label || subLabel) && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <input
            className={`w-full ${className} ${error ? "error" : ""}`}
            type="date"
            required={required}
            value={value}
            onChange={onChange}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
    default:
      return (
        <div className={`input w-full ${classNameContainer}`}>
          {(label || subLabel) && (
            <Label label={label} subLabel={subLabel} required={required} />
          )}
          <input
            className={`w-full ${className} ${error ? "error" : ""}`}
            type={HTMLtype}
            placeholder={placeholder}
            required={required}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
            minLength={minLength}
            maxLength={maxLength}
          />
          {error && <p className="input-error">{error}</p>}
        </div>
      );
  }
}

export default Input;
