import { useState } from "react";

const Form = ({ onaAddItems }) => {
  const [description, setDescription] = useState("");
  const [quant, setQuant] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity: quant,
      packed: false,
      id: Date.now(),
    };

    onaAddItems(newItem);

    setDescription("");
    setQuant(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select value={quant} onChange={(e) => setQuant(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        tpe="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
