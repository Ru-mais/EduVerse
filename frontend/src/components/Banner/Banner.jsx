import React, { useState } from "react";
import bannerImg from "../../assets/Bannerimage.jpg";
import { CircleCheckBig, Sparkles, X } from "lucide-react";
import { floatingIcons, features } from "../../assets/dummyBanner";
import { bannerStyles, customStyles } from "../../assets/dummyStyles";
import video from "../../assets/BannerVideo.mp4"
const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={bannerStyles.container}>
      {/* Floating Icons Wrapper */}
      <div className={bannerStyles.floatingIconsWrapper}>
        {floatingIcons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt={icon.alt || ""}
            className={`${bannerStyles.floatingIcon} ${icon.pos}`}
            style={{
              animationDelay: `${i * 0.35}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>
      <div className={bannerStyles.mainContent}>
        <div className={bannerStyles.grid}>
          <div className={bannerStyles.leftContent}>
            <span className={bannerStyles.badge}>
              <Sparkles className={bannerStyles.badgeIcon} />
              New Features Available
            </span>
            <h1 className={bannerStyles.heading}>
              <span className={bannerStyles.headingSpan1}>
                Building Amazing
              </span>
              <span className={bannerStyles.headingSpan2}>Digital Product</span>
            </h1>
            <p className={bannerStyles.description}>
              Join EduVerse today and unlock a world of knowledge at your
              fingertips. Explore our extensive library of courses, connect with
              expert instructors, and embark on a transformative learning
              journey.
            </p>
            {/*features*/}
            <div className={bannerStyles.featuresGrid}>
              {features.map((feature, i) => (
                <div key={i} className={bannerStyles.featureIcon}>
                  <div className={bannerStyles.featureIconContainer}>
                    <span
                      className={`${bannerStyles.featureIcon} text-${feature.color}-500 `}
                    >
                      <CircleCheckBig size={16} />
                    </span>
                  </div>
                  <span className={bannerStyles.featureText}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            {/*buttons*/}
            <div className={bannerStyles.buttonsContainer}>
              <a href="/corses" className={bannerStyles.buttonGetStarted}>
                Get Starrted
              </a>
              <button
                className={bannerStyles.buttonViewDemo}
                onClick={() => setShowVideo(true)}
              >
                view demo
              </button>
            </div>
          </div>
          <div className={bannerStyles.imageContainer}>
            <img
              src={bannerImg}
              alt="banner image"
              className={bannerStyles.image}
            />
          </div>
        </div>
      </div>
      {/* video modal */}
      {showVideo && (
        <div className={bannerStyles.videoModal.overlay}>
          <div className={bannerStyles.videoModal.container}>
            <iframe
              src={video}
              className={bannerStyles.videoModal.iframe}
              title="demo vidoe"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button onClick={()=> setShowVideo(false)} className={bannerStyles.videoModal.closeButton}>
                <span>
                    <X className={bannerStyles.videoModal.closeIcon } />
                </span>

            </button>
          </div>
        </div>
      )}
      <style jsx>{customStyles}>

      </style>
       {/* Inline Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
    
  );
};

export default Banner;
