export type Status = "Pagado" | "Entregado" | "Cancelado";

export interface SaleItem {
  codigo: string;
  monto: number;
  status: Status;
  tipoEntrega: string;
  encargado: string;
  cliente: string;
}

export const salesData: SaleItem[] = [
  { codigo: "Ven-00000013", monto: 150.0, status: "Pagado", tipoEntrega: "Envio", encargado: "Luis Pérez", cliente: "María López" },
  { codigo: "Ven-00000014", monto: 200.0, status: "Entregado", tipoEntrega: "Recojo", encargado: "Ana Ruíz", cliente: "Carlos Gómez" },
  { codigo: "Ven-00000015", monto: 75.5, status: "Cancelado", tipoEntrega: "Recojo", encargado: "Juan Diaz", cliente: "Luisa Torres" },
  { codigo: "Ven-00000016", monto: 300.0, status: "Pagado", tipoEntrega: "Recojo", encargado: "Pedro Sánchez", cliente: "Andrés Vega" },
  { codigo: "Ven-00000017", monto: 120.0, status: "Pagado", tipoEntrega: "Recojo", encargado: "Laura Ortiz", cliente: "Sofía Castillo" },
  { codigo: "Ven-00000018", monto: 450.0, status: "Pagado", tipoEntrega: "Envio", encargado: "Marta Rojas", cliente: "Miguel Herrera" },
  { codigo: "Ven-00000019", monto: 60.0, status: "Cancelado", tipoEntrega: "Envio", encargado: "Diego Cruz", cliente: "José Morales" },
  { codigo: "Ven-00000020", monto: 175.0, status: "Pagado", tipoEntrega: "Envio", encargado: "Raúl Vargas", cliente: "Elena Ramírez" },
  { codigo: "Ven-00000021", monto: 220.0, status: "Pagado", tipoEntrega: "Recojo", encargado: "Rosa Paredes", cliente: "Daniel Campos" },
  { codigo: "Ven-00000022", monto: 99.99, status: "Entregado", tipoEntrega: "Recojo", encargado: "Luis Pérez", cliente: "Gabriela Castro" },
  { codigo: "Ven-00000023", monto: 310.0, status: "Pagado", tipoEntrega: "Recojo", encargado: "Ana Ruíz", cliente: "Alberto Molina" },
  { codigo: "Ven-00000024", monto: 180.0, status: "Entregado", tipoEntrega: "Recojo", encargado: "Juan Diaz", cliente: "Natalia Flores" }
];
