/* eslint-disable comma-dangle */
import styled from "styled-components";
import { Layout } from "../routes/Layout";
import ImgPerfil from "../assets/img/PortadaPerfil.png";
import ImgBackground from "../assets/img/Group.png";
import BackArrow from "../assets/img/flecha.png";
import ImgLupa from "../assets/img/lupa.png";
import { useState, useEffect, useRef } from "react";

import ProductSlider from "../components/ProductSlider";
import ButtonSlider from "../components/ButtonSlider";
import {
  getProduct,
  searchProduct,
  searchSupplier,
} from "../services/api/products/instances";
import ProductContact from "../components/ecoCreatorProfile/ProductContact";
import ContactModal from "../components/contact/ContactModal";

const FondoPagina = styled.div`
  background-image: url(${ImgBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  /* height: 60%; */
  width: 100%;
  min-width: 360px;
  min-height: 1000px;
  /* position: relative; */
  transition: all 0.5s ease-in-out;
  /* top: -50vh; */
`;

const TextInfoUser = styled.h1`
  color: var(--text-title);
  font-family: var(--family-two);
  padding: 2px 18px;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
  margin-top: 60px;
  // display: none;
`;
const SearchInput = styled.input`
  background-color: white;
  height: 80%;
  width: 85%;
  outline: none;
`;

const TextSliderProduct = styled.h2`
  font-size: 1rem;
  padding: 3px 18px;
  margin-top: 22px;
`;

const TextSearchProduct = styled.h3`
  font-size: 1rem;
  padding: 3px 18px;
  // display: none;
`;
const BackArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 60vh;
`;

const ContenedorTextoYFlecha = styled.div`
  position: relative;
  /* height: 100%; */
`;

const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 60%;
  max-width: 37.5rem;
  height: 1.5625rem;
  border-radius: 0.9375rem;
  padding: 0.125rem 0.6875rem;
  margin: 0.375rem 1.125rem;
  box-shadow: 0.0625rem 0.125rem 0.5rem;
`;

const ImgLupaSearch = styled.img`
  width: 20px;
  height: 20px;
  padding: 2px;
`;

const UsuarioPerfilFoto = styled.img`
  width: 100%;
  height: 60vh;
  // display: none;
  /* position: absolute;
  transition: all 0.5s ease-in-out;
  top: -50vh;
  display: none; */
`;

const ButtonFilterContainer = styled.div`
  /* display: flex; */
  flex-direction: row;
  justify-content: space-around;
  margin-top: 22px;
  padding: 0px 15px;
`;

const ContainerSlaider = styled.div`
  padding: 0px 15px;
  margin: 20px 0;
  width: 100%;
  margin-top: 22px;
`;
const FormButton = styled.button`
  display: none;
`;
const ListCards = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0px 15px;
  margin: 20px 0;
  width: 100%;
  margin-top: 22px;

  @media (max-width: 3000px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 1150px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 880px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 380px) {
    margin: 20px 0;
    padding: 0px 5px;
  }
`;
const ContactModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: block;
`;
const DivContactCentrado = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const ContactModalL = styled(ContactModal)`
  display: none;
`;

function InfoUser() {
  const [valorInput, setValorInput] = useState("");
  const [selected, setSelected] = useState("");
  const [filtrado, setFiltrado] = useState("");
  const [globalProducts, setGlobalProducts] = useState([]);
  const [searchResults, setSearchResults] = useState("");
  const [activo, setActivo] = useState({
    isActivo: false,
    idProveedor: "",
    datosProveedor: {},
  });

  // const ContactStyleActive = {
  //   display: "none",
  // };
  const contador = useRef(0);

  useEffect(() => {
    contador.current += 1;
    // console.log("contador");

    onClickfilterButton();

    if ((valorInput !== "") & (selected !== "")) {
      setValorInput("");
    }
  }, [selected]);

  useEffect(() => {
    getProduct
      .get(
        "https://c11-19-m-javareact-production.up.railway.app/api/product/getAll"
      )
      .then((response) => setGlobalProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const obtenerSeleccion = (seleccion) => {
    setSelected(seleccion);
    // console.log(selected);
  };

  function getBack() {
    setSelected("");
    setValorInput("");
    setSearchResults("");
  }

  function onClickfilterButton() {
    searchProduct
      .get(`${selected}`)
      .then((response) => setSearchResults(response.data))
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          console.log("");
        } else {
          console.log(" ");
        }
      });
  }

  function handleClickContact(id) {
    // setActivo(true);
    if (activo.isActivo === true) {
      setActivo((prevActivo) => ({
        ...prevActivo,
        isActivo: false,
      }));
    }
    // console.log(id);
  }

  const handleInputChange = (e) => {
    setValorInput(e.target.value);

    if ((selected !== "") & (valorInput !== "")) {
      setSelected("");
    }
    const filtered = globalProducts.filter((objeto) =>
      objeto.description.toLowerCase().includes(valorInput.toLowerCase())
    );

    setFiltrado(filtered);
    // setSearchResults(false);
    setSearchResults(filtrado);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setBuscado(true)
  };

  const AbrirVentana = (id) => {
    setActivo((prevActivo) => ({
      ...prevActivo,
      isActivo: true,
    }));
    setActivo((prevActivo) => ({
      ...prevActivo,
      idProveedor: id,
    }));
    // setActivo(true);
    if (activo.isActivo === true) {
      setActivo((prevActivo) => ({
        ...prevActivo,
        isActivo: false,
      }));
    }

    searchSupplier.get(`${activo.idProveedor}`).then((response) =>
      setActivo((prevActivo) => ({
        ...prevActivo,
        datosProveedor: response.data,
      })).catch((error) => console.log(error))
    );
    // console.log(id);
  };

  // function ConditionalStyle () {
  //   if ( !searchResults ) {

  //   }
  // }

  return (
    <Layout>
      {activo.isActivo && (
        <ContactModalStyled>
          <DivContactCentrado>
            <ContactModalL onClose={handleClickContact} />
          </DivContactCentrado>
        </ContactModalStyled>
      )}

      <FondoPagina>
        <ContenedorTextoYFlecha>
          {searchResults !== "" && (
            <BackArrowContainer onClick={getBack}>
              <img src={BackArrow} alt="Back arrow" />
            </BackArrowContainer>
          )}
          <UsuarioPerfilFoto src={ImgPerfil} alt="Foto de perfi" />
          <TextInfoUser>Hola, Valentina</TextInfoUser>
          <TextSearchProduct>¿Qué vas a crear hoy?</TextSearchProduct>
        </ContenedorTextoYFlecha>
        <SearchContainer onSubmit={handleSubmit}>
          <SearchInput
            placeholder="Buscar"
            value={valorInput}
            onChange={handleInputChange}
          />
          <label htmlFor="botonSearch">
            <ImgLupaSearch src={ImgLupa} alt="lupa" />
          </label>
          <FormButton type="submit" id="botonSearch" />
        </SearchContainer>

        <ButtonFilterContainer>
          <ButtonSlider seleccion={obtenerSeleccion} />
        </ButtonFilterContainer>

        {selected === "" && valorInput === "" && searchResults === "" && (
          <>
            {/* <TextSliderProduct>Favoritos</TextSliderProduct>
            <ContainerSlaider>
              <ProductSlider datos={{ globalProducts }} />
            </ContainerSlaider> */}
            <TextSliderProduct>Recomendados para ti</TextSliderProduct>
            <ContainerSlaider>
              <ProductSlider
                onOpen={handleClickContact}
                onClicks={AbrirVentana}
              />
            </ContainerSlaider>
          </>
        )}

        {searchResults && valorInput !== "" && selected === "" && (
          <ListCards>
            {searchResults.map((producto, i) => (
              <ProductContact
                datos={producto}
                key={i}
                onClicks={AbrirVentana}
                id={producto.id}
                // onOpen={handleClickContact}
              />
            ))}
          </ListCards>
          // eslint-disable-next-line indent
        )}

        {searchResults && selected !== "" && valorInput === "" && (
          <ListCards>
            {searchResults.map((producto, i) => (
              <ProductContact
                datos={producto}
                key={producto.id}
                // onOpen={handleClickContact}
                onClicks={AbrirVentana}
                id={producto.id}
              />
            ))}
          </ListCards>
          // eslint-disable-next-line indent
        )}
      </FondoPagina>
    </Layout>
  );
}
export { InfoUser };
