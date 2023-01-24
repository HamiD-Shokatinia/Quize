import {  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,IonToolbar,IonCard,IonCardHeader,IonCardTitle, IonCardContent, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton } from "@ionic/react";
import "./dashboard.css";

const Dashboard: React.FC = ()=> {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton color="warning" />
            </IonButtons>
            <IonTitle>Quize</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>سوال شماره دو</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>متن سوال اینجا قرار میگیره</IonCardContent>

            <IonList>
              <IonRadioGroup allowEmptySelection={true} value="turtles">
                <IonItem>
                  <IonLabel>گزینه ۱</IonLabel>
                  <IonRadio slot="end" value="dogs"></IonRadio>
                </IonItem>

                <IonItem>
                  <IonLabel>گزینه ۲</IonLabel>
                  <IonRadio slot="end" value="cats"></IonRadio>
                </IonItem>

                <IonItem>
                  <IonLabel>گزینه ۳</IonLabel>
                  <IonRadio slot="end" value="turtles"></IonRadio>
                </IonItem>

                <IonItem>
                  <IonLabel>گزینه ۴</IonLabel>
                  <IonRadio slot="end" value="fish"></IonRadio>
                </IonItem>
              </IonRadioGroup>
            </IonList>
            <>
              <IonButton expand="block" shape="round" color="success">
                Submit
              </IonButton>

              <IonButton expand="block" shape="round" color="warning">
                Skip
              </IonButton>
              <IonButton expand="block" shape="round" color="danger">
                Give Up
              </IonButton>
            </>
          </IonCard>
        </IonContent>
      </IonPage>
    );
}

export default Dashboard;