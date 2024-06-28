/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// const nodemailer = require('nodemailer');

const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { initializeApp } = require('firebase-admin/app');

// Initialize Firebase Admin SDK. necessary for functions to interact withe firebase services
initializeApp();

exports.onContactCreated = onDocumentCreated("contacts/{docId}", async(event) => {
  const newDocValue = event.data.data();

  //console.log('Created event triggered:', newValue);

  // send an email with the data

  const{name, email, subject, message} = newDocValue;

    // Call the existing API endpoint to send the email .... life is sad.. have to pay firebase for this
    // try {
    //   const response = await fetch('https://your-domain.com/api/sendEmail', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newValue)
    //   });
  
    //   if (!response.ok) {
    //     throw new Error('Failed to send email');
    //   }
  
    //   console.log('Email sent successfully');
    // } catch (error) {
    //   console.error('Error sending email:', error);
    // }

  return null;
});
    
