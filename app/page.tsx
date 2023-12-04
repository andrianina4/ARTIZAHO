import Image from "next/image";
import artizahoLogo from "../public/images/artizahoLogo.png";
import { Nuage } from "@/constants/link/svg";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { SearchIcon } from "@/constants/link/icons";

export default function Home() {
  return (
    <div className=" -bg-bg-accueil">
      <header className="flex flex-col bg-bg-accueil relative ">
        <div className="h-full flex flex-col">
          <NavBar />
          <div className="flex justify-center  text-center flex-col h-full items-center">
            <h4 className="font-moonGet uppercase font-extrabold text-[#F6F6F6]   text-[32px] w-[714px] tracking-[6%] leading-relaxed">
              Découvrez le savoir-faire <br /> de nos artisans passionnés !
            </h4>

            <p className="font-manrope text-[#F6F6F6] text-sm w-[714px]">
              Des professionnels talentueux vous accueillent dans leurs ateliers
              uniques pour vous transmettre leur art et <br />
              savoir-faire artisanal. Repartez avec votre création réalisée à la
              main !
            </p>

            <div className=" p-5  w-1/2 mt-4 test ">
              <div className="bg-white px-4 py-1 w-full rounded-lg flex items-center justify-between">
                <div className="flex items-center ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z"
                      fill="#917155"
                    />
                  </svg>
                  <input
                    type="text"
                    id="lieu"
                    className="bg-gray-50 border-none text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 font-manrope font-normal text-black-40%"
                    placeholder="Lieu"
                    required
                  />
                </div>
                <div className="w-[1px] h-[25px] bg-brown mr-2"></div>

                <div className="flex items-center ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_173_2269)">
                      <path
                        d="M18.9042 1.5H13.1419C12.9627 1.49987 12.7909 1.57065 12.6638 1.69688L1.14375 13.2141C0.891571 13.4675 0.75 13.8105 0.75 14.168C0.75 14.5255 0.891571 14.8685 1.14375 15.1219L6.62813 20.6063C6.88163 20.8585 7.22468 21 7.58227 21C7.93986 21 8.28291 20.8585 8.53641 20.6063L20.0531 9.09375C20.1794 8.96665 20.2501 8.79476 20.25 8.61563V2.85C20.2509 2.67283 20.2167 2.49724 20.1494 2.33333C20.0821 2.16943 19.9831 2.02045 19.858 1.89497C19.7329 1.76949 19.5843 1.67 19.4206 1.60221C19.2569 1.53443 19.0814 1.49969 18.9042 1.5Z"
                        stroke="#917155"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 6.75C16.2033 6.75 15.9133 6.66203 15.6666 6.49721C15.42 6.33238 15.2277 6.09812 15.1142 5.82403C15.0006 5.54994 14.9709 5.24834 15.0288 4.95737C15.0867 4.66639 15.2296 4.39912 15.4393 4.18934C15.6491 3.97956 15.9164 3.8367 16.2074 3.77882C16.4983 3.72094 16.7999 3.75065 17.074 3.86418C17.3481 3.97771 17.5824 4.16997 17.7472 4.41665C17.912 4.66332 18 4.95333 18 5.25C18 5.64783 17.842 6.02936 17.5607 6.31066C17.2794 6.59197 16.8978 6.75 16.5 6.75Z"
                        fill="#917155"
                      />
                      <path
                        d="M10.7812 22.5L23.0625 10.2188C23.1236 10.1572 23.1716 10.0839 23.2038 10.0034C23.236 9.92288 23.2517 9.83671 23.25 9.75V3.75"
                        stroke="#917155"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_173_2269">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <input
                    type="text"
                    id="lieu"
                    className="bg-gray-50 border-none text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 font-manrope font-normal text-black-40%"
                    placeholder="Lieu"
                    required
                  />
                </div>

                <div className="w-[1px] h-[25px] bg-brown mr-2"></div>

                <div className="flex items-center ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.6" clipPath="url(#clip0_173_2978)">
                      <path
                        d="M3.57646 23.375C3.02062 23.375 2.55663 23.1889 2.18446 22.8167C1.81149 22.4438 1.625 21.9794 1.625 21.4235V8.40978C1.625 7.85395 1.81149 7.38995 2.18446 7.01778C2.55663 6.64481 3.02062 6.45832 3.57646 6.45832H8.73604L12.5 2.69437L16.264 6.45832H21.4235C21.9794 6.45832 22.4434 6.64481 22.8155 7.01778C23.1885 7.38995 23.375 7.85395 23.375 8.40978V21.4235C23.375 21.9794 23.1889 22.4434 22.8168 22.8155C22.4438 23.1885 21.9794 23.375 21.4235 23.375H3.57646ZM3.57646 22.1667H21.4235C21.6088 22.1667 21.7792 22.0893 21.9347 21.9347C22.0893 21.7792 22.1667 21.6088 22.1667 21.4235V8.40978C22.1667 8.2245 22.0893 8.05413 21.9347 7.89866C21.7792 7.74399 21.6088 7.66666 21.4235 7.66666H3.57646C3.39118 7.66666 3.22081 7.74399 3.06533 7.89866C2.91067 8.05413 2.83333 8.2245 2.83333 8.40978V21.4235C2.83333 21.6088 2.91067 21.7792 3.06533 21.9347C3.22081 22.0893 3.39118 22.1667 3.57646 22.1667ZM7.0625 19.1458H18.1236L14.7076 14.5904L11.5478 18.5876L9.43325 16.0319L7.0625 19.1458ZM18.4486 13.7083C18.828 13.7083 19.1474 13.5786 19.4068 13.3192C19.6662 13.0599 19.7959 12.7404 19.7959 12.361C19.7959 11.9808 19.6662 11.661 19.4068 11.4016C19.1474 11.1422 18.828 11.0125 18.4486 11.0125C18.0692 11.0125 17.7498 11.1422 17.4904 11.4016C17.231 11.661 17.1013 11.9808 17.1013 12.361C17.1013 12.7396 17.231 13.059 17.4904 13.3192C17.7498 13.5786 18.0692 13.7083 18.4486 13.7083ZM10.2501 6.45832H14.7499L12.5 4.20841L10.2501 6.45832Z"
                        fill="#917155"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_173_2978">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <input
                    type="text"
                    id="lieu"
                    className="bg-gray-50 border-none text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 font-manrope font-normal text-black-40%"
                    placeholder="Lieu"
                    required
                  />
                </div>

                <div>
                  <button className="btn text-white bg-bronze border-none hover:bg-bronze">
                    <SearchIcon />
                    Découvrir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[58%] bg-red-500">
          <Nuage className='w-full'/>
        </div>
      </header>

      <Footer />
    </div>
  );
}
