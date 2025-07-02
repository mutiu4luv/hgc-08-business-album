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

const BusinessCard = () => {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null); // single ID

  const businesses = [
    {
      id: 1,
      name: "Ebuka Properties",
      description: "Buying and selling of land and landed properties.",
      owner: "Chinagwa Chidiebere C. (Ebuka Properties)",
      image: ebuka,
      services: ["Realtor", "Property Management"],
    },
    {
      id: 2,
      name: "Mutiu Software Solutions",
      description:
        "Madu Chibueze Emmanuel is a passionate and results-driven full-stack web developer with a strong background in building dynamic, responsive, and user-friendly websites. With expertise in both frontend and backend technologies, he crafts seamless digital experiences from concept to deployment. Specializing in tools like React, Node.js, Express, MongoDB, and Material-UI, Chibueze builds applications that are not only visually appealing but also powerful under the hood. He is committed to clean code, scalable architecture, and delivering real-world solutions that solve problems and add value. Whether it's developing user interfaces, implementing RESTful APIs, integrating payment systems like Paystack, or managing authentication and database operations, Chibueze brings dedication, creativity, and technical excellence to every project.",
      owner: "Madu Chibueze Emmanuel (Mutiu Software Solutions)",
      image: mutiu,
      services: ["Website Development", "Full-stack Development", "Web Design"],
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
      {/* Search */}
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

      {/* Cards */}
      <Grid container spacing={3}>
        {filteredBusinesses.length > 0 ? (
          filteredBusinesses.map((business) => {
            const isExpanded = expandedId === business.id;

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
                    height="180"
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
                        WebkitLineClamp: isExpanded ? "999" : 3,
                        flexGrow: 1,
                      }}
                    >
                      {business.description}
                    </Typography>

                    {business.description.length > 120 && (
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
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {business.services.map((service, index) => (
                          <Chip
                            key={index}
                            label={service}
                            size="small"
                            color="primary"
                          />
                        ))}
                      </Stack>
                    </Box>

                    <Box mt={2}>
                      <Typography variant="caption" color="text.secondary">
                        Owner: {business.owner}
                      </Typography>
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
