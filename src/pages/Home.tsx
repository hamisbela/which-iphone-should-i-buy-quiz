import React from 'react';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Which iPhone Should I Buy? - Quiz</h1>
        <Quiz />
      </section>

      <section id="guide" className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose lg:prose-lg mx-auto">
          <div className="mb-8">
            <p className="text-lg">
              If you're wondering, <strong>"Which iPhone should I buy?"</strong>, you're not alone! Choosing the perfect iPhone can be overwhelming with several models and configurations available. From the versatile iPhone 15 to the powerful iPhone 15 Pro Max, finding the best device for your needs requires careful consideration. But don't worry – we've got you covered! Our interactive <strong>Which iPhone Should I Buy? Quiz</strong> will help you narrow down your choices and find the ideal iPhone for your lifestyle.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Take the "Which iPhone Should I Buy?" Quiz?</h2>
            <p>
              With multiple iPhone models featuring different chips and capabilities, deciding on the right one can feel overwhelming. Whether you need an iPhone for photography, professional use, everyday tasks, or content creation, our <strong>Which iPhone Should I Buy? Quiz</strong> is designed to match you with an iPhone that fits your usage patterns, budget, and performance requirements.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Our Quiz Considers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>iPhone Type:</strong> Standard, Plus, Pro, or Pro Max models</li>
              <li><strong>Performance:</strong> A15, A16, or A17 Pro chips</li>
              <li><strong>Usage:</strong> Photography, Professional, Everyday Use</li>
              <li><strong>Budget:</strong> Find the perfect iPhone within your price range</li>
              <li><strong>Features:</strong> Display size, camera system, battery life</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular iPhone Categories</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Best for Photography:</strong> Pro models with advanced camera systems</li>
              <li><strong>Best for Battery Life:</strong> Plus and Pro Max models</li>
              <li><strong>Best Value:</strong> Standard iPhone models</li>
              <li><strong>Best Performance:</strong> Pro models with A17 Pro chip</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the "Which iPhone Should I Buy?" Quiz Works</h2>
            <p>
              Taking our quiz is quick and easy! Simply answer a few questions about your smartphone needs, preferred features, and budget, and we'll recommend the best iPhones for you. Our recommendations are based on extensive research and real-world testing.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert iPhone Buying Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consider Storage:</strong> Choose capacity based on your needs</li>
              <li><strong>Screen Size:</strong> Balance usability with portability</li>
              <li><strong>Camera Features:</strong> Evaluate your photography needs</li>
              <li><strong>Future-Proofing:</strong> Consider longevity and software updates</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Our iPhone Recommendations?</h2>
            <p>
              Our team consists of Apple experts and tech enthusiasts who stay up-to-date with the latest iPhone models and features. We regularly update our <strong>Which iPhone Should I Buy? Quiz</strong> to include new models and capabilities, ensuring you get the most current recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect iPhone?</h2>
            <p>
              Don't waste hours researching – let our <strong>Which iPhone Should I Buy? Quiz</strong> guide you to the perfect device. Whether you're buying your first iPhone or upgrading your current one, we'll help you make an informed decision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}