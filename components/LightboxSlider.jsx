import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import GLightbox from 'glightbox';

const LightboxSlider = ({images}) => {
  const lightbox = useRef();

  useEffect(() => {
    lightbox.current = GLightbox({
      selector: 'glightbox3',
    });

    return () => {
      try {
        lightbox.current.destroy();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
  }, []);

  return (
    <div className="grid gap-4 mt-5">
      {images.map(({medium, full}, index) => (
        <a
          key={index}
          href={full}
          className="glightbox3 relative"
          data-gallery="gallery">
          <img
            src={medium}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </a>
      ))}

      <style jsx>{`
        .grid {
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 300px;
        }
        .glightbox3 :after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          transition: 0.3s;
        }
        .glightbox3:hover:after {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

LightboxSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      medium: PropTypes.string,
      full: PropTypes.string,
    }),
  ),
};

export default LightboxSlider;
