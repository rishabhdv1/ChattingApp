import { IonCol, IonHeader, IonRow, IonToolbar } from "@ionic/react";

export default function Header (props:any) {
    return (
        <IonHeader>
            <IonToolbar>
                <IonRow style={{fontSize:"1.6em",textAlign:"center"}}>
                    <IonCol size="2"></IonCol>
                    <IonCol size="8">
                        <span>{props.title}</span>
                    </IonCol>
                    <IonCol size="2"></IonCol>
                </IonRow>
            </IonToolbar>
        </IonHeader>
    )
}