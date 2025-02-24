import React, { useState } from "react";

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
        <span className="text-xl">{activeSection === section ? "−" : "+"}</span>
      </div>
      {activeSection === section && (
        <div className="p-4 mb-6 bg-white rounded-md shadow-sm">{children}</div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">YORAA Terms & Conditions</h1>
        {/* <p className="text-gray-600">Last updated: February 22, 2025</p> */}
      </header>

      <div className="mb-8">
        <p className="mb-4">
          These Terms and Conditions consist of the following sections: 1.
          Introduction; 2. The Purchase Terms; 3. Use of the Platform and 4.
          Miscellaneous, as well as policies, set of terms or documents to which
          a link has been provided herein (collectively “Terms & Conditions”).
        </p>
      </div>

      <div className="space-y-4">
        <SectionHeader title="1. INTRODUCTION" section="intro">
          <p className="mb-4">
            If you place an order through www.yoraa.in, the Yoraa app (the
            "App") or any other website or app in which we present these Terms
            and Conditions (together referred to as the "Platform"), upon
            confirmation that such order is accepted a contract of sale will be
            executed between you and Yora Apparels Private Limited India having
            CIN NO: U47711HR2024PTC125950, with its registered office at Regd.
            Office: FORUM DLF CYBER CITY, PHASE 3, SECTOR 24, DLF QE, Dlf Qe,
            Gurgaon- 122002, Haryana Tel. (+91) 8717000084, Website:
            www.yoraa.in, which will be governed by these Terms and Conditions
            and specifically by the Purchase Terms mentioned below.
          </p>
        </SectionHeader>

        <SectionHeader title="2. PURCHASE TERMS" section="purchase">
          <p className="italic mb-4">
            Please read these Purchase Terms carefully before ordering Products
            online from the Platform.
          </p>

          <h3 className="font-semibold mb-2 mt-4">
            2.1 When do these Purchase Terms apply?
          </h3>
          <p className="mb-4">
            These Purchase Terms apply to all offers and contracts relating to
            the sale and delivery of Products by us. In other words, you agree
            to these Purchase Terms, when you (i) order anything from the
            Platform, (ii) order anything at any web page directly connected to
            the Platform or (iii) when you accept an offer from us. It is only
            possible to deviate from these Purchase Terms if agreed in writing
            by us.
          </p>

          <h3 className="font-semibold mb-2">2.2 Products</h3>
          <p className="mb-4">
            We have different types of products. This may include products fully
            designed and created by us ("Standards Products") – and products
            that, although designed by us, Manufactured by 3rd party vendors.
          </p>
          <p className="mb-4">
            Please note that in the case of limited edition or limited
            production Products extra restrictions such as limiting the number
            of such Products per consumer may apply. These extra restrictions
            will be made known to you via the Platform.
          </p>
          <p className=" mb-4">
            All Products shown on the Platform are subject to availability. This
            means that, although we strive to ensure our Platform reflects the
            availability of stock, a Product shown on the Platform may no longer
            be available for purchase.
          </p>
          <p className=" mb-4">
            Minor differences in colour and other variations in Products are
            possible as a result of different image acquisition, display
            technologies or other technical reasons. Yora is not liable for
            these variations and deviations. No rights can be derived from
            typing errors, product descriptions or manifest errors on the
            Platform.
          </p>

          <h3 className="font-semibold mb-2">
            2.3 Requirements to conclude a contract with Yora
          </h3>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-1">
              You must be 18 years of age or older to buy Products via the
              Platform.
            </li>
            <li className="mb-1">
              You can only order on the Platform if you are a consumer, not a
              reseller.
            </li>
            <li>
              You guarantee that the information you provide to us in the
              request or order is accurate and complete.
            </li>
          </ul>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">
              2.4 How is a contract concluded with you?
            </h3>
            <p className="mb-2">
              The following applies to all types of Products. All information on
              the Platform is an invitation to treat only. In other words, the
              information is not an offer or binding contract. You agree that
              your order is an offer to purchase the Products listed in your
              order.
            </p>
            <p>
              All orders submitted by you are subject to acceptance by us. We
              are entitled to verify an order in advance at all times and/or to
              refuse to accept an order without providing reasons and with no
              liability to you or any third parties. If we do not confirm
              acceptance of your order within ten working days, it is deemed to
              have been refused.
            </p>

            <p>
              We may choose not to accept your order at our own discretion.
              Examples of when we may not accept your order are as follows:
            </p>
            <ul className=" list-disc my-2 space-y-2">
              <li>
                If Product(s) are shown on the Platform but are not or no longer
                available;
              </li>
              <li>If we are unable to obtain authorisation of your payment;</li>
              <li>If shipping restrictions apply to a Product;</li>
              <li>
                If Product(s) shown on the Platform contain a (manifest) error
                such as being incorrectly priced or otherwise incorrectly
                described or shown;
              </li>
              <li>
                If we are unable to process your order due to technical reasons;
              </li>
              <li>
                If we know or reasonably suspect an order was made with the
                assistance or involvement of any software, robot, crawler,
                spider or other automated means or device.
              </li>
            </ul>

            <p className=" mb-2">
              In the event that we do not accept (part of) your order, we shall
              be entitled to cancel (part of) your order without incurring any
              liability towards you or a third party. Following the
              cancellation, we will of course provide you with a refund for the
              amount paid to us under the cancelled (part of the) order.
            </p>
            <p className=" mb-2">
              We reserve the right to cancel your order after the creation of
              the contract of sale, thereby terminating the contract of sale,
              for the reasons stipulated in this section 2.4. under headings a
              through f above. Following the cancellation, we will of course
              provide you with a refund for the amount paid to us under the
              cancelled (part of the) order.
            </p>
            <p className=" mb-2">
              After your order has been placed, we will send you an order
              acknowledgment email with your order number and details of the
              Products you have offered to purchase and details of any delivery
              services. Acceptance of your order and the formation of a contract
              of sale of the Products between you and us will not take place
              unless and until either:
            </p>

            <ul className=" list-disc my-2 space-y-2">
              <li>
                you receive a confirmation from us that the Products have been
                shipped to you from our warehouse; or
              </li>
              <li>
                you receive a confirmation from the carrier that the Products
                are ready for you to pick up if this option is available on the
                Platform and you have chosen to pick up the Product(s) at a
                carrier office or the carrier has stored the Products at the
                pickup location; or
              </li>
            </ul>
          </div>

          <div className=" mb-4">
            <h3 className="font-semibold mb-2">2.5 Retention of title</h3>
            <p>
              All Products will remain the property of Yora until you have paid
              all amounts owed to us in full under any agreement, including the
              payment of costs, earlier or later deliveries or partial
              deliveries. You may not sell, dispose of, or encumber any Product
              before full title thereof has passed to you.
            </p>
          </div>

          <div className=" mb-4">
            <h3 className="font-semibold mb-2">2.6 Maintenance of Products</h3>
            <p>
              We draw your attention to the washing and maintenance instructions
              printed on the labels of the Products. We are not liable for any
              damage resulting from incorrect handling of Products, including
              handling contrary to the instructions.
            </p>
          </div>

          <div className=" mb-4">
            <h3 className="font-semibold mb-2">2.7 Order Cancellations</h3>
            <p>
              Notwithstanding your right of withdrawal, it is possible, under
              limited circumstances, to cancel your order for Standard Products.
              Please see Help section of the Platform for more information.
            </p>
          </div>

          <div className=" mb-4">
            <h3 className="font-semibold mb-2">2.8 Price</h3>
            <p>
              The stated prices include GST. Prices are quoted in India Rupees
              (INR). Yora reserves the right to make price changes prior to an
              order placed by you. <br />
              We reserve the right to change, limit or terminate any special
              offers or discounts at any time. <br />
              We may charge delivery costs. The delivery costs vary for each
              Product and type of delivery. For further details, please see
              section 2.12 or go to ‘Delivery’ in the Help section of the
              Platform. Any delivery costs will be charged separately and added
              to the total amount of the order.
            </p>
          </div>

          <div className=" mb-4">
            <h3 className="font-semibold mb-2">2.9 Methods of payment</h3>
            <p>
              Please check the Help section of the Platform for information on
              available payment methods. Yora reserves the right to conduct an
              individual credit check for each order in accordance with the Yora
              Privacy Policy. Depending on the results of this check, Yora
              reserves the right to refuse certain methods of payment.
            </p>
          </div>

          <div className=" mb-4">
            <h3 className="font-semibold mb-2">2.10 Invoicing</h3>
            <p>
              Where we elect or are required by applicable law, to issue or make
              available an invoice, we reserve the right to issue or make
              available electronic invoices and you agree to such form of
              invoicing.
            </p>
          </div>

          <div className=" mb-4">
            <h3 className="font-semibold mb-2">
              2.11 Special aspects of Personalised Products
            </h3>
            <p className=" my-2">
              To customise your Personalised Product and make it personal you
              can add your own content. You can add your name, select a player
              and number or be as creative as you like. Please keep it decent.
              We reserve the right to remove inappropriate language and use of
              brand names. Also keep in mind that some special characters are
              not supported by our system.
            </p>
            <p className=" my-2">
              We kindly request you not to use, upload, submit, copy, or
              otherwise make public any names, words, or phrases which:
            </p>
            <ul className=" list-disc my-2 space-y-2">
              <li>
                consist of or contain the name of a product, service, company,
                organisation, or event which belongs to someone else;
              </li>
              <li>
                consist of or contain the name or nickname of a famous person
                (living or dead);
              </li>
              <li>
                infringe or may infringe third party trademarks or other
                intellectual property rights;
              </li>
              <li>
                are threatening, incite violence, are defamatory, obscene,
                discriminatory, inflammatory, sexually explicit or otherwise
                unlawful; and/or
              </li>
              <li>
                are otherwise unacceptable to Yora in its sole discretion.
              </li>
            </ul>
            <p className=" my-2">
              Yora reserves the right to reject any customisation, names, words,
              or phrases (or combinations thereof) which fall into any of the
              above categories. This will result in your order being cancelled.
              Further, Yora will be entitled to claim compensation equal to the
              value of the Products ordered.
            </p>

            <p className=" my-2">
              Note that by placing your order for your Personalised Products,
              you:
            </p>
            <ul className=" list-disc my-2 space-y-2">
              <li>
                represent and guarantee that any names, words or phrases you
                use, upload, submit, copy, or otherwise make public for use on
                your Personalised Product do not fall into any of the above
                categories;
              </li>
              <li>
                agree to indemnify Yora and its affiliated companies and keep
                Yora and its affiliated companies indemnified against all costs,
                expenses, damages, losses, and liabilities incurred or suffered
                by Yora or its affiliated companies as a result of the use of
                any names, words or phrases used, uploaded, submitted, copied,
                or otherwise made public by you (including use on your
                Personalised Product);
              </li>
              <li>
                grant to Yora and its affiliated companies a non-exclusive,
                irrevocable, royalty-free, worldwide, fully sub-licensable right
                to use, reproduce, disclose, and modify the names, words or
                phrases submitted by you for the purposes of fulfilling your
                order; and/or  
              </li>
              <li>
                insofar as the order involves Personalised Products you will not
                have any cooling-off period, right of revocation, right of
                return or right of withdrawal
              </li>
            </ul>
          </div>

          <div className=" mb-4 space-y-2">
            <h3 className="font-semibold mb-2">2.12 Delivery</h3>
            <p className="my-2">
              We will deliver to the address indicated by you within India. We
              can only deliver to a home or office address or a carrier pickup
              location. If a delivery attempt is unsuccessful, you agree that
              the carrier we have engaged for the delivery may also deliver the
              Products to a neighbouring/nearby address or pick-up point, after
              which Yora is deemed to have met its obligation to deliver the
              Products. The carrier will notify you of the delivery to the
              neighbouring/nearby address or pick-up point.
            </p>
            <p>
              If applicable and if you have chosen to collect the Products from
              an Yora store, to the address of the relevant Yora store. We will
              confirm this to you by an email when informing you that the
              Products are ready for you to pick up
            </p>
            <p>
              Shipment of orders will take place on business days, not being a
              public holiday in the area in which our warehouse is located.
              Therefore, please, consider any public holidays including any
              national and/or regional holidays in your country of residence and
              in the relevant state, area, or city in India. Deliveries will be
              made on business days, not being a public holiday in your country.
              Note that public holidays may vary per country and per year.
            </p>
            <p>
              For detailed information about delivery periods, please check the
              specifications for the different types of delivery on the Delivery
              section in the Help section of our Platform. Delivery periods are
              indicative and are therefore not regarded as strict deadlines. The
              mere fact that a delivery period is exceeded does not entitle you
              to compensation. Notwithstanding this, in case of the unlikely
              event of delay in an Express delivery, we may, at our discretion,
              refund to you the full cost of Express delivery. Note that
              Personalised Products have different delivery periods. This means
              that your complete order of Standard Products and Personalised
              Products will take longer to deliver. However, Personalised
              Products may also be delivered separately from any other Products
              you may have ordered.
            </p>
            <p>
              Yora is entitled, insofar as reasonably possible, to make split
              deliveries so that you receive your Products as soon as possible.
              There are no additional costs associated with such split
              deliveries. However, in the event that you request that we deliver
              in parts, we may charge you for extra delivery costs. Each split
              order shall constitute a separate contract of sale. If we are late
              delivering a part or one split order is faulty, that will not
              entitle you to cancel any other part of split order.
            </p>
            <p>
              In the unlikely event that after entering into the contract of
              sale, we cannot, could not or can no longer deliver (part of) your
              order and are not responsible for this situation, we will be
              entitled to terminate the contract of sale. We will, of course,
              inform you as soon as reasonably practicable and reimburse any
              payments made.
            </p>
          </div>

          <div className=" mb-4 space-y-2">
            <h3 className="font-semibold mb-2">2.13 Returns Policy</h3>
            <p>
              For practical information and the instructions for returning
              Standard Products please see the Return section in the Help
              section of the Platform. In the event that you have a right to
              withdraw from a contract of sale with us (and thus return your
              Standard Product(s)) in accordance with Sections 2.15, the
              following conditions apply.
            </p>
            <h2 className=" font-medium">
              Notification of Withdrawal and Return of Products
            </h2>
            <p>
              To exercise your right of withdrawal you must inform us (AIMPL c/o
              Yora Customer Service Office YORA APPARELS PRIVATE LIMITED : FORUM
              DLF CYBER CITY, PHASE 3 , SECTOR 24, DLF QE, Dlf Qe, Gurgaon-
              122002, Haryana .By submitting a clear declaration (e.g., a letter
              sent by post or an email) stating your decision to withdraw from
              the contract of sale. You can use the sample withdrawal form
              attached as Appendix 1 to these Terms and Conditions, however,
              this is not mandatory. You may also withdraw from the contract of
              sale electronically by filling in the explicit withdrawal
              declaration on our Platform at www.Yora.in. If you use this
              option, we shall confirm receipt of order withdrawal via email.
            </p>
            <p>
              To meet the withdrawal period deadlines specified in Sections 2.15
              you will need to notify us about the fact that you are exercising
              your right of withdrawal before the expiry of the relevant
              withdrawal period. The Standard Product must be returned
              (following the instructions on the Platform) to our warehouse. The
              easiest and our preferred way to return your Products is to follow
              the steps in the Return section of the Help section of Platform,
              because this both returns the Products and notifies us of your
              desire to withdraw from the contract of sale in one go. If you
              return your Products by following the above instructions, we shall
              bear the costs of returning the Products. In some cases, you can
              request the carrier to pick up the parcel for return, but this may
              result in an extra cost charged to you by the carrier. The current
              extra cost can be found in the Return section of the Help section
              of the Platform. Returns not made in accordance with the
              instructions set forth above shall be at your own risk and at your
              expense. We shall notify you via email once we have received and
              processed the returned Product(s).
            </p>
            <p className=" font-medium">
              Please note that special provisions apply for Personalized
              Products as these have been designed specifically for you. This
              means that (without this affecting your rights) we cannot accept
              returns of these under the Voluntary Returns Guarantee unless they
              have manufacturing defects.
            </p>
          </div>

          <div className=" mb-4">
            <h3 className="font-semibold mb-2">2.14 Warranty</h3>
            <p>
              Your purchase is not warranted against any kind of manufacturing
              defects.
            </p>
          </div>

          <div className=" mb-4">
            <h3 className="font-semibold mb-2">
              2.15 Voluntary Return Guarantee
            </h3>
            <p>
              You have the right to withdraw from this contract within 30 days
              without giving any reason. <br />
              The withdrawal period shall be 30 days from the date you, or a
              third party named by you, who is not the carrier, have/has taken
              possession of the Products, or, where your order contained
              multiple Products which will be delivered separately, delivery of
              the final Product(s) making up your order (“Return Period”).
            </p>
            <p className=" font-medium">
              Please note that the Return Period does not apply to Standard
              Products that are considered to be hype Products. Hype Products
              include but are not limited to Yeezy. In the process of ordering
              these hype Products, please refer to the product description page
              for the return period and other Terms & Conditions.
            </p>
            <p>
              We offer this Voluntary Return Guarantee during the Voluntary
              Return Period subject to the provisions of our Returns and
              Withdrawal Policy (Section 2.13) and the following conditions.{" "}
              <br />
              The Standard Product(s) must have not been used or damaged beyond
              normal inspection use and must be returned in its original
              packaging. Returns of clothing items can only be accepted if the
              original label has not been removed. <br />
              We must be in receipt of the Standard Product(s) you are returning
              prior to the end of the Voluntary Return Period. <br />
              We reserve the right to reject the return and shall not give any
              compensation under this Voluntary Return Guarantee for returned
              Standard Products that do not comply with these conditions. <br />
              If you withdraw from a contract of sale during the Voluntary
              Return Period, in accordance with our Returns Policy (Section
              2.13) and this Section 2.15, we will reimburse all payments we
              received from you, including delivery charges (provided the
              returned Standard Product(s) represent(s) the complete order and
              with the exception of any additional charges arising from the fact
              that you chose a different method of delivery to the cheapest
              standard delivery offered by us, where available) within fourteen
              (14) days after our receipt of the Standard Product(s). For this
              repayment we shall use the same method of payment that you used
              making the original transaction unless we arrange a different
              method with you; you will not be charged any fees for such
              repayments under any circumstances.
            </p>
          </div>

          <div className=" mb-4">
            <h3 className="font-semibold mb-2">2.16 Exchange policy</h3>
            <p>
              We do not exchange Products. If you wish to exchange a Product,
              you will need to return your purchase for a refund and place a new
              order. It is only possible to get a refund on returns when the
              return is in line with our Returns and Withdrawal Policy as
              stipulated in section 2.13.
            </p>
          </div>

          <div className=" mb-4 space-y-2">
            <h3 className="font-semibold mb-2">
              2.17 Damaged or defective Products
            </h3>
            <p>
              For Yora, quality is paramount. We thoroughly test all our
              Products in real-life conditions to ensure they are fully capable
              of standing up to the uses for which they were designed. It is
              extremely rare for our Products to be damaged or defective. Yora
              has a legal obligation to make sure that our Products are conform
              to the contract of sale. Returned Products are inspected by the
              Yora Quality Assurance Department and refunded if the damage is
              the result of a manufacturing defect or deviation from factory
              specifications. We undertake to fully refund the cost of any
              defective Products.
            </p>
            <p>
              If the problem was caused by reasons other than materials quality
              or assembly process, the original Product is returned to you. We
              do not refund Products:
            </p>
            <ul className=" list-disc my-2 space-y-2">
              <li>obtained from a source other than the Platform.</li>
              <li>
                that have been damaged by abuse or negligence (e.g., exposure to
                chemicals, caustic substances, open flame, high heat, sharp
                object, etc.); and/or
              </li>
              <li>
                that have been damaged by misuse or activities other than the
                intended purpose (e.g., use of running shoes for court sports or
                hiking footwear as work boots, etc.).
              </li>
              <li>
                which gets damaged or becomes non-usable due to
                maintenance/cleaning/upkeep carried out by consumer which does
                not comply to Yora recommended maintenance/cleaning/upkeep
                methods, written on care labels/instruction stickers attached to
                the product or product maintenance instructions as advised on
                platform.
              </li>
            </ul>
            <p>
              Please note the life expectancy of any Product depends on the
              individual using the Product, the conditions of use, and the
              characteristic wear patterns of the user. Our Products damaged by
              normal wear and tear or that have exceeded the reasonable lifespan
              of the Product are not replaced. <br />
              Our Customer Service team is available to assist you. Please don't
              hesitate to contact us with your questions and comments. Contact
              us via the means provided in the Help section of the Platform or
              using the contact information provided below under Miscellaneous.
            </p>
          </div>
        </SectionHeader>

        <SectionHeader title="3. USE OF THE PLATFORM" section="platform">
          <h3 className="font-semibold mb-2">3.1 Introduction</h3>
          <p className="mb-4">
            These Terms of Use apply to your access to and use of the Platform,
            including the software contained in the Platform ("Software").
          </p>
          <p className="mb-4">
            Your access to and use of the Platform and the information,
            materials, products, and services available through the Platform are
            subject to these Terms of Use, regardless of whether you possess an
            account through the Platform linked to your name and/or contact
            information ("Account").
          </p>

          <h3 className="font-semibold mb-2">3.2 Privacy Policy</h3>
          <p className="mb-4">
            The Platform Privacy Policy describes how we collect information
            about you through the Platform and how we use and disclose that
            information.
          </p>

          <h3 className="font-semibold mb-2">
            3.3 Changes to these Terms of Use
          </h3>
          <p className="mb-4">
            We may make changes to these Terms of Use at any time if we believe
            it is reasonably necessary to do so (including for security, legal
            or regulatory reasons). We will give you as much advance notice of
            this as is reasonably possible.
          </p>
          <h3 className="font-semibold mb-2">
            3.3 Changes to these Terms of Use
          </h3>
          <p className="mb-4">
            We may make changes to these Terms of Use at any time if we believe
            it is reasonably necessary to do so (including for security, legal
            or regulatory reasons). We will give you as much advance notice of
            this as is reasonably possible (and may do so by communicating the
            changes to you either when you log in to the Platform or by sending
            you notice using the contact information that you have provided to
            us and/or by any other means we think is appropriate).
          </p>
          <p className="mb-4">
            In some circumstances we may need you to download the latest version
            of the Platform and/or accept a new version of these Terms of Use
            before continuing to use the Platform. Your continued use of the
            Platform will constitute your acceptance of any new or amended terms
            and/or updates.
          </p>

          <h3 className="font-semibold mb-2">3.4 Copyright and ownership</h3>
          <p className="mb-4">
            All the content featured or displayed on the Platform, including but
            not limited to text, graphics, photographs, images, moving images,
            sound, and illustrations protected by intellectual property law
            other than User-Provided Content (together "Content"), is owned by
            Yora, its licensors, vendors, agents, and/or its Content providers.
          </p>
          <p className="mb-4">
            You must not use the Platform or any Content other than for its
            intended purpose. Except where we tell you otherwise in the
            Platform, you may view, play, print, and download documents, audio,
            and video found on the Platform for personal, informational, and
            non-commercial purposes only.
          </p>
          <p className="mb-4">
            You must not modify any of the materials and you must not copy,
            distribute, transmit, display, perform, reproduce, publish, license,
            create derivative works from, transfer, or sell any information or
            work contained on the Platform.
          </p>
          <p className="mb-4">
            Except as authorized under applicable copyright law, you are
            responsible for obtaining permission before reusing any copyrighted
            material that is available on the Platform. For purposes of these
            Terms of Use, the use of any such material on any other mobile
            application, website, or online service is prohibited.
          </p>
          <p className="mb-4">
            You are responsible for complying with all laws which apply to you
            and your use of the Platform. The Platform, its Content, and all
            related rights shall remain the exclusive property of Yora or its
            licensors unless otherwise expressly agreed. You will not remove any
            copyright, trademark, or other proprietary notices from material
            found on the Platform.
          </p>

          <h3 className="font-semibold mb-2">3.5 Trademarks</h3>
          <p className="mb-4">
            All trademarks, service marks, and trade names of Yora used as part
            of or in connection with the Platform (collectively "Marks") are
            trademarks or registered trademarks of the Yora Group, or its
            affiliates, partners, vendors, or licensors. You may not use, copy,
            reproduce, republish, upload, post, transmit, distribute, or modify
            Yora Marks in any way, including in advertising or publicity
            pertaining to distribution of materials on the Platform, without
            Yora’ prior written consent. The use of Yora Marks on any other
            mobile application, website, or online service is not allowed. Yora
            prohibits the use of Yora Marks as a "hot" link on or to any other
            mobile application, website, or online service unless establishment
            of such a link is approved in advance.
          </p>

          <h3 className="font-semibold mb-2">3.6 Software</h3>
          <p className="mb-4">
            The Software is being provided to you by Yora pursuant to the
            following terms. Yora grants you a non-exclusive, non-transferable,
            limited license to use the Software only for the purpose of using
            the Platform. Except as specifically provided in these Terms of Use,
            You may not, in whole or in part: (a) copy the Software, (b)
            distribute copies of the Software, in whole or in part, to any third
            party; (c) modify, adapt, translate, reverse engineer, make
            alterations, decompile, disassemble or make derivative works based
            on the Software, except as otherwise permitted by law; (d) use,
            rent, loan, sub-license, lease, distribute or attempt to grant other
            rights to the Software to third parties; or (e) use the Software to
            act as a service bureau or application service provider, or to
            permit access to the Software by any third party. Part of the
            Software may be provided by and/or owned by third parties.
          </p>
          <p className="mb-4">
            You may not use any software, robot, crawler, spider, page scraper
            or any other automated means or device to (a) access, copy, affect
            or monitor any part of the Platform or its content or circumvent the
            structure or presentation of the Platform or any of its content or
            (b) to interfere with the operation of the Platform or any
            transaction being made on the Platform or interfere or affect any
            person's use of the Platform or to help facilitate any third party
            to purchase any product on the Platform.
          </p>
          <p className="mb-4">
            You may not attempt to gain unauthorized access to any part or
            feature of the Platform or any system connected to the Platform by
            hacking, password mining or other illegitimate or unauthorized
            means.
          </p>
          <p className="mb-4">
            Certain of the third-party materials supplied by Yora for use with
            the Software are governed by open-source software license agreements
            supplied with such third-party materials. Yora makes no claim of
            ownership of such open-source software, and such software is
            supplied solely in accordance with the license agreements
            accompanying such software. Accordingly, the restrictions above
            concerning scope of use, ownership, modification, and other
            provisions relating to the Software may not apply to such
            open-source software.
          </p>

          <h3 className="font-semibold mb-2">3.7 Accuracy of information</h3>
          <p className="mb-4">
            We attempt to ensure that information on the Platform is complete,
            accurate, and current. Despite our efforts this may not always be
            the case. Please note that we are not required to maintain or update
            any such information. You should not rely on any such information
            and any reliance on any such information is at your own risk.
          </p>

          <h3 className="font-semibold mb-2">3.8 Minors</h3>
          <p className="mb-4">
            You must be 18 years of age or older to access or use the Platform.
          </p>

          <h3 className="font-semibold mb-2">
            3.9 Your provision of information
          </h3>
          <p className="mb-4">
            When you provide information about yourself to us or to other users
            of the Platform, including when you create an Account, you agree to:
            (a) provide accurate and current information, and not to provide
            information that attempts to impersonate another individual; and (b)
            maintain and promptly update such information to keep it accurate
            and current. If you provide any information about yourself that is
            untrue or inaccurate, or we have reasonable grounds to suspect that
            such information is untrue or inaccurate, we retain the right to
            suspend or terminate any account you establish, decline to provide
            you with services on the Platform, and/or refuse any or all current
            or future use of the Platform or any portion thereof.
          </p>

          <h3 className="font-semibold mb-2">3.10 User-Provided Content</h3>
          <p className="mb-4">
            You understand that all information, data, or other materials that
            you and other users of Platform upload, post, transmit, publish,
            display, or otherwise make available through the Platform, including
            information you share with or make available to other users of the
            Platform ("User-Provided Content"), are the sole responsibility of
            you or the person from whom such User-Provided Content originated.
            This means that you, and not us, are responsible for all
            User-Provided Content that you upload, post, transmit, publish,
            display, or otherwise make available through the Platform.
          </p>
          <p className="mb-4">
            We do not control the User-Provided Content posted and, as such, do
            not guarantee the accuracy, integrity, or quality of any
            User-Provided Content. Furthermore, the User-Provided Content is for
            informational purposes only and is not intended to be a substitute
            for professional medical advice, diagnosis, or treatment. You
            understand that by using the Platform, you may be exposed to
            User-Provided Content that is offensive, indecent, or objectionable.
          </p>
          <p className="mb-4">
            We are not responsible for any User-Provided Content and will not be
            liable for any loss or damage caused by any User-Provided Content or
            your use of or reliance on it.
          </p>
          <p className="mb-4">
            By uploading, posting, transmitting, publishing, displaying, or
            otherwise making available User-Provided Content through the
            Platform, you agree that:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>
              you are the owner of all rights in such User-Provided Content.
            </li>
            <li>
              you have waived all "moral rights" that you may have in such
              User-Provided Content, including but not limited to the right to
              be identified as the author of such content;
            </li>
            <li>
              you have the right to allow our use of such User-Provided Content
              under these Terms of Use.
            </li>
            <li>
              all User-Provided Content that you post is accurate; does not
              violate these Terms of Use; will not result in a breach or
              violation of any terms of any contract or agreement to which you
              are currently bound or will become bound in the future; does not
              and will not violate any applicable law; and will not cause injury
              to any person or entity; and
            </li>
            <li>you are at least 18 years old.</li>
          </ul>

          <h3 className="font-semibold mb-2">
            3.11 Your grant of license to Yora for User-Provided Content
          </h3>
          <p className="mb-4">
            By uploading, posting, transmitting, publishing, displaying, or
            otherwise making available User-Provided Content, you grant us a
            worldwide, perpetual, non-exclusive royalty-free license (with the
            right to sub-license) to use, reproduce, display, perform, adapt,
            modify, publish, or distribute such User-Provided Content in whole
            or in part in any form, medium, or technology (now known or later
            developed) as part of or in connection with the Platform.
          </p>
          <p className="mb-4">
            We may modify or adapt User-Provided Content, including to transmit,
            display or distribute it over networks and to conform to the
            requirements of networks, services, or other media. We or others
            may, in our sole discretion, refer to your name or other identifier
            you provided when posting User-Provided Content. You promise that
            our publication and use of your User-Provided Content will not
            infringe the rights of any third party.
          </p>

          <h3 className="font-semibold mb-2">
            3.12 Yora’ discretion to use User-Provided Content
          </h3>
          <p className="mb-4">
            All User-Provided Content that you upload, post, transmit, publish,
            display, or otherwise make available through the Platform may be
            used by Yora in accordance with our Privacy Policy. Yora reserves
            the right to change, condense, delete, or refuse to post any
            User-Provided Content on the Platform in its sole discretion. Yora
            does not guarantee that you will be able to edit or delete any
            User-Provided Content you have made available in connection with the
            Platform. We are not under any obligation to keep the User-Provided
            Content that you make available through the Platform confidential.
          </p>

          <h3 className="font-semibold mb-2">3.13 Your conduct</h3>
          <p className="mb-4">
            You agree to comply with all laws, rules, and regulations applicable
            to your access to and use of the Platform. In addition, you agree
            not to:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>
              upload, post, transmit, publish, display, or otherwise make
              available through the Platform any User-Provided Content that is
              known by you to be false, inaccurate, misleading or impersonates
              another person.
            </li>
            <li>
              upload, post, transmit, publish, display, or otherwise make
              available through the Platform any User-Provided Content that
              violates any law, statute, ordinance, or regulation (including,
              but not limited to, those governing export control, consumer
              protection, unfair competition, anti-discrimination, or false
              advertising).
            </li>
            <li>
              upload, post, transmit, publish, display, or otherwise make
              available through the Platform any User-Provided Content that is,
              or may reasonably be considered to be, harmful, threatening,
              abusive, harassing, tortious, defamatory, vulgar, obscene,
              libelous, invasive of another's privacy, hateful, or racially,
              ethnically, or otherwise objectionable, or that harms minors in
              any way.
            </li>
            <li>
              upload, post, transmit, publish, display, or otherwise make
              available through the Platform any information that threatens the
              unity, integrity, defense, security or sovereignty of India,
              friendly relations with foreign states, or public order or causes
              incitement to the commission of any cognizable offence or prevents
              investigation of any offence or is insulting any other nation.
            </li>
            <li>
              upload, post, transmit, publish, display, or otherwise make
              available through the Platform any information that is patently
              false and untrue, and is written or published in any form, with
              the intent to mislead or harass a person, entity, or agency for
              financial gain or to cause any injury to any person.
            </li>
            <li>
              forge headers or otherwise manipulate identifiers to disguise the
              origin of any User-Provided Content transmitted through the
              Platform.
            </li>
            <li>
              upload, post, transmit, publish, display, or otherwise make
              available through the Platform any User-Provided Content that you
              do not have a right to make available under any law or under
              contractual or fiduciary relationships (such as inside
              information, or proprietary and confidential information learned
              or disclosed as part of employment relationships or under
              nondisclosure agreements).
            </li>
            <li>
              upload, post, transmit, publish, display, or otherwise make
              available through the Platform any User-Provided Content that
              infringes any patent, trademark, trade secret, copyright, right of
              publicity, or other right of any party.
            </li>
            <li>
              upload, post, transmit, publish, display, or otherwise make
              available through the Platform any unsolicited or unauthorized
              advertising, promotional materials, "junk mail," "spam," "chain
              letters," "pyramid schemes," or any other form of solicitation.
            </li>
            <li>
              upload, post, transmit, publish, display, or otherwise make
              available User-Provided Content provided by another user of the
              Platform (or an image or picture depicting such User-Provided
              Content) on any other website, mobile application, or online
              service without that user’s prior permission.
            </li>
            <li>
              upload, post, transmit, publish, display, or otherwise make
              available through the Platform any material that contains software
              viruses, or any other computer code, files, or programs designed
              to interrupt, destroy, or limit the functionality of any computer
              software or hardware or telecommunications equipment;
            </li>
            <li>
              take any action that interferes with the proper working of the
              Platform, compromises the security of the Platform, or otherwise
              damages the Platform or any materials or information available
              through the Platform.
            </li>
            <li>
              attempt to gain unauthorized access to any portion or feature of
              the Platform, to any other systems or networks connected to the
              Platform, to any of our or our service providers’ servers, or to
              any of the services offered on or through the Platform, including
              but not limited to by hacking, password “mining”, or any other
              unauthorized means.
            </li>
            <li>
              probe, scan, or test the vulnerability of the Platform or any
              network connected to the Platform or bypass the authentication
              measures on the Platform, or any network connected to the
              Platform;
            </li>
            <li>
              in accordance with Section 3.6, use any automated means to collect
              information or Content from or otherwise access the Platform,
              including, but not limited to, using technical tools known as
              robots, spiders, or scrapers, without our prior permission.
            </li>
            <li>
              harvest or otherwise collect and store information about other
              users of the Platform, including e-mail addresses.
            </li>
            <li>
              install any software, file, or code that is not authorized by the
              user of a computer or device or that assumes control of all or any
              part of the processing performed by a computer or device without
              the authorization of the user of the computer or device; or
            </li>
            <li>
              interfere with or disrupt the operation of the Platform or server
              networks connected to the Platform, or disobey any requirements,
              procedures, policies, or regulations of networks connected to the
              Platform.
            </li>
          </ul>

          <h3 className="font-semibold mb-2">
            3.14 Links to websites and online services owned or controlled by
            third parties and third-party attributions
          </h3>
          <p className="mb-4">
            For your convenience, the Platform may contain links to or at times
            redirect you to websites and/or online services owned or controlled
            by third parties Also, at your request, the Platform may connect to
            social networking websites that are not owned or controlled by us.
          </p>
          <p className="mb-4">
            These websites and online services are not under our control, and
            you accept that we are not responsible or liable for the accuracy;
            collection, use, or disclosure of information; copyright compliance;
            legality; decency; or any other aspect of such websites and online
            services including their operation, or the content displayed on or
            through them. The inclusion of such a link on the Platform does not
            imply our endorsement of any such website or online service, the
            content displayed on or through it, or any association with its
            operators, and you agree not to hold us responsible for any harm
            that may arise based on your access to or use of any linked website
            or online service.
          </p>
          <h3 className="font-semibold mb-2">
            3.15 Registration and passwords
          </h3>
          <p className="mb-4">
            You may be permitted or required to register or obtain a login ID
            and password prior to being provided with access to certain pages in
            the Platform. You acknowledge and agree that you are responsible for
            maintaining the confidentiality of your login ID and password, and
            for all uses of your login ID, password, and/or account, whether
            authorized by you or not. You agree to notify us immediately of any
            unauthorized use of your login ID, password, or account, or any
            other breach of security involving access to the Platform through
            your account. You acknowledge that you may be held liable for any
            loss or harm incurred by us or any other person or entity due to
            someone else using your login ID, password, or account because of
            your failure to take reasonable steps to keep your account
            information secure and confidential.
          </p>

          <h3 className="font-semibold mb-2">
            3.16 Operation of the Platform and termination of this agreement
          </h3>
          <p className="mb-4">
            We reserve the right to do any of the following, at any time, at our
            sole discretion, with or without notice: (i) modify, suspend, or
            terminate operation of or your access to the Platform, or any
            portion of the Platform, or the agreement between you and us under
            these Terms of Use, for any reason including but not limited to for
            your violation of these Terms of Use; (ii) modify or change the
            Platform, or any portion of the Platform; (iii) interrupt the
            regular operation of the Platform, or any portion of the Platform,
            as necessary to perform routine or non-routine maintenance, to
            correct errors, or to make other changes to the Platform.
          </p>
          <p className="mb-4">
            On cancellation of the agreement under these Terms of Use for any
            reason:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>
              all rights granted to you under these Terms of Use shall cease.
            </li>
            <li>
              you must immediately cease all activities authorized by these
              Terms of Use including your use of the Platform.
            </li>
            <li>
              you must immediately delete or remove the Platform from your
              device(s) and immediately destroy all copies, full or partial of
              the Platform than in your possession, custody, or control and on
              request by us certify to us (or our nominee) that you have done
              so.
            </li>
          </ul>
          <p className="mb-4">
            You may cancel this agreement at any time without notice and for any
            reason by uninstalling the App. Uninstallation methods vary
            depending on your device. To uninstall the App, please use the
            application manager provided with your device or consult your device
            manual for reference.
          </p>
          <p className="mb-4">
            The sections entitled Your Grant of License to Yora for User
            Provided Content and Our Responsibility for Loss or Damage Suffered
            by You will continue to apply after this agreement under these Terms
            of Use ends.
          </p>

          <h3 className="font-semibold mb-2">3.17 Access to the Platform</h3>
          <p className="mb-4">
            Neither Yora, nor any of its respective affiliates guarantee that
            the functions contained in the Platform will be uninterrupted or
            error-free or that defects will be corrected. We may suspend,
            withdraw, discontinue, or change all or any part of the Platform
            without notice.
          </p>

          <h3 className="font-semibold mb-2">
            3.18 Our responsibility for loss or damage suffered by you
          </h3>
          <p className="mb-4">
            We are responsible to you for foreseeable loss and damage caused by
            us. If we fail to comply with these terms, we are responsible for
            loss or damage you suffer that is a foreseeable result of our
            breaking these terms or our failing to use reasonable care and
            skill, but we are not responsible for any loss or damage that is not
            foreseeable. Loss or damage is foreseeable if either it is obvious
            that it will happen or if, at the time you accepted these terms,
            both we and you knew it might happen.
          </p>
          <p className="mb-4">
            We do not exclude or limit in any way our liability to you where it
            would be unlawful to do so. This includes liability for death or
            personal injury caused by our negligence or the negligence of our
            employees, agents, or subcontractors or for fraud or fraudulent
            misrepresentation.
          </p>
          <p className="mb-4">
            If defective digital content that we have supplied damages a device
            or digital content belonging to you, we will either repair the
            damage or pay you compensation. However, we will not be liable for
            damage that you could have avoided by following our advice to apply
            an update offered to you free of charge or for damage that was
            caused by you failing to correctly follow installation instructions
            or to have in place the minimum system requirements advised by us.
          </p>
          <p className="mb-4">
            The Platform is for domestic and private use. If you use the
            Platform for any commercial, business or resale purpose we will have
            no liability to you for any loss of profit, loss of business,
            business interruption, or loss of business opportunity.
          </p>

          <h3 className="font-semibold mb-2">
            3.19 Even if we delay in enforcing this contract, we can still
            enforce it later
          </h3>
          <p className="mb-4">
            Even if we delay in enforcing this contract, we can still enforce it
            later. If we do not insist immediately that you do anything you are
            required to do under these terms, or if we delay in taking steps
            against you in respect of your breaking this contract, that will not
            mean that you do not have to do those things and it will not prevent
            us taking steps against you later.
          </p>
        </SectionHeader>

        <SectionHeader title="4. MISCELLANEOUS" section="misc">
          <h3 className="font-semibold mb-2">4.1 How can you contact us?</h3>
          <p className="mb-4">
            If you have any questions or comments about the Platform or the Yora
            Terms and Conditions or in the unlikely event that you wish to make
            a complaint please don't hesitate to contact.
          </p>
          <p className="mb-4">
            Alternatively, you may also write to us using the following address:
            <br />
            Customer Service Yora India,
            <br />
            Registered Office: FORUM DLF CYBER CITY, PHASE 3, SECTOR 24, DLF QE,
            Dlf Qe, Gurgaon- 122002, Haryana
            <br />
            Customer Service email: Contact@yoraa.in
          </p>

          <h3 className="font-semibold mb-2">4.2 Priorities</h3>
          <p className="mb-4">
            In case of contradiction between Yora Terms and Conditions and any
            content contained in other parts of the Platform or in links, Yora
            Terms and Conditions contained in this document prevail.
          </p>

          <h3 className="font-semibold mb-2">
            4.3 Amendments to the Yora Terms and Conditions
          </h3>
          <p className="mb-4">
            We reserve the right to make changes to these Terms and Conditions
            at any time. The use of this Platform as well as any purchase
            agreement executed between you and us, will be subject to the
            version of the Yora Terms and Conditions in force at the time you
            place the order through this Platform or the day you browse this
            Platform (as applicable). Please check the Yora Terms and Conditions
            periodically for changes.
          </p>

          <h3 className="font-semibold mb-2">4.4 Data protection</h3>
          <p className="mb-4">
            Yora fully respects the privacy of individuals who access and use
            the Platform. For details on the manner in which we use cookies, the
            type of information we collect, how and for what purpose, we use
            your information and under what circumstances we disclose
            information please see our Privacy Policy and Cookies Policy, which
            are incorporated into and form part of these Yora Terms and
            Conditions. By placing a purchase order, you agree and understand
            that we may collect, use, store and process your personal data in
            accordance with our Privacy Policy.
          </p>

          <h3 className="font-semibold mb-2">4.5 Severance</h3>
          <p className="mb-4">
            Each provision of the Yora Terms and Conditions shall be construed
            separately and independently of each other. If any provision is
            deemed invalid, void or otherwise unenforceable, that provision
            shall be deemed severable from and shall not affect the
            enforceability of any of the other provisions of these Yora Terms
            and Conditions.
          </p>

          <h3 className="font-semibold mb-2">
            4.6 Sub-contracting and assignment
          </h3>
          <p className="mb-4">
            Yora reserves the right to sub-contract, transfer, assign or novate
            all or any of our rights and obligations under Yora terms and
            conditions provided that your rights under Yora terms and conditions
            are not affected. You may not sub-contract, assign or otherwise
            transfer any of your rights or obligations under the Yora terms and
            conditions without our consent in writing.
          </p>

          <h3 className="font-semibold mb-2">
            4.7 Events beyond reasonable control
          </h3>
          <p className="mb-4">
            Yora will be not held responsible for any delay or failure to
            perform or comply with our obligations under the Yora terms and
            conditions when the delay or failure arises from any cause which is
            beyond Yora’ reasonable control.
          </p>

          <h3 className="font-semibold mb-2">
            4.8 Applicable law and jurisdiction
          </h3>
          <p className="mb-4">
            The Yora Terms and Conditions shall be governed by the laws of
            India. Indian law applies to the sales contract, to the exclusion of
            the United Nations Convention on Contracts for the International
            Sale of Goods (CISG). This does not affect the applicable mandatory
            rights under the law of your country of residence. You or Yora shall
            bring any dispute which may arise under these Terms and Conditions
            to the competent court of Delhi, India to settle any of such
            dispute.
          </p>
        </SectionHeader>
      </div>

      <div className="mt-10 p-6 bg-gray-100 rounded-md">
        <h3 className="font-semibold mb-3">
          APPENDIX 1 APPENDIX 1 to these Terms and Conditions
        </h3>
        <div className="mb-4">
          <h1>Sample Withdrawal Form</h1>
          <p className="mb-2">To:</p>
          <p>
            Yora
            <br />
            c/o Yora Customer Service,
            <br />
            Registered Office: FORUM DLF CYBER CITY, PHASE 3, SECTOR 24, DLF QE,
            Dlf Qe, Gurgaon- 122002, Haryana
          </p>
        </div>
        <p className="mb-4">
          I/We* hereby give notice that I/We* withdraw from my/our* contract of
          sale of the following goods:
        </p>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <p className="mb-2">Ordered on*/received on*:</p>
        <p className="mb-2">Name of consumer(s) and order number:</p>
        <p className="mb-2">Address of consumer(s):</p>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <p className="mb-2">
          Date/Signature of consumer(s) (only if this form is notified on paper)
        </p>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <div className="border-b-2 border-gray-300 my-4"></div>
        <p className="italic mt-4">(*) Delete as appropriate.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
