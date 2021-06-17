import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React , { useState,useCallback } from 'react';
import InputFiled from '../components/inputs/InputFiled'
import './Tab1.css';

const Tab1: React.FC = () => {
  const carry_Over = 0;
  const colonies = 0;
  const minerals = 0;
  const pipeLine = 0;

  const [valueCarry, setValueCarry] = useState(carry_Over);

  const callback = useCallback((childData) => {
     setValueCarry(childData);
  }, []);


  console.log(valueCarry)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Economic Phase</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Economic Phase</IonTitle>
          </IonToolbar>
        </IonHeader>
         <div className="carry">
        <InputFiled name="Carry Over" value={valueCarry} passValue={callback}></InputFiled>
        </div>
       {/* <div className="colonies">
        <InputFiled name="+ Colonies" value={colonies}></InputFiled>
        </div>
        <div className="minerals">
        <InputFiled name="+ Minerals" value={minerals}></InputFiled>
        </div>
        <div className="pipe">
        <InputFiled name="+ Ms PipeLine" value={pipeLine}></InputFiled>
        </div> */}
        <div className="total">
          <strong>TOTAL : {valueCarry}</strong>
        </div>
       {/*  <div className="maintenance">
        <InputFiled name="- Maintenance" value={0}></InputFiled>
        </div> */}
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
