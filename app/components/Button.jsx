const Button = (props) => {
  return (
    <button className="bg-primary rounded-lg text-white hover:bg-primaryHov cursor-pointer py-2 px-2 text-xl">
      {props.children}
    </button>
  );
};

export default Button;
