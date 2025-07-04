import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Stack,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Container,
  Button,
  Pagination,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Import all image assets
import ebuka from "../../assets/ebuka.jpeg";
import mutiu from "../../assets/mutiu.jpeg";
import apoatle from "../../assets/apoatle.jpeg";
import santiago from "../../assets/santiago.jpeg";
import agams from "../../assets/agams.jpeg";
import king from "../../assets/king.jpeg";
import junior from "../../assets/junior.jpeg";
import tochi from "../../assets/tochi.jpeg";
import nd from "../../assets/nd.jpeg";
import smooth from "../../assets/smooth.jpeg";
import barrister from "../../assets/barrister.jpeg";
import solution from "../../assets/solution.jpeg";
import shot from "../../assets/2shot.jpeg";
import temple from "../../assets/temple.jpeg";
import azaman from "../../assets/azaman.jpeg";
import dictionary from "../../assets/dictionary.jpeg";
import donb from "../../assets/donb.jpeg";
import uchenna from "../../assets/uchenna.jpeg";
import dan from "../../assets/dan.jpeg";
import shoe from "../../assets/shoe.jpeg";
import peacemaker from "../../assets/peacemaker.jpeg";
import biggy from "../../assets/biggy.jpeg";
import emma from "../../assets/emma.jpeg";
import oluigbo from "../../assets/oluigbo.jpeg";
import udochukwu from "../../assets/udochukwu.jpeg";
import iyke from "../../assets/iyke.jpeg";
import vincient from "../../assets/vincient.jpeg";
import chinemerem from "../../assets/chinemerem.jpeg";

const BusinessCard = () => {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [page, setPage] = useState(1);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const cardsPerPage = isSmallScreen ? 50 : 100;

  const businesses = [
    {
      id: 1,
      name: "Ebuka Properties",
      description:
        "We specialize in the buying and selling of land and premium real estate properties offering trusted, secure, and value-driven property solutions for both residential and commercial needs.",
      owner: "Chinagwa Chidiebere C. (Ebuka Properties)",
      image: ebuka,
      services: ["Realtor", "Property Management"],
      phone: "07030888741",
      email: "ebuakacccibe@gmail.com",
    },
    {
      id: 2,
      name: "Mutiu Software Solutions",
      description:
        "i'm a passionate and results-driven full-stack web developer with a strong background in building dynamic, responsive, and user-friendly websites. With expertise in both frontend and backend technologies, I craft seamless digital experiences from concept to deployment. Specializing in tools like React, Node.js, Express, MongoDB, and Material-UI, I build applications that are not only visually appealing but also powerful under the hood. I am committed to clean code, scalable architecture, and delivering real-world solutions that solve problems and add value. Whether it's developing user interfaces, implementing RESTful APIs, integrating payment systems like Paystack, or managing authentication and database operations, I bring dedication, creativity, and technical excellence to every project.",
      owner: "Madu Chibueze Emmanuel (Mutiu Software Solutions)",
      image: mutiu,
      services: [
        "Full-stack web development",
        "Frontend development (React, Material-UI, HTML, CSS, JavaScript, TypeScript, Bootstrap, Tailwind CSS, )",
        "Backend development (Node.js, Express)",
        "Database management (MongoDB)",
        "RESTful API development",
        "Authentication and authorization",
        "Payment integration (Paystack, Stripe, Flutterwave, etc.)",
        "Web application architecture",
        "Responsive web design and development",
        "User experience (UX) design",
        "Web application deployment",
        "Website maintenance and support",
        "E-commerce solutions",
        "Mobile-friendly design",
        "Web Design",
        "Real Estate",
      ],
      phone: "+2347031911306",
      email: "chidiemmamadu@gmail.com",
    },
    {
      id: 3,
      name: "Apostle Engr Chinedu Onyiriagha (Building Engineer)",
      description:
        "I am a skilled Building Engineer specializing in both residential and commercial construction projects. In addition to my core building services, I offer expert POP (Plaster of Paris) installation and also sell high-quality POP materials. Construction is not just my profession—it's my craft, and I deliver excellence in every project. I also run a well-equipped laundry service that handles washing and ironing of clothes with care and efficiency. We offer convenient home pickup and delivery to meet your needs.",
      owner: "Apostle Engr Chinedu Onyiriagha",
      image: apoatle,
      services: ["Building Engineering", "Pop Materials", "Pop Installation"],
      phone: "08064168746",
    },
    {
      id: 4,
      name: "Anty ngo Fashion Hub",
      description:
        "I'm an  Entrepreneur engaged in the buying and selling of footwear, clothing, and real estate (landed properties).",
      owner: "Ogbonna Frank (Anty ngo)",
      image: santiago,
      services: ["buying and selling of shoes & cloths", "landed properties"],
      phone: "09038903102",
      email: "frankcole2018@yahoo.com",
    },
    {
      id: 5,
      name: "Agamana Chidiebere France ",
      description:
        "I'm an Electrical Engineer and musician with a passion for technology, specializing in the sale of mobile phones and accessories.",
      owner: "Agamana Chidiebere France ",
      image: agams,
      services: ["buying and selling of mobile phones", "accessories"],
      phone: " 07038583328 ",
      email: "Agamscchidi@gmail.com ",
    },
    {
      id: 6,
      name: "KINGDAVID ONUOHA UGOCHUKWU ",
      description:
        "i'm a skilled Building Electrical Engineer with expertise in designing, installing, and maintaining electrical systems for residential, commercial, and industrial structures. Committed to delivering safe, efficient, and code-compliant solutions tailored to each project's unique needs.",
      owner: "KINGDAVID ONUOHA UGOCHUKWU ",
      image: king,
      services: ["BUILDING ELECTRICAL ENGINEERING"],
      phone: " 08067906005 ",
      email: "davidonuoha6005@gmail.com ",
    },
    {
      id: 7,
      name: "Chiedozie Lawrence junior  ",
      description:
        "Specialist in the sales of all kinds of building materials, proudly serving customers from Naze Timber Market, Owerri  your trusted source for quality construction supplies.",
      owner: "Chiedozie Lawrence junior  ",
      image: junior,
      services: ["BUILDING MATERIALS SALES"],
      phone: " 08039184412 ",
      email: "Ichiedozie@yahoo.com",
    },
    {
      id: 8,
      name: "Egbujor Tochukwu  ",
      description:
        "I specialize in building construction with a focus on premium aluminum works  including all types of windows and doors such as frameless doors, toilet doors, casement windows, and swing doors. For quality craftsmanship and solid finishing, contact me today and let’s bring strength and style to your building.",
      owner: "Egbujor Tochukwu  ",
      image: tochi,
      services: [
        "Aluminum Window Installation ",
        "Building Finishing with Aluminum Solutions",
        "Residential & Commercial Aluminum Works",
      ],
      phone: " 07043774871 ",
      email: "egbujortochukwu01@gmail.com",
    },
    {
      id: 9,
      name: "Ndubuisi Izunobi Stephen ",
      description:
        "I specialize in the sales of quality building and plumbing materials, including water heaters, Cisco pipes, Niger pipes, and a wide variety of shower kits—such as WC units and bathtubs.You can find me at 143 Tetlow Road, Owerri.",
      owner: "Ndubuisi Izunobi Stephen ",
      image: nd,
      services: [
        "Sales of Plumbing Materials",
        "Water Heaters Supply",
        "Shower Kits (WC Units, Bath Tubs, etc.)",
        "Bathroom Fittings & Accessories",
        "Sales of Building Materials",
      ],
      phone: " 07043774871 ",
    },
    {
      id: 10,
      name: "Okike Uchechi Ugochukwu(Mr Smooth)  ",
      description:
        "I’m a passionate musician and master of ceremonies (MC) with a talent for bringing events to life through vibrant live band performances and engaging hosting. In addition to my entertainment services, I’m actively involved in farming and livestock rearing, offering healthy, well-sized chickens and goats for sale.Whether you're planning a wedding, party, or special event, I provide a one-stop event solution including live band music, MC services, professional ushers, and catering  all delivered with excellence and reliability.Your satisfaction is our top priority  reach out today and let’s make your event unforgettable!",
      owner: "Okike Uchechi Ugochukwu(Mr Smooth)  ",
      image: smooth,
      services: [
        "Live Band Performances",
        "Master of Ceremonies (MC) Services",
        "Event Planning & Coordination",
      ],
      phone: " 07060663597 ",
      // email: "egbujortochukwu01@gmail.com",
    },
    {
      id: 11,
      name: "Akuchie Donatus Obilor (aka barrister)   ",
      description:
        "I am a skilled structural engineer and professional carpenter, specializing in the design and creation of custom furniture to suit every style and space. In addition to carpentry, I offer expert installation of all types of aluminum roofing profiles, including stone-coated tiles, step tiles, metro coppo, and long span sheets.You can find my office at Chapter 1 Bus Stop, Orogwe, Owerri West LGA.Let’s bring your building and roofing projects to life with precision and quality craftsmanship.",
      owner: "Akuchie Donatus Obilor ",
      image: barrister,
      services: [
        "Structural Engineering ",
        "Custom Furniture Design & Carpentry",
        "Roofing Consultation & Supply",
        "Interior & Exterior Finishing Solutions",
      ],
      phone: " 08066202930 ",
      email: "donatuspatrickakuchie1992@gmail.com",
    },

    {
      id: 12,
      name: "    Anyanwu Chibuike.J. (aka Solution)",
      description:
        "I am a part-time Electrical Engineer and currently serve as an Administrative Staff at Christian International School  a nurturing environment where godly children are raised with strong values and academic excellence.We welcome you to enroll your children with us.📍 Location: Plot 14, Dick-Tick Street, off MCC Road by Methodist Bus Stop, Owerri.In addition, we offer reliable driving services under our brand, Sharp_Concept.",
      owner: "    Anyanwu Chibuike.J. ",
      image: solution,
      services: [
        "Administrative Support Services",
        "Electrical Engineering (Part-time)",
        "Private Driving Services (Sharp_Concept)",
      ],
      phone: " 08068195976 ",
      // email: "donatuspatrickakuchie1992@gmail.com",
    },
    {
      id: 13,
      name: "   Kelechi wisdom Ngerem (aka 2shot)",
      description:
        "I am a skilled plumber specializing in all types of plumbing services, including piping installation and the fixing of various plumbing accessories. I also repair leaking GP (GeePee) water tanks with precision. Trust me with your plumbing needs, and you’ll experience quality service you can confidently recommend.",
      owner: "   Kelechi wisdom Ngerem ",
      image: shot,
      services: [
        "Plumbing Services",
        "Piping Installation",
        "Repair of Water Tanks",
      ],
      phone: " 07032825281 ",
      // email: "donatuspatrickakuchie1992@gmail.com",
    },
    {
      id: 14,
      name: "   NNADI UGWUNNA TEMPLE",
      description:
        "I am a professional welder specializing in a wide range of metal fabrication services. From tank stands, security doors (including bulletproof options), gates, railings, and window protectors to custom metal works—I've got you covered. Quality craftsmanship, durability, and customer satisfaction are my top priorities. Trust me to deliver metalwork solutions that are strong, secure, and built to last. You're truly in safe hands.",
      owner: "   Kelechi wisdom Ngerem ",
      image: temple,
      services: [
        "Welding Tank Stand Fabrication",
        "Security Doors (including Bulletproof Doors)",
        "Staircase and Balcony Rails",
        "Window Protectors",
        "General Metal Welding & Fabrication",
        "General Metal Welding & Fabrication",
      ],
      phone: " 08061611881 ",
      // email: "donatuspatrickakuchie1992@gmail.com",
    },
    {
      id: 15,
      name: "    Nwaiwu chijioke Nnamdi ",
      description:
        "I specialize in the supply of high-quality POP cement and related materials for all your interior finishing needs. In addition, I am actively involved in the real estate sector, offering trusted services in the buying and selling of land and landed properties. Whether you're building or investing, I provide reliable solutions tailored to your needs.",
      owner: "    Nwaiwu chijioke Nnamdi ",
      image: azaman,
      services: [
        "Supply of POP cement and finishing materials",
        "Real estate consultancy",
        "investment advisory (landed properties)",
        "Wholesale and retail of interior decoration materials",
        "Property sourcing and inspection assistance",
      ],
      phone: " 07031510573",
      email: " clintonkelvin543@gmail.com ",
    },
    {
      id: 16,
      name: "   Emerenini victor ugochukwu, AKA ( Dictionary) ",
      description:
        " specialize in block manufacturing and real estate services. For high-quality vibrated blocks and genuine landed properties, feel free to contact me—reliable service is just a call away.",
      owner: "    Emerenini victor ugochukwu ",
      image: dictionary,
      services: [
        "Production of Vibrated Blocks",
        "Real estate Services",
        "Sales of High-Quality Building Blocks",
        "Buying and Selling of Landed Properties",
        "Property Consultation",
      ],
      phone: " 07037129800 ",
      // email: " clintonkelvin543@gmail.com ",
    },
    {
      id: 17,
      name: " UCHE TRUST ROOFING CO.  ",
      description:
        " I specialize in comprehensive roofing and structural finishing solutions.My expertise spans all forms of roofing woodwork, including the precision crafting and installation of aluminum zinc panels, stone-coated tiles, and other advanced roofing systems tailored for both residential and commercial buildings.Beyond roofing, I offer expert water connector installations to ensure proper drainage and plumbing integration. I am also highly skilled in furniture production, delivering custom-designed, durable, and elegant furniture pieces for homes, offices, and interior projects.When you hire me, you're choosing a seasoned professional committed to excellence, durability, and aesthetic value in every project.",
      owner: "    IBEAWUCHI UCHENNA DANIEL ",
      image: uchenna,
      services: [
        "Roofing Woodwork (Framing & Carpentry)",
        "Aluminum Zinc Panel Installation",
        "Stone-Coated Tile Roofing",
        "Water Connector Installation",
        "Furniture Production (Custom Designs)",
        "Structural Finishing",
        "Residential & Commercial Roofing Solutions",
        "Interior & Exterior Furniture Solutions",
      ],
      phone: " 08138511111 ",
      email: " danieluchenna942@gmail.com ",
    },
    {
      id: 18,
      name: " Timothy nwachukwu (DON B) ",
      description:
        "I am a seasoned entrepreneur with a strong foothold in two thriving industries. I specialize in the sale of high-quality O.K. (Okrika) bales, offering a wide variety of premium second-hand clothing, shoes, and accessories sourced to meet diverse customer needs and fashion tastes. Whether you re a retailer or an end-user, I provide reliable and affordable options to keep you looking your best.In addition to my fashion business, I also run a professional industrial cleaning service. My team and I handle large-scale cleaning for offices, commercial buildings, schools, churches, event halls, and more. We pride ourselves on delivering top-tier sanitation using modern tools, eco-friendly cleaning agents, and attention to detail—ensuring a sparkling and hygienic environment every time.Let us keep your space clean and your wardrobe refreshed with unmatched dedication and excellence.",
      owner: "    Timothy nwachukwu ",
      image: donb,
      services: [
        "Wholesale & retail of premium O.K. clothing bales",
        "O.K shoes, bags, and accessories",
        "Office and corporate space cleaning",
        "Post-construction cleaning",
        "Industrial and commercial cleaning",
        "Event hall and venue cleaning",
        "School and educational institution cleaning",
        "Church and religious institution cleaning",
      ],
      phone: " 08067994293 ",
      email: " Clintonjoe600@gmail.com ",
    },
    {
      id: 19,
      name: "  Daniel ikechukwu Azuka ",
      description:
        "I am a certified Electrical Engineer with hands-on expertise in the installation, maintenance, and troubleshooting of residential, commercial, and industrial electrical systems. I specialize in the setup and configuration of electrical equipment, power distribution, and energy-saving solutions.Additionally, I am proficient in solar power installation, offering complete solar system design and integration, including inverters, solar panels, and battery banks. I help homes and businesses transition to clean, reliable, and cost-effective renewable energy. I am committed to delivering safe, durable, and efficient electrical and solar solutions tailored to your energy needs.",

      owner: "  Daniel ikechukwu Azuka ",
      image: dan,
      services: [
        "Electrical System Installation",
        "Electrical Maintenance & Troubleshooting",
        "Solar Power System Design & Installation",
        "Energy Efficiency Consulting",
        "Residential & Commercial Electrical Solutions",
      ],
      phone: " 07066973188 ",
      email: " Danielikechukwuazuka@gmail.com",
    },
    {
      id: 20,
      name: " Somachi Christopher oparaugo ",
      description:
        "I hail from Obinze in Owerri West Local Government Area of Imo State. I am a passionate and experienced commercial farmer, with a thriving piggery and a small-scale fish farm, dedicated to providing healthy and sustainable livestock and fish to meet market demand.In addition to agriculture, I specialize in landed property services within Imo State, offering trusted assistance in buying, selling, and managing real estate.I also serve as a site supervisor and property caretaker, ensuring projects are executed with precision and properties are well-maintained.Furthermore, I provide professional security services for events — guaranteeing the safety and orderliness of your occasions, from start to finish.With a solid reputation for dependability and excellence, I am committed to delivering value across agriculture, real estate, property management, and event security.",

      owner: " Somachi Christopher oparaugo ",
      image: shoe,
      services: [
        "Piggery and fish farming",
        "Landed property services",
        "Site supervision and property caretaking",
        "Event security services",
      ],
      phone: " 09132351105 ",
      email: " Oparaugochrisd@gmail.com",
    },
    {
      id: 21,
      name: "  Uchenna Frankline Uzoma (biggy) ",
      description:
        "I am a bouncer, I am an electrician for both condict and surface wiring and installation of all kinds of electrical fittings and Thunder Protector. CCtv cameras and DStv installations.I am also a native traditional doctor. Any kind of spiritual problem carry amm come. I give harbal medicine for any kind of sickness. Even if you get HIV, there is hope for you",

      owner: "Uchenna Frankline Uzoma ",
      image: biggy,
      services: [
        "Conduit and surface wiring",
        "Installation of all types of electrical fittings",
        "Thunder protector installation",
        "CCTV camera installation",
        "DStv installation",
        "Native spiritual consultations and solutions for various issues",
        "Herbal treatment for various ailments and chronic conditions",
        "Specialized herbal care for conditions such as HIV, typhoid, malaria, and more",
        "Spiritual cleansing and protection services",
        "Traditional medicine for spiritual and physical ailments",
        "Professional bouncer services for events, clubs, and private functions",
        "Electrical Engineering and Installation",
        "Spiritual Consultation and Herbal Medicine",
      ],
      phone: "   07038314009  ",
      email: "ucheuzoma44@gmail.com ",
    },
    {
      id: 22,
      name: " Emmaco Aluminum Roofer   ",
      description:
        "I specialize in supplying and installing aluminum roofing sheets, including long span, stone-coated, and step tiles. I also handle skeletal roof structures. In addition, I supply building materials like granites (chippings) and sand, delivered directly to your site. I'm also into real estate, helping clients buy and sell genuine landed properties. Quality service and customer satisfaction are my priority.",

      owner: " Emmanuel Chinedu Anyanwu ",
      image: emma,
      services: [
        "Aluminum roofing sheet supply and installation",
        "Stone-coated, long span, and step tile roofing",
        "Skeletal roof structure construction",
        "Supply of building materials (granites, chippings, sand)",
        "Real estate (buying and selling of genuine landed properties)",
        "Site delivery of materials",
        "Roofing consultation and support",
      ],
      phone: "  +2348068803393 ",
      email: "emmynedu21@gmail.com",
    },
    {
      id: 23,
      name: "Oluigbo Mario  ",
      description:
        "I'm a professional real estate consultant, coach, and trainer, dedicated to equipping realtors with effective client engagement strategies that lead to swift and successful business transactions. I specialize in identifying fast-developing, affordable areas with high investment return potential, providing clients with timely insights, investment guidance, and full support through the documentation process.OLUIGBO MARIO CEO — @marstarz_properties Managing Director  @pwan_exquisite, an affiliate of the PWAN Group My Office is: Mr Empowerment Ultra Modern Training Center, Miriam Babangida Drive, Asaba.",

      owner: " Oluigbo Mario",
      image: oluigbo,
      services: [
        "Property Sourcing: Identifying fast-developing and affordable locations with high ROI.",
        "Investment Advisory: Helping clients make smart, long-term property investments.",
        "Client Guidance: Offering step-by-step support throughout the property purchase process.",
        "Due Diligence: Verifying documents and ensuring land/property is free from government acquisition or disputes.",
        "Real Estate Training: Coaching realtors on effective client engagement and transaction strategies.",
      ],
      phone: "  07064567651 ",
      email: " oluigboirenaeus@gmail.com",
    },
    {
      id: 24,
      name: "Udochukwu Chibuzo Nonso  ",
      description:
        "I am an experienced Environmental Consultant, specializing in services such as Environmental Impact Assessments (EIA) and Environmental Audits (EA). I also deal in and market a wide range of pesticides and herbicides for effective fumigation and agricultural use.In addition, I’m your trusted plug for solar energy solutions, including solar panel supply, batteries, accessories, and professional installation — delivering clean, reliable, and sustainable power systems tailored to your needs.",

      owner: "Udochukwu Chibuzo Nonso",
      image: udochukwu,
      services: [
        "Environmental Impact Assessments (EIA)",
        "Environmental Audits (EA)",
        "Pesticide and herbicide supply",
        "Fumigation services",
        "Agricultural consulting",
        "Solar energy solutions",
      ],
      phone: "  08068181095 ",
      email: " chibuzoudochukwu8080@gmail.com",
    },
    {
      id: 25,
      name: "Ngoka Ikechukwu Kennedy   ",
      description:
        "I'm proudly from Owerri North, Imo State, and I specialize in all kinds of roofing from stone tiles to aluminium roofing systems, with expert water collection installations to match. I also offer professional site supervision for all types of building projects.In addition to my construction expertise, I work at Nnamdi Azikiwe University, giving me direct insight and support for undergraduate and postgraduate admissions.Need trusted roofing or guidance on gaining admission into UNIZIK? Let’s make it happen reach out today!",

      owner: "Ngoka Ikechukwu Kennedy",
      image: iyke,
      services: [
        "All types of roofing installations (stone tiles, aluminium, etc.)",
        "Water collection system installations",

        "Nnamdi Azikiwe University (UNIZIK) admission guidance",
        "Undergraduate and postgraduate admission support",
        "Roofing consultation and support",

        "Roofing maintenance and repair",
        "Roofing design and planning",
        "Site inspection and assessment",
        "Roofing project supervision",
        "Roofing installation training",
        "Roofing project documentation",
      ],
      phone: "   07035344443 ",
      email: " ngokaikechukwu2@gmail.com",
    },
    {
      id: 26,
      name: "Anyalemechi Vincent  chijindu    ",
      description:
        "I am a certified Electrical Technician with expertise in both conduit and surface wiring for residential, commercial, and industrial buildings. I handle the professional installation of all types of electrical fittings, including switches, sockets, lighting systems, and distribution boards.In addition, I specialize in the installation of surge protection systems (thunder protectors) to safeguard your home or facility from lightning strikes and electrical damage.My services also extend to modern security and energy solutions, including CCTV camera setup for surveillance and solar power installation—covering solar panels, inverters, and battery systems for clean, reliable electricity. Whether you’re working on a new project or upgrading your existing electrical setup, I deliver safe, durable, and code-compliant electrical solutions tailored to your needs.",

      owner: "Anyalemechi Vincent  chijindu    ",
      image: vincient,
      services: [
        "All types of electrical installations (residential, commercial, industrial wiring)",
        "Conduit and surface wiring",
        "Installation of electrical fittings (switches, sockets, lighting, distribution boards)",
        "Surge protection system installation (thunder protectors)",
        "CCTV camera installation for security",
        "Solar power installation (solar panels, inverters, battery systems)",
        "New Building Electrical Setup",
      ],

      phone: "   07033536056  ",
      email: "  chijinduvincent91@gmail.com",
    },

    {
      id: 27,
      name: " chinemerem Peter Ekwubiri   ",
      description:
        "I am a skilled specialist in all forms of ornamental and precast work, offering both interior and exterior decorative solutions that enhance the beauty and value of any building. My expertise includes the design, molding, and installation of high-quality precast features such as columns, balustrades, wall panels, ceiling roses, cornices, and more. Whether it's a residential home, commercial complex, church, or hotel, I provide elegant finishing touches that bring architectural character and style to life. From classical to modern designs, I tailor each project to meet your aesthetic goals while ensuring durability and precision. If you're looking to add charm, prestige, or a touch of artistry to your building project, I’m the professional to call.",

      owner: " chinemerem Peter Ekwubiri     ",
      image: chinemerem,
      services: [
        "Ornamental Precast Design & Installation (Columns, balustrades, cornices, etc.)",
        "Interior Decorative Finishing (Ceiling roses, wall panels, artistic moldings)",
        "Exterior Architectural Enhancements (Gate pillars, parapet molds, decorative trims)",
        "Custom Molding and Casting",
        "Building Beautification & Aesthetic Upgrade",
        "Consultation on Building Decoration Ideas",
        "Project Management for Decorative Works",
        "Residential, Commercial, and Institutional Projects",
        "Restoration and Repair of Precast Features",
        "Collaboration with Architects and Builders",

        "Customer Satisfaction Guarantee",
        "Post-Installation Support and Maintenance",
        "Interior and Exterior Design Consultation",
      ],

      phone: "    07038110870  ",
      email: "   chinemeremekwubiri@gmail.com",
    },
    {
      id: 28,
      name: " Peace Maker Surgical Enterprises.  ",
      description:
        "I'm  the CEO of Peace Maker Surgical Enterprises. We deal on all kinds of hospital instruments/equipments, Laboratory Materials/reagents, all types of School laboratory materials etc.Such as BP monitors, sugar machines, crutches and wheel chairs etc.Head Address: No 98 Kez plaza, opposite Rotobi By Douglas Road Owerri.Branch Address: Block B72 Rescue Mission Plaza Relief Market Owerri. ",

      owner: " Chibuzo Ozurumba ",
      image: peacemaker,
      services: [
        "Sales of hospital instruments and equipment",
        "Supply of laboratory materials and reagents",
        "Distribution of school science lab tools (Biology, Chemistry, Physics)",
        "Equipment consultation and sourcing",
        "Delivery of ordered items to hospitals, schools, and labs",
      ],
      phone: "  07066333918 ",
      email: "peacemakersurgical@gmail.com",
    },
  ];

  const filteredBusinesses = businesses.filter((biz) =>
    biz.services.some((service) =>
      service.toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredBusinesses.length / cardsPerPage);
  const paginatedBusinesses = filteredBusinesses.slice(
    (page - 1) * cardsPerPage,
    page * cardsPerPage
  );

  const toggleReadMore = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="center" mb={4}>
        <TextField
          label="Search by Service"
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset to first page on new search
          }}
          sx={{ width: "100%", maxWidth: 400 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton disabled>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {paginatedBusinesses.length > 0 ? (
          paginatedBusinesses.map((business) => {
            const isExpanded = expandedId === business.id;
            const shortText = business.description.length < 120;

            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={business.id}>
                <Card
                  sx={{
                    maxWidth: 345,
                    mx: "auto",
                    height: "100%",
                    minHeight: 520,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="350"
                    image={business.image}
                    alt={business.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {business.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: isExpanded ? "none" : 3,
                      }}
                    >
                      {business.description}
                    </Typography>
                    {!shortText && (
                      <Button
                        size="small"
                        sx={{ mt: 1 }}
                        onClick={() => toggleReadMore(business.id)}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </Button>
                    )}

                    <Box mt={2}>
                      <Typography variant="subtitle2" gutterBottom>
                        Services:
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        flexWrap="wrap"
                      >
                        {business.services.map((service, index) => (
                          <Chip
                            key={index}
                            label={service}
                            size="small"
                            color="error"
                          />
                        ))}
                      </Stack>
                    </Box>

                    <Box mt={2}>
                      <Typography variant="caption" color="text.secondary">
                        Owner: {business.owner}
                      </Typography>
                      {business.phone && (
                        <Typography variant="caption" color="text.secondary">
                          <br />
                          Phone:{" "}
                          <a
                            href={`tel:${business.phone}`}
                            style={{ color: "#1976d2", textDecoration: "none" }}
                          >
                            {business.phone}
                          </a>
                        </Typography>
                      )}
                      {business.email && (
                        <Typography variant="caption" color="text.secondary">
                          <br />
                          Email:{" "}
                          <a
                            href={`mailto:${business.email}`}
                            style={{ color: "#1976d2", textDecoration: "none" }}
                          >
                            {business.email}
                          </a>
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        ) : (
          <Typography textAlign="center" sx={{ width: "100%" }}>
            No businesses found for: "{search}"
          </Typography>
        )}
      </Grid>

      {totalPages > 1 && (
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Container>
  );
};

export default BusinessCard;
