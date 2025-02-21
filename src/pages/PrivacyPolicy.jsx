import React from 'react';
import { Link } from 'react-router';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    {children}
  </div>
);

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. What does this Privacy Policy tell you?",
      content: 'This Privacy Notice tells you how we collect and process the information from which you can be identified directly or indirectly and including any Personal Sensitive Data ("Personal Data") while you browse www.Yoraa.in as well as when you interact with our different platforms, portals and applications using your Personal Data, including the Yoraa app.'
    },
    {
      title: "2. Who is responsible for your Personal Data?",
      content: "Yora entity responsible for protecting your Personal Data and complying with applicable national legislation governing the use of your Personal Data is: Yora apparels Private Limited |Registered Office: WeWork DLF Forum, Cybercity, Phase III, Gurugram, Haryana 122002"
    },
    {
      title: "3. How do you get in touch with the Grievance Officer of Yora in India?",
      content: (
        <div className="space-y-2">
          <p>Please email at: contact@yoraa.in</p>
          <p>Registered Office: WeWork DLF Forum, Cybercity, Phase III, Gurugram, Haryana 122002</p>
          <p>Grievance Officer:</p>
          <p>Name: Rithik Mahajan</p>
          <p>Designation: Digital Brand Commerce Director</p>
          <p>Address: WeWork DLF Forum, Cybercity, Phase III, Gurugram, Haryana 122002</p>
          <p>Email: contact@yoraa.in</p>
        </div>
      )
    },
    {
      title: "4. What Personal Data does Yora collect and use (Categories of Personal Data)?",
      content: (
        <div className="space-y-4">
          <p>These are the categories of Personal Data we collect directly or indirectly from you:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><span className="font-semibold">Identity information</span> – includes: name [first, last, initials], Date of Birth, e-mail address, unique consumer identifier number (including your membership number), nickname, password, social media identifiers and information passed along to us via your Facebook, your device fingerprint, and gift card codes that are assigned to you. We use it to verify your identity.</li>
            <li><span className="font-semibold">Contact information</span> – includes: your phone number, shipping and billing address, e-mail address, Messenger ID, social media handle, any other communication channel you have used to contact us for more information. We use it to contact you for different reasons depending on the purposes stated below.</li>
            <li><span className="font-semibold">Location information</span> – includes: your residential location, current log-in location [IP address], GPS location (if you wish to share us, for example through your mobile device settings), or the specific Yora site you have visited that might give us clues about where you are. We use it to help you find what you are looking for at your current location.</li>
            <li><span className="font-semibold">Size information</span> – includes: clothes size, height, weight, chest, waist, hip, inseam, body shape, heel-toe measurement. We use it to make sure your gear fits.</li>
            <li><span className="font-semibold">Purchase information</span> – includes: your payment information (credit card number), Bank Account details, payment risk profile (provided to us by our payment risk solution), shopping cart (your ordered items), delivery details, shipping and billing address, customer order number, purchase history with Yora, transaction ID, and any other information related to your purchase. We use it to complete your order or return or refund on Yora sites and apps, in Yora stores, or other selling platforms.</li>
            <li><span className="font-semibold">Behavioural and Profile information</span> – includes: your shopping history, Wishlist items, your browsing behaviour, your browsing preferences, your shopping preferences, in-store interactions, your workout history, product reviews, social media interactions with us, and any other intelligence we have about you to help us learn you as a consumer better, including "Community information". We use it to know you better as a consumer, so we can send you marketing messages containing only products and services that we think you might be interested in.</li>
            <li><span className="font-semibold">Community information</span> – includes: information provided by you when you participate various Yora events and communities either as a trainer, team member, a participant or as a promotor of our events, including for example: pictures, videos, your nickname, your team, your interests and preferences, your feedback, leader boards, event participation, joined groups, and registration details. We use this information to organise the events and communities, and to know more about you as a consumer.</li>
            <li><span className="font-semibold">Social Media information</span> – includes: information obtained through your interaction with us on various social media channels such as Facebook, Instagram, Google, etc., including: any social media information that is publicly available such as your social media handles, social media interactions and public postings, your "Likes" and other reactions, your social media connections, your photos that are public, or those you send to us by mentioning us or following our social media posts by using "handles" or "hashtags". We obtain this information from the social media network (e.g., Facebook, Snapchat, Instagram, etc.) directly or indirectly through third-party agencies we have agreements with.</li>
            <li><span className="font-semibold">Device information</span> – includes: Information about your device or browser that give us an idea about your browsing behaviour or device usage. Your device information is collected by our app, and your browser information is collected by our cookies, tags, and pixels. This is often required for network security purposes. This includes, but not limited to: IP address, date and time of the visit, how long you remained on our website, the referral URL (if you came to our site via a different site or an advertisement), the pages visited on our site, your browser type, device type, versions, operating system.</li>
            <li><span className="font-semibold">Activity information</span> - includes: fitness data (for example workout start and end times, activity type, sports category), sensor data (for example step goal, duration, pace, distance, calories, heartbeat, RunScore and speed), and other data related to your fitness app. We use it to help you improve your performance goals and improve your user experiences and identify what products might be best for you based on your exercise patterns.</li>
            <li><span className="font-semibold">Correspondence</span> – includes: conversation we have when you contact customer service, the emails you write us about our products or services, the complaints you address to us via post, e-mail, fax, or call, notes we prepared on your feedback, call back from our Customer Service to you, and any other communication between you and Yora personnel. We record all Customer Service calls for quality assurance purposes.</li>
            <li><span className="font-semibold">Preference information</span> - includes: preferred language, log-in location, Wishlist items, preferred shipping address, browsing preferences, our correspondence with you, your Yora product reviews. We use it to give you convenience when you visit and/or shop on our sites and apps.</li>
            <li><span className="font-semibold">Membership information</span> – includes: Unique Member Identifier (member ID), date you became a member, store ID (if you signed up in a retail store), source ID, country and brand of your original membership, membership points, engagement history, rewards history, membership vouchers associated to members. All the information the listed here will be kept for as long as you are a member.</li>
          </ul>
        </div>
      )
    },
    {
      title: "5. What does Yora do with your Personal Data (Purposes and Processing)?",
      content: (
        <div className="space-y-4">
          <p>Your Personal Data is used for the following purposes:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Site (www.Yoraa.in) operation and app operation</li>
            <li>Domain and network security and user authentication</li>
            <li>Global credential to all Yora platforms – user experience</li>
            <li>Sales of Yora products - online and off-line order</li>
            <li>Payment fraud detection</li>
            <li>Product delivery, return and refund</li>
            <li>Electronic delivery tracking</li>
            <li>Business operational analytics</li>
            <li>Customer service</li>
            <li>Personalised marketing messages via email (newsletter sign-up) and SMS</li>
            <li>Personalised marketing messages via email (via existing contract) and SMS</li>
            <li>Targeted messages on 3rd-party advertising platforms</li>
            <li>Membership administration – where applicable</li>
            <li>Private event registration</li>
            <li>Open event registration</li>
            <li>Product research and development</li>
            <li>Legal obligation - cooperation with law enforcement and regulatory authorities (including courts)</li>
            <li>Collecting your device information on our website using cookies, pixels, tags, and similar technologies ("Cookies Policy")</li>
            <li>User-generated content (UGC) acquisition from social media</li>
            <li>Push notifications (in-app communication)</li>
          </ol>
          <p>Your Personal Data will not be retained for a period longer than is required for the purposes for which the information is collected or used under law except for the data that is required to be kept longer for legal reasons specified by law, data associated with account which shall be retained up to four (4) years from your last interaction with us, unless, a longer or shorter retention period is required by law and is necessary in the course of legal proceedings or is otherwise needed for a particular purpose under applicable law. If you don't have an account, but have purchased items online as a guest, we retain information related to your purchase for the same period of time as described for members.</p>
        </div>
      )
    },
    {
      title: "6. What does Yora do when we transfer your Personal Data outside of India?",
      content: "Depending on the Personal Data processing activity, your Personal Data is shared with different Yora entities, affiliates, couriering agencies, agents and third parties located in different countries. We comply with all local legal requirements to ensure your Personal Data is secured and safe when it is being transferred to a different country (including access) and we ensure that the same level of data protection is maintained by the entity to whom the data is shared."
    },
    {
      title: "7. How do we secure your Personal Data?",
      content: "We implement appropriate managerial, technical, operational, physical, and organisational measures as per applicable laws and regulations to address the risks corresponding to our use of your Personal Data, including loss, alteration, or unauthorised access to your Personal Data, and empowering you to exercise your rights. We require our service providers to do the same through contractual agreements. However, you should be aware that any transmission of your Personal Data through the internet is at your own risk. We can only protect your Personal Data when we have it."
    },
    {
      title: "8. What are your rights and how can you exercise them?",
      content: (
        <div className="space-y-4">
          <p>Please kindly contact the Grievance Officer (refer point 3 for details) if you wish to exercise your rights under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information).</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You have the right to make sure we are using the accurate details about you and you may request to review and correct any inaccurate Personal Data we have of you.</li>
            <li>When we use your Personal Data based on your consent, you have the right to withdraw your consent at any time by writing to us.</li>
            <li>In the event that you withdraw consent given earlier we have no obligation to provide goods or services for which the said information was sought.</li>
            <li>You have the right to raise any discrepancies or grievances with respect to processing of information by contacting our Grievance Officer.</li>
          </ul>
        </div>
      )
    },
    {
      title: "9. Questions, Complaints, and Support – who and how you can get in touch with them?",
      content: (
        <div className="space-y-2">
          <p className="font-bold">Yora Grievance Officer</p>
          <p>Name: Rithik Mahajan</p>
          <p>Designation: Digital Brand Commerce Director</p>
          <p>Address: WeWork DLF Forum, Cybercity, Phase III, Gurugram, Haryana 122002</p>
          <p>Email: <Link to="mailto:contact@yoraa.in">contact@yoraa.in</Link></p>
        </div>
      )
    },
    {
      title: "10. Updates and Notification of Updates",
      content: (
        <div className="space-y-2">
          <p>We review and update the Privacy Policy periodically to reflect any changes resulting from our day-to-day business operations. You can always check the date of the Privacy Policy to find out when we last made any changes. We will notify you of the changes to Privacy Policy and such notifications shall deemed to be incorporated in the Privacy Policy from the date of notification Where your personal data may be used by non-Yora Data Controllers via Yora platforms, applications or elsewhere for their own purposes, please consult the privacy notice of the non-Yora Data Controller for more information about how they handle your personal data.</p>
          <p>You agree and consent to the collection, use, processing, disclosure, and transfer of your Personal Data as detailed in the provisions of this Privacy Policy.</p>
        </div>
      )
    },
    {
      title: "11. Yora Data Recipients",
      content: (
        <div className="space-y-2">
          <p>Your personal data may be shared with other Yora entities, affiliates, and third-party service providers who assist us in providing our services. These may include payment processors, shipping companies, marketing partners, and analytics providers. We ensure all data recipients maintain appropriate security measures to protect your information.</p>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Privacy Policy</h1>
      
      <div className="space-y-6">
        {sections.map((section, index) => (
          <Card key={index}>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {section.title}
            </h2>
            <div className="text-gray-600 leading-relaxed">
              {section.content}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;