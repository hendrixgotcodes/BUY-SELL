import { useEffect, useState } from "react";
import firebase from "firebase";

const db = firebase.firestore()

export default function useRealtime(database, document) {

    const [snapshot, setSnapshot] = useState({})
    
    useEffect(()=>{

        const unsubscribe = db.collection(database).doc(document)
            .onSnapshot((newSnapshot)=>{

                setSnapshot(newSnapshot.data())

            })

        return ()=>unsubscribe()

    }, [])

    return snapshot


}
