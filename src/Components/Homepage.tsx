import { useRouter } from 'next/router';
import Footer from "./Footer";

export default function Homepage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/tasks');
  };

  return (
      <div className="vh-100">
        <div className="wrapper">
          <div className="title">
            <div className="h1">
              <h1 className="m-0">Todoloo</h1>
              <div className="home-text"> Welcome to your daily to-do list.</div>
              <div className="typewriter mb-4">
                  <p> Do you want to continue? </p>
              </div>  
            </div>
          </div>
          <button className="home-btn" onClick={handleContinue}><span>continue</span></button>
        </div>  
        <Footer />
    </div>
  );
  }
  