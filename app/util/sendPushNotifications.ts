export default async function sendPushNotification(pushToken: string){

    const message = {
        to: pushToken,
        sound: "default",
        title: "Test",
        body: "hello world",
        data: {specialKindOfData: "not so special after all"}
    }

    await fetch("https://exp.host/--/api/v2/push/send",{
        method: "POST",
        headers:{
            Accept: "application/json",
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
    })
    
}