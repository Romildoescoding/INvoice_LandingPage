import React, { useState } from "react";
import "./App.css";
import TaxInvoice from "./TaxInvoice"; // Import the TaxInvoice component

function App() {
  return (
    <div className="App light">
      <div className="navdiv">
        <nav>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
            <li>BLOG</li>
            <li className="nav-logo">
              INvoice
              <span className="small-i">
                <i className="fa-brands fa-whatsapp"></i>
              </span>
            </li>
          </ul>
        </nav>
      </div>

      <div className="contact-bar border"></div>
      <div className="contact-bar logo">
        <i className="fa-brands fa-whatsapp"></i>
      </div>

      <div className="logo-heading">
        <span className="bigFont">INvoice</span>
        <span className="big-i">
          <i className="fa-brands fa-whatsapp"></i>
        </span>
      </div>

      <div className="intro">
        <p>
          We predent the Invoice generator. Get your bills as
          notification to your customer or vendor regarding their transactions
          like Sales, Purchase, Debit Note, Credit Note, Payment, Receipt, Sales
          Order, Purchase Order with our brand.
        </p>

        <h1>Features of INvoice</h1>
        <ul>
          
          <li>No WhatsApp Web Required</li>
          <li>Both Text and Document option is available</li>
          <li>Automatic Process</li>
          <li>No Manual Input required</li>
          <li>Track report for daily WhatsApp messages</li>
          <li>Different plans as per your usage</li>
          <li>Easy to Configure</li>
          <li>Option is available for Send to Client or Not Send to Client</li>
          <li>User defined notification messages</li>
        </ul>
      </div>

      {/* <div className="flex">
        
      </div> */}
      <div className="advantages-div">
        <h1>ADVANTAGES:</h1>
        <ol>
          <li>
            Our INvoice integration uses{" "}
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              WhatsApp for Web
            </a>
            . This eliminates costly per-message costs. So, you can send
            unlimited messages without worry
          </li>
          <li>
            Receiving person knows it is an authentic message as he receives the
            message from your number.
          </li>
          <li>
            Send a customised invoice or any other customised Tally documents
            also.
          </li>
          <li>
            Additionally, you have the option to send digitally signed invoices
            along with our{" "}
            <a
              href="https://tallyplanet.com/product/tally-digital-signer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tally Digital Signature Module
            </a>{" "}
            (sold separately)
          </li>
        </ol>
      </div>


      <div className="pricing advantages-div">
        <ul>
        <h1>PRICING of our INvoice</h1><i className="fa-brands fa-whatsapp"></i>
        <li>The price quoted is on a per-year basis for installation on 2 computers. i.e. <h3>INR 4000/-</h3> per year</li>
        
        </ul>
      </div>

      <button type="submit" className="displayButton">
        Generate INvoice
      </button>

      {/* Insert the TaxInvoice component here */}
      <TaxInvoice name={"Romil"} />
    </div>
  );
}

export default App;
