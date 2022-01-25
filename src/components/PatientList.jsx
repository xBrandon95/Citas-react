import { PatientItem } from '.';
import Alert from './Alert';

const PatientList = ({ patients, setCurrentPatient, removePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

      <p className="text-lg text-center mt-5 mb-8">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      <div className="md:h-screen text">
        {patients.length === 0 ? (
          <Alert
            background="bg-teal-300"
            text="text-teal-900"
            message={'Aun no hay pacientes, comienza agregando uno'}
          />
        ) : (
          patients.map((patient) => (
            <PatientItem
              key={patient.id}
              patient={patient}
              setCurrentPatient={setCurrentPatient}
              removePatient={removePatient}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PatientList;
