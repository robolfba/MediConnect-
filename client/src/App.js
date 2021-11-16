import { Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./components/Login/Login";
import PatientRegisterForm from "./pages/PatientRegisterForm";
import DoctorRegisterForm from "./pages/DoctorRegisterForm";
import SelectorRegisterForm from "./pages/SelectorRegisterForm";
import HomePatientPage from "./pages/HomePatientPage";
import MisProfesionales from "./components/MisProfesionales/MisProfesionales";
import AddDoctors from "./pages/AddDoctors";
import HomePageDoctor from "./pages/HomePageDoctor";
import MensajesPaciente from "./pages/MenssagesPatients";
import MensajesDoctor from "./pages/MenssagesDoctor";
import MyPatientsPage from "./pages/MyPatientsPage";
import MedicalHistoryDoctor from "./pages/MedicalHistoryDoctor";
import MyPatientsHistory from "./components/MedicalHistoryDoctor/MyPatientsHistory";
import ScheduleDoctor from "./pages/ScheduleDoctor";
import MedicalHistoryPatient from "./pages/MedicalHistoryPatient";
import AppointmentConfig from "./pages/AppointmentConfig";
import CrearReceta from "./pages/CrearReceta";
import CrearOrden from "./pages/CrearOrden";
import ConfirmAppointment from "./pages/ConfirmAppointment"
import SchedulePatient from "./pages/SchedulePatient";
import NewAppointment from "./pages/NewAppointment";
import NewAppoinmentStep2 from "./pages/NewAppoinmentStep2";
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register/doctor" component={DoctorRegisterForm} />
      <Route path="/register/patient" component={PatientRegisterForm} />
      <Route path="/register/form" component={SelectorRegisterForm} />
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/account/profesionales/:id" Component={MisProfesionales} />
      <PrivateRoute path="/account/doctor/patients/:id" Component={MyPatientsPage} />
      <PrivateRoute path="/account/profesional" Component={HomePageDoctor} />
      <PrivateRoute path="/account/patient" Component={HomePatientPage}/>
      <PrivateRoute path="/account/doctors/:id" Component={AddDoctors} />
      <PrivateRoute
        path="/account/appointment-config/:id"
        Component={AppointmentConfig}
      />
      <PrivateRoute
        path="/account/patient/new-appointment/:id"
        Component={NewAppointment}
      />
      <PrivateRoute
        path="/account/profesional/schedule/:id"
        Component={ScheduleDoctor}
      />
      <PrivateRoute path="/account/patient/schedule/:id" Component={SchedulePatient} />
      <PrivateRoute path="/mensajes/paciente" Component={MensajesPaciente} />
      <PrivateRoute path="/mensajes/profesional" Component={MensajesDoctor} />
      <PrivateRoute
        path="/doctor/patients/medical-historial/:id"
        Component={MyPatientsHistory}
      />
      <PrivateRoute
        path="/account/patient/medical-history/:id"
        Component={MedicalHistoryPatient}
      />
      <PrivateRoute
        path="/doctor/medical-history/:id"
        Component={MedicalHistoryDoctor}
      />
      <PrivateRoute path='/doctor/recipes' Component={CrearReceta}/>
      <PrivateRoute path="/doctor/orders" Component={CrearOrden}/>
      <PrivateRoute path="/account/patient/new-appointment/3" Component={ConfirmAppointment} />
      <PrivateRoute
        path="/account/patient/new-appointment/2/:id"
        Component={NewAppoinmentStep2}
      />
    </div>
  );
}

export default App;
