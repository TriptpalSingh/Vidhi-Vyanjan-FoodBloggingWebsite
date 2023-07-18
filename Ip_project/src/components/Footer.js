import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="py-8 flex flex-col gap-3 items-center bg-rose-200 opacity-75">
      <h2 className="text-2xl font-bold italic">
      {/* Vidhi<span className="text-rose-500"> &lt;-&gt; </span>Vyanjan */}
      Vidhi&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowsLeftRight} beat size="sm" style={{color: "#f43f50",}} />&nbsp;Vyanjan
      </h2>
      <p>&copy; {new Date().getFullYear()} VidhiToVyanjan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
