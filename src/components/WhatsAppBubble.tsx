import { useLocation } from "react-router-dom";

const HIDE_ON_MOBILE = ["/exponencial", "/eventos/"];

export default function WhatsAppBubble() {
  const { pathname } = useLocation();
  const hideOnMobile = HIDE_ON_MOBILE.some((p) => pathname.startsWith(p));

  return (
    <a
      href="https://wa.me/34617785485"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-[9998] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] ${hideOnMobile ? "hidden lg:flex" : "flex"}`}
      style={{ backgroundColor: "#25D366" }}
    >
      {/* Official WhatsApp logo SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path
          fill="#fff"
          d="M4.868 43.303l2.694-9.835a19.129 19.129 0 0 1-2.561-9.61C5.001 13.376 13.376 5 23.857 5c5.077 0 9.842 1.979 13.43 5.571a18.948 18.948 0 0 1 5.568 13.435c-.004 10.481-8.38 18.856-18.86 18.856h-.008a18.85 18.85 0 0 1-9.011-2.293L4.868 43.303z"
        />
        <path
          fill="#25D366"
          d="M4.868 43.803a.5.5 0 0 1-.484-.631l2.645-9.655a19.616 19.616 0 0 1-2.525-9.659C4.504 13.1 13.1 4.5 23.857 4.5c5.212 0 10.108 2.031 13.795 5.721a19.446 19.446 0 0 1 5.712 13.79c-.004 10.755-8.601 19.352-19.358 19.352h-.008a19.34 19.34 0 0 1-9.245-2.352l-9.714 2.549a.506.506 0 0 1-.171.043z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M19.035 15.338c-.399-.888-.818-.906-1.197-.922-.31-.014-.664-.013-.018-.013-.545 0-1.43.205-2.179 1.024-.748.82-2.861 2.796-2.861 6.817s2.929 7.909 3.34 8.453c.41.543 5.692 9.103 14.057 12.394 6.956 2.75 8.369 2.203 9.876 2.066 1.508-.137 4.865-1.99 5.551-3.909.685-1.919.685-3.565.48-3.909-.206-.344-.749-.549-1.567-.96-.818-.411-4.838-2.385-5.587-2.659-.748-.274-1.293-.41-1.839.412s-2.111 2.659-2.589 3.203c-.478.544-.956.615-1.774.206-.818-.412-3.453-1.273-6.579-4.061-2.432-2.167-4.075-4.842-4.553-5.663-.478-.821-.051-1.265.359-1.674.369-.368.818-.96 1.228-1.44.409-.48.545-.822.817-1.37.273-.548.137-1.028-.068-1.44-.206-.411-1.785-4.45-2.497-6.095z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}
