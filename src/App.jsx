
import { useEffect, useState } from 'react';
import './App.css'
import { AnimatePresence, motion } from 'motion/react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './Pages/Home/Home';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  document.fonts.ready.then(() => {
  document.body.classList.add('fonts-loaded');
});
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

  return (
    <div className='app'>
      <Home />
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="container"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="container-title"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer position="top-right" autoClose={2000} style={{ marginTop: '60px'}} theme='dark' />
    </div>
  )
}

export default App
