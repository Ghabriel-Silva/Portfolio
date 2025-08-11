import { Box, Stack } from "@chakra-ui/react"
import Styles from "@/componentsPage/iconsAnimate/rotating.module.css"


import iconCSS from "@/assets/iconsCards/Iconcss_3.png";
import iconFigma from "@/assets/iconsCards/Iconfigma.png";
import iconHTML from "@/assets/iconsCards/Iconhtml_5.png";
import iconJS from "@/assets/iconsCards/Iconjs.png";
import iconNotion from "@/assets/iconsCards/Iconnotion.png";
import iconReact from "@/assets/iconsCards/Iconreact.png";
import iconNodeJs from "@/assets/iconsCards/nodejs.png";
import iconHandlebars from "@/assets/iconsCards/handlebars.png";
import iconMysql from "@/assets/iconsCards/Mysql_logo.png";
import iconTypescript from "@/assets/iconsCards/typescript.png";
import iconTypeOrm from "@/assets/iconsCards/typeorm-icon-colored.png";
import iconChakraUi from "@/assets/iconsCards/chakra.png";

function RotatingIcons() {
  return (
    <Stack  mt="20px">
      {/* <TitleDescription title="Tecnologias." text="Atualmente, minha stack gira em torno de JavaScript, TypeScript, React, Express, Chakra UI, Bootstrap e Figma para design." /> */}
      <Box className={Styles.wrapper}>
        <Box className={`${Styles.item} ${Styles.item1}`}>
          <img src={iconCSS} alt="CSS Icon" />
        </Box>
        <Box className={`${Styles.item} ${Styles.item2}`}>
          <img src={iconFigma} alt="Figma Icon" />
        </Box>
        <Box className={`${Styles.item} ${Styles.item3}`}>
          <img src={iconHTML} alt="HTML Icon" />
        </Box>
        <Box className={`${Styles.item} ${Styles.item4}`}>
          <img src={iconJS} alt="JavaScript Icon" />
        </Box>
        <Box className={`${Styles.item} ${Styles.item5}`}>
          <img src={iconNotion} alt="Notion Icon" />
        </Box>
        <Box className={`${Styles.item} ${Styles.item6}`}>
          <img src={iconReact} alt="React Icon" />
        </Box>
        <Box className={`${Styles.item} ${Styles.item7}`}>
          <img src={iconNodeJs} alt="Node.js Icon" />
        </Box>
        <Box className={`${Styles.item} ${Styles.item8}`}>
          <img src={iconHandlebars} alt="Handlebars Icon" />
        </Box>
        <Box className={`${Styles.item} ${Styles.item9}`}>
          <img src={iconMysql} alt="MySQL Icon" />
        </Box>
        <Box className={`${Styles.item} ${Styles.item10}`}>
          <img src={iconTypescript} alt="TypeScript Icon" />
        </Box>
        <Box className={`${Styles.item} ${Styles.item11}`}>
          <img src={iconTypeOrm} alt="TypeORM Icon" />
        </Box>
        <Box className={`${Styles.item} ${Styles.item12}`}>
          <img src={iconChakraUi} alt="Chakra UI Icon" />
        </Box>
      </Box>
    </Stack>
  );
}
export default RotatingIcons