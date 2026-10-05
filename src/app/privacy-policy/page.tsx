import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - FloridaPest Control",
  description: "Privacy Policy for FloridaPest Control Services in Dubai, UAE",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="text-black py-7">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-black">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                FloridaPest Control Services ("we," "us," "our," or "Company")
                operates the website and provides pest control and landscaping
                services throughout Dubai, UAE. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when
                you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The
                information we may collect on the website includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone
                  number, mailing address, and other contact information
                </li>
                <li>
                  <strong>Service Information:</strong> Details about the
                  services you request, including property information and
                  service preferences
                </li>
                <li>
                  <strong>Payment Information:</strong> Payment details
                  necessary to process transactions (handled securely by payment
                  processors)
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type,
                  operating system, and pages visited on our website
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Use of Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To provide, operate, and maintain our services</li>
                <li>To process and fulfill your service requests</li>
                <li>To send transactional and promotional communications</li>
                <li>
                  To respond to your inquiries and customer support requests
                </li>
                <li>
                  To monitor and analyze usage patterns to improve our services
                </li>
                <li>To comply with legal obligations and regulations</li>
                <li>To prevent fraudulent transactions and improve security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Disclosure of Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information with service
                providers, contractors, and partners who assist us in operating
                our website and conducting our business, subject to strict
                confidentiality agreements. We may also disclose your
                information when required by law or to protect our rights and
                safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Security of Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use administrative, technical, and physical security measures
                to protect your personal information. However, no method of
                transmission over the Internet or electronic storage is
                completely secure. While we strive to use commercially
                acceptable means to protect your personal information, we cannot
                guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access your personal information</li>
                <li>Correct or update your information</li>
                <li>
                  Opt-out of promotional communications by contacting us
                  directly
                </li>
                <li>Request deletion of your information (where applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience and gather information about
                how you use our website. You can control cookie settings through
                your browser preferences, though some features may not function
                properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to review their privacy policies before
                providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy
                practices, please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>FloridaPest Control Services</strong>
                  <br />
                  112, Al Midfa Building, Damascus Street
                  <br />
                  Al Qusais Industrial Area 4, Dubai, UAE
                  <br />
                  P.O.Box. 83453
                  <br />
                  <br />
                  Pest Control: +971 50 281 2441
                  <br />
                  Landscape Services: +971 50 162 1003
                  <br />
                  Landline: +971 42654133
                  <br />
                  Email: info@floridapestsc.com
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update this Privacy Policy at any time.
                Changes will be effective immediately upon posting to the
                website. Your continued use of our website and services
                constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <div className="border-t pt-8 mt-8">
              <p className="text-gray-600 text-sm">
                Last Updated: February 2026
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/"
              className="bg-primary text-white inline-block font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/terms-conditions"
              className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
