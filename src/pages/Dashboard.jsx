import { useState, useEffect } from "react";

const mockData = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob Smith", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 28 },
  { id: 4, name: "David Wilson", email: "david@example.com", age: 35 },
  { id: 5, name: "Emma Thomas", email: "emma@example.com", age: 22 },
  { id: 6, name: "Franklin Lee", email: "frank@example.com", age: 27 },
];

const Dashboard = () => {
  const [data, setData] = useState(mockData);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  useEffect(() => {
    let filteredData = mockData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    filteredData.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    });

    setData(filteredData);
  }, [search, sortOrder, sortColumn]);

  const handleSort = (column) => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortColumn(column);
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const displayedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-white p-6 border border-gray-300 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Details Page</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#faedcd]">
            <th
              className="p-3 border cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name {sortColumn === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th
              className="p-3 border cursor-pointer"
              onClick={() => handleSort("email")}
            >
              Email {sortColumn === "email" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th
              className="p-3 border cursor-pointer"
              onClick={() => handleSort("age")}
            >
              Age {sortColumn === "age" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedData.length > 0 ? (
            displayedData.map((item) => (
              <tr key={item.id} className="text-center border">
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">{item.email}</td>
                <td className="p-3 border">{item.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center p-4">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <button
          className={`px-4 py-2 mx-1 ${
            currentPage === 1 ? "bg-gray-400" : "bg-[#d4a373]"
          } text-white rounded`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className={`px-4 py-2 mx-1 ${
            currentPage === totalPages ? "bg-gray-400" : "bg-[#d4a373]"
          } text-white rounded`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
