import { OtroForm } from "../components/form/form.jsx";

export function AssistancePage() {
  const Assistencia = [
    {name: "id", label: "ID", type: "text", required: true, placeholder: "Ejemplo: 1" },
    { name: "fullName", label: "Nombre", type: "text", placeholder: "Ejemplo: Nombre Apellido" },
    { name: "email", label: "Correo Electrónico", type: "text", placeholder: "Ejemplo: nombre.apellido@unitec.edu" },
    { name: "ticketType", label: "Tipo de Ticket", type: "text", required: true, placeholder: "Ejemplo: Student" }
  ];

  const handleRegistrarAsistencia = async (formData) => {
    const formattedData = JSON.stringify(formData, null, 2);
    alert(`Datos de la Asistencia capturados!\n\n${formattedData}`);
  };

  return (
    <OtroForm 
      title="Registrar Asistencia" 
      fields={Assistencia} 
      onSubmit={handleRegistrarAsistencia} 
    />
  );
}