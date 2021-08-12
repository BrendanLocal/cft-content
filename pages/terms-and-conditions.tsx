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
            <Col className="col-11 col-lg-7">
            <h1 className="h2 text-orange bold">Website Terms and Conditions of Use</h1>
            <p className="text-white bold">Last updated: July 22nd, 2021</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            
            <Col className="col-11 col-lg-8 col-xl-7">
              <div className="bg-brown roundedBox innerShadow text-white p-4 p-md-5">
              <Row>
                  <Col className="col-1">
                  <h4 className="bold">1.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">Acceptance of Terms</h4>
                  </Col>
              </Row>
                <p className="mb-3">These terms and conditions of use for <a href="/home" className="text-orange">www.canadasforesttrust.ca</a> (the “Website”), constitute a legal agreement and are entered into by and between you and Canada’s Forest Trust Corporation (the “CFT,”  “we,” “us,” “our”). The following terms and conditions, together with our <a href="/privacy" className="text-orange">Privacy Policy</a> (collectively, these “Terms”), govern your access to and use of the Website.</p>
                <p className="mb-3">BY USING THE WEBSITE, YOU ACCEPT AND AGREE TO BE BOUND AND COMPLY WITH THESE TERMS AND CONDITIONS AND OUR PRIVACY POLICY, INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS OR THE PRIVACY POLICY, YOU MUST NOT ACCESS OR USE THE WEBSITE.</p>
                <p className="mb-3">By using this Website, you represent and warrant that you are the legal age of majority under applicable law to form a binding contract with CFT and meet all of the foregoing eligibility requirements. If you are under the legal age of majority, you may only access or use the Website with the consent of your parent of legal guardian. Please be sure your parent or legal guardian has reviewed and discussed these Terms and the Privacy Policy with you.</p>
                <p className="mb-3">If you do not meet all of these requirements, you must not access or use the Website.</p>
            <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">2.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">Modifications to the Terms and to the Website</h4>
                   </Col>
              </Row>
                <p className="mb-3">We reserve the right in our sole discretion to revise and update these Terms from time to time. Any and all such modifications are effective immediately upon posting and apply to all access to and continued use of the Website. The date the Terms were last updated is indicated at the top of this page. Where required by law, we will notify you in advance of implementing such changes (for example, by notifying you via email) so you can review them before they go into effect. You agree to periodically review these Terms in order to be aware of any such modifications, and your continued use of the Website shall be your acceptance of these.If you do not agree to accept such modifications to the Terms, you must refrain from any further access to or use of the Website.</p>
                <p className="mb-3">We may change or delete any information or material on the Website at any time without notifying you. We will not be liable if, for any reason, all or any part of the Website is restricted or unavailable at any time.</p>
                <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">3.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">Your Use of the Website and Account Set-Up and Security</h4>
                   </Col>
              </Row>
                <p className="mb-3">The security of your personal information is very important to us. We use physical, electronic, and administrative measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.</p>
                <p className="mb-3">The safety and security of your information also depends on you. As a <span className="bold">“User”</span> of the Website, you are responsible for your own access to and use of the Website. You are required to ensure that anyone who accesses the Website through your internet connection is aware of these Terms and complies with them. </p>
                <p className="mb-3">Certain content or areas on the Website may require User registration. It is a condition of your use of the Website that all the information you provide on the Website is correct, current, and complete.</p>
                <p className="mb-3">Unfortunately, the transmission of information via the Internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.</p>
                <p className="mb-3">Your provision of contact information, registration information and any other submissions you make to the Website through any functionality (collectively, “Interactive Functions”) constitutes your consent to all actions we take with respect to such information consistent with our <a href="/home" className="text-orange">Privacy Policy</a>.</p>
                <p className="mb-3">Any username, password, or any other piece of information chosen by you, or provided to you as part of our security procedures, must be treated as confidential, and you must not disclose it to any other person or entity. You must exercise caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information. You understand and agree that should you be provided an account, your account is personal to you and you agree not to provide any other person with access to this Website or portions of it using your username, password, or other security information. You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security. You also agree to ensure that you logout from your account at the end of each session. You are responsible for any password misuse or any unauthorized access.</p>
                <p className="mb-3">We reserve the right at any time and from time to time, to disable or terminate your account, any username, password, or other identifier, whether chosen by you or provided by us, in our sole discretion for any or no reason, including any violation of any provision of these Terms.</p>
                <p className="mb-3">You are prohibited from attempting to circumvent and from violating the security of this Website, including, without limitation:</p>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">a)</p>
                  </Col>
                  <Col className="col-9">
                  <p>accessing content and data that is not intended for you;</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">b)</p>
                  </Col>
                  <Col className="col-9">
                  <p>attempting to breach or breaching the security and/or authentication measures which are not authorized;</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">c)</p>
                  </Col>
                  <Col className="col-9">
                  <p>restricting, disrupting or disabling service to users, hosts, servers, or networks;</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">d)</p>
                  </Col>
                  <Col className="col-9">
                  <p>illicitly reproducing TCP/IP packet header;</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">e)</p>
                  </Col>
                  <Col className="col-9">
                  <p>disrupting network services and otherwise disrupting Website owner’s ability to monitor the Website;</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">f)</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  using any robot, spider, or other automatic device, process, or means to access the Website for any purpose, including monitoring or copying any of the material on the Website;
                  </p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">g)</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  introducing any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful;                  </p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">h)</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  attacking the Website via a denial-of-service attack, distributed denial-of-service attack, flooding, mailbombing, or crashing; and
                  </p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">i)</p>
                  </Col>
                  <Col className="col-9">
                  <p>
                  otherwise attempting to interfere with the proper working of the Website.
                  </p>
                  </Col>
              </Row>

            <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">4.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">Intellectual Property Rights and Ownership</h4>
                   </Col>
              </Row>
                <p className="mb-3">You understand and agree that the Website and its entire contents, features, and functionality, including, but not limited to, all information, software, code, text, displays, graphics, photographs, video, audio, design, presentation, selection, and arrangement, are owned by the CFT, its licensors, or other providers of such material and are protected in all forms by intellectual property laws including without limitation, copyright, trademark, patent, trade secret, and any other proprietary rights.</p>
                <p className="mb-3">The CFT name, trademarks, logo, and all related names, logos, product and service names, designs, images, and slogans are trademarks of the CFT or its affiliates or licensors. You must not use such marks without the prior written permission of the CFT. Other names, logos, product and service names, designs, images, and slogans mentioned, or which appear on this Website are the trademarks of their respective owners. Use of any such property, except as expressly authorized, shall constitute an infringement or violation of the rights of the property owner and may be a violation of federal or other laws and could subject the infringer to legal action.</p>
                <p className="mb-3">You may only use the Website for your personal and non-commercial use. You shall not directly or indirectly reproduce, compile for an internal database, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, in any form or medium whatsoever except:</p>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">a)</p>
                  </Col>
                  <Col className="col-9">
                  <p>your computer and browser may temporarily store or cache copies of materials being accessed and viewed;</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">b)</p>
                  </Col>
                  <Col className="col-9">
                  <p>a reasonable number of copies for personal use or educational use only may be printed keeping any proprietary notices thereon, which may only be used for non-commercial and lawful personal or educational use and not for further reproduction, publication, or distribution of any kind on any medium whatsoever;</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">c)</p>
                  </Col>
                  <Col className="col-9">
                  <p>in the event social media platforms are linked to certain content on our Website, you may take such actions as our Website and such third-party social media platforms permit.</p>
                  </Col>
              </Row>
                <p className="mb-3">Users are not permitted to modify copies of any materials from this Website nor delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site. You must not access or use for any commercial purposes any part of the Website or any services or materials available through the Website.</p>
                <p className="mb-3">If you print off, copy or download any part of our Website in breach of these Terms, your right to use the Website will cease immediately and you must, at our option, return or destroy any copies of the materials you have made. You have no right, title, or interest in or to the Website or to any content on the Website, and all rights not expressly granted are reserved by the CFT. Any use of the Website not expressly permitted by these Terms is a breach of these Terms and may infringe or violate copyright, trademark, and other intellectual property or other proprietary laws.</p>
                
                <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">5.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">Conditions of Use and Site Content Standards</h4>
                   </Col>
              </Row>
                <p className="mb-3">As a condition of your access and use, you agree that you may use the Website only for lawful purposes and in accordance with these Terms.</p>
                <p className="mb-3">Without limiting the foregoing, you warrant and agree that your use of the Website shall not:</p>
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">a)</p>
                  </Col>
                  <Col className="col-9">
                  <p>In any manner violate any applicable federal, provincial, local, or international law or regulation including, without limitation, any laws regarding the export of data or software, patent, trademark, trade secret, copyright, or other intellectual property, legal rights (including the rights of publicity and privacy of others) or contain any material that could give rise to any civil or criminal liability under applicable laws or regulations or that otherwise may be in conflict with these Terms and our <a href="/privacy" className="text-orange">Privacy Policy</a>.</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">b)</p>
                  </Col>
                  <Col className="col-9">
                      <p>In any manner violate the terms of use of any third-party website that is linked to the Website, including but not limited to, any third-party social media website.</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">c)</p>
                  </Col>
                  <Col className="col-9">
                      <p>Include or contain any material that is exploitive, obscene, harmful, threatening, abusive, harassing, hateful, defamatory, sexually explicit or pornographic, violent, inflammatory, or discriminatory based on race, sex, religion, nationality, disability, sexual orientation, or age or other such legally prohibited ground or be otherwise objectionable, such determination to be made in CFT’s sole discretion.</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">d)</p>
                  </Col>
                  <Col className="col-9">
                      <p>Involve stalking, attempting to exploit or harm any individual (including minors) in any way by exposing them to inappropriate content or otherwise or ask for personal information as prohibited under applicable laws, regulations, or code.</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">e)</p>
                  </Col>
                  <Col className="col-9">
                      <p>Involve, provide, or contribute any false, inaccurate, or misleading information.</p>
                    </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">f)</p>
                  </Col>
                  <Col className="col-9">
                    <p>Include sending, knowingly receiving, uploading, downloading, using, or reusing any material that does not comply with these Terms.</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">g)</p>
                  </Col>
                  <Col className="col-9">
                    <p>Encourage any other conduct that restricts or inhibits anyone’s use or enjoyment of the Website, or which, as determined by us, may harm the CFT or users of the Website or expose them to liability.</p>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">h)</p>
                  </Col>
                  <Col className="col-9">
                        <p>Cause annoyance, inconvenience, or needless anxiety or be likely to upset, embarrass, or alarm any other person.</p>
                    </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">i)</p>
                  </Col>
                  <Col className="col-9">
                        <p>Promote any illegal activity, or advocate, promote, or assist any unlawful act.</p>
                    </Col>
              </Row>

              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">6.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">Site Monitoring and Enforcement, Suspension and Termination</h4>
                   </Col>
              </Row>
              
                <p className="mb-3">CFT has the right, without provision of notice to:</p>
                
                <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">a)</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        Take appropriate legal action, including, without limitation, referral to law enforcement or regulatory authority, or notifying the harmed party of any illegal or unauthorized use of the Website. Without limiting the foregoing, we have the right to fully cooperate with any law enforcement authorities or court order requesting or directing us to disclose the identity or other information of anyone accessing or requesting any materials on or through the Website.
                        </p>
                    </Col>
              </Row>
              <Row className="mb-3">
                  <Col className="col-3">
                  <p className="text-right">b)</p>
                  </Col>
                  <Col className="col-9">
                        <p>
                        Terminate or suspend your access to all or part of the Website for any or no reason, including, without limitation, any violation of these Terms.
                        </p>
                    </Col>
              </Row>

              <p className="mb-3">
              YOU WAIVE AND HOLD HARMLESS THE CFT AND ITS PARENT, SUBSIDIARIES, AFFILIATES, AND THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, AND SUCCESSORS FROM ANY AND ALL CLAIMS RESULTING FROM ANY ACTION TAKEN BY CFT AND ANY OF THE FOREGOING PARTIES RELATING TO ANY, INVESTIGATIONS BY EITHER CFT OR SUCH PARTIES OR BY LAW ENFORCEMENT AUTHORITIES.
                </p>

                <p className="mb-3">
                We have no obligation, nor any responsibility to any party to monitor the Website or its use. 
                </p>

                <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">7.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">No reliance</h4>
                   </Col>
              </Row>

              <p className="mb-3">
              The content on our Website is provided for general information purposes only. It is not intended to amount to advice on which you should rely. You must obtain more specific or professional advice before taking, or refraining from, any action or inaction on the basis of the content on our site. 
              </p>

              <p className="mb-3">
              Although we make reasonable efforts to update the information on our Website, we make no representations, warranties, or guarantees, whether express or implied, that the content on our Website is accurate, complete, or up to date. Your use of the Website is at your own risk and CFT has no responsibility or liability whatsoever for your use of this Website.
              </p>

              <p className="mb-3">
              This Website may include content provided by third parties, including from other users and third-party licensors. All statements and/or opinions expressed in any such third-party content, other than the content provided by CFT, are solely the opinions and the responsibility of the person or entity providing those materials. Such materials do not necessarily reflect the opinion of CFT. CFT has no responsibility or liability whatsoever to you, or any third party, for the content or accuracy of any third-party materials.
              </p>

              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">8.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">Privacy</h4>
                   </Col>
              </Row>

              <p className="mb-3">
              By submitting your personal information and using our Website, you consent to the collection, use, reproduction, hosting, transmission, and disclosure of any such user content submissions in compliance with our <a href="/privacy" className="text-orange">Privacy Policy</a>, as we deem necessary for use of the Website.
              </p>

              <p className="mb-3">
              By using this Website you are consenting to the use of cookies which allow a server to recall previous requests or registration and/or IP addresses to analyze website use patterns. You can set your browser to notify you before you receive a cookie, giving you the chance to decide whether to accept it. You can also set your browser to turn off cookies. If you do, however, some areas of the Website may not function adequately. For more information on this automated information gathering practices, see our <a href="/privacy" className="text-orange">Privacy Policy</a>.     
              </p>

              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">9.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">
                  Third-Party Websites
                      </h4>
                   </Col>
              </Row>

              <p className="mb-3">
              For your convenience, this Website may provide links or pointers to third-party sites. We make no representations about any other websites that may be accessed from this Website. If you choose to access any such sites, you do so at your own risk. We have no control over the contents of any such third-party sites and accept no responsibility for such sites or for any loss or damage that may arise from your use of them. You are subject to any terms and conditions of such third-party sites.
              </p>

              <p className="mb-3">
              Such links to third-party sites from the Website may include links to certain social media features that enable you to link or transmit on your own or using certain third-party websites, certain content from this Website. You may only use these features when they are provided by us and solely with respect to the content identified.
              </p>
              
              <p className="mb-3">
              You may link to our homepage, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it. You must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part where none exists. Our Website must not be framed on any other site, nor may you create a link to any part of our Website other than the homepage. We reserve the right to withdraw linking permission without notice. The website in which you are linking must comply in all respects with the provisions regarding Conditions of Use and Site Content Standards in these Terms. You agree to cooperate with us in causing any unauthorized framing or linking to immediately stop.
              </p>


              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">10.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">
                  Geographic Restrictions
                      </h4>
                   </Col>
              </Row>

              <p className="mb-3">
              The owner of the Website is based in Ontario in Canada. We provide this Website for use only by persons located in Canada. This Website is not intended for use in any jurisdiction where its use is not permitted. If you access the Website from outside Canada, you do so at your own risk and you are responsible for compliance with local laws of your jurisdiction.
              </p>

              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">11.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">
                  Disclaimer of Warranties
                      </h4>
                   </Col>
              </Row>

              <p className="mb-3">
              YOU UNDERSTAND AND AGREE THAT YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS FOUND OR ATTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS FOUND OR ATTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
              </p>

              <p className="mb-3">
              NEITHER CFT NOR ITS PARENT, SUBSIDIARIES, AFFILIATES, OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS MAKE ANY WARRANTY, REPRESENTATION, OR ENDORSEMENT WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, SUITABILITY, ACCURACY, CURRENCY, OR AVAILABILITY OF THE WEBSITE OR ITS CONTENTS. WITHOUT LIMITING THE FOREGOING, NEITHER CFT NOR ITS PARENT, SUBSIDIARIES, AFFILIATES OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS REPRESENT OR WARRANT THAT THE WEBSITE, ITS CONTENT, OR ANY SERVICES OR ITEMS FOUND OR ATTAINED THROUGH THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>

              <p className="mb-3">
              WE CANNOT AND DO NOT GUARANTEE OR WARRANT THAT FILES OR DATA AVAILABLE FOR DOWNLOADING FROM THE INTERNET OR THE WEBSITE WILL BE FREE OF VIRUSES OR OTHER DESTRUCTIVE CODE. YOU ARE SOLELY AND ENTIRELY RESPONSIBLE FOR YOUR USE OF THE WEBSITE AND YOUR COMPUTER, INTERNET, AND DATA SECURITY. TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY DENIAL-OF-SERVICE ATTACK, DISTRIBUTED DENIAL-OF-SERVICE ATTACK, OVERLOADING, FLOODING, MAILBOMBING, OR CRASHING, VIRUSES, TROJAN HORSES, WORMS, LOGIC BOMBS, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS FOUND OR ATTAINED THROUGH THE WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.
              </p>

              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">12.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">
                  Limitation on Liability
                      </h4>
                   </Col>
              </Row>

              <p className="mb-3">
              EXCEPT WHERE SUCH EXCLUSIONS ARE PROHIBITED BY LAW, UNDER NO CIRCUMSTANCE WILL CFT OR ITS PARENT, SUBSIDIARIES, AFFILIATES OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS BE LIABLE FOR NEGLIGENCE, GROSS NEGLIGENCE, NEGLIGENT MISREPRESENTATION, FUNDAMENTAL BREACH, DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING, BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, BREACH OF PRIVACY, OR OTHERWISE, EVEN IF THE PARTY WAS ALLEGEDLY ADVISED OR HAD REASON TO KNOW, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, OR RELIANCE ON, THE WEBSITE, ANY LINKED WEBSITES OR SUCH OTHER THIRD-PARTY WEBSITES, NOR ANY WEBSITE CONTENT, MATERIALS, POSTING, OR INFORMATION THEREON EVEN IF THE PARTY WAS ALLEGEDLY ADVISED OR HAD REASON TO KNOW.
              </p>

              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">13.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">
                  Indemnification
                      </h4>
                   </Col>
              </Row>

              <p className="mb-3">
              To the maximum extent permitted by applicable law, you agree to defend, indemnify, and hold harmless CFT, its parent, subsidiaries, affiliates, and their respective directors, officers, employees, agents, service providers, contractors, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable legal fees and disbursements) arising out of or relating to your breach of these Terms or your use of the Website, including, but not limited to third-party sites, any use of the Website’s content, services, and products other than as expressly authorized in these Terms.
              </p>

              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">14.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">
                  Governing Law and Choice of Forum
                      </h4>
                   </Col>
              </Row>

              <p className="mb-3">
              The Website and these Terms will be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without giving effect to any choice or conflict of law provision, principle, or rule (whether of the laws of the Province of Ontario or any other jurisdiction) and notwithstanding your domicile, residence, or physical location.
              </p>

              <p className="mb-3">
              Any action or proceeding arising out of or relating to this Website and under these Terms will be instituted in the courts of the Province of Ontario and/or the Federal Court of Canada, and each party irrevocably submits to the exclusive jurisdiction of such courts in any such action or proceeding. You waive any and all objections to the exercise of jurisdiction over you by such courts and to the venue of such courts. 
              </p>

              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">15.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">
                      Waiver
                      </h4>
                   </Col>
              </Row>

              <p className="mb-3">
              No failure to exercise, or delay in exercising, any right, remedy, power, or privilege arising from these Terms operates, or may be construed, as a waiver thereof. No single or partial exercise of any right, remedy, power, or privilege hereunder precludes any other or further exercise thereof or the exercise of any other right, remedy, power, or privilege.
              </p>

              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">16.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">
                  Severability
                      </h4>
                   </Col>
              </Row>

              <p className="mb-3">
              If any term or provision of these Terms is invalid, illegal, or unenforceable in any jurisdiction, such invalidity, illegality, or unenforceability shall not affect any other term or provision of these Terms or invalidate or render unenforceable such term or provision in any other jurisdiction.
              </p>

              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">17.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">
                  Entire Agreement
                      </h4>
                   </Col>
              </Row>

              <p className="mb-3">
              The Terms and our Privacy Policy constitute the sole and entire agreement between you and CFT regarding the Website and supersedes all prior and contemporaneous understandings, agreements, representations and warranties, both written and oral, regarding such subject matter.
              </p>

              <Row className="mt-5">
                  <Col className="col-1">
                  <h4 className="bold">18.</h4>
                  </Col>
                  <Col className="col-10">
                  <h4 className="bold">
                  Reporting and Contact
                      </h4>
                   </Col>
              </Row>

              <p className="mb-3">
              Please send any reports of potential misuse, or any requests or comments relating to the Website, to us at the following email address: <a href="mailto:admin@canadasforesttrust.ca" className="text-orange">admin@canadasforesttrust.ca</a>
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