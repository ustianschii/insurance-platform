import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </LocalizationProvider>
  );
}

export default App;
