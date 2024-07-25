import { useOnScreen } from "../hooks/useOnScreen";
import Image, { StaticImageData } from "next/image";

import { landingPage, landingPage2, home, detail, successAdd, wishlist, login, register, footer } from "../assets/xiaopee/index";

import { introScreen1, registerMEvent, loginMEvent, landingPageMEvent, eventDetail, paymentForm, midtrans, myTickets, eTicket, createEvent, profile, editProfile, nearbyEvent } from "../assets/m-event/index";

import { loginUcok, registerUcok, homeUcok, homeUcok2, detailUcok, detailUcok2, midtransUcok, afterPaymentUcok, myBookingUcok, cmsRoomsUcok, cmsEditRoomUcok, cmsUploadPhotoUcok, cmsBookingsUcok } from "../assets/omahucok/index";

import { joinChatApp, roomChatApp, boardChatApp, landingPageChatApp } from "../assets/chat-app/index";

import { loginInstaClone, registerInstaClone, homeInstaClone, detailInstaClone, searchInstaClonefrom, addPostInstaClone, profileInstaClone } from "../assets/instaclone/index";

const projects = [
  {
    name: "M Event",
    features: [
      "Login (Applying JWT) and Register",
      "Displays a list of all available events, applies a search feature based on event name and sorting based on event category.",
      "Displays events around the user's location with a radius of 5km, using Expo Location, Expo MapView and Google Places API.",
      "Integrate payments using Midtrans.",
      "E-tickets ",
      "Create a free event ",
    ],
    description: `M event is a mobile-based event application created using the React Native, Expo, React Native Paper, ExpressJS stack with a PostgreSQL database.
    The client of this application is deployed using Expo,
    The server for this application is deployed using AWS, the database for this application is deployed using Supabase`,
    linkRepository: "https://github.com/HCK71-FP-Event",
    photos: [introScreen1, registerMEvent, loginMEvent, landingPageMEvent, eventDetail, paymentForm, midtrans, myTickets, eTicket, nearbyEvent, createEvent, profile, editProfile],
    isMobile: true,
  },
  {
    name: "Xiaopee",
    features: ["Display a list of products using the infinite scroll and search features", "Displays information about each product", "Login (Applying JWT) and Register", "Add products to wishlist "],
    description: `Xiaopee is a web-based e-catalogue application created using the TypeScript (NextJS), DaisyUI and MongoDB stack. 
    This application is deployed using Vercel`,
    linkRepository: "https://github.com/marcoabelz/xiaopee",
    photos: [landingPage, landingPage2, footer, home, detail, successAdd, wishlist, login, register],
    isMobile: false,
  },
  {
    name: "Instaclone",
    features: ["Login (apply JWT and Cookies) and Register", "Display feeds using flatlist, implementing Redis", "Implement like, comment and follow features", "Search, search for users based on username "],
    description: `Instaclone is a mobile-based Instagram cloning application created using React Native, Expo, React Native Paper, Apollo GraphQL and MongoDB
    The client of this application is deployed using Expo, the server of this application is deployed using AWS, the database of this application is deployed using Supabase`,
    linkRepository: "https://github.com/marcoabelz/instaclone",
    photos: [loginInstaClone, registerInstaClone, homeInstaClone, detailInstaClone, searchInstaClonefrom, addPostInstaClone, profileInstaClone],
    isMobile: true,
  },
  {
    name: "Chatting App",
    features: ["Real time chat "],
    description: `
    Chat app is a web-based chat application created using the Socket.IO stack.
    This application is deployed using Firebase`,
    linkRepository: "https://github.com/H8HCK71-Sprite-LadderSnakeGame",
    photos: [joinChatApp, roomChatApp, landingPageChatApp, boardChatApp],
    isMobile: false,
  },
  {
    name: "Omahucok CMS",
    features: [
      "Login (Applying JWT) and Register",
      "CMS Site CRUD",
      "Display rooms",
      "Displays room details and availability status",
      "Booking and integrating payments using Midtrans",
      "Displays user bookings",
      "Display all booking lists (CMS)",
      "Upload multiple room images using cloudinary (CMS) ",
    ],
    description: `Omahucok is a web-based hotel booking CMS application created using the ReactJS (Vite), Tailwind (Flowbite) and PostgreSQL stack.
    The client of this application is deployed using Firebase, the server of this application is deployed using AWS, the database of this application is deployed using Supabase`,
    linkRepository: "https://github.com/marcoabelz/IP-HCK71",
    photos: [loginUcok, registerUcok, homeUcok, homeUcok2, detailUcok, detailUcok2, midtransUcok, afterPaymentUcok, myBookingUcok, cmsRoomsUcok, cmsEditRoomUcok, cmsUploadPhotoUcok, cmsBookingsUcok],
    isMobile: false,
  },
];

// export default function Project() {
//   const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

//   return (
//     <>
//       <p style={{ fontWeight: 200, letterSpacing: 5 }} className="text-lg font-bold pre-title">
//         Projects
//       </p>
//       <div ref={ref as React.RefObject<HTMLDivElement>} className={`container transition-opacity duration-500 opacity-100 translate-y-0"`}>
//         {projects.map((project) => (
//           <div key={project.name} className="bg-slate-100 p-4 rounded-lg shadow-xl">
//             <div className="text-center">
//               <h1>{project.name}</h1>
//             </div>
//             <div className="pictures bg-slate-200 p-4 flex gap-5 overflow-x-auto whitespace-nowrap">
//               {project.photos.map((photo, idx) => (
//                 <Image key={idx} src={photo as StaticImageData} alt="Project Picture" className="rounded-lg" style={project.isMobile ? { width: 208, height: 400 } : { width: 959, height: 433 }} />
//               ))}
//             </div>
//             <div className="description text-justify mt-5">
//               <p>
//                 Link repository:{" "}
//                 <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href={project.linkRepository}>
//                   {project.linkRepository}
//                 </a>
//               </p>
//               <br />
//               <p style={{ fontFamily: "Roboto" }}>{project.description}</p>
//               <p>Main Features: </p>
//               <ol className="ms-5">
//                 {project.features.map((el, idx) => (
//                   <li style={{ listStyle: "numeric" }} key={idx}>
//                     {el}
//                   </li>
//                 ))}
//               </ol>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

export default function Project() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <>
      <style jsx>{`
        .project-image {
          width: auto;
          height: auto;
        }
      `}</style>

      <p style={{ fontWeight: 200, letterSpacing: 5 }} className="text-lg font-bold pre-title">
        Projects
      </p>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`container transition-opacity duration-500 opacity-100 translate-y-0"`}>
        {projects.map((project) => (
          <div key={project.name} className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
            </div>
            <div className="pictures bg-gray-100 p-4 flex gap-4 overflow-x-auto whitespace-nowrap rounded-lg">
              {project.photos.map((photo, idx) => (
                <Image key={idx} src={photo as StaticImageData} alt="Project Picture" className="rounded-lg mobile" style={project.isMobile ? { width: 208, height: 400 } : { width: 959, height: 433 }} />
              ))}
            </div>
            <div className="description text-justify mt-5">
              <p className="text-sm text-gray-600 mb-2">
                Repository:{" "}
                <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" href={project.linkRepository}>
                  {project.linkRepository}
                </a>
              </p>
              <p className="text-base mb-4 text-justify" style={{ fontFamily: "Roboto" }}>
                {project.description}
              </p>
              <p className="font-medium">Main Features:</p>
              <ul className="list-disc list-inside ml-4 text-sm">
                {project.features.map((el, idx) => (
                  <li className="text-justify" key={idx}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
