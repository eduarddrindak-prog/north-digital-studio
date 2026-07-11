export default function Footer() {

    return (
  
      <footer className="
        border-t
        border-border
        bg-background
        text-primary-text
      ">
  
        <div className="
          max-w-7xl
          mx-auto
          px-6
          py-12
          flex
          flex-col
          md:flex-row
          justify-between
          gap-8
        ">
  
  
          {/* Brand */}
  
          <div>
  
            <h3 className="
              font-semibold
              text-lg
            ">
              Digital Studio
            </h3>
  
  
            <p className="
              mt-3
              text-secondary-text
              max-w-sm
            ">
              Professional websites designed to help small businesses grow.
            </p>
  
          </div>
  
  
  
          {/* Links */}
  
          <div className="
            flex
            gap-12
          ">
  
  
            <div>
  
              <p className="
                text-sm
                font-medium
                mb-3
              ">
                Navigation
              </p>
  
  
              <div className="
                flex
                flex-col
                gap-2
                text-secondary-text
              ">
  
                <a href="#services">
                  Services
                </a>
  
                <a href="#process">
                  Process
                </a>
  
                <a href="#portfolio">
                  Portfolio
                </a>
  
              </div>
  
  
            </div>
  
  
  
            <div>
  
              <p className="
                text-sm
                font-medium
                mb-3
              ">
                Contact
              </p>
  
  
              <div className="
                flex
                flex-col
                gap-2
                text-secondary-text
              ">
  
                <a href="#">
                  Email
                </a>
  
                <a href="#">
                  LinkedIn
                </a>
  
  
              </div>
  
  
            </div>
  
  
          </div>
  
  
        </div>
  
  
        <div className="
          border-t
          border-border
          py-6
          text-center
          text-sm
          text-secondary-text
        ">
  
          © {new Date().getFullYear()} Digital Studio. All rights reserved.
  
        </div>
  
  
      </footer>
  
    );
  }