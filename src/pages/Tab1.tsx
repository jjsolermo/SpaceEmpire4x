import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import InputFiled from '../components/inputs/InputFiled'
import './Tab1.css';

const Tab1: React.FC = () => {
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
        <InputFiled name="Carry Over" value={0}></InputFiled>
        <InputFiled name="+ Colonies" value={0}></InputFiled>
        <InputFiled name="+ Minerals" value={0}></InputFiled>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
