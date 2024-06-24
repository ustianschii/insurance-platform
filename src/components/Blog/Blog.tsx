import { Box, Typography } from "@mui/material";
import {
  BigArticleLogo,
  BlogWrapper,
  CustomButton,
  CustomDivider,
} from "./blogStyles";
import { BlogSmallCard } from "./BlogSmallCard/BlogSmallCard";
import blogSmallArticleLogoFirst from "../../assets/blog-small-article-first-logo.jpeg";
import blogSmallArticleLogoSecond from "../../assets/blog-small-article-second-logo.jpg";
import blogSmallArticleLogoThird from "../../assets/blog-small-article-third-logo.jpeg";

const Blog = () => {
  return (
    <BlogWrapper disableGutters>
      <Box height={"10%"} width={"100%"}>
        <Typography
          variant="body2"
          color="#ffad14"
          fontWeight={600}
          textAlign={"center"}
          marginBottom={"10px"}
        >
          BLOG
        </Typography>
        <Typography variant="h3" textAlign={"center"}>
          Articole recente
        </Typography>
      </Box>

      <Box display={"flex"} marginTop={"35px"} justifyContent={"space-between"}>
        <Box width={"49%"}>
          <BigArticleLogo />
          <Box>
            <Box display={"flex"} marginBottom={"25px"}>
              <Typography
                color={"#2d53f6"}
                fontWeight={"bold"}
                fontSize={"12px"}
              >
                Asigurare RCA
              </Typography>
              <CustomDivider orientation="vertical" flexItem />
              <Typography fontSize={"12px"} fontWeight={600}>
                7 MAI 2024
              </Typography>
            </Box>
            <Typography variant="h4" marginBottom={"20px"}>
              Care este diferența dintre CASCO și RCA în Moldova?
            </Typography>
            <Typography marginBottom={"20px"}>
              Descoperă diferența dintre CASCO și RCA în Moldova și află care
              dintre ele îți oferă protecția de care ai nevoie pentru vehiculul
              tău.
            </Typography>
            <CustomButton variant="contained">Citeste mai mult</CustomButton>
          </Box>
        </Box>
        <Box width={"49%"}>
          <BlogSmallCard
            logo={blogSmallArticleLogoFirst}
            theme="Asigurare RCA"
            date="1 APR 2024"
            title="Procurăm mașina uzată de pe 999 sau adusă din străinătate? Un studiu aprofundat"
            description="Descoperă cum să alegi între o mașină uzată sau nouă, importată sau de pe autohaus, piața de mașini, sau 999.md. Află sfaturi esențiale."
          />
          <BlogSmallCard
            logo={blogSmallArticleLogoSecond}
            theme="Asigurare RCA"
            date="5 MART 2024"
            title="Asigurarea RCA în format electronic – cum o prezentăm?"
            description="Află cum să prezinți asigurarea RCA în format electronic și vezi soluții practice pentru gestionarea eficientă a documentelor de asigurare."
          />
          <BlogSmallCard
            logo={blogSmallArticleLogoThird}
            theme="Asigurare RCA"
            date="5 FEB 2024"
            title="Sancțiuni pentru conducerea autovehiculului fără deţinerea poliţei RCA"
            description="Aflați despre sancțiunile aplicabile pentru conducerea conducerea autovehiculului fără RCA și cum să evitați aceste penalizări."
          />
        </Box>
      </Box>
    </BlogWrapper>
  );
};

export default Blog;
