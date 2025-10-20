const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4 w-full">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <p className="text-gray-100 font-bold text-3xl">.portfolio</p>

        <div className="flex items-center space-x-8">
          {navItems.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                className="text-gray-100 hover:text-orange-500 transition-colors duration-300"
              >
                {item.name}
              </a>
            );
          })}
        </div>

        <button className="bg-orange-600 text-white px-3 py-2 font-medium rounded-md hover:bg-orange-500 transition-colors duration-300">
          Create Your Own
        </button>
      </div>
    </div>
  );
};

export default Header;
