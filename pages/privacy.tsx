import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { GetStaticProps } from 'next'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import Header from "../components/header";

const Lang = () => {
  var language ="en";
    const router = useRouter();
    if(router.query.lang){ 
    const lan = JSON.stringify(router.query.lang);
    language = JSON.parse(lan)
    }
    return (language)
  }

  export default function Contact({ file, href, children}) {
  const formOptions = {
    label: 'Contact Page',
    fields: [
      { name: 'title', component: 'text' }
    ],
  }

  const [show, setShow] = useState(false);

  const [editingdata, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  useGithubToolbarPlugins()



  return (
    <div>
        <Header/>
      <Head>
        <title>{editingdata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#054218"></meta>
      </Head>

      <main className="bg-green py-5">
        <Container className="v-full pt-5 mb-5">
          <Row className="justify-content-center text-center py-3">
            <Col className="col-10 col-lg-7">
            <h1 className="h2 text-orange bold">Privacy Policy</h1>
            <p className="text-white bold">Last updated: July 8, 2021</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            
            <Col className="col-10 col-lg-7">
              <div className="bg-brown roundedBox innerShadow text-white p-5">
      
              <h2 className="h4 bold underline">INTRODUCTION</h2>

                <p className="mb-3">
                Canada’s Forest Trust Corporation (the "CFT" or "We") respect your privacy and are committed to protecting it through our compliance with this policy.
                </p>

                <p className="mb-3">
                This policy describes how we collect, use, disclose, and protect the personal information of our stewards, prospective stewards, and website users ("you"), describes the types of information we may collect from you or that you may provide when you visit the website <a href="/home" className="text-orange">www.canadasforesttrust.ca</a> (our "Website"), and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                </p>

                <p className="mb-3">
                We will only use your personal information in accordance with this policy unless otherwise required by applicable law. We take steps to ensure that the personal information that we collect about you is adequate, relevant, not excessive, and used for limited purposes.
                </p>

                <p className="mb-3">
                Privacy laws in Canada generally define "personal information" as any information about an identifiable individual, which includes information that can be used on its own or with other information to identify, contact, or locate a single person. Personal information does not include business contact information, including your name, title, or business contact information.
                </p>

                <p className="mb-3">
                This policy applies to information we may collect, use, or disclose about you:
                </p>
                
                
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        On this Website.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        In email, text, and other electronic messages between you and the CFT, or its representatives.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        When you interact with our advertising and applications on third-party websites and services if those applications or advertising include links to this policy.
                        </p>
                    </Col>
                </Row>

                <p className="mb-3">
                The Website may include links to third-party websites, plug-ins, services, social networks, or applications. Clicking on those links or enabling those connections may allow the third party to collect or share data about you. If you follow a link to a third-party website or engage a third-party plugin, please note that these third parties have their own privacy policies and we do not accept any responsibility or liability for these policies. We do not control these third-party websites, and we encourage you to read the privacy policy of every website you visit.
                </p>

                <p className="mb-3">
                This policy does not apply to information collected by:
                </p>

                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        Any third party (including our affiliates and subsidiaries, as applicable), through any application or content (including advertising) that may link to or be accessible from or on the Website.
                        </p>
                    </Col>
                </Row>

                <p className="mb-3">
                Please read this policy carefully to understand our policies and practices for collecting, processing, and storing your information. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you indicate that you understand, accept, and consent to the practices described in this policy. This policy may change from time to time (see “Changes to Our Privacy Policy”). Your continued use of this Website after we make changes indicates that you accept and consent to those changes, so please check the policy periodically for updates. We will notify you in advance of any material changes to this policy and obtain your consent to any new ways that we collect, use, and disclose your personal information.
                </p>

                <h2 className="h4 bold underline mt-5">INFORMATION WE COLLECT ABOUT YOU</h2>
                <p className="mb-3">
                We collect and use several types of information from and about you, including:
                </p>

                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        <span className="bold">Personal information</span>, that we can reasonably use to directly or indirectly identify you, such as your name, mailing address, e-mail address, telephone number, Internet protocol (IP) address used to connect your computer to the Internet, username or other similar identifier, billing and account information, and any other identifier we may use to contact you online or offline ("personal information"). 
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        <span className="bold">Non-personal information</span>, that does not directly or indirectly reveal your identity or directly relate to an identified individual, such as demographic information, or statistical or aggregated information. Statistical or aggregated data does not directly identify a specific person, but we may derive non-personal statistical or aggregated data from personal information. For example, we may aggregate personal information to calculate the percentage of users accessing a specific Website feature. 
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        <span className="bold">Technical information</span>, including your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, or information about your internet connection, the equipment you use to access our Website, and usage details.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        <span className="bold">Non-personal details about your website interactions</span>, including the full Uniform Resource Locators (URLs), clickstream to, through and from our Website (including date and time), products you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, or any phone number used to call our customer service number.
                        </p>
                    </Col>
                </Row>

                <h2 className="h4 bold underline mt-5">HOW WE COLLECT INFORMATION ABOUT YOU</h2>

                <p className="mb-3">
                We use different methods to collect your information, including through:
                </p>

                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        <span className="bold">
                        Direct interactions with you when you provide it to usage
                        </span>
                        , for example, by filling in forms or corresponding with us by phone, email, or otherwise.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                    <p>
                        <span className="bold">
                        User contributions. 
                        </span> You may also provide information for us to publish or display on public Website areas or transmit to other Website users or third parties.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                        <span className="bold">
                        Automated technologies or interactions
                        </span> as you navigate through our Website. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies, as applicable.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                    <p>
                        <span className="bold">
                        Third parties or publicly available sources
                        </span>, for example, our business partners.
                        </p>
                    </Col>
                </Row>

                <p className="mb-3 bold">
                Information You Provide to Us 
                </p>

                <p className="mb-3">
                The information we collect directly from you on or through our Website may include:
                </p>

                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        Information that you provide by filling in forms on our Website. This includes information provided at the time of registering for an account on our Website. We may also ask you for information when you enter a contest or promotion sponsored by us, and when you report a problem with our Website.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  Records and copies of your correspondence (including email addresses), if you contact us.
                  </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  Your responses to surveys that we might ask you to complete for research purposes.
                  </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  Your search queries on the Website.
                  </p>
                    </Col>
                </Row>

                <p className="mb-3 bold">
                Information We Collect Through Cookies and Other Automatic Data Collection Technologies  
                </p>

                <p className="mb-3">
                As you navigate through and interact with our Website, we may use cookies or other automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:
                </p>

                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website.
                  </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  Information about your computer and internet connection, including your IP address, operating system, and browser type.
                  </p>
                    </Col>
                </Row>

                <p className="mb-3">
                We may also use these technologies to collect information about your online activities over time and across third-party websites or other online services (behavioral tracking). To learn more or to opt-out of tailored advertising please visit <a href="https://youradchoices.ca/en/tools" className="text-orange">Digital Advertising Alliance of Canada Opt-Out Tool</a> for information on how you can opt out of behavioral tracking on this Website and how we respond to web browser signals and other mechanisms that enable consumers to exercise choice about behavioral tracking.
                </p>
                
                <p className="mb-3">
                The information we collect is statistical information and may include personal information, and we may maintain it or associate it with personal information we collect in other ways, that you provide to us, or that we receive from third parties. It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to:
                </p>

                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        Estimate our audience size and usage patterns.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  Store information about your preferences, allowing us to customize our Website according to your individual interests.
                  </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  Speed up your searches.
                  </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  Recognize you when you return to our Website.
                  </p>
                    </Col>
                </Row>

                <p className="mb-3">
                The technologies we use for this automatic data collection may include:
                </p>

                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        <span className="bold">
                        Cookies (or browser cookies).</span> A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting, you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website. 
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                    <p>
                        <span className="bold">
                        Flash Cookies.
                        </span> Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website. Flash cookies are not managed by the same browser settings that are used for browser cookies. For information about managing your privacy and security settings for Flash cookies, see Choices About How We Use and Disclose Your Information.                 </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                        <span className="bold">
                        Web Beacons.
                        </span> Pages of our Website and any of our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the CFT, for example, to count users who have visited those pages or [opened an email] and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity). 
                    </p>
                    </Col>
                </Row>

                <p className="mb-3 bold">
                Third Party Use of Cookies and Other Tracking Technologies
                </p>

                <p className="mb-3">
                Some content or applications on the Website, including advertisements, are served by third-parties, including advertisers, ad networks and servers, content providers, and application providers. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our Website. The information they collect may be associated with your personal information or they may collect information, including personal information, about your online activities over time and across different websites and other online services. They may use this information to provide you with interest-based (behavioural) advertising or other targeted content. 
                </p>

                <p className="mb-3">
                You can opt-out of several third party ad servers' and networks' cookies simultaneously by using an opt-out tool created by the Digital Advertising Alliance of Canada. You can also access these websites to learn more about online behavioural advertising and how to stop websites from placing cookies on your device. Opting out of a network does not mean you will no longer receive online advertising. It does mean that the network from which you opted out will no longer deliver ads tailored to your web preferences and usage patterns.
                </p>
                
                <p className="mb-3">
                We do not control these third parties' tracking technologies or how they are used. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly. For more information about how you can opt out of receiving targeted advertising from many providers, see Choices About How We Use and Disclose Your Information.
                </p>

                <h2 className="h4 bold underline mt-5">HOW WE USE YOUR INFORMATION</h2>
                <p className="mb-3">
                We use information that we collect about you or that you provide to us, including any personal information:
                </p>

                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        To present our Website and its contents to you.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                    <p>
                    To provide you with information, products, or services that you request from us.
                    </p>
                      </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  To fulfill the purposes for which you provided the information or that were described when it was collected, or any other purpose for which you provide it.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  To carry out our obligations and enforce our rights arising from any contracts with you, including for billing and collection or to comply with legal requirements.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  To notify you about changes to our Website or any products or services we offer or provide though it.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  To improve our Website, products or services, marketing, or customer relationships and experiences.
                    </p>
                    </Col>
                </Row><Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  To allow you to participate in interactive features, social media, or similar features on our Website.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  To measure or understand the effectiveness of the advertising we serve to you and others, and to deliver relevant advertising to you.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  In any other way we may describe when you provide the information.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  For any other purpose with your consent.
                    </p>
                    </Col>
                </Row>
                

                <h2 className="h4 bold underline mt-5">DISCLOSURE OF YOUR INFORMATION</h2>
                <p className="mb-3">
                We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.
                </p>

                <p className="mb-3">
                We may disclose personal information that we collect or you provide as described in this privacy policy:
                </p>

                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        To our subsidiaries and affiliates, as applicable.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                    <p>
                    In accordance with applicable law, to a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Canada's Forest Trust Corporation’s assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by Canada's Forest Trust Corporation about our stewards and users is among the assets transferred.
                    </p>
                      </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  To advertisers and advertising networks that require the information to select and serve relevant advertisements to you and others. We do not disclose data about identifiable individuals to our advertisers, but we may provide them with aggregate information about our users (for example, we may inform them that 400 women between 30 and 45 have clicked on their advertisement on a specific day). We may also use such aggregate information to help advertisers target a specific audience (for example, men in a specific location). We may make use of the personal information we have collected from you to enable us to display our advertisers' advertisement to that target audience.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  To fulfill the purpose for which you provide it. 
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  For any other purpose disclosed by us when you provide the information.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  With your consent.
                    </p>
                    </Col>
                </Row>

                <p className="mb-3">
                We may also disclose your personal information:
                </p>

                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  To comply with any court order, law, or legal process, including to respond to any government or regulatory request, in accordance with applicable law.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  To enforce or apply our <a href="/terms-and-conditions" className="text-orange">terms of use</a> and other agreements, including for billing and collection purposes.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Canada's Forest Trust Corporation, our stewards, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.
                    </p>
                    </Col>
                </Row>

                <h2 className="h4 bold underline mt-5">TRANSFERRING YOUR PERSONAL INFORMATION</h2>
                <p className="mb-3">
                We may transfer personal information that we collect or that you provide as described in this policy to contractors, service providers, and other third parties we use to support our business (such as analytics and search engine providers that assist us with Website improvement and optimization) and who are contractually obligated to keep personal information confidential, use it only for the purposes for which we disclose it to them, and to process the personal information with the same standards set out in this policy.
                </p>

                <p className="mb-3">
                We may process, store, and transfer your personal information in and to a foreign country, with different privacy laws that may or may not be as comprehensive as Canadian law. In these circumstances, the governments, courts, law enforcement, or regulatory agencies of that country may be able to obtain access to your personal information through the laws of the foreign country. Whenever we engage a service provider, we require that its privacy and security standards adhere to this policy and applicable Canadian privacy legislation.
                </p>

                <p className="mb-3">
                You are welcome to contact us to obtain further information about CFT policies regarding service providers outside of Canada. See Contact Information and Challenging Compliance.
                </p>

                <p className="mb-3">
                By submitting your personal information to us or engaging with the Website, you consent to this transfer, storage, or processing.
                </p>

                <h2 className="h4 bold underline mt-5">CHOICES ABOUT HOW WE USE AND DISCLOSE YOUR INFORMATION</h2>
                <p className="mb-3">
                We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information: 
                </p>
                
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                    <p>
                        <span className="bold">
                        Tracking Technologies and Advertising.
                        </span> You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage your Flash cookie settings, visit the Flash player settings page on Adobe's website. If you disable or refuse cookies, please note that some parts of this Website may not be accessible or may not function properly. For more information about tracking technologies, see Information We Collect Through Cookies and Other Automatic Data Collection Technologies. 
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                        <span className="bold">
                        Third-Party Advertising.
                        </span> If you do not want us to share your personal information with unaffiliated or non-agent third parties for promotional purposes, you can opt-out by sending us an email stating your request to <a href="mailto:admin@canadasforesttrust.ca" className="text-orange">admin@canadasforesttrust.ca</a>. 
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                    <p>
                        <span className="bold">
                        Promotional Offers from CFT.
                        </span>  If you have opted in to receive certain emails from us but no longer wish to have your email address or contact information used by the CFT to promote our own or third parties' products or services, you can opt-out by sending us an email stating your request to <a href="mailto:admin@canadasforesttrust.ca" className="text-orange">admin@canadasforesttrust.ca</a>.  If we have sent you a promotional email, you may unsubscribe by clicking the unsubscribe link we have included in the email. 
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p className="mb-3">
                        <span className="bold">
                        Targeted Advertising.
                        </span> If you do not want us to use information that we collect or that you provide to us to deliver advertisements according to our advertisers' target-audience preferences, you can opt out by sending us an email stating your request to <a href="mailto:admin@canadasforesttrust.ca" className="text-orange">admin@canadasforesttrust.ca</a>. For this opt-out mechanism to function, you must have your browser set to accept browser cookies.
                    </p>
                    <p>
                    We do not control third parties' collection or use of your information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way. You can opt out of several third party ad servers' and networks' cookies simultaneously by using an opt-out tool created by the <a href="https://youradchoices.ca/en/tools" className="text-orange">Digital Advertising Alliance of Canada</a>. You can also access these websites to learn more about online behavioural advertising and how to stop websites from placing cookies on your device. Opting out of a network does not mean you will no longer receive online advertising. It does mean that the network from which you opted out will no longer deliver ads tailored to your web preferences and usage patterns.
                    </p>
                    </Col>
                </Row>

                <h2 className="h4 bold underline mt-5">DATA SECURITY</h2>
                <p className="mb-3">
                The security of your personal information is very important to us. We use physical, electronic, and administrative measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                </p>

                <p className="mb-3">
                The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone. 
                </p>

                <p className="mb-3">
                Unfortunately, the transmission of information via the Internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website. 
                </p>

                <h2 className="h4 bold underline mt-5">DATA RETENTION</h2>
                <p className="mb-3">
                Except as otherwise permitted or required by applicable law or regulation, we will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Under some circumstances we may anonymize your personal information so that it can no longer be associated with you. We reserve the right to use such anonymous and de-identified data for any legitimate business purpose without further notice to you or your consent. 
                </p>

                <h2 className="h4 bold underline mt-5">CHILDREN UNDER THE AGE OF 13 </h2>
                <p className="mb-3">
                While our Website may be visited by children under 13, we do not knowingly collect personal information from children under 13. If you are under 13, you must seek parental consent before accessing the Website and we ask that you do not provide any information on this Website or on or through any of its features, register for an account on the Website, or otherwise provide any information about yourself to us, including your name, address, telephone number, email address, or any screen name or user name you may use. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at <a href="mailto:admin@canadasforesttrust.ca" className="text-orange">admin@canadasforesttrust.ca</a>.
                </p>

                <h2 className="h4 bold underline mt-5">ACCESSING AND CORRECTING YOUR PERSONAL INFORMATION</h2>
                <p className="mb-3">
                It is important that the personal information we hold about you is accurate and current. Please keep us informed if your personal information changes. By law you have the right to request access to and to correct the personal information that we hold about you.
                </p>

                <p className="mb-3">
                We may request specific information from you to help us confirm your identity and your right to access, and to provide you with the personal information that we hold about you or make your requested changes. Applicable law may allow or require us to refuse to provide you with access to some or all of the personal information that we hold about you, or we may have destroyed, erased, or made your personal information anonymous in accordance with our record retention obligations and practices. If we cannot provide you with access to your personal information, we will inform you of the reasons why, subject to any legal or regulatory restrictions.
                </p>

                <p className="mb-3">
                We will provide access to your personal information, subject to exceptions set out in applicable privacy legislation. Examples of such exceptions include:
                </p>

                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                    <p>
                    Information protected by solicitor-client privilege.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  Information that is part of a formal dispute resolution process.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                    <p>
                    Information that is about another individual that would reveal their personal information or confidential commercial information.
                    </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">•</p>
                  </Col>
                  <Col className="col-9">
                    <p>
                    Information that is prohibitively expensive to provide.
                    </p>
                    </Col>
                </Row>

                <p className="mb-3">
                If you are concerned about our response or would like to correct the information provided, you may contact our <span className="bold">John Jussup</span> at <a href="mailto:jussup1@sympatico.ca" className="text-orange">jussup1@sympatico.ca</a>.
                </p>

                <h2 className="h4 bold underline mt-5">WITHDRAWING YOUR CONSENT</h2>
                <p className="mb-3">
                Where you have provided your consent to the collection, use, and transfer of your personal information, you may have the legal right to withdraw your consent under certain circumstances. To withdraw your consent, if applicable, contact us at <a href="mailto:privacy@canadasforesttrust.ca" className="text-orange">privacy@canadasforesttrust.ca</a>.
                </p>

                <p className="mb-3">
                Please note that if you withdraw your consent we may not be able to provide you with a particular product or service. We will explain the impact to you at the time to help you with your decision. 
                </p>

                <h2 className="h4 bold underline mt-5">CHANGES TO OUR PRIVACY POLICY</h2>
                <p className="mb-3">
                It is our policy to post any changes we make to our privacy policy on this page. We include the date the privacy policy was last revised at the top of the page. You are responsible for periodically visiting our Website and this privacy policy to check for any changes.
                </p>

                <h2 className="h4 bold underline mt-5">CONTACT INFORMATION AND CHALLENGING COMPLIANCE</h2>
                <p className="mb-3">
                We welcome your questions, comments, and requests regarding this privacy policy and our privacy practices. Please contact us at: 
                </p>

                <p className="bold mb-0">John Jussup</p>
                <p className="bold mb-0">General Counsel</p>
                <p className="mb-3"><a href="mailto:jussup1@sympatico.ca" className="text-orange">jussup1@sympatico.ca</a></p>

                <p className="mb-3">
                We have procedures in place to receive and respond to complaints or inquiries about our handling of personal information, our compliance with this policy, and with applicable privacy laws. To discuss our compliance with this policy please contact our Privacy Officer using the contact information listed above.
                </p>

              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

/**
* Fetch data with getStaticProps based on 'preview' mode
*/
export const getStaticProps: GetStaticProps = async function({ preview, previewData,}) {

  if (preview) {
    return getGithubPreviewProps({ 
      ...previewData, 
      fileRelativePath: 'content/contact.json', 
      parse: parseJson,
    })  
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/contact.json',
        data: (await import('../content/contact.json')).default,
      },
    },
  }
}