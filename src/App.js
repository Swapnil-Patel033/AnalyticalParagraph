import React, { useCallback, useState } from 'react';
import Deshbord from './Deshbord';
import SideBar from './component/SiderBar';
import Header from './component/Header';
import useToggle from './component/ToggleBar/UseToggleBar';
import './assets/css/_DeshBord.css'

function App() {

  const [flag, setFlag] = useToggle(true)
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (

    <div >

      <Header
        flag={flag}
        setFlag={setFlag} />

      <SideBar onCategorySelect={handleCategorySelect}
        flag={flag}/>

      <Deshbord selectedCategory={selectedCategory} f
        flag={flag} />

    </div>
  );
}

export default App;
