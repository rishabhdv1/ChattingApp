import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react"
import { apps, book, compass, desktop, headset, home, image, images } from "ionicons/icons"

export default function TabBar () {
    return (
        <IonTabBar>
            <IonTabButton tab="tab1" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab1" href="/home">
                <IonIcon icon={book} />
                <IonLabel>Read</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab1" href="/home">
                <IonIcon icon={desktop} />
                <IonLabel>Watch</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab1" href="/home">
                <IonIcon icon={compass} />
                <IonLabel>Explore</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab1" href="/home">
                <IonIcon icon={image} />
                <IonLabel>View</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab1" href="/home">
                <IonIcon icon={headset} />
                <IonLabel>Listen</IonLabel>
            </IonTabButton>
        </IonTabBar>
    )
}