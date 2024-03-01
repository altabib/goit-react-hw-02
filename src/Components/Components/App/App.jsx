import Description from "../Description/Description" 
import Feedback from "../Feedback/Feedback"
import Options from "../Options/Options"
import './App.css'
import NoFeedback from "../NoFeedback/NoFeedback"
import { useState, useEffect } from "react"



function App() {

  const [clicks, setClicks] = useState(() => {
    const stringifiedFeedback = window.localStorage.getItem("saved-feedback");
    if (stringifiedFeedback !== null) {
      return JSON.parse(stringifiedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

   useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(clicks));
  }, [clicks]);
  
  
  const resetFeedback = () => { 
     setClicks({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
  
  const updateFeedback = (clickType) => { 
    console.log("click:", clickType);
    setClicks((clicks) => ({
      ...clicks, [clickType]: clicks[clickType] + 1,
    }));
};

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  
  return (
    
    <div>
      
      <Description />
      
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      
      {totalFeedback <= 0 ? <NoFeedback /> : <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
          total={totalFeedback}/>}

      
    </div>
      
  );
}

export default App;
