import React from 'react';
import Link from '@docusaurus/Link';

function SDK({ icon, to, name }: { icon: string; name: string; to?: string }) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline"
    >
      <img src={icon} className="mr-2 h-7 w-7" />
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function SDKs() {
  return (
    <section className="mx-auto mb-32 flex w-full max-w-5xl flex-col p-4 py-0">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        SDK Documentation
      </span>

      <h3 className="mb-12 text-4xl">
        Build the way you want in the framework you want!
      </h3>

      <div className="mb-10">
        <h4 className="mb-2 text-2xl">UI Kit</h4>

        <p className="mb-6 text-text-400">
          Build faster with our prebuilt library of UI components, available for{' '}
          <span className="font-semibold">all</span> frameworks.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="React"
            to="/"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="Angular"
            to="/"
            icon="/static/landing-page/sdk-icons/angular.png"
          />
          <SDK
            name="HTML"
            to="/"
            icon="/static/landing-page/sdk-icons/html.png"
          />
          <SDK
            name="Flutter"
            to="/"
            icon="/static/landing-page/sdk-icons/flutter.png"
          />
          <SDK
            name="React Native"
            to="/"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="iOS"
            to="/"
            icon="/static/landing-page/sdk-icons/swift.png"
          />
          <SDK
            name="Android"
            to="/"
            icon="/static/landing-page/sdk-icons/kotlin.png"
          />
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-2xl">Core SDK</h4>

        <p className="mb-6 text-text-400">
          Our easy to use Video + Voice + Livestreaming + Chat{' '}
          <span className="font-semibold">all in one</span> SDK
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="JS"
            to="/"
            icon="/static/landing-page/sdk-icons/js.png"
          />
          <SDK
            name="React"
            to="/"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="Flutter"
            to="/"
            icon="/static/landing-page/sdk-icons/flutter.png"
          />
          <SDK
            name="React Native"
            to="/"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="iOS"
            to="/"
            icon="/static/landing-page/sdk-icons/swift.png"
          />
          <SDK
            name="Android"
            to="/"
            icon="/static/landing-page/sdk-icons/kotlin.png"
          />
        </div>
      </div>
    </section>
  );
}
