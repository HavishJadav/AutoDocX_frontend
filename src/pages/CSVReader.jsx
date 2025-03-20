import React, { useState } from "react";
import Papa from "papaparse";
import { Card, CardContent } from "@/components/ui/card";

const CSVReader = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ({ target }) => {
        const csv = Papa.parse(target.result, { header: true });
        setData(csv.data);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="p-4">
      <Card>
        <CardContent>
          <input type="file" accept=".csv" onChange={handleFileUpload} className="mb-2" />
          {data.length > 0 && (
            <table className="border-collapse border border-gray-300 w-full mt-2">
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key} className="border border-gray-300 p-2">{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, i) => (
                      <td key={i} className="border border-gray-300 p-2">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CSVReader;