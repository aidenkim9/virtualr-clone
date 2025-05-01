import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul>
            {resourcesLinks.map((link, index) => (
              <li
                className="text-sm hover:text-white text-neutral-600 mb-5"
                key={index}
              >
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul>
            {platformLinks.map((link, index) => (
              <li
                className="text-sm hover:text-white text-neutral-600 mb-5"
                key={index}
              >
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul>
            {communityLinks.map((link, index) => (
              <li
                className="text-sm hover:text-white text-neutral-600 mb-5"
                key={index}
              >
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
