import React from "react";

function TextArea({
  competencySelected,
  setCompetencyFilled,
  competencyFilled,
}) {
  const addCompetency = (e) => {
    const val = e.target.value;
    setCompetencyFilled({ ...competencyFilled, [e.target.name]: val });
  };
  return (
    <>
      {competencySelected.map((competency) => (
        <div className="p-4">
          <label className="inline-block pb-2 hover:cursor-pointer">
            {competency}
          </label>
          <textarea
            className="textarea textarea-bordered h-28 min-w-full p-2 text-clip overflow-hidden required:border-red-500"
            placeholder="Competency Details..."
            name={competency}
            // value={competency}
            onChange={addCompetency}
            type="text"
            required
          ></textarea>
        </div>
      ))}
    </>
  );
}

export default TextArea;
