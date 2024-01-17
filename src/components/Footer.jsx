import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Footer = () => {
  const { darkTheme, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div>
        <div className="container">
          <div className="py-16">
            <p className="text-xs text-slate-400 mb-2">
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p className="text-xs text-slate-400 mb-2">
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <a
              href=""
              className="text-xs text-primaryColor font-medium mb-4 hover:text-black duration-75 "
            >
              Smart Online Dispute Resolution
            </a>

            <p className="text-xs text-slate-400 mb-2">
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p className="text-xs text-slate-400 mb-2">
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p className="text-xs text-slate-400 mb-2">
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>

            <div className="text-center flex flex-wrap justify-center items-center space-x-10 mt-4">
              <a
                href=""
                className="text-xs text-slate-400 font-medium hover:text-primaryColor duration-75"
              >
                NSE
              </a>
              <a
                href=""
                className="text-xs text-slate-400 font-medium hover:text-primaryColor duration-75"
              >
                BSE
              </a>
              <a
                href=""
                className="text-xs text-slate-400 font-medium hover:text-primaryColor duration-75"
              >
                MCX
              </a>
              <a
                href=""
                className="text-xs text-slate-400 font-medium hover:text-primaryColor duration-75"
              >
                Terms & Conditions
              </a>
              <a
                href=""
                className="text-xs text-slate-400 font-medium hover:text-primaryColor duration-75"
              >
                Policies & procedures
              </a>
              <a
                href=""
                className="text-xs text-slate-400 font-medium hover:text-primaryColor duration-75"
              >
                Privacy Policy
              </a>
              <a
                href=""
                className="text-xs text-slate-400 font-medium hover:text-primaryColor duration-75"
              >
                Disclosure
              </a>
              <a
                href=""
                className="text-xs text-slate-400 font-medium hover:text-primaryColor duration-75"
              >
                For investor's attention
              </a>
              <a
                href=""
                className="text-xs text-slate-400 font-medium hover:text-primaryColor duration-75"
              >
                Investor charter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
