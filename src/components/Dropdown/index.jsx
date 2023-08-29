function Dropdown({ children, className }) {
  return (
    <section
      className={`rounded-sm absolute z-10 overflow-y-auto border shadow-[0_0_0.375rem_#aeaeb6] bg-white min-w-max ${className} py-4`}
    >
      <ul className="">{children}</ul>
    </section>
  );
}

export default Dropdown;
