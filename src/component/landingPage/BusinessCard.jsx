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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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

const BusinessCard = () => {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const businesses = [
    {
      id: 1,
      name: "Ebuka Properties",
      description: "Buying and selling of land and landed properties.",
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
        "Madu Chibueze Emmanuel is a passionate and results-driven full-stack web developer with a strong background in building dynamic, responsive, and user-friendly websites. With expertise in both frontend and backend technologies, he crafts seamless digital experiences from concept to deployment. Specializing in tools like React, Node.js, Express, MongoDB, and Material-UI, Chibueze builds applications that are not only visually appealing but also powerful under the hood. He is committed to clean code, scalable architecture, and delivering real-world solutions that solve problems and add value. Whether it's developing user interfaces, implementing RESTful APIs, integrating payment systems like Paystack, or managing authentication and database operations, Chibueze brings dedication, creativity, and technical excellence to every project.",
      owner: "Madu Chibueze Emmanuel (Mutiu Software Solutions)",
      image: mutiu,
      services: ["Website Development", "Full-stack Development", "Web Design"],
      phone: "07031911306",
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
      phone: " 08068195976 ",
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
  ];

  const filteredBusinesses = businesses.filter((biz) =>
    biz.services.some((service) =>
      service.toLowerCase().includes(search.toLowerCase())
    )
  );

  const toggleReadMore = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="center" mb={4}>
        <TextField
          label="Search by Service"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
        {filteredBusinesses.length > 0 ? (
          filteredBusinesses.map((business) => {
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
    </Container>
  );
};

export default BusinessCard;
