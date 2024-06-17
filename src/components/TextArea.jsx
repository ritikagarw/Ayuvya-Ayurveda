const TextArea = ({ placeholder, textValue, setTextValue }) => {
  return (
    <textarea
      rows="6"
      placeholder={placeholder}
      onChange={(e) => setTextValue(e.target.value)}
      value={textValue}
    ></textarea>
  );
};

export default TextArea;
