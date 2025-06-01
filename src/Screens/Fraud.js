import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';

const fraudlogo = require('../Assets/finalogo.png');
const fraudbg = require('../Assets/background1.png');
// Placeholder images for each step (replace with actual images)
const helplineImage1 = require('../Assets/fraudinsights.png');
const helplineImage2 = require('../Assets/fraudinsights.png');
const helplineImage3 = require('../Assets/fraudinsights.png');
const helplineImage4 = require('../Assets/fraudinsights.png');
const helplineImage5 = require('../Assets/fraudinsights.png');
const helplineImage6 = require('../Assets/fraudinsights.png');
const helplineImage7 = require('../Assets/fraudinsights.png');
const helplineImage8 = require('../Assets/fraudinsights.png');
const helplineImage9 = require('../Assets/fraudinsights.png');
const helplineImage10 = require('../Assets/fraudinsights.png');
const helplineImage11 = require('../Assets/fraudinsights.png');
const helplineImage12 = require('../Assets/fraudinsights.png');
const helplineImage13 = require('../Assets/fraudinsights.png');
const helplineImage14 = require('../Assets/fraudinsights.png');
// Arrow image import
const arrowImage = require('../Assets/arrow.png'); // Ensure this image exists in your Assets folder

const Fraud = () => {
  // State to control modal visibility and selected box
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);

  // Content for each box
  const boxContent = {
    1: {
      title: 'Phishing Attacks',
      description: 'Fake emails, messages, or websites that steal login info or OTPs.',
      step: 'Tip: "Never share sensitive info via unsolicited messages."',
      image: helplineImage1,
      subtitle: 'Call & check if someone picks',
      arrow: arrowImage,
      info: "Phishing is a scam where attackers pose as trusted entities to steal sensitive info like passwords or credit card details via fake emails, texts, or websites.\n\nHow it Works:\n- Fake Messages: Emails or texts mimic legitimate sources, urging you to act fast.\n- Trick Links/Forms: Leads to fake sites or forms that steal your data.\n- Malware: Clicking links may install harmful software.\n\nSpot the Signs:\n- Suspicious sender addresses (e.g., 'support@paypa1.com').\n- Poor grammar or generic greetings.\n- Unexpected requests for personal info or urgent action.\n- Strange URLs when hovering over links.\n\nStay Safe:\n- Verify sender before acting.\n- Don’t click links; type URLs manually.\n- Use two-factor authentication (2FA).\n- Avoid unknown attachments.\n- Keep software updated.\n\nIf Targeted:\n- Don’t respond or share info.\n- Report to your email provider or reportphishing@apwg.org.\n- Change passwords and monitor accounts.\n- Scan for malware if you clicked anything.\n\nWhy It Matters\nPhishing is a top cyber threat, causing significant financial loss. Stay cautious to protect your data.",
    },
    2: {
      title: "Vishing Fraud",
      description: "Fraudulent phone calls pretending to be from trusted sources to steal personal or financial info.",
      step: "Tip: Never share personal details over unsolicited calls.",
      image: helplineImage2,
      subtitle: "Verify the caller independently",
      arrow: arrowImage,
      info: "Vishing (voice phishing) is a scam where attackers use phone calls to trick individuals into sharing sensitive information like bank details, passwords, or Social Security numbers by pretending to be a legitimate organization.\n\nHow it Works:\n- Fake Calls: Attackers pose as banks, government agencies, or tech support, often using spoofed caller IDs.\n- Urgency Tactics: They create panic, claiming your account is at risk or you owe money.\n- Data Theft: Victims are persuaded to share personal details or transfer money to 'resolve' the issue.\n\nSpot the Signs:\n- Unsolicited calls asking for personal or financial information.\n- Caller ID showing a legitimate name but the request feels suspicious.\n- Threats or urgent demands, like 'act now or face penalties.'\n- Requests to call back on a different number or share one-time passwords (OTPs).\n\nStay Safe:\n- Don’t answer unknown numbers; let them go to voicemail.\n- Verify the caller by contacting the organization directly using official numbers.\n- Never share sensitive info like OTPs, PINs, or passwords over the phone.\n- Use call-blocking apps to filter potential scam calls.\n- Register your number on a Do Not Call list if available.\n\nIf Targeted:\n- Hang up immediately and don’t engage.\n- Report the call to your phone provider or local authorities.\n- Monitor your accounts for unusual activity and update passwords.\n- Inform your bank if financial details were shared.\n\nWhy It Matters\nVishing scams exploit trust and urgency, leading to significant financial and identity theft losses. Staying cautious can protect your personal information."
    },
    3: {
      title: "Social Media Scams",
      description: "Fraudulent schemes on social platforms to steal personal info or money.",
      step: 'Tip: Avoid clicking on suspicious links or sharing personal details."',
      image: helplineImage3,
      subtitle: "Verify the account’s authenticity",
      arrow: arrowImage,
      info: "Social Media Scams involve fraudsters using fake profiles, ads, or messages on platforms like Facebook, Instagram, or Twitter to trick users into sharing sensitive information or sending money.\n\nHow it Works:\n- Fake Accounts: Scammers impersonate friends, brands, or influencers.\n- Phishing Links: Messages or ads lead to fake login pages to steal credentials.\n- Bogus Offers: Promises of free gifts, discounts, or giveaways to lure victims.\n\nSpot the Signs:\n- Unfamiliar accounts asking for personal info or money.\n- Too-good-to-be-true deals or giveaways.\n- Links that redirect to suspicious websites.\n- Profiles with limited activity or generic content.\n\nStay Safe:\n- Don’t accept friend requests from unknown accounts.\n- Verify suspicious messages by contacting the person directly.\n- Avoid clicking on unsolicited links or ads.\n- Use privacy settings to limit who can see your posts.\n- Report suspicious accounts to the platform.\n\nIf Targeted:\n- Don’t engage or share any information.\n- Report the account and block the user.\n- Change passwords if you shared any details.\n- Monitor your accounts for unusual activity.\n\nWhy It Matters\nSocial Media Scams exploit trust and can lead to identity theft or financial loss. Stay vigilant to protect your data."
    },
    4: {
      title: "Fake App Fraud",
      description: "Fraudulent apps designed to steal personal or financial information.",
      step: "Tip: Download apps only from official stores like Google Play or App Store.",
      image: helplineImage4,
      subtitle: "Check app reviews and permissions",
      arrow: arrowImage,
      info: "Fake App Fraud involves malicious apps that mimic legitimate ones to trick users into downloading them, often stealing sensitive data or installing malware.\n\nHow it Works:\n- Fake Apps: Scammers create apps that look like popular ones (e.g., banking or gaming apps).\n- Data Theft: Apps request excessive permissions to access contacts, messages, or banking details.\n- Malware: Some apps install spyware or ransomware on your device.\n\nSpot the Signs:\n- Apps from unknown sources or third-party websites.\n- Poor reviews, grammatical errors, or suspicious developer names.\n- Requests for unnecessary permissions (e.g., a game accessing your contacts).\n- Unexpected pop-ups or device slowdown after installation.\n\nStay Safe:\n- Stick to official app stores and verify the developer.\n- Read reviews and check ratings before downloading.\n- Avoid granting unnecessary permissions.\n- Keep your device’s security software updated.\n- Uninstall suspicious apps immediately.\n\nIf Targeted:\n- Uninstall the app right away.\n- Run a security scan on your device.\n- Change passwords for any linked accounts.\n- Monitor your bank accounts for unauthorized transactions.\n\nWhy It Matters\nFake apps can lead to data theft, financial loss, or device compromise. Always verify app legitimacy before downloading."
    },
    5: {
      title: "Credit/Debit Card Fraud",
      description: "Unauthorized use of card details to make purchases or withdrawals.",
      step: "Tip: Never share your card details or OTP with anyone.",
      image: helplineImage5,
      subtitle: "Monitor your statements regularly",
      arrow: arrowImage,
      info: "Credit/Debit Card Fraud occurs when scammers steal card information to make unauthorized transactions, often through skimming, phishing, or data breaches.\n\nHow it Works:\n- Skimming: Devices on ATMs or POS machines capture card details.\n- Phishing: Fake emails or calls trick you into sharing card info.\n- Data Breaches: Hackers steal card details from compromised businesses.\n\nSpot the Signs:\n- Unfamiliar transactions on your bank statement.\n- Unexpected OTPs for transactions you didn’t initiate.\n- Card details being used despite not sharing them.\n- Suspicious calls or emails asking for card information.\n\nStay Safe:\n- Use secure ATMs and check for skimming devices.\n- Enable transaction alerts for your cards.\n- Don’t share OTPs or card details over calls or emails.\n- Use virtual cards for online transactions.\n- Regularly update your PIN and use strong passwords.\n\nIf Targeted:\n- Block your card immediately via your bank.\n- Report the fraud to your bank and file a police complaint.\n- Monitor your account for further unauthorized activity.\n- Request a new card with updated security features.\n\nWhy It Matters\nCard fraud can lead to significant financial loss and credit damage. Staying proactive can safeguard your finances."
    },
    6: {
      title: "SIM Swap Fraud",
      description: "Scammers take over your phone number to access accounts or steal money.",
      step: "Tip: Never share your SIM or account details with unknown callers.",
      image: helplineImage6,
      subtitle: "Contact your provider if your SIM stops working",
      arrow: arrowImage,
      info: "SIM Swap Fraud involves scammers tricking your mobile carrier into transferring your phone number to their SIM card, allowing them to intercept calls, texts, and OTPs.\n\nHow it Works:\n- Social Engineering: Scammers impersonate you to your mobile provider.\n- SIM Swap: They convince the provider to activate a new SIM with your number.\n- Account Access: They use your number to reset passwords or access bank accounts.\n\nSpot the Signs:\n- Sudden loss of mobile network or signal.\n- Inability to make calls or receive texts/OTPs.\n- Unauthorized transactions or account changes.\n- Notifications of account activity you didn’t initiate.\n\nStay Safe:\n- Add a PIN or password to your mobile account.\n- Avoid sharing personal info that could be used to impersonate you.\n- Use authentication apps instead of SMS for 2FA.\n- Monitor your phone’s network activity regularly.\n- Contact your provider immediately if your SIM stops working.\n\nIf Targeted:\n- Contact your mobile provider to report the issue.\n- Inform your bank and secure your accounts.\n- Change passwords and enable additional security measures.\n- File a police complaint for identity theft.\n\nWhy It Matters\nSIM Swap Fraud can lead to complete account takeover and financial loss. Protect your number to secure your accounts."
    },
    7: {
      title: "Identity Theft",
      description: "Stealing personal information to impersonate someone for fraudulent activities.",
      step: "Tip: Shred personal documents before disposal.",
      image: helplineImage7,
      subtitle: "Check your credit reports regularly",
      arrow: arrowImage,
      info: "Identity Theft occurs when someone steals your personal information (e.g., name, Aadhaar number, or bank details) to commit fraud, such as opening accounts or making purchases in your name.\n\nHow it Works:\n- Data Theft: Scammers steal info via phishing, hacking, or physical theft.\n- Impersonation: They use your details to apply for loans, credit cards, or benefits.\n- Financial Gain: Fraudsters make transactions or sell your info on the dark web.\n\nSpot the Signs:\n- Unfamiliar accounts or transactions in your name.\n- Unexpected bills or debt collection calls.\n- Credit score changes without reason.\n- Missing mail or unusual account activity.\n\nStay Safe:\n- Don’t share personal info on unsecured websites or calls.\n- Use strong, unique passwords for all accounts.\n- Monitor your credit reports and bank statements.\n- Freeze your credit if you suspect a breach.\n- Be cautious with public Wi-Fi when accessing sensitive info.\n\nIf Targeted:\n- Report to local police and file an identity theft complaint.\n- Notify your bank and credit agencies to freeze accounts.\n- Change all passwords and monitor your credit.\n- Consider identity theft protection services.\n\nWhy It Matters\nIdentity theft can ruin your financial reputation and take years to resolve. Safeguard your personal information at all times."
    },
    8: {
      title: "Aadhaar/ID Card Misuse",
      description: "Fraudulent use of your Aadhaar or ID card details for illegal activities.",
      step: "Tip: Never share your Aadhaar number or OTP with anyone.",
      image: helplineImage8,
      subtitle: "Lock your Aadhaar biometrics online",
      arrow: arrowImage,
      info: "Aadhaar/ID Card Misuse happens when scammers use your Aadhaar number or other ID details to commit fraud, such as opening bank accounts, taking loans, or other illegal activities.\n\nHow it Works:\n- Data Theft: Scammers obtain your Aadhaar/ID through phishing or data breaches.\n- Impersonation: They use your ID to authenticate fraudulent transactions.\n- Financial Fraud: Loans or accounts are opened in your name without your knowledge.\n\nSpot the Signs:\n- Unfamiliar transactions or loan applications linked to your Aadhaar.\n- OTPs for services you didn’t request.\n- Unexpected calls from banks about accounts you didn’t open.\n- Changes in your Aadhaar-linked services.\n\nStay Safe:\n- Lock your Aadhaar biometrics on the UIDAI website.\n- Don’t share your Aadhaar number or OTP with anyone.\n- Use a masked Aadhaar (hides the first 8 digits) when sharing.\n- Regularly check your Aadhaar authentication history online.\n- Report lost ID cards immediately to authorities.\n\nIf Targeted:\n- Report to UIDAI and file a police complaint.\n- Lock your Aadhaar and disable its use for transactions.\n- Monitor your bank accounts and credit reports.\n- Inform banks or agencies where your Aadhaar is linked.\n\nWhy It Matters\nAadhaar/ID misuse can lead to financial fraud and legal issues. Protect your ID details to avoid identity-related scams."
    },
    9: {
      title: "Insider Threats",
      description: "Fraud or data theft by employees or trusted individuals within an organization.",
      step: "Tip: Limit access to sensitive data within your organization.",
      image: helplineImage9,
      subtitle: "Implement strict access controls",
      arrow: arrowImage,
      info: "Insider Threats occur when employees, contractors, or trusted individuals misuse their access to steal data, commit fraud, or harm the organization.\n\nHow it Works:\n- Data Theft: Insiders steal sensitive info like customer data or trade secrets.\n- Fraud: They manipulate financial records or transactions for personal gain.\n- Sabotage: Disgruntled employees may leak or destroy critical data.\n\nSpot the Signs:\n- Unusual access to sensitive systems outside of work hours.\n- Employees downloading large amounts of data.\n- Financial discrepancies linked to specific individuals.\n- Suspicious behavior, like avoiding audits or controls.\n\nStay Safe:\n- Use role-based access controls to limit data exposure.\n- Monitor employee activity on sensitive systems.\n- Conduct regular audits and background checks.\n- Train employees on data security and ethics.\n- Have a clear policy for reporting suspicious behavior.\n\nIf Targeted:\n- Investigate the incident with HR and IT teams.\n- Revoke the insider’s access to systems immediately.\n- Report to authorities if laws were broken.\n- Strengthen security protocols to prevent future threats.\n\nWhy It Matters\nInsider threats can cause significant financial and reputational damage. Strong security practices can mitigate these risks."
    },
    10: {
      title: "Business Email Compromise",
      description: "Scammers impersonate executives to trick employees into transferring money or data.",
      step: "Tip: Always verify email requests for payments or sensitive info.",
      image: helplineImage10,
      subtitle: "Double-check email addresses",
      arrow: arrowImage,
      info: "Business Email Compromise (BEC) involves scammers hacking or spoofing executive email accounts to deceive employees into making payments or sharing sensitive data.\n\nHow it Works:\n- Email Spoofing: Scammers impersonate CEOs or managers using fake email addresses.\n- Urgent Requests: They request wire transfers or sensitive data with urgency.\n- Deception: Employees are tricked into believing the request is legitimate.\n\nSpot the Signs:\n- Emails from slightly altered addresses (e.g., ceo@compnay.com instead of ceo@company.com).\n- Unusual payment requests or changes in payment details.\n- Requests that bypass normal approval processes.\n- Language or tone that doesn’t match the executive’s usual style.\n\nStay Safe:\n- Verify payment requests via a phone call or in person.\n- Train employees to recognize BEC scams.\n- Use email authentication protocols like DMARC.\n- Set up multi-step approval for large transactions.\n- Encrypt sensitive emails and use secure communication channels.\n\nIf Targeted:\n- Stop the transaction immediately if possible.\n- Report to your IT team and authorities.\n- Notify your bank to trace or reverse the payment.\n- Conduct a security audit to identify vulnerabilities.\n\nWhy It Matters\nBEC scams lead to massive financial losses and data breaches. Verifying requests can prevent costly mistakes."
    },
    11: {
      title: "Ponzi Schemes",
      description: "Fraudulent investment schemes promising high returns with little risk.",
      step: "Tip: Be wary of investments promising guaranteed high returns.",
      image: helplineImage11,
      subtitle: "Research the company thoroughly",
      arrow: arrowImage,
      info: "Ponzi Schemes are fraudulent investment scams where returns are paid to earlier investors using funds from newer investors, creating the illusion of profitability.\n\nHow it Works:\n- Fake Promises: Scammers promise high returns with low risk.\n- Early Payouts: Initial investors are paid with new investors’ money.\n- Collapse: The scheme fails when new investors dry up, leaving most with losses.\n\nSpot the Signs:\n- Unrealistic returns with no clear explanation.\n- Pressure to recruit others to join the scheme.\n- Lack of transparency about how profits are generated.\n- Unregistered or unlicensed investment firms.\n\nStay Safe:\n- Research the company and verify its registration with regulators.\n- Avoid investments that sound too good to be true.\n- Consult a financial advisor before investing.\n- Be cautious of schemes promoted by friends or family.\n- Check for consistent, verifiable performance data.\n\nIf Targeted:\n- Stop investing and withdraw if possible.\n- Report to financial regulators and police.\n- Warn others to prevent further victims.\n- Seek legal advice to recover losses.\n\nWhy It Matters\nPonzi schemes can wipe out life savings and destabilize economies. Always research before investing."
    },
    12: {
      title: "Job Scams",
      description: "Fraudulent job offers designed to steal money or personal information.",
      step: "Tip: Never pay upfront for a job opportunity.",
      image: helplineImage12,
      subtitle: "Verify the employer’s legitimacy",
      arrow: arrowImage,
      info: "Job Scams involve fake job offers that trick individuals into paying fees, sharing personal info, or working for free under the pretense of employment.\n\nHow it Works:\n- Fake Offers: Scammers post job ads on websites or contact victims directly.\n- Upfront Fees: They demand payment for training, equipment, or registration.\n- Data Theft: Victims are asked to share sensitive info during the ‘application.’\n\nSpot the Signs:\n- Jobs requiring upfront payment before starting.\n- Offers with unusually high pay for little work.\n- Unprofessional communication or generic emails.\n- Requests for bank details or personal info early on.\n\nStay Safe:\n- Research the company and verify its legitimacy.\n- Avoid sharing personal info until the job is confirmed.\n- Be cautious of remote job offers with no clear contract.\n- Use reputable job platforms to find opportunities.\n- Report suspicious job postings to the platform.\n\nIf Targeted:\n- Stop communication with the scammer.\n- Report to the job platform and local authorities.\n- Monitor your accounts if you shared any details.\n- Warn others about the scam to prevent more victims.\n\nWhy It Matters\nJob scams exploit job seekers, leading to financial loss and identity theft. Always verify job offers before proceeding."
    },
    13: {
      title: "Fake Tech Support",
      description: "Scammers posing as tech support to gain access to devices or steal money.",
      step: "Tip: Don’t give remote access to your device to unknown callers.",
      image: helplineImage13,
      subtitle: "Contact official support directly",
      arrow: arrowImage,
      info: "Fake Tech Support scams involve fraudsters pretending to be from legitimate tech companies (e.g., Microsoft, Apple) to trick users into giving remote access or paying for fake services.\n\nHow it Works:\n- Cold Calls: Scammers call claiming your device has a virus or issue.\n- Remote Access: They convince you to install software granting them control.\n- Payment Demands: They charge for fake fixes or steal data from your device.\n\nSpot the Signs:\n- Unsolicited calls or pop-ups about device issues.\n- Requests for remote access or to install unknown software.\n- Pressure to pay immediately for ‘repairs.’\n- Caller ID showing a legitimate company but the call feels off.\n\nStay Safe:\n- Don’t trust unsolicited tech support calls or pop-ups.\n- Contact the company directly using official numbers.\n- Never share passwords or give remote access.\n- Use antivirus software to detect real issues.\n- Block and report suspicious numbers.\n\nIf Targeted:\n- Disconnect your device from the internet immediately.\n- Run a security scan to remove malicious software.\n- Change all passwords and monitor accounts.\n- Report to the company they impersonated and authorities.\n\nWhy It Matters\nFake tech support scams can lead to data theft, financial loss, and device compromise. Verify support requests to stay safe."
    },
    14: {
      title: "Courier/DHL Scams",
      description: "Fake delivery notifications to steal personal info or money.",
      step: "Tip: Don’t pay or share details for unsolicited deliveries.",
      image: helplineImage14,
      subtitle: "Track packages using official websites",
      arrow: arrowImage,
      info: "Courier/DHL Scams involve fake delivery notifications via email, text, or calls, claiming you owe fees or need to confirm details to receive a package, often leading to data theft or payments.\n\nHow it Works:\n- Fake Notices: Scammers send messages about a pending delivery.\n- Payment Demands: They ask for fees to release the package.\n- Phishing Links: Links in messages lead to fake sites that steal your info.\n\nSpot the Signs:\n- Unexpected delivery notifications for packages you didn’t order.\n- Requests for payment or personal info to ‘release’ a package.\n- Suspicious links or emails with poor grammar.\n- Calls claiming a package is held at customs.\n\nStay Safe:\n- Track packages only on official courier websites.\n- Don’t click links in unsolicited delivery messages.\n- Verify with the courier using their official contact.\n- Be cautious of calls asking for payment or details.\n- Report suspicious messages to the courier company.\n\nIf Targeted:\n- Don’t pay or share any information.\n- Contact the courier directly to confirm.\n- Report the scam to the courier and authorities.\n- Monitor your accounts if you shared any details.\n\nWhy It Matters\nCourier scams can lead to financial loss and identity theft. Always verify delivery notifications through official channels."
    }
  };

  // Function to handle box press and show the modal with specific content
  const handleBoxPress = (boxNumber) => {
    console.log(`Box ${boxNumber} pressed`);
    setSelectedBox(boxNumber);
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedBox(null);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ImageBackground source={fraudbg} resizeMode="cover" style={{ flex: 1 }}>
        {/* Logo header */}
        <View>
          <Image source={fraudlogo} style={styles.logo} />
        </View>

        {/* Scrollable content with boxes */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* First Row */}
          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(1)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[1].title}</Text>
                <Image source={boxContent[1].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(2)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[2].title}</Text>
                <Image source={boxContent[2].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Second Row */}
          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(3)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[3].title}</Text>
                <Image source={boxContent[3].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(4)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[4].title}</Text>
                <Image source={boxContent[4].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Third Row */}
          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(5)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[5].title}</Text>
                <Image source={boxContent[5].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(6)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[6].title}</Text>
                <Image source={boxContent[6].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Fourth Row */}
          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(7)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[7].title}</Text>
                <Image source={boxContent[7].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(8)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[8].title}</Text>
                <Image source={boxContent[8].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Fifth Row */}
          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(9)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[9].title}</Text>
                <Image source={boxContent[9].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(10)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[10].title}</Text>
                <Image source={boxContent[10].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Sixth Row */}
          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(11)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[11].title}</Text>
                <Image source={boxContent[11].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(12)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[12].title}</Text>
                <Image source={boxContent[12].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Seventh Row */}
          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(13)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[13].title}</Text>
                <Image source={boxContent[13].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.box}
              onPress={() => handleBoxPress(14)}
            >
              <View style={styles.boxContent}>
                <Text style={styles.boxText}>{boxContent[14].title}</Text>
                <Image source={boxContent[14].arrow} style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Bottom Sheet Modal */}
        {selectedBox && (
          <Modal
            isVisible={isModalVisible}
            onSwipeComplete={closeModal}
            swipeDirection={['down']}
            style={styles.modal}
            onBackdropPress={closeModal}
          >
            <View style={styles.modalContent}>
              {/* Drag Indicator */}
              <View style={styles.dragIndicator} />

              {/* Scrollable Modal Content */}
              <ScrollView contentContainerStyle={styles.modalScrollContent}>
                <Text style={styles.modalTitle}>{boxContent[selectedBox].title}</Text>
                <Text style={styles.modalDescription}>{boxContent[selectedBox].description}</Text>
                <Text style={styles.stepText}>{boxContent[selectedBox].step}</Text>
                <Image source={boxContent[selectedBox].image} style={styles.modalImage} />
                <Text style={styles.modalSubtitle}>{boxContent[selectedBox].subtitle}</Text>
                <Text style={styles.modalInfo}>{boxContent[selectedBox].info}</Text>
                {/* Add more content to demonstrate scrolling */}
                <Text style={styles.modalInfo}>
                </Text>
              </ScrollView>
            </View>
          </Modal>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Fraud;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor:'#263CBD',
    paddingTop: '8%',
  },
  logo: {
    paddingTop: 25,
    paddingLeft: 15,
    height: 90,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a36a1',
    elevation: 15,
    shadowColor: '#018AD8',
  },
  scrollContent: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  box: {
    width: '48%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#9F9E9E',
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#018AD8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  boxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Maximize space between text and arrow
    width: '85%', // Slightly increased to give more room for spacing
    paddingHorizontal: 10, // Add padding to create a gap on the sides
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flexShrink: 1, // Allow text to shrink if needed
    marginRight: 10, // Add extra gap between text and arrow
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#333', // Optional: Adjust color to match your theme
  },
  // Modal Styles
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '60%', // Fixed height for the modal
    paddingTop: 10,
  },
  dragIndicator: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalScrollContent: {
    padding: 20,
    paddingBottom: 40, // Extra padding at the bottom for better scrolling experience
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#050171',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 19,
    color: '#494848',
    marginBottom: 20,
  },
  stepText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C23A3B',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalImage: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalSubtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modalInfo: {
    fontSize: 17,
    color: '#494848',
    marginBottom: 15,
  },
});