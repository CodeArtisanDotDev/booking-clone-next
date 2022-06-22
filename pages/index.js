import Container from '../components/Container';
import Featured from '../components/Featured/Featured';
import Fidelity from '../components/Fidelity/Fidelity';
import GuestLoveList from '../components/GuestLove/GuestLoveList';
import PropertyList from '../components/PropertyType/PropertyList';
import HomeLayout from '../layouts/HomeLayout';

export default function Home() {
  return (
    <HomeLayout>
      <Container>
        <Featured />
        <PropertyList />
        <GuestLoveList />
      </Container>
      <Container>
        <Fidelity />
      </Container>
    </HomeLayout>
  );
}
