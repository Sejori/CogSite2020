
import React from 'react'
import './privacy.css'

export default function Privacy() {
  return (<>
    <div id="privacy-header">
      <div className="container">
        <div className="header-row">
          <a href="/">
            <img className="leaf" src={require("../../images/leaf.png")} alt="cognitant-leaf"></img>
          </a>
          <div className="header-title">
            <a href="/">
              <img src={require("../../images/cognitant.svg")} />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="privacy" className="section">
      <div className="padding-block">&nbsp;</div>
      <div className="container">
        <h2>PRIVACY POLICY</h2>
        <hr />
        <p>We process your personal data according to the UK’s Data Protection Act (the “Data Protection Act”) and other applicable UK data protection legislation.</p>
        <p>Cognitant Group Ltd is registered with the UK Information Commissioner's Office (ICO) under the data
        registration number "ZA339486" in the UK’s data controller register. For the
        purposes of the Data Protection Act, Cognitant Group Ltd. is the Data Controller.</p>

        <p>Please read the following carefully to understand our views and practices
        regarding your personal data and how we will treat it.</p>



        <h3>INFORMATION COLLECTION</h3>

        <p>We may collect, store and use the following kinds of personal information:</p>
        <ul>
          <li>Information that you provide to us for the purpose of subscribing to email notifications and/or newsletters</li>
          <li>Information about your computer and about your visits to and use of the site</li>
        </ul>


        <h3>SHARING OF PERSONAL DATA</h3>

        <p>We may disclose information about you to any of our employees, officers, agents,
        suppliers or subject-contractors insofar as is reasonably necessary for carrying out
        the purposes set out in this Privacy Policy. This may include allowing our
        suppliers and sub-contractors access to your personal information where we have tim looks like a mong
        “outsourced” functions. However, any use by such suppliers or sub-contractors
        will be strictly limited and conducted in accordance with our instructions (as
        "data processors" described in the Data Protection Act).</p>

        <p>In addition, we may disclose your personal information:</p>
        <ul>
        <li>To the extent that we are required to do so by law</li>
        <li>In connection with any legal proceedings or prospective legal proceedings</li>
        </ul>

        <p>Your personal data will not be passed to third parties without your permission,
        other than as set out in this policy.</p>


        <h3>HOW PERSONAL DATA IS USED BY COGNITANT</h3>

        <p>We may contact your about our services if you choose to sign up to receive
        notifications from us. You do have the right at any time to opt out of being
        contacted in this way.</p>


        <h3>SECURING YOUR PERSONAL DATA</h3>

        <p>Cognitant Group Ltd. has implemented the required technical and organisational security
        measures to prevent the loss, misuse or alteration of your personal information.
        For example, we will store all the personal information that you provide
        on secure (encrypted, password- and firewall-protected) servers and send it only over
        encrypted transmission links. While the internet is inherently insecure and
        we cannot guarantee the security of data sent across the internet, we will take
        all meaningful steps to ensure it's as secure as appropriately possible.</p>

        <h3>WHERE YOUR DATA IS STORED (LOCATIONS)</h3>

        <p>Except for the operations listed below, your data is kept exclusively within
        physically secure ISO-27001 compliant data-centers located within the European Union.</p>
        <ul>
        <li>Backups: we keep backups of all our data in our backup service provider's
        SOC 2 Type II certified and HIPAA compliant data-centers, hosted in the USA. The
        legal basis under the GDPR for this processing is specified by GDPR-compliant
        Model Clauses, a GDPR Data Processing Addendum and a standard Data Processor
        agreement, in line with the EU-US Privacy Shield agreement.</li>
        </ul>

        <h3>RETAINING PERSONAL DATA</h3>

        <p>This Section sets out our data retention policies and procedures, which are designed
        to help ensure that we comply with our legal obligations in relation to the
        retention and deletion of personal information.</p>

        <p>Personal information that we process for any purpose or purposes shall not be
        kept for longer than is necessary for that purpose or those purposes.</p>

        <p>Notwithstanding the other provisions of this Section, we will retain documents
        (including electronic documents) containing personal data:</p>
        <ul>
        <li>to the extent that we are required to do so by law;</li>
        <li>if we believe that the documents may be relevant to any ongoing or prospective
        administrative or legal proceedings;</li>
        <li>to transfer to the purchaser (or prospective purchaser) of any business or asset that we are
        (or are contemplating) selling; and</li>
        <li>in order to establish, exercise or defend our legal rights (including providing
        information to others for the purposes of fraud prevention and reducing credit risk).</li>
        </ul>


        <h3>RIGHTS OF THE DATA SUBJECT</h3>

        <p>Individuals have the right to access, correct, cancel or object to the
        processing of their personal data. If you want to exercise any of those rights,
        please contact dataprotection@cognitant.com.</p>

        <p>You may instruct us to provide you with any personal information that we hold about you.
        Provision of such information will be subject to the supply of appropriate evidence of your identity.</p>

        <p>We may withhold such personal information to the extent permitted by law.</p>


        <h3>INACCURACIES AND CORRECTIONS</h3>

        <p>We must keep your personal data accurate and up to date. If you become aware of
        any errors or inaccuracies please let Cognitant know by contacting dataprotection@cognitant.com.</p>

        <h3>POLICY AMENDMENTS</h3>

        <p>We may update this privacy policy from time to time by posting a new version on
        the cognitant.com site. You should check this page occasionally to ensure you are happy with any changes.</p>



        <h3>CONTACT US</h3>

        <p>If you have any questions about the Privacy Policy, use the contact details below:</p>

        <p>Cognitant Group Ltd, 41 Cornmarket St, Oxford, Oxfordshire OX1 3HA UK.</p>

        <p>Email: dataprotection@cognitant.com, Tel: +44 1865 688 310.</p>

        <p>Cognitant Group Ltd is a company registered in England and Wales under number 11282547.</p>
      </div>
    </div>

    <footer className="privacy-footer">
      <div className="container">
      <h3>Cognitant</h3>
        <a href="mailto:hello@cognitant.com" className="email"  onclick="ga('send', 'event', 'contact', 'mailhello');">hello@cognitant.com</a>
        <div className="social-media">
          <a href="https://www.linkedin.com/company/cognitant/" onclick="ga('send', 'event', 'social', 'linkedin');">
            <img src={require("../../images/li.svg")} className="li" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/Cognitant" onclick="ga('send', 'event', 'social', 'twitter');">
            <img src={require("../../images/tw.svg")} className="tw" alt="Twitter" />
          </a>
        </div>
        <hr />
        <p>&copy; Copyright Cognitant 2020 | <a href="/" className="more-1">Home</a> | Registered No. <a className="more-1" href="https://beta.companieshouse.gov.uk/company/11282547" target="_blank"  onclick="ga('send', 'event', 'social', 'companieshouse');">11282547</a></p>
      </div>
    </footer>
  </>)
}