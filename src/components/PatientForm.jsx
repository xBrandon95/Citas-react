import { useEffect, useState } from 'react';
import useForm from '../hooks/useForm';
import Alert from './Alert';
import shortid from 'shortid';

const PatientForm = ({
  patients,
  setPatients,
  currentPatient,
  setCurrentPatient,
}) => {
  const [patient, handleChange, reset, setPatient] = useForm({
    pet: '',
    owner: '',
    email: '',
    date: '',
    symptoms: '',
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(currentPatient).length > 0) {
      setPatient(currentPatient);
    }
  }, [currentPatient]);

  const { pet, owner, email, date, symptoms } = patient;

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if ([pet, owner, email, date, symptoms].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    if (patient.id) {
      const newPatients = patients.map((p) =>
        p.id === patient.id ? patient : p
      );
      setPatients(newPatients);
      setCurrentPatient({});
    } else {
      // new patient
      patient.id = shortid.generate();
      setPatients([...patients, patient]);
    }

    reset();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg text-center mt-5 mb-8">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg m-3 py-10 px-5"
      >
        {error && (
          <Alert
            message="Todos los campos son obligatorios"
            background="bg-red-300"
            text="text-red-800"
          />
        )}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota:
          </label>
          <input
            id="pet"
            type="text"
            name="pet"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={pet}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario:
          </label>
          <input
            id="owner"
            type="text"
            name="owner"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta:
          </label>
          <input
            id="date"
            type="date"
            name="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas:
          </label>
          <textarea
            id="symptoms"
            name="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe sintomas..."
            value={symptoms}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full text-white uppercase font-bold p-3 rounded-lg cursor-pointer hover:bg-indigo-700 transition-all"
          value={patient.id ? 'Actualizar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  );
};

export default PatientForm;
