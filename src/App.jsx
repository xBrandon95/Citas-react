import { useEffect, useState } from 'react';
import { Header, PatientForm, PatientList } from './components';

const App = () => {
  const [patients, setPatients] = useState(
    localStorage.getItem('patients')
      ? JSON.parse(localStorage.getItem('patients'))
      : []
  );
  const [currentPatient, setCurrentPatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const removePatient = (id) => {
    setPatients((prevPatients) => prevPatients.filter((p) => p.id !== id));
  };

  return (
    <div className="container mx-auto">
      <Header />

      <div className="md:container md:flex mt-12 ">
        <PatientForm
          patients={patients}
          setPatients={setPatients}
          currentPatient={currentPatient}
          setCurrentPatient={setCurrentPatient}
        />
        <PatientList
          patients={patients}
          setCurrentPatient={setCurrentPatient}
          removePatient={removePatient}
        />
      </div>
    </div>
  );
};

export default App;
