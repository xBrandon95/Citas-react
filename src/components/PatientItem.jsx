const PatientItem = ({ patient, setCurrentPatient, removePatient }) => {
  const { id, pet, owner, email, date, symptoms } = patient;

  return (
    <div className="bg-white p-5 mx-3 mb-6 shadow-md rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">{pet}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">{owner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {''}
        <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {''}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-2 rounded-lg font-bold uppercase"
          onClick={() => setCurrentPatient(patient)}
        >
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-10 py-2 rounded-lg font-bold uppercase"
          onClick={() => removePatient(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PatientItem;
