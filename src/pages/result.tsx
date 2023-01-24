import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { informationCircle, star } from "ionicons/icons";
import "./result.css";

const Result: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Result</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem lines="full">
          <IonLabel color="dark">سوال شماره دو</IonLabel>
          <IonIcon color="medium" icon={informationCircle} slot="end"></IonIcon>
        </IonItem>

        {/* <IonItem lines="full">
          <IonIcon></IonIcon>
          <IonLabel>گزینه یک</IonLabel>
        </IonItem> */}

        {/* <IonItem lines="full">
          <IonIcon></IonIcon>
          <IonLabel>گزینه دو</IonLabel>
        </IonItem> */}

        <IonItem lines="full">
          <IonLabel color="success"> جواب درست</IonLabel>
          <IonIcon color="success" icon={star} slot="end"></IonIcon>
        </IonItem>

        {/* <IonItem lines="full">
          <IonIcon></IonIcon>
          <IonLabel>گزینه چهار</IonLabel>
        </IonItem> */}
      </IonContent>
    </IonPage>
  );
};

export default Result;
