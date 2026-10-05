import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - FloridaPest Control",
  description:
    "Terms and Conditions for FloridaPest Control Services in Dubai, UAE",
};

export default function TermsConditions() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="text-black py-7">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
            <p className="text-black">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the website and services of FloridaPest
                Control Services, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by
                the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Use License
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on FloridaPest Control
                Services' website for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Modifying or copying the materials</li>
                <li>
                  Using the materials for any commercial purpose or for any
                  public display (commercial or non-commercial)
                </li>
                <li>
                  Attempting to decompile, reverse engineer, or disassemble any
                  software contained on the website
                </li>
                <li>
                  Removing any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transferring the materials to another person or "mirroring"
                  the materials on any other server
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Service Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                FloridaPest Control Services provides professional pest control
                and landscaping services in Dubai and surrounding areas.
                Services include but are not limited to pest control treatments,
                landscaping design and maintenance, garden care, and related
                services. Specific services, pricing, and availability are
                subject to confirmation by our team upon request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Service Scheduling and Cancellation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Service appointments must be scheduled at least 24 hours in
                advance through our website, phone, or email. Cancellations or
                rescheduling requests must be made with at least 24 hours'
                notice. Cancellations made with less than 24 hours' notice may
                be subject to a cancellation fee equal to the estimated service
                cost.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to reschedule services due to weather
                conditions, emergency situations, or other unforeseen
                circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Payment Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment is due upon completion of services unless a different
                arrangement has been made in advance. We accept various payment
                methods including credit cards, bank transfers, and cash. A
                valid payment method is required to book services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All prices are subject to change without notice. Quotes provided
                are valid for 30 days from the date of issue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Warranty Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The materials on FloridaPest Control Services' website are
                provided on an "as is" basis. FloridaPest Control Services makes
                no warranties, expressed or implied, and hereby disclaims and
                negates all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for
                a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall FloridaPest Control Services or its suppliers
                be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business
                interruption) arising out of the use or inability to use the
                materials on FloridaPest Control Services' website, even if
                FloridaPest Control Services or its authorized representative
                has been notified orally or in writing of the possibility of
                such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Accuracy of Materials
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on FloridaPest Control Services' website
                could include technical, typographical, or photographic errors.
                FloridaPest Control Services does not warrant that any of the
                materials on its website are accurate, complete, or current.
                FloridaPest Control Services may make changes to the materials
                contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                FloridaPest Control Services has not reviewed all of the sites
                linked to its website and is not responsible for the contents of
                any such linked site. The inclusion of any link does not imply
                endorsement by FloridaPest Control Services of the site. Use of
                any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Modifications
              </h2>
              <p className="text-gray-700 leading-relaxed">
                FloridaPest Control Services may revise these terms of service
                for its website at any time without notice. By using this
                website, you are agreeing to be bound by the then current
                version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in
                accordance with the laws of Dubai, UAE, and you irrevocably
                submit to the exclusive jurisdiction of the courts located in
                Dubai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Customer Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a customer, you are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Providing accurate information about your property and service
                  needs
                </li>
                <li>
                  Ensuring access to the property at the scheduled time of
                  service
                </li>
                <li>
                  Removing or securing any pets or valuables before service
                  appointments
                </li>
                <li>
                  Following safety instructions provided by our technicians
                </li>
                <li>
                  Notifying us of any special health or environmental concerns
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For any questions or disputes regarding these Terms &
                Conditions, please contact us:
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
              className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/privacy-policy"
              className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
