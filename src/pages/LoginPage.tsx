import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Datos solo para prueba
  const validEmail = "prueba@gmail.com";
  const validPassword = "prueba123";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    // Verificación de las credenciales (autenticación estática)
    if (email === validEmail && password === validPassword) {
      navigate("/dashboard");
    } else {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-AzulSidebar">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-AzulSidebar mb-6">
          Iniciar Sesión
        </h2>
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-AzulSidebar"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-AzulSidebar"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-botonAgregar text-white p-3 rounded-md font-medium hover:bg-green-700 transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default LoginPage;
