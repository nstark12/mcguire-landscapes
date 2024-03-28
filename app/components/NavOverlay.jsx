import NavLinks from "./NavLinks";

const NavOverlay = () => {
  return (
    <div className="flex flex-col py-4 items-center bg-primary text-white gap-4 text-lg">
      <NavLinks />
    </div>
  );
};

export default NavOverlay;
