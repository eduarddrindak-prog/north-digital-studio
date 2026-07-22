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
  py-16
  flex
  flex-col
  lg:flex-row
  justify-between
  items-start
  gap-16
">
  
  
          {/* Brand */}
  
          <div>
  
            <div className="flex flex-col gap-3">

  <p className="text-[11px] uppercase tracking-[0.28em] text-[#4F8EF7]">
    NORTH DIGITAL STUDIO
  </p>

  <h3 className="
    text-2xl
    font-semibold
    tracking-tight
  ">
    Professional Websites
  </h3>

</div>
  
  
            <p className="
              mt-3
              text-secondary-text
              max-w-sm
            ">
              Professional websites that communicate your value,
build trust and help more customers contact your business.
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