
import Header from "~/componests/Header";
import ContactForm from "../componests/ContactForm";
import Button from "~/componests/Button";
import Card from "~/componests/Card";
import Footer from "~/componests/Footer";

const Home = () => {
  return (

    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div> <Header /></div>
    <div style={{ marginTop: "100px" }}><ContactForm /></div>
    <div style={{ marginTop: "100px" }}><Button text="Enviar" /></div>
    <div style={{ marginTop: "100px" }}><Card /></div>
    <div style={{ marginTop: "100px" }}><Footer /></div>
    
    </div>
  );
};

export default Home;
