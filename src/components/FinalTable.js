import React from "react";

function FinalTable({ data }) {
  console.log(data);
  return (
    <div className="flex">
      <table className="w-1/2 ml-6 border-separate border-spacing-2 border border-slate-400">
        <tbody>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300">First Name</td>
            <td className="border p-2 w-2/3 border-slate-300">{data.first}</td>
          </tr>

          <tr>
            <td className="border p-2 w-1/3 border-slate-300">Email</td>
            <td className="border p-2 w-2/3 border-slate-300">{data.email}</td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300">Competency</td>
            <td className="border p-2 w-2/3 border-slate-300">
              {data.competency1}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300">Weightage</td>
            <td className="border p-2 w-2/3 border-slate-300">
              {data.competencyWeightage1}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300">Details</td>
            <td className="border truncate p-2 max-w-md border-slate-300">
              {data.competencyData1}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300 ...">
              Competency
            </td>
            <td className="border p-2 w-2/3 border-slate-300 ...">
              {data.competency3}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300">Weightage</td>
            <td className="border p-2 w-2/3 border-slate-300 ...">
              {data.competencyWeightage3}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300">Details</td>
            <td className="border truncate p-2 max-w-md border-slate-300">
              {data.competencyData3}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="w-1/2 ml-28 border-separate border-spacing-2 border border-slate-400">
        <tbody>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300 ...">Last Name</td>
            <td className="border p-2 w-2/3 border-slate-300 ...">
              {data.last}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300 ...">Phone</td>
            <td className="border p-2 w-2/3 border-slate-300 ...">
              {data.phone}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300 ...">
              Competency
            </td>
            <td className="border p-2 w-2/3 border-slate-300 ...">
              {data.competency2}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300 ...">Weightage</td>
            <td className="border p-2 w-2/3 border-slate-300 ...">
              {data.competencyWeightage2}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300">Details</td>
            <td className="border truncate p-2 max-w-md border-slate-300">
              {data.competencyData2}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300 ...">
              Competency
            </td>
            <td className="border p-2 w-2/3 border-slate-300 ...">
              {data.competency4}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300 ...">Weightage</td>
            <td className="border p-2 w-2/3 border-slate-300 ...">
              {data.competencyWeightage4}
            </td>
          </tr>
          <tr>
            <td className="border p-2 w-1/3 border-slate-300">Details</td>
            <td className="border truncate p-2 max-w-md border-slate-300">
              {data.competencyData4}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FinalTable;
