import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { useEffect, useState } from "react";
import { words } from "../assets/words";
import Timer from "../components/Timer";
import "./dashboard.css";

function randomNumberInRange() {
  const rnd = Math.floor(Math.random() * (words.length - 0 + 1));
  return rnd;
}

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

function randomQuestion() {
  const newWords = words.slice();

  const question = newWords.splice(randomNumberInRange(), 1);

  const answer = getRandom(newWords, 3).map((item) => item.Meanings);
  answer.push(question[0].Meanings);
  // console.log({ Q: question, answer });
  return { Q: question, answer };
}

const Dashboard = () => {
  const [qNum, setQNum] = useState(1);
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const QA = randomQuestion();

  useEffect(() => {
    handleRandomQuestion();
  }, []);

  const handleRandomQuestion = () => {
    setQuestion(QA.Q.map((item) => item.EnglishWord));
    setAnswer(shuffle(QA.answer));
  };



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
      <Timer onZero={handleRandomQuestion} qNum={qNum} setQNum={setQNum} />
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>سوال شماره {qNum}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>{question}</IonCardContent>

          <IonList>
            <IonRadioGroup allowEmptySelection={true} value="turtles">
              {answer &&
                answer.map((item, index) => {
                  return (
                    <IonItem key={index}>
                      <IonLabel>
                        {item} {index + 1}
                      </IonLabel>
                      <IonRadio slot="end" value={item}></IonRadio>
                    </IonItem>
                  );
                })}
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
};

export default Dashboard;
