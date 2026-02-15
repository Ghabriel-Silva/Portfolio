import login from "@/assets/imgProjetos/login.png"
import createOrder from "@/assets/imgProjetos/creatorder.png"
import verOrder from "@/assets/imgProjetos/veprodutos.png"
import product from "@/assets/imgProjetos/products.png"
import home from "@/assets/imgProjetos/home.png"
import lightOrder from "@/assets/imgProjetos/lightorder.png"
import verPordutos from "@/assets/imgProjetos/verprodutos.png"
import notFound from "@/assets/imgProjetos/noteFoud.png"

//image gerador de comandas 
import geradorComandas1 from "@/assets/imgProjetos/geradorcomanda1.png"
import geradorComandas2 from "@/assets/imgProjetos/geradorcomanda2.png"
import geradorComandas3 from "@/assets/imgProjetos/geradorcomanda3.png"
import geradorComandas4 from "@/assets/imgProjetos/geradorcomanda4.png"
import geradorComandas5 from "@/assets/imgProjetos/geradorcomanda5.png"
import geradorComandas6 from "@/assets/imgProjetos/geradorcomanda6.png"
import geradorComandas7 from "@/assets/imgProjetos/geradorcomanda7.png"
import geradorComandas8 from "@/assets/imgProjetos/geradorcomanda8.png"
import geradorComandas9 from "@/assets/imgProjetos/geradorcomanda9.png"
import geradorComandas10 from "@/assets/imgProjetos/geradorcomanda10.png"
import geradorComandas11 from "@/assets/imgProjetos/geradorcomanda11.png"
import geradorComandas12 from "@/assets/imgProjetos/geradorcomanda12.png"

//Image Gera cv 
import geracv from "@/assets/imgProjetos/geracv.png"
import geracv1 from "@/assets/imgProjetos/geracv1.png"
import geracv2 from "@/assets/imgProjetos/geracv.png"
import geracv3 from "@/assets/imgProjetos/geracv3.png"
import geracv4 from "@/assets/imgProjetos/geracv4.png"
import geracv5 from "@/assets/imgProjetos/geracv5.png"
import geracv6 from "@/assets/imgProjetos/geracv6.png"
import geracv7 from "@/assets/imgProjetos/geracv7.png"
import geracv8 from "@/assets/imgProjetos/geracv8.png"
import geracv9 from "@/assets/imgProjetos/geracv9.png"


//Imagem api Easyfood
import api from "@/assets/imgProjetos/api1.jpg"


export const image = {



    easyfoodLogin: { src: login, alt: "Tela de login do EasyFood Web" },
    easyfoodCreateOrder: { src: createOrder, alt: "Tela de criação de pedido" },
    easyfoodVerOrder: { src: verOrder, alt: "Tela de visualização de pedidos" },
    easyfoodProducts: { src: product, alt: "Lista de produtos do EasyFood" },
    easyfoodHome: { src: home, alt: "Página inicial do EasyFood" },
    easyfoodLightOrder: { src: lightOrder, alt: "Tela de pedidos simplificados" },
    easyfoodVerProdutos: { src: verPordutos, alt: "Visualização de produtos" },
    easyfoodNotFound: { src: notFound, alt: "Página 404 do EasyFood" },



    comandas1: { src: geradorComandas1, alt: "Gerador de comandas — tela 1" },
    comandas2: { src: geradorComandas2, alt: "Gerador de comandas — tela 2" },
    comandas3: { src: geradorComandas3, alt: "Gerador de comandas — tela 3" },
    comandas4: { src: geradorComandas4, alt: "Gerador de comandas — tela 4" },
    comandas5: { src: geradorComandas5, alt: "Gerador de comandas — tela 5" },
    comandas6: { src: geradorComandas6, alt: "Gerador de comandas — tela 6" },
    comandas7: { src: geradorComandas7, alt: "Gerador de comandas — tela 7" },
    comandas8: { src: geradorComandas8, alt: "Gerador de comandas — tela 8" },
    comandas9: { src: geradorComandas9, alt: "Gerador de comandas — tela 9" },
    comandas10: { src: geradorComandas10, alt: "Gerador de comandas — tela 10" },
    comandas11: { src: geradorComandas11, alt: "Gerador de comandas — tela 11" },
    comandas12: { src: geradorComandas12, alt: "Gerador de comandas — tela 12" },



    geracvMain: { src: geracv, alt: "Tela principal do Gera CV" },
    geracv1: { src: geracv1, alt: "Gera CV — tela 1" },
    geracv2: { src: geracv2, alt: "Gera CV — tela 2" },
    geracv3: { src: geracv3, alt: "Gera CV — tela 3" },
    geracv4: { src: geracv4, alt: "Gera CV — tela 4" },
    geracv5: { src: geracv5, alt: "Gera CV — tela 5" },
    geracv6: { src: geracv6, alt: "Gera CV — tela 6" },
    geracv7: { src: geracv7, alt: "Gera CV — tela 7" },
    geracv8: { src: geracv8, alt: "Gera CV — tela 8" },
    geracv9: { src: geracv9, alt: "Gera CV — tela 9" },



    easyfoodApi: { src: api, alt: "Documentação ou interface da API EasyFood" },

} as const

export type imageProjetos = keyof typeof image