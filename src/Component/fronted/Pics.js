import React, { useState } from 'react';
import './Pics.css';
import no from '../../Images/noimage.webp'


import mangalam from '../../Images/Mangalam Cater.png'

import Navbar1 from '../Navbar';
const Pics = () => {
  const [filter, setFilter] = useState('');
  const [showSweetImages, setShowSweetImages] = useState(false);
  const [showEventImages, setShowEventImages] = useState(false);
  const [showEngagementImages, setShowEngagementImages] = useState(false);
  const [showBuffetImages, setShowBuffetImages] = useState(false);
  const [showSchoolCollageImages, setShowSchoolCollageImages] = useState(false);
  const [showKittyPartyImages, setShowKittyPartyImages] = useState(false);
  const [showBirthdayPartyImages, setShowBirthdayPartyImages] = useState(false);
  const [showManyMoreImages, setShowManyMoreImages] = useState(false);



  const handleFilterButtonClick = () => {
    setShowSweetImages(!showSweetImages);
  };

  const handleFilterEventButton = () => {
    setShowEventImages(!showEventImages);

  };

  const handleFilterEngagementButton = () => {
    setShowEngagementImages(!showEngagementImages);
  };
  const handleFilterBuffetButton = () => {
    setShowBuffetImages(!showBuffetImages);
  };
  const handleFilterSchoolCollageButton = () => {
    setShowSchoolCollageImages(!showSchoolCollageImages);
  };
  const handleFilterKittyPartyButton = () => {
    setShowKittyPartyImages(!showKittyPartyImages);
  };
  const handleFilterBirthdayPartyButton = () => {
    setShowBirthdayPartyImages(!showBirthdayPartyImages);
  };
  const handleFilterManyMoreButton = () => {
    setShowManyMoreImages(!showManyMoreImages);
  };

  const filteredImages = showSweetImages ? [

    "https://i.pinimg.com/736x/e1/c0/79/e1c07992022d5d4419f4c94261301b1b--vows-wedding-ceremony.jpg",
    "https://th.bing.com/th/id/R.b95a6a41cd262c20143b019037172a07?rik=2APtGP%2bBxC7I%2fw&riu=http%3a%2f%2fwww.maharaniweddings.com%2fwp-content%2fgallery%2fjoseph-lin-photography-9-23-13%2findian-wedding-reception-groom-bride.jpg&ehk=M%2b%2f3zZ55j872nuK1v%2f5D3Bm53V7sNFFlzgeaKtIOYeU%3d&risl=&pid=ImgRaw&r=0",

    "https://i.pinimg.com/originals/f5/13/89/f51389ecbfe1bd267b485ddc43469335.jpg",
    "https://www.maharaniweddings.com/media/gallery/21446-Gill_Dhillon_2783-orig.jpeg",
    "https://th.bing.com/th/id/R.3e973094187e33c9586fda35775f26da?rik=vj1y19vsTJXIJA&riu=http%3a%2f%2fwww.malamurthycatering.com%2fimages%2fgallery%2fSouth_Indian_Food_Catering_Services_Coimbatore.jpg&ehk=3WC8Sd29D76lGrISZZky3cr%2fdih0O4rQUJZyZeOEjuY%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.11720a7c4f4ec478a261932cfa4f8f33?rik=PQXkq5pp9YvDLA&riu=http%3a%2f%2fwww.helinto.com%2fuploads%2fcatering%2fslider%2fc47a3ef8591cf98b8bf4b6587dbaccbc.jpg&ehk=6QhmdzbGew0qwqpdPOFBZBh5hPG8TTiOREaxCptUbgQ%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.f1797f845b9dbc07b6c32e23d1c5ceee?rik=7Mw02xNu7a89Xw&riu=http%3a%2f%2fprasadfooddivine.com%2fweb%2fglimages%2fodc7.jpg&ehk=yblNpi9O%2b1JpECDj2hcm3WHNbzAHQjkwGshabKmCVuE%3d&risl=&pid=ImgRaw&r=0",
    "https://weddingeye.in/images/106.jpg",

  ] : [
    mangalam,

  ];

  const filteredEventImages = showEventImages ? [
    "https://th.bing.com/th/id/OIP.g1Mxwaf8E8DWPaq-HvPqfAHaE7?pid=ImgDet&w=1500&h=998&rs=1",
    "https://th.bing.com/th/id/R.5c09fdf990a071eece00ac0c51a14b17?rik=Dou8mC7g8GRGIA&riu=http%3a%2f%2fmadisonbagelsandgrill.com%2fwp-content%2fuploads%2f2020%2f07%2f3.jpg&ehk=EAlXUZDqcKbfA91FZ8bTkgqXkgsGSAuco9PKLCWhOAc%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.Wu8akpJrvTzIYAzmSnquawHaFj?pid=ImgDet&w=1140&h=855&rs=1",
    "https://th.bing.com/th/id/OIP.Psuguq8bkjji0m6V_sf9mQHaFj?pid=ImgDet&w=736&h=552&rs=1",
    "https://i.pinimg.com/originals/7f/fa/76/7ffa7610364f7b0f0381373ec2a1eabb.jpg",
    "https://th.bing.com/th/id/R.0248296c591a612ebe89cb838798e427?rik=VHYIw5pOaAy5tw&riu=http%3a%2f%2fwww.spittingpig.co.uk%2fwp-content%2fuploads%2f2013%2f11%2fcor.jpg&ehk=%2frUA9d4Us%2fbEcXNlRNXRRErRa%2bXC2pL0xqs8aCD7%2b5Q%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.1425a5fdb0778f95138f014638dd0ad7?rik=fSxA8LWqya0iSQ&riu=http%3a%2f%2fcivileats.com%2fwp-content%2fuploads%2f2015%2f12%2fshutterstock_177035345.jpg&ehk=9%2fP3hYPxQ8nZJ%2beKg8K7xzYArSGZaRR5ZOYcqHY7O7U%3d&risl=&pid=ImgRaw&r=0",
    "https://media-cdn.tripadvisor.com/media/photo-s/0b/af/ff/2a/hotel-omorika.jpg",



  ] : [];

  const filteredEngagementImages = showEngagementImages ?
    [
      "https://5.imimg.com/data5/AC/DO/MY-11370511/ring-ceremoney-500x500.jpg",
      "https://5.imimg.com/data5/ME/VX/GLADMIN-63078737/outdoor-catering-service.png",
      "https://i2.wp.com/www.lavenderandlovage.com/wp-content/uploads/2016/04/IMG_4829_20160323.jpg?resize=510%2C680&ssl=1",
      "https://memorablemomentsva.com/wp-content/uploads/2018/02/catering-equipment-rental-virginia-fredericksburg-as_134856626-1200x800.jpg",
      "https://th.bing.com/th/id/OIP.fhz2GZ20EKTLiXrMWRz_pwHaEc?pid=ImgDet&w=2000&h=1200&rs=1",
      "https://i.pinimg.com/originals/22/67/f7/2267f75b0d2b3135a6a59486125f8ab5.jpg",
      "https://www.stjohns.edu/sites/default/files/styles/640w/public/2019-04/180601_grand_alumni_signature_celebration_340.jpg?itok=zdH4MWfQ",
      "https://www.camdenciviccentre.com.au/assets/Uploads/_resampled/ScaleWidthWyIxNjAwIl0/gallery-catering.jpg",

    ] : [];


  const filteredBuffetImages = showBuffetImages ?
    [
      "https://th.bing.com/th/id/OIP.EWtV4e-INPDEhef2J87LEAHaE8?pid=ImgDet&rs=1",
      "https://netstorage-tuko.akamaized.net/images/73b5d44df71feee2.jpg?imwidth=900",
      "https://cdn0.weddingwire.co.uk/emp/fotos/7/1/4/3/catering_4_167143.jpg",
      "https://3.bp.blogspot.com/-7vfHraficrg/UsVoBgsbm8I/AAAAAAAAWAs/sLbnOsoZvcc/s640/DSC05154.jpg",
      "https://3.bp.blogspot.com/-n1sdxgROgLc/WS7BtYdbK-I/AAAAAAAAG4s/0to2NNXSaAk6yHDawmVqh0B4HuS6wCI0gCLcB/s1600/The%2BAwadhi%2BBuffet.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/13/2f/b6/01/photo0jpg.jpg",
      "https://th.bing.com/th/id/OIP.GyPO1K_2mQGGuB3HnzZJGAHaIr?pid=ImgDet&w=1365&h=1600&rs=1",
      "https://i.pinimg.com/originals/3a/95/e5/3a95e5b25d8cfd4c7c6154327cc2e457.jpg",
    ] : [];
  const filteredSchoolCollageImages = showSchoolCollageImages ?
    [
      "https://th.bing.com/th/id/OIP.o616SXllvrcND_gRZTg2dwAAAA?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/OIP.KwZ7vwinLi5JBJ0WKhy7SAHaE8?pid=ImgDet&w=474&h=316&rs=1",
      "https://th.bing.com/th/id/OIP.Vmt0oD5xzWdVZrpk-akaBQHaFF?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/R.d567c1e6039399f9f319e3a85f78e0f6?rik=kishoD8hWx5AFw&riu=http%3a%2f%2friseandshinecatering.com%2fblog%2fwp-content%2fuploads%2fsites%2f2%2f2014%2f12%2fIMG_1189.jpg&ehk=dIdCGLPSMnPJiKfFtIAmy1ybap40iDPFUKA%2frX0iOeI%3d&risl=&pid=ImgRaw&r=0",
      "https://5.imimg.com/data5/WD/CQ/MY-21815340/school-party-catering-service-500x500.jpg",
      "https://th.bing.com/th/id/R.e64acb58671cacb9c276bd1ec10edeaa?rik=YwEXRsPK6LX%2bdQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-Mwrosb8aC54%2fUaMLs_G_pyI%2fAAAAAAAADRY%2fviP5iyvcNR0%2fs1600%2fWedding%2bTent%2bDecoration%2bIdeas%2b3.jpg&ehk=M7np24VN7Mz8XaNZZ0F%2bw%2f5hkbLNja0KUmdHnKOElEU%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.oA-UL-zogCY68ZUNXF1XHAHaFj?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/OIP.XgyESVzfCYjIwPT5BlQlOQHaE7?pid=ImgDet&w=5746&h=3823&rs=1"
    ] : [];
  const filteredKittyPartyImages = showKittyPartyImages ?
    [
      "https://images.herzindagi.info/image/2021/Aug/kitty-party-planning-ideas-main.jpg",
      "https://th.bing.com/th/id/R.bf75df00bff2cf5039ed736488280d46?rik=C%2bEGLDaC29iHGQ&riu=http%3a%2f%2fscratchcateringservices.com%2fwp-content%2fuploads%2f2015%2f03%2fbreakfast-reduced.jpg&ehk=qF3xWNjAPUdWuUBTWbq75hq6tPWDJEroYoMgQGoy3RA%3d&risl=&pid=ImgRaw&r=0",
      "https://livhealthylife.com/wp-content/uploads/2021/05/Untitled-design-39.jpg",
      "https://th.bing.com/th/id/OIP.2uIVsBDIqHwFRVcGITgAlQHaEK?pid=ImgDet&rs=1",
      "https://3.bp.blogspot.com/-QCz7ELTKUgo/W6t4AapNwsI/AAAAAAAAAl4/8WaqjS792tQU1UkaIbOVImPf4URpfau_gCLcBGAs/s640/Desi%2BSnacks%2BOf%2BIndia.jpg",
      "https://th.bing.com/th/id/OIP.vhyK4WbSKdmZB2ynntvOXgHaDt?pid=ImgDet&w=830&h=415&rs=1",
      "https://th.bing.com/th/id/OIP.b2S8sI-MHLZAOcX2sNdPUgHaHa?pid=ImgDet&w=500&h=500&rs=1",
      "https://th.bing.com/th/id/OIP.ZDe6Leavpe1ymJNnXcWdJQHaFT?pid=ImgDet&w=1024&h=733&rs=1"
    ] : [];
  const filteredBirthdayPartyImages = showBirthdayPartyImages ?
    [
      "https://media.istockphoto.com/photos/indian-family-celebrating-a-birthday-party-picture-id907578392?k=6&m=907578392&s=170667a&w=0&h=aq82PI97dYOjh1JfWBpDcygDVDNCzoxgOFDduwUcDHQ=",
      "https://images.freeimages.com/images/large-previews/4e5/cake-1562457.jpg",
      "https://th.bing.com/th/id/R.51125a98a017e9f4a8bc998a2f706bfb?rik=lnZdXf9dt0FZyA&riu=http%3a%2f%2fhealthzap.co%2fwp-content%2fuploads%2f2019%2f12%2fWaiter.jpg&ehk=W7WtNRrxQc7hCG2JAcFpOKJSGFDq3xPaQWf631NGPpk%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.uRQIFDXwx1Yj_4Iq-OxYbwHaFj?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/R.5d10b3ce1dcc57837c408945b74628a8?rik=Q9%2bxoHoewwRR%2fQ&riu=http%3a%2f%2fcravecatering.com%2fwp-content%2fuploads%2f2016%2f03%2fdelivery-24.jpg&ehk=E3QQqRW%2fU4b%2b5mIDw%2beZdN0BtOJKAnTX5a8%2f5j9Jv%2fI%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.I6DuvaJZ39mX8gTEcxj45AEyDL?pid=ImgDet&rs=1",
      "https://i.pinimg.com/originals/88/c1/d7/88c1d727feec4f79474e8cf8d09f7cf2.jpg",
      "https://th.bing.com/th/id/OIP.xanZe0PhO3Ny5_NJImKDtAHaE-?pid=ImgDet&rs=1",
    ] : [];
  const filteredManyMoreImages = showManyMoreImages ?
    [
      "https://5.imimg.com/data5/WF/AL/VY/ANDROID-32236418/product-jpeg.jpg",
      "https://5.imimg.com/data5/ANDROID/Default/2021/3/DD/IW/YJ/125299568/product-jpeg.jpg",
      "https://i.pinimg.com/originals/fe/bb/60/febb60bd0b7a753aa4195454fba6e560.jpg",
      "https://i.pinimg.com/originals/fe/bb/60/febb60bd0b7a753aa4195454fba6e560.jpg",
      "https://i.pinimg.com/originals/fe/bb/60/febb60bd0b7a753aa4195454fba6e560.jpg",
      "https://th.bing.com/th/id/OIP.h-bZuuV2KxmouusCAYNb5wHaE7?pid=ImgDet&w=1155&h=768&rs=1",
      "https://images.venuepool.com/venue_images/1601/victoria-garden5.jpg",
      "https://cdn0.weddingwire.in/emp/fotos/0/0/1/5/12932696-1516909781950593-9012852911178580106-n_15_150015.jpg"
    ] : [];

  return (
    <div>

      <div className="pics-container">
        <Navbar1 />
        <div className="buttons-container">
          <button onClick={handleFilterButtonClick} >
            {showSweetImages ? 'Marriage Images' : 'Show Marriage Images'}

          </button>
          <button onClick={handleFilterEventButton}>
            {showEventImages ? 'Event Images' : 'Show Event Images'}

          </button>
          <button onClick={handleFilterEngagementButton}>
            {showEngagementImages ? 'Engagement Images' : 'Show Engagement Images'}
          </button>
          <button onClick={handleFilterBuffetButton}>
            {showBuffetImages ? 'Buffet Images' : 'Show Buffet Images'}
          </button>
          <button onClick={handleFilterSchoolCollageButton}>
            {showSchoolCollageImages ? 'School-Collage Images' : 'Show School-Collage Images'}
          </button>
          <button onClick={handleFilterKittyPartyButton}>
            {showKittyPartyImages ? 'Kitty-Party Images' : 'Show Kitty-Party Images'}
          </button>
          <button onClick={handleFilterBirthdayPartyButton}>
            {showBirthdayPartyImages ? 'Bitrhday-Party Images' : 'Show Birthday-Party Images'}
          </button>
          <button onClick={handleFilterManyMoreButton}>
            {showManyMoreImages ? 'Many More Images' : 'Show Many More Images'}
          </button>

        </div>

        <div className="image-container">
          {filteredImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={{ filter: filter }}
            />
          ))}
        </div>

        <div className="image-container">
          {filteredEventImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={{ filter: filter }}
            />
          ))}
        </div>
        <div className="image-container">
          {filteredEngagementImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={{ filter: filter }}
            />
          ))}
        </div>
        <div className="image-container">
          {filteredBuffetImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={{ filter: filter }}
            />
          ))}
        </div>
        <div className="image-container">
          {filteredSchoolCollageImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={{ filter: filter }}
            />
          ))}
        </div>
        <div className="image-container">
          {filteredKittyPartyImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={{ filter: filter }}
            />
          ))}
        </div>
        <div className="image-container">
          {filteredBirthdayPartyImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={{ filter: filter }}
            />
          ))}
        </div>
        <div className="image-container">
          {filteredManyMoreImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={{ filter: filter }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pics;
