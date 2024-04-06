import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST (req:Request,res:Response) {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    const {message, subject, phoneNumber} =  await req.json()
    console.log(message,subject,phoneNumber)
    console.log(message, phoneNumber, process.env.TWILIO_PHONE_NUMBER)
    try {
      const txtMessage = await client.messages.create({
        body: message, 
        from: process.env.TWILIO_PHONE_NUMBER, 
        to: `${phoneNumber}` // Recipient's number
      });
      return NextResponse.json({ success: true, messageSid: txtMessage.sid });

    } catch (error) {
      console.error('SMS sending error:', error);
      return  new NextResponse("Internal error", { status: 500 });
   
    }
  } 

