import React from "react";

function SelectPercent({
  competencySelected,
  selectedPercent,
  setSelectedPercent,
}) {
  const selectHandler = (e) => {
    const val = Number(e.target.value);
    setSelectedPercent({ ...selectedPercent, [e.target.name]: val });
  };

  return (
    <div className="mt-4">
      {competencySelected.map((competency, id) => (
        <div className="mb-4 flex justify-between bg-fuchsia-200" key={id}>
          <label className="w-96" data-te-select-label-ref>
            {competency}
          </label>
          <select
            data-te-select-init
            key={id}
            name={competency}
            onChange={selectHandler}
            className="rounded-sm text-slate-600 w-4/12 h-6 ml-20"
          >
            <option value="" disabled selected>
              0%
            </option>
            <option key="10" value="10">
              10%
            </option>
            <option key="20" value="20">
              20%
            </option>
            <option key="30" value="30">
              30%
            </option>
            <option key="40" value="40">
              40%
            </option>
            <option key="50" value="50">
              50%
            </option>
            <option key="60" value="60">
              60%
            </option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default SelectPercent;
