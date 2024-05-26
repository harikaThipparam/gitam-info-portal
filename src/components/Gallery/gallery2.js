import { UncontrolledCarousel } from "reactstrap";
import Ethnicone from "./GalleryImages/Ethnicone.jpeg";
import Ethnictwo from "./GalleryImages/Ethnictwo.jpeg";
import Gelectraone from "./GalleryImages/Gelectraone.jpeg";
import Gelectratwo from "./GalleryImages/Gelectratwo.jpeg";
import Gelectrathree from "./GalleryImages/Gelectrathree.jpeg";
import Ieeeone from "./GalleryImages/Ieeeone.jpeg";
import Ieeetwo from "./GalleryImages/Ieeetwo.jpeg";
import Pramanaone from "./GalleryImages/Pramanaone.jpeg";
import Pramanatwo from "./GalleryImages/Pramanaone.jpeg";

const MyGallery = () => {
  return (
    <div>
      <div className="mb-5 TraditionalDay" >
        <h1 className="text-center">Traditional Day</h1>
        <UncontrolledCarousel
          items={[
            {
              key: 1,
              src: Ethnicone ,
              style: { height: "400px" }
            },
            {
              key: 2,
              src: Ethnictwo ,
            }
          ]}
        />
      </div>

      <div className="mb-5 Pramana" >
        <h1 className="text-center">Pramana</h1>
        <UncontrolledCarousel
          items={[
            {
              key: 1,
              src: Pramanaone,
            },
            {
              key: 2,
              src: Pramanatwo,
            },
          ]}
        />
      </div>

      <div className="mb-5 G-Electra" >
        <h1 className="text-center">G Electra</h1>
        <UncontrolledCarousel
          items={[
            {
              key: 1,
              src: Gelectraone,
            },
            {
              key: 2,
              src: Gelectratwo,
            },
            {
              key: 3,
              src: Gelectrathree,
            },
          ]}
        />
      </div>


      <div className="mb-5 IEEE" >
        <h1 className="text-center">IEEE</h1>
        <UncontrolledCarousel
          items={[
            {
              key: 1,
              src: Ieeeone,
            },
            {
              key: 2,
              src: Ieeetwo,
            },
          ]}    
        />
      </div>
    </div>
  );
};

export default MyGallery;
