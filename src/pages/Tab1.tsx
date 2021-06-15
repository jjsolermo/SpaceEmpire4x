import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import InputFiled from '../components/inputs/InputFiled'
import './Tab1.css';

const Tab1: React.FC = () => {
  const total = 0;

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
        <InputFiled name="Carry Over" value={0}></InputFiled>
        </div>
        <div className="colonies">
        <InputFiled name="+ Colonies" value={0}></InputFiled>
        </div>
        <div className="minerals">
        <InputFiled name="+ Minerals" value={0}></InputFiled>
        </div>
        <div className="pipe">
        <InputFiled name="+ Ms PipeLine" value={0}></InputFiled>
        </div>
        <div className="total">
          <strong>TOTAL : {total}</strong>
        </div>
        <div className="maintenance">
        <InputFiled name="- Maintenance" value={0}></InputFiled>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
