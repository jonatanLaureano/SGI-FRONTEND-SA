import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import LocalesPage from "../pages/LocalesPage";
import InventarioPage from "../pages/InventarioPage";
import VentasPage from "../pages/VentasPage";
import CategorizacionPage from "../pages/CategorizacionPage";
import EmpleadosPage from "../pages/EmpleadosPage";
import ProveedoresPage from "../pages/ProveedoresPage";
import ClientesPage from "../pages/ClientesPage";
import LoginPage from "../pages/LoginPage";
import CategoriaPage from "../pages/Categorizacion/CategoriaPage";
import SubcategoriaPage from "../pages/Categorizacion/SubcategoriaPage";
import TiposPage from "../pages/Categorizacion/TiposPage";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/locales" element={<LocalesPage />} />
        <Route path="/inventario" element={<InventarioPage />} />
        <Route path="/ventas" element={<VentasPage />} />
        <Route path="/categorizacion" element={<CategorizacionPage />} />
        <Route path="/categorizacion/categoria" element={<CategoriaPage />} />
        <Route path="/categorizacion/subcategoria" element={<SubcategoriaPage />} />
        <Route path="/categorizacion/tipos" element={<TiposPage />} />
        <Route path="/empleados" element={<EmpleadosPage />} />
        <Route path="/proveedores" element={<ProveedoresPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
