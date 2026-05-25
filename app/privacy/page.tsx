import { LegalLayout } from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Outdoor Expo collects, uses, shares, and stores your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="20 June 2025">
      <p>
        At Outdoor Expo, we respect your privacy and are committed to protecting
        your personal information. This Privacy Policy explains how we collect,
        use, share, and store your information when you interact with us in any
        way, including when you:
      </p>
      <ul>
        <li>Become a member, exhibitor, or competitor with us</li>
        <li>Purchase a ticket to the Outdoor Expo</li>
        <li>Enter competitions</li>
        <li>
          Visit, use, or make a purchase through our website (www.outdoorexpo.co.nz)
        </li>
      </ul>
      <p>By engaging with the Outdoor Expo, you agree to the terms of this Privacy Policy.</p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of personal information:</p>
      <ul>
        <li>
          <strong>Contact information:</strong> name, email address, phone number, postal address
        </li>
        <li>
          <strong>Payment information:</strong> when you purchase tickets, exhibitor sites, or products (handled securely via third-party payment providers)
        </li>
        <li>
          <strong>Event participation details:</strong> exhibitor information, competition entries, site preferences, or activities you take part in
        </li>
        <li>
          <strong>Marketing preferences:</strong> your choices regarding receiving updates and promotional material from us
        </li>
        <li>
          <strong>Website usage data:</strong> information collected via cookies or similar technologies to improve your browsing experience
        </li>
        <li>
          <strong>Optional pet-related information:</strong> if you register your dog or other animals for any pet-friendly activities or competitions
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We may use your personal information to:</p>
      <ul>
        <li>Process and confirm your ticket, exhibitor, or competition entry</li>
        <li>Communicate important event updates and information</li>
        <li>Manage and deliver competitions, prizes, or promotions</li>
        <li>Improve our services, website, and event experience</li>
        <li>Send marketing and promotional messages (only if you have consented)</li>
        <li>Comply with our legal obligations</li>
      </ul>

      <h2>3. Sharing Your Information</h2>
      <p>
        We will never sell your personal information. We may share your information only in the following cases:
      </p>
      <ul>
        <li>
          <strong>Service providers:</strong> with trusted third-party partners who help us run the event, website, or ticketing (e.g., payment processors, email platforms)
        </li>
        <li>
          <strong>Legal requirements:</strong> if required to do so by law or government authorities
        </li>
        <li>
          <strong>Event operations:</strong> with contractors or security providers to ensure a safe and successful event
        </li>
      </ul>

      <h2>4. Storing &amp; Protecting Your Information</h2>
      <p>
        We store your personal information securely and take reasonable measures to protect it against loss, misuse, or unauthorised access.
      </p>
      <p>
        Payment information is processed through secure third-party systems and is not stored by us.
      </p>
      <p>
        We retain personal information only as long as necessary to provide our services or meet legal requirements.
      </p>

      <h2>5. Cookies &amp; Website Tracking</h2>
      <p>Our website uses cookies and similar technologies to:</p>
      <ul>
        <li>Enhance your browsing experience</li>
        <li>Understand visitor behaviour and improve website performance</li>
        <li>Support ticket sales, competition entries, and other online features</li>
      </ul>
      <p>
        You can control cookie settings through your browser, but disabling cookies may limit some website functionality.
      </p>

      <h2>6. Children &amp; Families</h2>
      <p>
        We welcome families at the Outdoor Expo and may collect limited information about children under 16 (for example, when entering competitions). This information will only be used for the purpose it was collected and with the consent of a parent or guardian. We do not knowingly use children&rsquo;s information for marketing. Parents or guardians may contact us at any time to request access, correction, or deletion of their child&rsquo;s information.
      </p>

      <h2>7. Dogs &amp; Animals</h2>
      <p>
        The Outdoor Expo is dog-friendly. If you choose to bring or register your dog (or other animals) for activities, competitions, or promotions, we may collect basic details such as your name, your pet&rsquo;s name, and activity preferences. This information will only be used for the purpose of managing pet-related activities at the Expo and will not be shared or used for marketing without your consent. Pet owners remain responsible for their animals at all times.
      </p>

      <h2>8. Photography &amp; Media</h2>
      <p>
        By attending the Outdoor Expo, you consent to photography, video, and other media recording at the event. These may be used by Outdoor Expo for promotional, marketing, or archival purposes in print, digital, or online formats. If you do not wish yourself, your children, or your animals to be photographed or filmed, please notify our team at the event. While we will take reasonable steps to respect your request, we cannot guarantee complete exclusion from wide crowd shots.
      </p>

      <h2>9. Your Rights</h2>
      <p>Under the New Zealand Privacy Act 2020, you have the right to:</p>
      <ul>
        <li>Request access to the personal information we hold about you</li>
        <li>Ask for corrections if the information is inaccurate or incomplete</li>
        <li>Withdraw your consent to marketing communications at any time</li>
        <li>Request deletion of your personal data where applicable</li>
      </ul>
      <p>To exercise your rights, please contact us at the details below.</p>

      <h2>10. Third-Party Links</h2>
      <p>
        Our website or communications may contain links to third-party sites. Please note we are not responsible for the privacy practices of those websites.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, or if you would like to exercise your privacy rights, please contact us:
      </p>
      <p>
        <strong>Outdoor Expo</strong>
        <br />
        Email:{" "}
        <a href="mailto:info@outdoorexpo.co.nz">info@outdoorexpo.co.nz</a>
        <br />
        Post: PO Box 1455, Christchurch, 8140
        <br />
        Website: www.outdoorexpo.co.nz
      </p>
    </LegalLayout>
  );
}
