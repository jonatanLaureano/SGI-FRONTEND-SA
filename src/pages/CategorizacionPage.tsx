import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header";

const CategorizacionPage = () => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 bg-gray-100">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Categorizacion</h1>

      </div>
    </main>
  </div>
);

export default CategorizacionPage;
