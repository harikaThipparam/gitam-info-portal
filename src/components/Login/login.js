import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./login.css";

const StudentsData = [
  {
    id: 1,
    hallticketNumber: 150923862001,
    name: "SANGU VINAY KUMAR VARMA",
  },
  {
    id: 2,
    hallticketNumber: 150923862002,
    name: "ANDHE SRI LASYA",
  },
  {
    id: 3,
    hallticketNumber: 150923862003,
    name: "SAMBARI CHAITANYA KUMAR",
  },
  {
    id: 4,
    hallticketNumber: 150923862004,
    name: "VAVILALA SAI KUMAR",
  },
  {
    id: 5,
    hallticketNumber: 150923862005,
    name: "BOMMA PRANAY KUMAR",
  },
  {
    id: 6,
    hallticketNumber: 150923862006,
    name: "VAKA UPENDRA",
  },
  {
    id: 7,
    hallticketNumber: 150923862007,
    name: "UPPUTHOLLA MADHU",
  },
  {
    id: 8,
    hallticketNumber: 150923862008,
    name: "MUNIGANTI GANESH",
  },
  {
    id: 9,
    hallticketNumber: 150923862009,
    name: "GEDALA VIJAY KUMAR",
  },
  {
    id: 10,
    hallticketNumber: 150923862010,
    name: "PRIYANKA SHARMA",
  },
  {
    id: 11,
    hallticketNumber: 150923862011,
    name: "NEELI KRANTHI KUMAR",
  },
  {
    id: 12,
    hallticketNumber: 150923862012,
    name: "NAMA MAHITHA",
  },
  {
    id: 13,
    hallticketNumber: 150923862013,
    name: "KURMELLI SRAVANTHI",
  },
  {
    id: 14,
    hallticketNumber: 150923862014,
    name: "BOGA VENU MADHAV",
  },
  {
    id: 15,
    hallticketNumber: 150923862015,
    name: "POTHURAJULA UDAY KIRAN",
  },
  {
    id: 16,
    hallticketNumber: 150923862016,
    name: "SAYABUGARI SHIVA GOUD",
  },
  {
    id: 17,
    hallticketNumber: 150923862017,
    name: "ARE RANJITH KUMAR",
  },
  {
    id: 18,
    hallticketNumber: 150923862018,
    name: "GONE SWETHA",
  },
  {
    id: 19,
    hallticketNumber: 150923862019,
    name: "EDLA APURVA",
  },
  {
    id: 20,
    hallticketNumber: 150923862020,
    name: "REKALA BHAGYA SREE",
  },
  {
    id: 21,
    hallticketNumber: 150923862021,
    name: "BAKKASETTI RANJITH",
  },
  {
    id: 22,
    hallticketNumber: 150923862022,
    name: "ADEPU SUJAN",
  },
  {
    id: 23,
    hallticketNumber: 150923862023,
    name: "MANTHENA USHA RANI",
  },
  {
    id: 24,
    hallticketNumber: 150923862024,
    name: "BINGI SHILPA",
  },
  {
    id: 25,
    hallticketNumber: 150923862025,
    name: "DAKURI ROSHINI",
  },
  {
    id: 26,
    hallticketNumber: 150923862026,
    name: "CHEGANTI NIHARIKA",
  },
  {
    id: 27,
    hallticketNumber: 150923862027,
    name: "MADARI RIBKA MARY",
  },
  {
    id: 28,
    hallticketNumber: 150923862028,
    name: "BERELLY SHASHIDHAR",
  },
  {
    id: 29,
    hallticketNumber: 150923862029,
    name: "GORATI POOJA",
  },
  {
    id: 30,
    hallticketNumber: 150923862030,
    name: "PULLE AKSHAY KUMAR",
  },
  {
    id: 31,
    hallticketNumber: 150923862031,
    name: "ARRURI POOJA",
  },
  {
    id: 32,
    hallticketNumber: 150923862032,
    name: "GUNDA PRASHANTH",
  },
  {
    id: 33,
    hallticketNumber: 150923862033,
    name: "NIRUGONDA SRAVANI",
  },
  {
    id: 34,
    hallticketNumber: 150923862034,
    name: "ALE NISHITHA",
  },
  {
    id: 35,
    hallticketNumber: 150923862035,
    name: "BATHULA VAMSHI",
  },
  {
    id: 36,
    hallticketNumber: 150923862036,
    name: "ALLAMGARI MOUNIKA",
  },
  {
    id: 37,
    hallticketNumber: 150923862037,
    name: "KONDI RAHUL",
  },
  {
    id: 38,
    hallticketNumber: 150923862038,
    name: "KANCHARLA AKHIL",
  },
  {
    id: 39,
    hallticketNumber: 150923862039,
    name: "THATI ARCHANA CHANDRA",
  },
  {
    id: 40,
    hallticketNumber: 150923862040,
    name: "MUTHYALU VINEETHA",
  },
  {
    id: 41,
    hallticketNumber: 150923862041,
    name: "MAITHAPURAM NIKHIL",
  },
  {
    id: 42,
    hallticketNumber: 150923862042,
    name: "URUMADLA VASU",
  },
  {
    id: 43,
    hallticketNumber: 150923862043,
    name: "MANTRI ARAVIND",
  },
  {
    id: 44,
    hallticketNumber: 150923862044,
    name: "GOVURU SHASHI KUMAR",
  },
  {
    id: 45,
    hallticketNumber: 150923862045,
    name: "CHILUKA HEMANTH",
  },
  {
    id: 46,
    hallticketNumber: 150923862046,
    name: "PALSAM MANISHA",
  },
  {
    id: 47,
    hallticketNumber: 150923862047,
    name: "RAIYABARAAPU SAI PRIYA",
  },
  {
    id: 48,
    hallticketNumber: 150923862048,
    name: "CHALLA VIVEK",
  },
  {
    id: 49,
    hallticketNumber: 150923862049,
    name: "NANJUTI MANIDEEP",
  },
  {
    id: 50,
    hallticketNumber: 150923862050,
    name: "PODURU KARTHIK SAI",
  },
  {
    id: 51,
    hallticketNumber: 150923862051,
    name: "MUSTI RAMA KRISHNA",
  },
  {
    id: 52,
    hallticketNumber: 150923862052,
    name: "POLKAMPALLY TEJA",
  },
  {
    id: 53,
    hallticketNumber: 150923862053,
    name: "V LIKHITHA",
  },
  {
    id: 54,
    hallticketNumber: 150923862054,
    name: "MAKILI RADHIKA",
  },
  {
    id: 55,
    hallticketNumber: 150923862055,
    name: "V AKANKSHA",
  },
  {
    id: 56,
    hallticketNumber: 150923862056,
    name: "KOTTURI VIVEK",
  },
  {
    id: 57,
    hallticketNumber: 150923862057,
    name: "GUNDALA VAMSHI",
  },
  {
    id: 58,
    hallticketNumber: 150923862058,
    name: "KATIKI RAJEEV",
  },
  {
    id: 59,
    hallticketNumber: 150923862059,
    name: "RALLABANDI SRAVANI",
  },
  {
    id: 60,
    hallticketNumber: 150923862060,
    name: "ANUGULA SRIKANTH",
  },
  {
    id: 61,
    hallticketNumber: 150923862061,
    name: "K SHASHI KIRAN REDDY",
  },
  {
    id: 62,
    hallticketNumber: 150923862062,
    name: "KADAVA JOGESH",
  },
  {
    id: 63,
    hallticketNumber: 150923862063,
    name: "NUNEMUNTHALA VISHWASRI",
  },
  {
    id: 64,
    hallticketNumber: 150923862064,
    name: "MADDELA SANAJANA",
  },
  {
    id: 65,
    hallticketNumber: 150923862065,
    name: "GANJI SHIVADATTA",
  },
  {
    id: 66,
    hallticketNumber: 150923862066,
    name: "SUNKARA JAGADEESH",
  },
  {
    id: 67,
    hallticketNumber: 150923862067,
    name: "PONNAVENI AKHILA",
  },
  {
    id: 68,
    hallticketNumber: 150923862068,
    name: "DAMMANNAGARI AKSHAYA",
  },
  {
    id: 69,
    hallticketNumber: 150923862069,
    name: "CHITUKULA AJAY KUMAR",
  },
  {
    id: 70,
    hallticketNumber: 150923862070,
    name: "PASHAM BHARGAVI",
  },
  {
    id: 71,
    hallticketNumber: 150923862071,
    name: "SARAP SRILEKHA",
  },
  {
    id: 72,
    hallticketNumber: 150923862072,
    name: "ATLA SHRUTHI LAYA",
  },
  {
    id: 73,
    hallticketNumber: 150923862073,
    name: "BOLGAM TEJA SRI",
  },
  {
    id: 74,
    hallticketNumber: 150923862074,
    name: "VARUKOLU SWEETY",
  },
  {
    id: 75,
    hallticketNumber: 150923862075,
    name: "SHANIGARAPU PRASHANTH",
  },
  {
    id: 76,
    hallticketNumber: 150923862076,
    name: "KOTTUR NARESH",
  },
  {
    id: 77,
    hallticketNumber: 150923862077,
    name: "THOKALA BHARATH",
  },
  {
    id: 78,
    hallticketNumber: 150923862078,
    name: "KANAGANDLA DEEPIKA",
  },
  {
    id: 79,
    hallticketNumber: 150923862079,
    name: "KONDAVEETI THANUJA",
  },
  {
    id: 80,
    hallticketNumber: 150923862080,
    name: "BANDI SAIKIRAN",
  },
  {
    id: 81,
    hallticketNumber: 150923862081,
    name: "M SRIMAHADEVI",
  },
  {
    id: 82,
    hallticketNumber: 150923862082,
    name: "ERRALA PRAVALIKA",
  },
  {
    id: 83,
    hallticketNumber: 150923862083,
    name: "MANDA AKHILA",
  },
  {
    id: 84,
    hallticketNumber: 150923862084,
    name: "RUDRARAM SHASHANK",
  },
  {
    id: 85,
    hallticketNumber: 150923862085,
    name: "BODDU SAINATH",
  },
  {
    id: 86,
    hallticketNumber: 150923862086,
    name: "SANGI HARITHA",
  },
  {
    id: 87,
    hallticketNumber: 150923862087,
    name: "KADARI SUMANTH",
  },
  {
    id: 88,
    hallticketNumber: 150923862088,
    name: "KURVA SHEKAR",
  },
  {
    id: 89,
    hallticketNumber: 150923862089,
    name: "BODA VAMSHI",
  },
  {
    id: 90,
    hallticketNumber: 150923862090,
    name: "MOHAMMAD IBRAHEEM",
  },
  {
    id: 91,
    hallticketNumber: 150923862091,
    name: "SHAIK SAMREEN",
  },
  {
    id: 92,
    hallticketNumber: 150923862092,
    name: "RATHOD SATHISH",
  },
  {
    id: 93,
    hallticketNumber: 150923862093,
    name: "SHAIK YOUNUS",
  },
  {
    id: 94,
    hallticketNumber: 150923862094,
    name: "DEVARAJULA JANSI RANI",
  },
  {
    id: 95,
    hallticketNumber: 150923862095,
    name: "UMMEDA VIVEK",
  },
  {
    id: 96,
    hallticketNumber: 150923862096,
    name: "MEGAVATH KALYAN",
  },
  {
    id: 97,
    hallticketNumber: 150923862097,
    name: "CHIDRALA SHESHASAI",
  },
  {
    id: 98,
    hallticketNumber: 150923862098,
    name: "YEMIKE CHANDRIKA",
  },
  {
    id: 99,
    hallticketNumber: 150923862099,
    name: "CHILUVERI HARISH",
  },
  {
    id: 100,
    hallticketNumber: 150923862100,
    name: "KASHAVARAPU SHASHIDHAR",
  },
  {
    id: 101,
    hallticketNumber: 150923862101,
    name: "RAPELLI SATYASAGAR",
  },
  {
    id: 102,
    hallticketNumber: 150923862102,
    name: "PENUGONDA SRAVANI",
  },
  {
    id: 103,
    hallticketNumber: 150923862103,
    name: "KALIPATNAPU JAYASHREE",
  },
  {
    id: 104,
    hallticketNumber: 150923862104,
    name: "KALUVALA SANJAY",
  },
  {
    id: 105,
    hallticketNumber: 150923862105,
    name: "GANDHAMALLA DHARANI",
  },
  {
    id: 106,
    hallticketNumber: 150923862106,
    name: "ROUTHU RAMYA",
  },
  {
    id: 107,
    hallticketNumber: 150923862107,
    name: "ALLURI SRIVANI",
  },
  {
    id: 108,
    hallticketNumber: 150923862108,
    name: "NILIGONDA POORNIMA",
  },
  {
    id: 109,
    hallticketNumber: 150923862109,
    name: "BANDI NAGA VISHNU TEJA",
  },
  {
    id: 110,
    hallticketNumber: 150923862110,
    name: "KUMMARI RAMBABU",
  },
  {
    id: 111,
    hallticketNumber: 150923862111,
    name: "B PRABHAKAR",
  },
  {
    id: 112,
    hallticketNumber: 150923862112,
    name: "KOLLA ESHWAR",
  },
  {
    id: 113,
    hallticketNumber: 150923862113,
    name: "SAMALLA ANOOP",
  },
  {
    id: 114,
    hallticketNumber: 150923862114,
    name: "GADDI KALYAN",
  },
  {
    id: 115,
    hallticketNumber: 150923862115,
    name: "DUDAP TEJASWINI",
  },
  {
    id: 116,
    hallticketNumber: 150923862116,
    name: "MITTAPELLY RAVINDHAR",
  },
  {
    id: 117,
    hallticketNumber: 150923862117,
    name: "ALLE PRATHIK",
  },
  {
    id: 118,
    hallticketNumber: 150923862118,
    name: "TALARI HARISCHANDRAPRASAD",
  },
  {
    id: 119,
    hallticketNumber: 150923862119,
    name: "G VAMSHI KRISHNA",
  },
  {
    id: 120,
    hallticketNumber: 150923862120,
    name: "GOURU AKHILA",
  },
  {
    id: 121,
    hallticketNumber: 150923862121,
    name: "KANCHUPALLI DIVYA",
  },
  {
    id: 122,
    hallticketNumber: 150923862122,
    name: "BODAGAMA SAIKUMAR",
  },
  {
    id: 123,
    hallticketNumber: 150923862123,
    name: "MADISHETTI ARYAN",
  },
  {
    id: 124,
    hallticketNumber: 150923862124,
    name: "REDDY VENKATESH",
  },
  {
    id: 125,
    hallticketNumber: 150923862125,
    name: "KOTAGIRI PRASHANTH",
  },
  {
    id: 126,
    hallticketNumber: 150923862126,
    name: "RAMAVATH BABU SINGH",
  },
  {
    id: 127,
    hallticketNumber: 150923862127,
    name: "KOMIRISETTY ABHISHEK",
  },
  {
    id: 128,
    hallticketNumber: 150923862128,
    name: "MANTHRIPRAGADA VAISHNAVI",
  },
  {
    id: 129,
    hallticketNumber: 150923862129,
    name: "GADEY SAI KRISHNA",
  },
  {
    id: 130,
    hallticketNumber: 150923862130,
    name: "MAROJU SAI CHANDER",
  },
  {
    id: 131,
    hallticketNumber: 150923862131,
    name: "RANGU MAHITHA",
  },
  {
    id: 132,
    hallticketNumber: 150923862132,
    name: "MAKKAPALLI VINUTHNA",
  },
  {
    id: 133,
    hallticketNumber: 150923862133,
    name: "CHITYALA HIMABINDU",
  },
  {
    id: 134,
    hallticketNumber: 150923862134,
    name: "MUSUNOORI SANDHYA",
  },
  {
    id: 135,
    hallticketNumber: 150923862135,
    name: "KOTA SRIJA",
  },
  {
    id: 136,
    hallticketNumber: 150923862136,
    name: "AITIPAMULA RAVI CHARAN",
  },
  {
    id: 137,
    hallticketNumber: 150923862137,
    name: "PADALA SAIKUMAR",
  },
  {
    id: 138,
    hallticketNumber: 150923862138,
    name: "CHEVULA RISHITHA",
  },
  {
    id: 139,
    hallticketNumber: 150923862139,
    name: "GUNJI NAVEEN",
  },
  {
    id: 140,
    hallticketNumber: 150923862140,
    name: "PANJAALA PRASHANTH",
  },
  {
    id: 141,
    hallticketNumber: 150923862141,
    name: "GOLANUKONDA MAHESH",
  },
  {
    id: 142,
    hallticketNumber: 150923862142,
    name: "SARANGI PUSHPA",
  },
  {
    id: 143,
    hallticketNumber: 150923862143,
    name: "NALLABARIKA SRIKALA",
  },
  {
    id: 144,
    hallticketNumber: 150923862144,
    name: "DIVILI NAGAMAHESH",
  },
  {
    id: 145,
    hallticketNumber: 150923862145,
    name: "TUNIKI BHAVANI",
  },
  {
    id: 146,
    hallticketNumber: 150923862146,
    name: "YALAKURTHI LAKSHMI",
  },
  {
    id: 147,
    hallticketNumber: 150923862147,
    name: "BYRISHETTI PAVAN KUMAR",
  },
  {
    id: 148,
    hallticketNumber: 150923862148,
    name: "BANOTHU VENKATESH",
  },
  {
    id: 149,
    hallticketNumber: 150923862149,
    name: "PUNERIYA THARUN",
  },
  {
    id: 150,
    hallticketNumber: 150923862150,
    name: "GOTTIMUKKALA KALYAN",
  },
  {
    id: 151,
    hallticketNumber: 150923862151,
    name: "OBIDA TASLEEM",
  },
  {
    id: 152,
    hallticketNumber: 150923862152,
    name: "SOLLA DEEKSHITH",
  },
  {
    id: 153,
    hallticketNumber: 150923862153,
    name: "KESA SAI KUMAR",
  },
  {
    id: 154,
    hallticketNumber: 150923862154,
    name: "MOKA HAREESH",
  },
  {
    id: 155,
    hallticketNumber: 150923862155,
    name: "GOSHIKA SURYA",
  },
  {
    id: 156,
    hallticketNumber: 150923862156,
    name: "ERAMALA VISHNU VARDHNAN",
  },
  {
    id: 157,
    hallticketNumber: 150923862157,
    name: "T YASH KUMAR",
  },
  {
    id: 158,
    hallticketNumber: 150923862158,
    name: "SHAIK MAHMOOD SAMEER",
  },
  {
    id: 159,
    hallticketNumber: 150923862159,
    name: "NALLA RESHMITHA",
  },
  {
    id: 160,
    hallticketNumber: 150923862160,
    name: "JAKKANGARI NIKITHA",
  },
  {
    id: 161,
    hallticketNumber: 150923862161,
    name: "NASKANTI SANDEEP KUMAR",
  },
  {
    id: 162,
    hallticketNumber: 150923862162,
    name: "MERUGU ANUSHA",
  },
  {
    id: 163,
    hallticketNumber: 150923862163,
    name: "PANJALA PRATHYUSHA",
  },
  {
    id: 164,
    hallticketNumber: 150923862164,
    name: "ONTEDDU SAMPATH KUMAR",
  },
  {
    id: 165,
    hallticketNumber: 150923862165,
    name: "E NIKHIL GOUD",
  },
  {
    id: 166,
    hallticketNumber: 150923862166,
    name: "VEMULA JYOTHI",
  },
  {
    id: 167,
    hallticketNumber: 150923862167,
    name: "MARRIKINDI RAMYA",
  },
  {
    id: 168,
    hallticketNumber: 150923862168,
    name: "JONNAKUTI DIVYA",
  },
  {
    id: 169,
    hallticketNumber: 150923862169,
    name: "REDDY VIJAY RAJ",
  },
  {
    id: 170,
    hallticketNumber: 150923862170,
    name: "VAMSHI MITTAPALLI",
  },
  {
    id: 171,
    hallticketNumber: 150923862171,
    name: "AKULA SANDEEP KUMAR",
  },
  {
    id: 172,
    hallticketNumber: 150923862172,
    name: "G MANISHA",
  },
  {
    id: 173,
    hallticketNumber: 150923862173,
    name: "PERNE SUPRIYA",
  },
  {
    id: 174,
    hallticketNumber: 150923862174,
    name: "PENTHALA RAKESH",
  },
  {
    id: 175,
    hallticketNumber: 150923862175,
    name: "MOGILI SHIVA KUMAR",
  },
  {
    id: 176,
    hallticketNumber: 150923862176,
    name: "MOHAMMAD JAHANGEER",
  },
  {
    id: 177,
    hallticketNumber: 150923862177,
    name: "BELLAMKONDA MADHU KUMAR",
  },
  {
    id: 178,
    hallticketNumber: 150923862178,
    name: "VADDE CHANDRA SEKHAR",
  },
  {
    id: 179,
    hallticketNumber: 150923862179,
    name: "PULI DIVYA",
  },
  {
    id: 180,
    hallticketNumber: 150923862180,
    name: "AGALDIVITI ARCHANA",
  },
  {
    id: 181,
    hallticketNumber: 150923862181,
    name: "S.M.RUSHI",
  },
];

const Login = () => {
  const [hallTicketNumber, setHallTicketNumber] = useState("");
  const [isError, setErrorMsg] = useState(false);

  const Navigate = useNavigate();

  const LoginButton = (event) => {
    event.preventDefault();
    const res = StudentsData.find(
      (each) => each.hallticketNumber === parseInt(hallTicketNumber)
    );
    if (res !== undefined) {
      const UserData = JSON.stringify(res);
      Cookies.set("MCAConnectUserData", UserData);
      setErrorMsg(false);
      Navigate("/");
      alert("Welcome Mr/Ms: " + res.name);
    } else {
      setErrorMsg(true);
      // const FromLocalStorage = Cookies.get("MCAConnectUserData");
      // const Name = JSON.parse(FromLocalStorage);
    }
  };

  const EnterHallTicketNumber = (event) => {
    setHallTicketNumber(event.target.value);
  };

  return (
    <div className="">
      <div className="login-sub-container">
        <h1 className="heading">MANPOWER DEVELOPMENT COLLEGE</h1>
        <p className="note-para">
          Welcome to the unofficial hub for MCA students at Manpower Development
          College! 🚀
        </p>
        <p className="note-para">
          This Website Developed by fellow{"  "}
          <a
            href="https://kalyangottimukkalabio.vercel.app"
            target="_blank"
            className=""
            rel="noreferrer"
          >
            Student.
          </a>
          <br className="d-md-none" /> Only important Information like Exams,
          Assignments etc...
          <br /> MCA ( 2023-25 )
        </p>
      </div>
      <div className="login-main-container">
        <div className="login-bg-container" id="loginContainer">
          <div className="login-container">
            <form className="form-control p-3" onSubmit={LoginButton}>
              <h1 className="login-heading mb-1">Login</h1>
              <div className="p-0 mb-3 mt-3 login-note-container">
                <div className="alert alert-primary m-0">
                  <p className="m-0">
                    Hey there! To access the website, just use your hall ticket
                    number as the login credentials.
                  </p>
                  <br />
                  <p className="alert alert-danger m-0">
                    ! This website is only for our college students..
                  </p>
                </div>
              </div>
              <div className="input-container mb-3">
                <label htmlFor="hallTicketNumber" className="mb-2">
                  <b>Hall Ticket Number</b>
                </label>
                <input
                  type="tel"
                  placeholder="Please provide valid hall ticket number"
                  className="form-control"
                  id="hallTicketNumber"
                  onChange={EnterHallTicketNumber}
                  value={hallTicketNumber}
                />
                {isError && (
                  <p className="error-text" id="errorText">
                    *Hall Ticket Number didn't match
                  </p>
                )}
              </div>
              <div className="button-container">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
