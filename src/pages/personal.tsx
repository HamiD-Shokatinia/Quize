import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInfiniteScrollContent,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Personal: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="warning" />
          </IonButtons>
          <IonTitle>personal Information</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <img alt="Silhouette of mountains" src="http://tilin.ir/P5vDyy1" />
          <IonCardHeader>
            <IonCardTitle>مهدی فلاحی</IonCardTitle>
            <IonCardSubtitle>مشخصات فردی</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>اطلاعات فردی بیشتر اینجا وارد میشه</IonCardContent>
          <IonButton color="primary" href="./page/dashboard">
            Start Quize
          </IonButton>
          <IonButton color="tertiary" href="./page/result">
            Result
          </IonButton>
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Personal;
