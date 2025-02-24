import React, { useState } from 'react';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const SectionHeader = ({ title, section, children }) => (
    <div className="w-full">
      <div 
        className="flex justify-between items-center p-4 bg-gray-100 rounded-md mb-2 cursor-pointer hover:bg-gray-200 transition-colors"
        onClick={() => toggleSection(section)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-xl">{activeSection === section ? '−' : '+'}</span>
      </div>
      {activeSection === section && (
        <div className="p-4 mb-6 bg-white rounded-md shadow-sm">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">YORAA Terms & Conditions</h1>
        <p className="text-gray-600">Last updated: February 22, 2025</p>
      </header>

      <div className="mb-8">
        <p className="mb-4">
          These Terms and Conditions consist of the following sections: 1. Introduction; 2. The Purchase Terms; 
          3. Use of the Platform and 4. Miscellaneous, as well as policies, set of terms or documents to which a 
          link has been provided herein (collectively "Terms & Conditions").
        </p>
      </div>

      <div className="space-y-4">
        <SectionHeader title="1. INTRODUCTION" section="intro">
          <p className="mb-4">
            If you place an order through www.yoraa.in, the Yoraa app (the "App") or any other website or app in 
            which we present these Terms and Conditions (together referred to as the "Platform"), upon confirmation 
            that such order is accepted a contract of sale will be executed between you and Yora India having 
            CIN NO: U47711HR2024PTC125950, with its registered office at Regd. Office: FORUM DLF CYBER CITY, PHASE 3, 
            SECTOR 24, DLF QE, Dlf Qe, Gurgaon- 122002, Haryana Tel. (+91) 8717000084, Website: www.yoraa.in, 
            which will be governed by these Terms and Conditions and specifically by the Purchase Terms mentioned below.
          </p>
          <p>
            Yora is the parent company of the Yora group, which includes several affiliated companies; among them 
            AIMPL (hereinafter referred to as "Yora/we/us").
          </p>
        </SectionHeader>

        <SectionHeader title="2. PURCHASE TERMS" section="purchase">
          <p className="italic mb-4">Please read these Purchase Terms carefully before ordering Products online from the Platform.</p>
          
          <h3 className="font-semibold mb-2 mt-4">2.1 When do these Purchase Terms apply?</h3>
          <p className="mb-4">
            These Purchase Terms apply to all offers and contracts relating to the sale and delivery of Products by us. 
            In other words, you agree to these Purchase Terms, when you (i) order anything from the Platform, (ii) order 
            anything at any web page directly connected to the Platform or (iii) when you accept an offer from us. 
            It is only possible to deviate from these Purchase Terms if agreed in writing by us.
          </p>
          
          <h3 className="font-semibold mb-2">2.2 Products</h3>
          <p className="mb-4">
            We have different types of products. This may include products fully designed and created by us 
            ("Standards Products") – and products that, although designed by us, may be personalised by you by 
            adding your own content: you can for example add your name, select a player or number 
            ("Personalised Products"), jointly "Products".
          </p>
          <p className="mb-4">
            Please note that in the case of limited edition or limited production Products extra restrictions such 
            as limiting the number of such Products per consumer may apply. These extra restrictions will be made 
            known to you via the Platform.
          </p>
          
          <h3 className="font-semibold mb-2">2.3 Requirements to conclude a contract with Yora</h3>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-1">You must be 18 years of age or older to buy Products via the Platform.</li>
            <li className="mb-1">You can only order on the Platform if you are a consumer, not a reseller.</li>
            <li>You guarantee that the information you provide to us in the request or order is accurate and complete.</li>
          </ul>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">2.4 How is a contract concluded with you?</h3>
            <p className="mb-2">
              The following applies to all types of Products. All information on the Platform is an invitation to treat only. 
              In other words, the information is not an offer or binding contract. You agree that your order is an offer 
              to purchase the Products listed in your order.
            </p>
            <p>
              All orders submitted by you are subject to acceptance by us. We are entitled to verify an order in advance 
              at all times and/or to refuse to accept an order without providing reasons and with no liability to you or 
              any third parties. If we do not confirm acceptance of your order within ten working days, it is deemed to 
              have been refused.
            </p>
          </div>

          <p className="text-sm text-gray-600 italic">
            This section contains more details about order acceptance, cancellation, delivery, returns, and more that 
            have been condensed for readability. View the full Terms & Conditions document for complete details.
          </p>
        </SectionHeader>

        <SectionHeader title="3. USE OF THE PLATFORM" section="platform">
          <h3 className="font-semibold mb-2">3.1 Introduction</h3>
          <p className="mb-4">
            These Terms of Use apply to your access to and use of the Platform, including the software contained in the 
            Platform ("Software").
          </p>
          <p className="mb-4">
            Your access to and use of the Platform and the information, materials, products, and services available 
            through the Platform are subject to these Terms of Use, regardless of whether you possess an account 
            through the Platform linked to your name and/or contact information ("Account").
          </p>
          
          <h3 className="font-semibold mb-2">3.2 Privacy Policy</h3>
          <p className="mb-4">
            The Platform Privacy Policy describes how we collect information about you through the Platform and how 
            we use and disclose that information.
          </p>
          
          <h3 className="font-semibold mb-2">3.3 Changes to these Terms of Use</h3>
          <p className="mb-4">
            We may make changes to these Terms of Use at any time if we believe it is reasonably necessary to do so 
            (including for security, legal or regulatory reasons). We will give you as much advance notice of this as 
            is reasonably possible.
          </p>

          <p className="text-sm text-gray-600 italic">
            This section contains more details about copyright, trademarks, user conduct, content, and more that 
            have been condensed for readability. View the full Terms & Conditions document for complete details.
          </p>
        </SectionHeader>

        <SectionHeader title="4. MISCELLANEOUS" section="misc">
          <h3 className="font-semibold mb-2">4.1 How can you contact us?</h3>
          <p className="mb-4">
            If you have any questions or comments about the Platform or the Yora Terms and Conditions or in the 
            unlikely event that you wish to make a complaint please don't hesitate to contact our Customer Service 
            via the means provided in the Help section of the Platform.
          </p>
          <p className="mb-4">
            Alternatively, you may also write to us using the following address:<br />
            Customer Service Yora India,<br />
            Registered Office: FORUM DLF CYBER CITY, PHASE 3, SECTOR 24, DLF QE, Dlf Qe, Gurgaon- 122002, Haryana<br />
            Customer Service email: support@yoraa.in
          </p>
          
          <h3 className="font-semibold mb-2">4.2 Priorities</h3>
          <p className="mb-4">
            In case of contradiction between Yora Terms and Conditions and any content contained in other parts of 
            the Platform or in links, Yora Terms and Conditions contained in this document prevail.
          </p>
          
          <h3 className="font-semibold mb-2">4.3 Amendments to the Yora Terms and Conditions</h3>
          <p className="mb-4">
            We reserve the right to make changes to these Terms and Conditions at any time. The use of this Platform 
            as well as any purchase agreement executed between you and us, will be subject to the version of the 
            Yora Terms and Conditions in force at the time you place the order through this Platform or the day you 
            browse this Platform (as applicable). Please check the Yora Terms and Conditions periodically for changes.
          </p>

          <h3 className="font-semibold mb-2">4.8 Applicable law and jurisdiction</h3>
          <p className="mb-4">
            The Yora Terms and Conditions shall be governed by the laws of India. Indian law applies to the sales 
            contract, to the exclusion of the United Nations Convention on Contracts for the International Sale of 
            Goods (CISG). This does not affect the applicable mandatory rights under the law of your country of 
            residence. You or Yora shall bring any dispute which may arise under these Terms and Conditions to the 
            competent court of Delhi, India to settle any of such dispute.
          </p>
        </SectionHeader>
      </div>

      <div className="mt-10 p-6 bg-gray-100 rounded-md">
        <h3 className="font-semibold mb-3">APPENDIX 1 - Sample Withdrawal Form</h3>
        <div className="mb-4">
          <p className="mb-2">To:</p>
          <p>
            Yora<br />
            c/o Yora Customer Service,<br />
            Registered Office: FORUM DLF CYBER CITY, PHASE 3, SECTOR 24, DLF QE, Dlf Qe, Gurgaon- 122002, Haryana
          </p>
        </div>
        <p className="mb-4">
          I/We* hereby give notice that I/We* withdraw from my/our* contract of sale of the following goods:
        </p>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <p className="mb-2">Ordered on*/received on*:</p>
        <p className="mb-2">Name of consumer(s) and order number:</p>
        <p className="mb-2">Address of consumer(s):</p>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <p className="mb-2">Date/Signature of consumer(s) (only if this form is notified on paper)</p>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <p className="italic mt-4">(*) Delete as appropriate.</p>
      </div>

   
    </div>
  );
};



export default TermsAndConditions;
