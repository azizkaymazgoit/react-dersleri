const Select = ({ dil, setDil }) => {
  const handleSelect = (e) => {
    setDil(e.target.value);
    console.log(dil);
  };

  return (
    <select defaultValue={dil} onChange={handleSelect}>
      <option value="tr">Türkçe</option>
      <option value="en">İngilizce</option>
    </select>
  );
};

export default Select;
