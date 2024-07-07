import React, { useEffect, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { useParams } from "react-router-dom";

interface Item {
  id: string;
  que: string;
  ans: string;
}

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Item | null>(null);

  useEffect(() => {
    fetch("http://localhost:8100/public/data.json?t=1719065237109&import/")
      .then((response) => response.json())
      .then((data) => {
        const item = data.find((item: Item) => item.id === id);
        setData(item);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!data) {
    return <IonContent>Loading...</IonContent>;
  }

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h1>{data.que}</h1>
        <span>{data.ans}</span>
        {/* Render other data fields as needed */}
      </IonContent>
    </IonPage>
  );
};

export default Details;
