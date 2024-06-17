import React from "react";

const TraitButton = ({ trait, traits, setTraits }) => {
  const toggle = () => {
    setTraits((prev) =>
      prev.includes(trait) ? prev.filter((t) => t !== trait) : [...prev, trait]
    );
  };
  return (
    <>
      {traits.includes(trait) ? (
        <div className="trait-button selected" onClick={toggle}>
          {trait}
        </div>
      ) : (
        <div className="trait-button not-selected" onClick={toggle}>
          {trait}
        </div>
      )}
    </>
  );
};

export default TraitButton;
