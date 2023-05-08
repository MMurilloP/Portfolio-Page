import styled from "styled-components";
import Contact from "./componets/Contact";
import Hero from "./componets/Hero";
import Who from "./componets/Who";
import Works from "./componets/Works";

const Container = styled.div`
  height: 100vh;
  padding-left: 10%;
  padding-right: 10%;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
  color: #e76f51;
  /* background: url("https://cdn.pixabay.com/photo/2015/10/15/21/05/texture-990067_1280.jpg"); */
`

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
